import { LOGIN_PROBE_COOKIE } from "@/config/login-probe";

const SERVICE_RETURN_KEY = "ksers_service_return";
const PROBE_LOCK_KEY = "ksers_login_probe_at";
const PROBE_LOCK_MS = 8_000;

export function markServiceDeparture(): void {
  sessionStorage.setItem(SERVICE_RETURN_KEY, "1");
  sessionStorage.removeItem(PROBE_LOCK_KEY);
}

export function takeServiceDeparture(): boolean {
  if (sessionStorage.getItem(SERVICE_RETURN_KEY) !== "1") {
    return false;
  }

  sessionStorage.removeItem(SERVICE_RETURN_KEY);
  return true;
}

export function isRegistrationReferrer(referrer: string, base: string): boolean {
  try {
    return new URL(referrer).origin === new URL(base).origin;
  } catch {
    return false;
  }
}

function hasLoginProbeCookie(): boolean {
  return document.cookie.split("; ").includes(`${LOGIN_PROBE_COOKIE}=1`);
}

function clearLoginProbeCookie(): void {
  document.cookie = `${LOGIN_PROBE_COOKIE}=; path=/; max-age=0`;
}

function probeIsRecent(): boolean {
  const started = Number(sessionStorage.getItem(PROBE_LOCK_KEY) ?? "0");
  return Number.isFinite(started) && Date.now() - started < PROBE_LOCK_MS;
}

function clearProbeLock(): void {
  sessionStorage.removeItem(PROBE_LOCK_KEY);
}

interface ServiceLoginInput {
  readonly hasMember: boolean;
  readonly registrationBase: string | null;
  readonly referrer: string;
}

function alreadySettled(input: ServiceLoginInput): boolean {
  if (input.hasMember || !input.registrationBase) {
    clearProbeLock();
    if (input.hasMember) {
      takeServiceDeparture();
    }
    return true;
  }

  if (!hasLoginProbeCookie()) {
    return probeIsRecent();
  }

  clearLoginProbeCookie();
  clearProbeLock();
  return true;
}

/** 회원 쿠키가 없고, 등록 서버에서 막 돌아온 경우에만 한 번 확인한다. */
export function shouldRestoreServiceLogin(input: ServiceLoginInput): boolean {
  const base = input.registrationBase;
  if (alreadySettled(input) || !base) {
    return false;
  }

  const fromService = isRegistrationReferrer(input.referrer, base);
  if (!takeServiceDeparture() && !fromService) {
    return false;
  }

  sessionStorage.setItem(PROBE_LOCK_KEY, String(Date.now()));
  return true;
}

export function allowStoredServiceReturn(): void {
  clearProbeLock();
}
