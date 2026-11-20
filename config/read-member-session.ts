import { cookies } from "next/headers";
import {
  MEMBER_SESSION_COOKIE,
  parseMemberSession,
  type MemberSession,
} from "@/config/member-session";

export async function readMemberSession(): Promise<MemberSession | null> {
  const cookieStore = await cookies();
  return parseMemberSession(cookieStore.get(MEMBER_SESSION_COOKIE)?.value);
}
