import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

interface SubpageSecondaryBlankLink {
  readonly kind: "blank";
  readonly href: string;
  readonly children: ReactNode;
}

interface SubpageSecondaryDownloadLink {
  readonly kind: "download";
  readonly href: string;
  readonly fileName: string;
  readonly children: ReactNode;
}

interface SubpageSecondaryPageLink {
  readonly kind: "page";
  readonly href: string;
  readonly children: ReactNode;
}

interface SubpageSecondaryButton {
  readonly kind: "button";
  readonly children: ReactNode;
}

export type SubpageSecondaryLinkProps =
  | SubpageSecondaryBlankLink
  | SubpageSecondaryDownloadLink
  | SubpageSecondaryPageLink
  | SubpageSecondaryButton;

export const SUBPAGE_SECONDARY_LINK_CLASS_NAME =
  "ml-1 inline-flex items-center justify-center border border-[#d0d0d0] bg-[#f7f9fb] px-3 py-1.5 align-middle text-sm font-bold text-[#595959]";

const BUTTON_CLASS_NAME = `${SUBPAGE_SECONDARY_LINK_CLASS_NAME} cursor-pointer`;

export function SubpageSecondaryLink(
  props: SubpageSecondaryLinkProps,
): ReactElement {
  switch (props.kind) {
    case "blank":
      return renderBlankLink(props.href, props.children);
    case "download":
      return renderDownloadLink(props.href, props.fileName, props.children);
    case "page":
      return renderPageLink(props.href, props.children);
    case "button":
      return renderButton(props.children);
    default: {
      const unreachable: never = props;
      return unreachable;
    }
  }
}

function renderBlankLink(href: string, children: ReactNode): ReactElement {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={SUBPAGE_SECONDARY_LINK_CLASS_NAME}
    >
      {children}
    </a>
  );
}

function renderDownloadLink(
  href: string,
  fileName: string,
  children: ReactNode,
): ReactElement {
  return (
    <a
      href={href}
      download={fileName}
      className={SUBPAGE_SECONDARY_LINK_CLASS_NAME}
    >
      {children}
    </a>
  );
}

function renderPageLink(href: string, children: ReactNode): ReactElement {
  return (
    <Link href={href} className={SUBPAGE_SECONDARY_LINK_CLASS_NAME}>
      {children}
    </Link>
  );
}

function renderButton(children: ReactNode): ReactElement {
  return (
    <button type="button" className={BUTTON_CLASS_NAME}>
      {children}
    </button>
  );
}
