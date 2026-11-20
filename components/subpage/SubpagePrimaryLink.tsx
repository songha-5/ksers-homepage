import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import { SUBPAGE_PRIMARY_BUTTON_CLASS_NAME } from "@/components/subpage/SubpagePrimaryButton";

interface SubpagePrimaryBlankLink {
  readonly kind: "blank";
  readonly href: string;
  readonly children: ReactNode;
}

interface SubpagePrimaryPageLink {
  readonly kind: "page";
  readonly href: string;
  readonly children: ReactNode;
}

type SubpagePrimaryLinkProps = SubpagePrimaryBlankLink | SubpagePrimaryPageLink;

export function SubpagePrimaryLink(
  props: SubpagePrimaryLinkProps,
): ReactElement {
  if (props.kind === "page") {
    return (
      <Link href={props.href} className={SUBPAGE_PRIMARY_BUTTON_CLASS_NAME}>
        {props.children}
      </Link>
    );
  }

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={SUBPAGE_PRIMARY_BUTTON_CLASS_NAME}
    >
      {props.children}
    </a>
  );
}
