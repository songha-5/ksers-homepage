import type { ReactElement } from "react";
import type { NewsHtmlElement } from "@/components/news/news-html-model";

interface NewsHtmlVideoProps {
  readonly node: NewsHtmlElement;
}

export function NewsHtmlVideo({ node }: NewsHtmlVideoProps): ReactElement | null {
  const src = node.src ?? readSourceSrc(node);
  if (!src) {
    return null;
  }

  return <video controls src={src} />;
}

function readSourceSrc(node: NewsHtmlElement): string | undefined {
  for (const child of node.children) {
    if (child.kind === "element" && child.tag === "source" && child.src) {
      return child.src;
    }
  }

  return undefined;
}
