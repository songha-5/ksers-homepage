import { NextResponse, type NextRequest } from "next/server";
import { readRegistrationBase } from "@/config/env";
import { exchangeAuthCode } from "@/config/exchange-auth-code";
import {
  isMemberCookieExpired,
  MEMBER_SESSION_COOKIE,
  MEMBER_SESSION_COOKIE_OPTIONS,
  memberSessionMaxAge,
  serializeMemberSession,
  type MemberSession,
} from "@/config/member-session";
import {
  LOGIN_PROBE_COOKIE,
  LOGIN_PROBE_COOKIE_MAX_AGE,
  LOGIN_PROBE_PARAM,
} from "@/config/login-probe";
import { buildLogoutUrl } from "@/config/registration-service";

type SessionUpdate = MemberSession | "clear" | "keep";

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const params = request.nextUrl.searchParams;
  if (params.get("logged_out") === "1") {
    return finishAuthReturn(request, "clear");
  }

  const code = params.get("code");
  if (code) {
    const session = await exchangeAuthCode(code);
    return finishAuthReturn(request, session ?? "clear");
  }

  if (params.has("code") || params.has("logged_out")) {
    return finishAuthReturn(request, "keep");
  }

  if (params.get(LOGIN_PROBE_PARAM) === "1") {
    return finishProbe(request);
  }

  const cookie = request.cookies.get(MEMBER_SESSION_COOKIE)?.value;
  if (isMemberCookieExpired(cookie)) {
    return redirectExpiredSession(request);
  }

  return NextResponse.next();
}

function redirectExpiredSession(request: NextRequest): NextResponse {
  const base = readRegistrationBase();
  const logoutUrl = base
    ? buildLogoutUrl(base, request.nextUrl.origin, request.nextUrl.pathname)
    : null;

  if (!logoutUrl) {
    return finishAuthReturn(request, "clear");
  }

  return NextResponse.redirect(logoutUrl);
}

function finishAuthReturn(
  request: NextRequest,
  update: SessionUpdate,
): NextResponse {
  const url = request.nextUrl.clone();
  url.searchParams.delete("code");
  url.searchParams.delete("logged_out");
  url.searchParams.delete(LOGIN_PROBE_PARAM);
  const response = NextResponse.redirect(url);
  applySession(response, update);
  return response;
}

function finishProbe(request: NextRequest): NextResponse {
  const url = request.nextUrl.clone();
  url.searchParams.delete(LOGIN_PROBE_PARAM);
  const response = NextResponse.redirect(url);
  response.cookies.set(LOGIN_PROBE_COOKIE, "1", {
    path: "/",
    maxAge: LOGIN_PROBE_COOKIE_MAX_AGE,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}

function applySession(response: NextResponse, update: SessionUpdate): void {
  if (update === "keep") {
    return;
  }

  if (update === "clear") {
    response.cookies.set(MEMBER_SESSION_COOKIE, "", {
      ...MEMBER_SESSION_COOKIE_OPTIONS,
      maxAge: 0,
    });
    return;
  }

  response.cookies.set(MEMBER_SESSION_COOKIE, serializeMemberSession(update), {
    ...MEMBER_SESSION_COOKIE_OPTIONS,
    maxAge: memberSessionMaxAge(update),
  });
}

export const config = {
  matcher: ["/2027", "/2027/:path*"],
};
