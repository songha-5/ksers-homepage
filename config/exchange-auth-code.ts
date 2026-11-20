import { readRegistrationBase } from "@/config/env";
import { parseAuthResponse, type MemberSession } from "@/config/member-session";
import { buildAuthUrl } from "@/config/registration-service";

const AUTH_REQUEST_TIMEOUT_MS = 8_000;

/** code는 한 번만 유효하므로 실패해도 다시 요청하지 않는다. */
export async function exchangeAuthCode(
  code: string,
): Promise<MemberSession | null> {
  const base = readRegistrationBase();
  if (!base) {
    return null;
  }

  const authUrl = buildAuthUrl(base, code);
  if (!authUrl) {
    return null;
  }

  const payload = await fetchAuthPayload(authUrl);
  if (!payload) {
    return null;
  }

  return parseAuthResponse(payload);
}

async function fetchAuthPayload(authUrl: string): Promise<unknown | null> {
  try {
    const response = await fetch(authUrl, {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(AUTH_REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as unknown;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return null;
    }

    return null;
  }
}
