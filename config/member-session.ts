import { z } from "zod";

export const MEMBER_SESSION_COOKIE = "ksers_member";

export const MEMBER_SESSION_SECONDS = 30 * 60;

export const MEMBER_SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax",
  path: "/",
  secure: process.env.NODE_ENV === "production",
} as const;

const memberRoleSchema = z.enum(["member", "admin"]);

const memberSessionSchema = z.object({
  role: memberRoleSchema,
  name: z.string().trim().min(1).max(200),
  expiresAt: z.number().int().positive(),
});

const authResponseSchema = z.discriminatedUnion("loggedIn", [
  z.object({
    loggedIn: z.literal(true),
    role: memberRoleSchema,
    name: z.string().trim().min(1).max(200),
    seq: z.number().int().positive(),
    expiresAt: z.number().int().positive(),
  }),
  z.object({
    loggedIn: z.literal(false),
    role: z.null().optional(),
    name: z.null().optional(),
    seq: z.null().optional(),
    expiresAt: z.null().optional(),
  }),
]);

export type MemberRole = z.infer<typeof memberRoleSchema>;

export interface MemberSession {
  readonly role: MemberRole;
  readonly name: string;
  readonly expiresAt: number;
}

export function parseMemberSession(
  value: string | undefined,
): MemberSession | null {
  if (!value) {
    return null;
  }

  return parseSessionJson(value);
}

export function isMemberCookieExpired(value: string | undefined): boolean {
  const expiresAt = readCookieExpiry(value);
  if (expiresAt === null) {
    return false;
  }

  return expiresAt <= unixNow();
}

export function parseAuthResponse(payload: unknown): MemberSession | null {
  const parsed = authResponseSchema.safeParse(payload);
  if (!parsed.success || !parsed.data.loggedIn) {
    return null;
  }

  // seq는 등록 서버 세션의 계정 번호다. 홈페이지 쿠키와 요청에는 넣지 않는다.
  return currentSession({
    role: parsed.data.role,
    name: parsed.data.name,
    expiresAt: limitSessionExpiry(parsed.data.expiresAt),
  });
}

export function memberSessionMaxAge(session: MemberSession): number {
  const remaining = session.expiresAt - unixNow();
  if (remaining <= 0) {
    return 0;
  }

  return Math.min(remaining, MEMBER_SESSION_SECONDS);
}

export function serializeMemberSession(session: MemberSession): string {
  return JSON.stringify({
    role: session.role,
    name: session.name,
    expiresAt: session.expiresAt,
  });
}

function readCookieExpiry(value: string | undefined): number | null {
  if (!value) {
    return null;
  }

  try {
    const payload: unknown = JSON.parse(value);
    const parsed = memberSessionSchema.safeParse(payload);
    if (!parsed.success) {
      return null;
    }

    return parsed.data.expiresAt;
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      return null;
    }

    return null;
  }
}

function parseSessionJson(value: string): MemberSession | null {
  try {
    return readSession(JSON.parse(value) as unknown);
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      return null;
    }

    return null;
  }
}

function readSession(payload: unknown): MemberSession | null {
  const parsed = memberSessionSchema.safeParse(payload);
  if (!parsed.success) {
    return null;
  }

  return currentSession(parsed.data);
}

function currentSession(session: MemberSession): MemberSession | null {
  if (session.expiresAt <= unixNow()) {
    return null;
  }

  return session;
}

function limitSessionExpiry(expiresAt: number): number {
  const latest = unixNow() + MEMBER_SESSION_SECONDS;
  if (expiresAt > latest) {
    return latest;
  }

  return expiresAt;
}

function unixNow(): number {
  return Math.floor(Date.now() / 1000);
}
