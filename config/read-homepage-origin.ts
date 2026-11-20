import { headers } from "next/headers";
import { isAllowedHomepageOrigin } from "@/config/registration-service";

const DEFAULT_HOMEPAGE_ORIGIN = "https://ksers.kr";

export async function readRequestHomepageOrigin(): Promise<string> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "";
  const forwardedProto = headerList.get("x-forwarded-proto");
  const proto = forwardedProto ?? (isLocalDevHost(host) ? "http" : "https");
  const origin = `${proto}://${host}`;

  if (isAllowedHomepageOrigin(origin)) {
    return origin;
  }

  return DEFAULT_HOMEPAGE_ORIGIN;
}

function isLocalDevHost(host: string): boolean {
  return host.startsWith("localhost:") || host.startsWith("127.0.0.1:");
}
