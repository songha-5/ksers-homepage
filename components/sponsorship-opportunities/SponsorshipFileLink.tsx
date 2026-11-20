import type { ReactElement, ReactNode } from "react";

interface SponsorshipOpenLinkProps {
  readonly kind: "open";
  readonly href: string;
  readonly children: ReactNode;
}

interface SponsorshipDownloadLinkProps {
  readonly kind: "download";
  readonly href: string;
  readonly fileName: string;
  readonly children: ReactNode;
}

type SponsorshipFileLinkProps =
  | SponsorshipOpenLinkProps
  | SponsorshipDownloadLinkProps;

const LINK_CLASS_NAME =
  "inline-flex items-center justify-center bg-[#09428f] px-8 py-3 text-center text-base font-bold text-white";

export function SponsorshipFileLink(
  props: SponsorshipFileLinkProps,
): ReactElement {
  if (props.kind === "download") {
    return (
      <a href={props.href} download={props.fileName} className={LINK_CLASS_NAME}>
        {props.children}
      </a>
    );
  }

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={LINK_CLASS_NAME}
    >
      {props.children}
    </a>
  );
}
