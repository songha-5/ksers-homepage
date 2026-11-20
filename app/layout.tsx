import type { Metadata } from "next";
import type { ReactElement } from "react";
import { MemberSessionProvider } from "@/components/auth/MemberSessionProvider";
import { MoNavigation } from "@/components/mo-navigation/MoNavigation";
import { PcNavigation } from "@/components/pc-navigation/PcNavigation";
import { SiteFooter } from "@/components/site-footer/SiteFooter";
import { readRegistrationBase } from "@/config/env";
import { fontVariableClassName } from "@/config/fonts";
import { readRequestHomepageOrigin } from "@/config/read-homepage-origin";
import { readMemberSession } from "@/config/read-member-session";
import "./globals.css";

const NAVER_SITE_VERIFICATION = "dfa7f0df69740841da0427e4dd38050e2be0699e";

export const metadata: Metadata = {
  title: "KESERS 2027",
  description: "KESERS 2027 웹사이트",
  verification: {
    other: {
      "naver-site-verification": NAVER_SITE_VERIFICATION,
    },
  },
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">): Promise<ReactElement> {
  const member = await readMemberSession();
  const registrationBase = readRegistrationBase();
  const returnOrigin = await readRequestHomepageOrigin();

  return (
    <html lang="en" className={`${fontVariableClassName} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MemberSessionProvider
          member={member}
          registrationBase={registrationBase}
          returnOrigin={returnOrigin}
        >
          <PcNavigation />
          <MoNavigation />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </MemberSessionProvider>
      </body>
    </html>
  );
}
