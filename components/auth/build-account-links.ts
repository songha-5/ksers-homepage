import type { MemberSession } from "@/config/member-session";
import {
  buildJoinUrl,
  buildLoginUrl,
  buildLogoutUrl,
  buildMypageUrl,
} from "@/config/registration-service";

export interface AccountLink {
  readonly id: "login" | "join" | "mypage" | "logout";
  readonly label: string;
  readonly href: string;
}

interface AccountLinkInput {
  readonly member: MemberSession | null;
  readonly registrationBase: string | null;
  readonly origin: string;
  readonly pathname: string;
}

export function buildAccountLinks(
  input: AccountLinkInput,
): readonly AccountLink[] {
  if (!input.registrationBase) {
    return [];
  }

  if (input.member) {
    return buildSignedInLinks(input);
  }

  return buildSignedOutLinks(input);
}

function buildSignedInLinks(input: AccountLinkInput): readonly AccountLink[] {
  const base = input.registrationBase ?? "";
  const mypageUrl = buildMypageUrl(base);
  const logoutUrl = buildLogoutUrl(base, input.origin, input.pathname);
  if (!mypageUrl || !logoutUrl) {
    return [];
  }

  return [
    { id: "logout", label: "Logout", href: logoutUrl },
    { id: "mypage", label: "My Page", href: mypageUrl },
  ];
}

function buildSignedOutLinks(input: AccountLinkInput): readonly AccountLink[] {
  const base = input.registrationBase ?? "";
  const loginUrl = buildLoginUrl(base, input.origin, input.pathname);
  const joinUrl = buildJoinUrl(base);
  return [
    ...(loginUrl
      ? [{ id: "login" as const, label: "Login", href: loginUrl }]
      : []),
    ...(joinUrl ? [{ id: "join" as const, label: "Sign Up", href: joinUrl }] : []),
  ];
}
