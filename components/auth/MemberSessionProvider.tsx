"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  type ReactElement,
  type ReactNode,
} from "react";
import { useRestoreServiceLogin } from "@/components/auth/use-restore-service-login";
import type { MemberSession } from "@/config/member-session";
import { buildLogoutUrl } from "@/config/registration-service";

interface MemberSessionContextValue {
  readonly member: MemberSession | null;
  readonly registrationBase: string | null;
  readonly returnOrigin: string;
}

const MemberSessionContext = createContext<MemberSessionContextValue>({
  member: null,
  registrationBase: null,
  returnOrigin: "https://ksers.kr",
});

interface MemberSessionProviderProps {
  readonly member: MemberSession | null;
  readonly registrationBase: string | null;
  readonly returnOrigin: string;
  readonly children: ReactNode;
}

export function MemberSessionProvider({
  member,
  registrationBase,
  returnOrigin,
  children,
}: MemberSessionProviderProps): ReactElement {
  const pathname = usePathname();
  useRestoreServiceLogin(member, registrationBase, returnOrigin);

  useEffect(() => {
    if (!member || !registrationBase) {
      return;
    }

    const logoutUrl = buildLogoutUrl(registrationBase, returnOrigin, pathname);
    if (!logoutUrl) {
      return;
    }

    const delay = member.expiresAt * 1000 - Date.now();
    if (delay <= 0) {
      window.location.assign(logoutUrl);
      return;
    }

    const timer = window.setTimeout(() => {
      window.location.assign(logoutUrl);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [member, registrationBase, returnOrigin, pathname]);

  return (
    <MemberSessionContext.Provider
      value={{ member, registrationBase, returnOrigin }}
    >
      {children}
    </MemberSessionContext.Provider>
  );
}

export function useMemberSessionContext(): MemberSessionContextValue {
  return useContext(MemberSessionContext);
}
