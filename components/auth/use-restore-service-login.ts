import { useEffect } from "react";
import {
  allowStoredServiceReturn,
  isRegistrationReferrer,
  markServiceDeparture,
  shouldRestoreServiceLogin,
} from "@/components/auth/service-return";
import type { MemberSession } from "@/config/member-session";
import { buildLoginProbeUrl } from "@/config/registration-service";

interface RestoreServiceLoginInput {
  readonly member: MemberSession | null;
  readonly registrationBase: string | null;
  readonly returnOrigin: string;
}

function restoreServiceLogin(input: RestoreServiceLoginInput): void {
  if (!input.registrationBase) {
    return;
  }

  if (
    !shouldRestoreServiceLogin({
      hasMember: input.member !== null,
      registrationBase: input.registrationBase,
      referrer: document.referrer,
    })
  ) {
    return;
  }

  const probeUrl = buildLoginProbeUrl(
    input.registrationBase,
    input.returnOrigin,
    window.location.pathname,
  );
  if (probeUrl) {
    window.location.assign(probeUrl);
  }
}

export function useRestoreServiceLogin(
  member: MemberSession | null,
  registrationBase: string | null,
  returnOrigin: string,
): void {
  useEffect(() => {
    const input = { member, registrationBase, returnOrigin };
    function restoreAfterBack(event: PageTransitionEvent): void {
      if (!event.persisted) {
        return;
      }

      allowStoredServiceReturn();
      restoreServiceLogin(input);
    }

    restoreServiceLogin(input);
    window.addEventListener("pageshow", restoreAfterBack);
    return () => window.removeEventListener("pageshow", restoreAfterBack);
  }, [member, registrationBase, returnOrigin]);

  useRememberServiceDeparture(registrationBase);
}

function useRememberServiceDeparture(registrationBase: string | null): void {
  useEffect(() => {
    if (!registrationBase) {
      return;
    }

    const base = registrationBase;
    function rememberDeparture(event: MouseEvent): void {
      const anchor = readAnchor(event.target);
      if (anchor && isRegistrationReferrer(anchor.href, base)) {
        markServiceDeparture();
      }
    }

    document.addEventListener("click", rememberDeparture);
    return () => document.removeEventListener("click", rememberDeparture);
  }, [registrationBase]);
}

function readAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) {
    return null;
  }

  const anchor = target.closest("a");
  if (!(anchor instanceof HTMLAnchorElement) || anchor.href === "") {
    return null;
  }

  return anchor;
}
