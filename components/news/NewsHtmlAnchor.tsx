import { Download } from "lucide-react";
import type { ReactElement } from "react";
import { readNewsFileProxyPath } from "@/components/news/news-file-link";
import {
  isNewsFileHref,
  readNewsFileName,
  type NewsHtmlElement,
} from "@/components/news/news-html-model";

interface NewsHtmlAnchorProps {
  readonly node: NewsHtmlElement;
  readonly children: ReactElement;
}

const FILE_CLASS_NAME =
  "news-file my-2 inline-flex items-center gap-2 border border-[#e4e4e4] bg-[#f7f9fb] px-4 py-3 no-underline";

export function NewsHtmlAnchor({
  node,
  children,
}: NewsHtmlAnchorProps): ReactElement {
  if (!node.href) {
    return <span>{children}</span>;
  }

  if (node.isDownload || isNewsFileHref(node.href)) {
    const href =
      readNewsFileProxyPath(node.href, node.downloadName) ?? node.href;
    const label =
      node.children.length > 0 ? children : readNewsFileName(node.href);

    return (
      <a className={FILE_CLASS_NAME} href={href}>
        <Download aria-hidden size={18} />
        {label}
      </a>
    );
  }

  const isExternal =
    node.href.startsWith("http://") || node.href.startsWith("https://");

  return (
    <a
      href={node.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
