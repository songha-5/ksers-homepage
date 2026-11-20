import type { ReactElement } from "react";
import { NewsArticleBodyNodes } from "@/components/news/NewsArticleBodyNodes";
import type {
  NewsHtmlElement,
  NewsTableTag,
} from "@/components/news/news-html-model";

interface NewsHtmlTableProps {
  readonly node: NewsHtmlElement & { readonly tag: NewsTableTag };
}

const TABLE_CLASS_NAME =
  "w-full min-w-[36rem] border-collapse border border-[#e4e4e4] text-left text-sm text-[#595959]";
const CELL_CLASS_NAME =
  "border border-[#e4e4e4] px-3 py-2 align-top break-words";
const HEAD_CLASS_NAME = `${CELL_CLASS_NAME} bg-[#e8eef5] font-bold text-[#263238]`;

export function NewsHtmlTable({ node }: NewsHtmlTableProps): ReactElement {
  const children = <NewsArticleBodyNodes nodes={node.children} />;

  switch (node.tag) {
    case "table":
      return (
        <div className="my-4 overflow-x-auto">
          <table className={TABLE_CLASS_NAME}>{children}</table>
        </div>
      );
    case "thead":
      return <thead>{children}</thead>;
    case "tbody":
      return <tbody>{children}</tbody>;
    case "tfoot":
      return <tfoot>{children}</tfoot>;
    case "tr":
      return <tr>{children}</tr>;
    case "th":
      return (
        <th
          colSpan={node.colSpan}
          rowSpan={node.rowSpan}
          className={HEAD_CLASS_NAME}
        >
          {children}
        </th>
      );
    case "td":
      return (
        <td
          colSpan={node.colSpan}
          rowSpan={node.rowSpan}
          className={CELL_CLASS_NAME}
        >
          {children}
        </td>
      );
    default: {
      const unreachable: never = node.tag;
      return unreachable;
    }
  }
}
