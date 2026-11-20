import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import {
  SUBMENU_HOVER_CLASS,
  type SubmenuItem,
} from "@/components/main-submenu/submenu-items";

interface SubmenuCircleLinkProps {
  readonly item: SubmenuItem;
  readonly backgroundClassName: string;
}

const CIRCLE_CLASS_NAME =
  "group flex h-[160px] w-[160px] flex-col items-center justify-center rounded-full px-2 text-center text-[14px] leading-tight text-[#09428f] min-[768px]:h-[120px] min-[768px]:w-[120px] min-[768px]:text-[13px] min-[1100px]:h-[130px] min-[1100px]:w-[130px] min-[1100px]:text-[14px]";

function renderCircleBody(item: SubmenuItem): ReactElement {
  const ItemIcon = item.icon;

  return (
    <>
      <ItemIcon
        aria-hidden
        strokeWidth={1.8}
        className="h-[60px] w-[60px] shrink-0 transition-colors min-[768px]:h-11 min-[768px]:w-11 min-[1100px]:h-[52px] min-[1100px]:w-[52px]"
      />
      {/* 글 줄 수는 흐름 밖에 두어, 두 줄이어도 아이콘 하단이 옆 아이콘과 맞는다. */}
      <span className="relative mt-1 h-[1.25em] w-full shrink-0">
        <span className="absolute inset-x-0 top-0 leading-tight">
          {item.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      </span>
    </>
  );
}

function renderCircleLink(item: SubmenuItem, className: string): ReactNode {
  const body = renderCircleBody(item);

  switch (item.kind) {
    case "file":
      return (
        <a href={item.href} download={item.fileName} className={className}>
          {body}
        </a>
      );
    case "page":
      return (
        <Link href={item.href} className={className}>
          {body}
        </Link>
      );
    default: {
      const unreachable: never = item;
      return unreachable;
    }
  }
}

export function SubmenuCircleLink({
  item,
  backgroundClassName,
}: SubmenuCircleLinkProps): ReactElement {
  const className = `${CIRCLE_CLASS_NAME} ${SUBMENU_HOVER_CLASS} ${backgroundClassName}`;

  return (
    <li className="flex justify-center">{renderCircleLink(item, className)}</li>
  );
}
