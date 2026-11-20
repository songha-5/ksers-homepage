import { Fragment, type ReactElement } from "react";
import { NewsHtmlElement } from "@/components/news/NewsHtmlElement";
import type { NewsHtmlNode } from "@/components/news/news-html-model";

interface NewsArticleBodyNodesProps {
  readonly nodes: readonly NewsHtmlNode[];
}

export function NewsArticleBodyNodes({
  nodes,
}: NewsArticleBodyNodesProps): ReactElement {
  return (
    <>
      {nodes.map((node) =>
        node.kind === "text" ? (
          <Fragment key={node.id}>{node.text}</Fragment>
        ) : (
          <NewsHtmlElement key={node.id} node={node} />
        ),
      )}
    </>
  );
}
