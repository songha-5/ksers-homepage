import type { ReactElement } from "react";
import { NewsHtmlEmbed } from "@/components/news/NewsHtmlEmbed";
import { NewsHtmlFlow } from "@/components/news/NewsHtmlFlow";
import { NewsHtmlTable } from "@/components/news/NewsHtmlTable";
import {
  isNewsEmbedTag,
  isNewsFlowTag,
  isNewsTableTag,
  type NewsHtmlElement as NewsHtmlElementNode,
} from "@/components/news/news-html-model";

interface NewsHtmlElementProps {
  readonly node: NewsHtmlElementNode;
}

export function NewsHtmlElement({
  node,
}: NewsHtmlElementProps): ReactElement | null {
  if (isNewsFlowTag(node.tag)) {
    return <NewsHtmlFlow node={{ ...node, tag: node.tag }} />;
  }

  if (isNewsTableTag(node.tag)) {
    return <NewsHtmlTable node={{ ...node, tag: node.tag }} />;
  }

  if (isNewsEmbedTag(node.tag)) {
    return <NewsHtmlEmbed node={{ ...node, tag: node.tag }} />;
  }

  const unreachable: never = node.tag;
  return unreachable;
}
