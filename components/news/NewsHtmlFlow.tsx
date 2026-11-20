import type { ReactElement } from "react";
import { NewsArticleBodyNodes } from "@/components/news/NewsArticleBodyNodes";
import { NewsHtmlAnchor } from "@/components/news/NewsHtmlAnchor";
import type { NewsFlowTag, NewsHtmlElement } from "@/components/news/news-html-model";

interface NewsHtmlFlowProps {
  readonly node: NewsHtmlElement & { readonly tag: NewsFlowTag };
}

export function NewsHtmlFlow({ node }: NewsHtmlFlowProps): ReactElement {
  const children = <NewsArticleBodyNodes nodes={node.children} />;

  switch (node.tag) {
    case "p":
      return <p>{children}</p>;
    case "br":
      return <br />;
    case "strong":
    case "b":
      return <strong>{children}</strong>;
    case "em":
    case "i":
      return <em>{children}</em>;
    case "u":
      return <u>{children}</u>;
    case "ul":
      return <ul>{children}</ul>;
    case "ol":
      return <ol>{children}</ol>;
    case "li":
      return <li>{children}</li>;
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "blockquote":
      return <blockquote>{children}</blockquote>;
    case "div":
      return <div>{children}</div>;
    case "span":
      return <span>{children}</span>;
    case "pre":
      return <pre>{children}</pre>;
    case "code":
      return <code>{children}</code>;
    case "hr":
      return <hr />;
    case "figcaption":
      return <figcaption>{children}</figcaption>;
    case "a":
      return <NewsHtmlAnchor node={node}>{children}</NewsHtmlAnchor>;
    default: {
      const unreachable: never = node.tag;
      return unreachable;
    }
  }
}
