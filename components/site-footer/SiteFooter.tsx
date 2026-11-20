import type { ReactElement } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";
import { FooterContactBlock } from "@/components/site-footer/FooterContactBlock";
import { FOOTER_CONTACTS } from "@/components/site-footer/footer-contacts";
import { HostedBy } from "@/components/site-footer/HostedBy";
import { ScrollTopButton } from "@/components/site-footer/ScrollTopButton";

export function SiteFooter(): ReactElement {
  return (
    <>
      <HostedBy />
      <footer className="bg-[#37474f] text-center text-sm leading-[1.6] text-white min-[1100px]:text-left">
        <ContentContainer className="py-[30px] min-[768px]:py-10 min-[1100px]:flex">
          {FOOTER_CONTACTS.map((contact) => (
            <FooterContactBlock key={contact.id} contact={contact} />
          ))}
        </ContentContainer>
        <ScrollTopButton />
      </footer>
    </>
  );
}
