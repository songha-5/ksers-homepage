import type { ReactElement } from "react";
import { NewsArticleBodyNodes } from "@/components/news/NewsArticleBodyNodes";
import { NewsHtmlVideo } from "@/components/news/NewsHtmlVideo";
import type { NewsEmbedTag, NewsHtmlElement } from "@/components/news/news-html-model";

interface NewsHtmlEmbedProps {
  readonly node: NewsHtmlElement & { readonly tag: NewsEmbedTag };
}

export function NewsHtmlEmbed({ node }: NewsHtmlEmbedProps): ReactElement | null {
  switch (node.tag) {
    case "img":
      return node.src ? <img src={node.src} alt={node.alt ?? ""} /> : null;
    case "figure":
      return (
        <figure>
          <NewsArticleBodyNodes nodes={node.children} />
        </figure>
      );
    case "video":
      return <NewsHtmlVideo node={node} />;
    case "source":
      return null;
    default: {
      const unreachable: never = node.tag;
      return unreachable;
    }
  }
}
