export const NEWS_FLOW_TAGS = [
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "ul",
  "ol",
  "li",
  "h1",
  "h2",
  "h3",
  "h4",
  "a",
  "blockquote",
  "div",
  "span",
  "pre",
  "code",
  "hr",
  "figcaption",
] as const;

export const NEWS_TABLE_TAGS = [
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
] as const;

export const NEWS_EMBED_TAGS = ["img", "figure", "video", "source"] as const;

export const NEWS_HTML_TAGS = [
  ...NEWS_FLOW_TAGS,
  ...NEWS_TABLE_TAGS,
  ...NEWS_EMBED_TAGS,
] as const;

export type NewsFlowTag = (typeof NEWS_FLOW_TAGS)[number];
export type NewsTableTag = (typeof NEWS_TABLE_TAGS)[number];
export type NewsEmbedTag = (typeof NEWS_EMBED_TAGS)[number];
export type NewsHtmlTag = (typeof NEWS_HTML_TAGS)[number];

export interface NewsHtmlText {
  readonly id: string;
  readonly kind: "text";
  readonly text: string;
}

export interface NewsHtmlElement {
  readonly id: string;
  readonly kind: "element";
  readonly tag: NewsHtmlTag;
  readonly href?: string;
  readonly src?: string;
  readonly alt?: string;
  readonly isDownload?: boolean;
  readonly downloadName?: string;
  readonly colSpan?: number;
  readonly rowSpan?: number;
  readonly children: readonly NewsHtmlNode[];
}

export type NewsHtmlNode = NewsHtmlText | NewsHtmlElement;

const NEWS_FILE_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
  ".zip",
  ".hwp",
  ".hwpx",
  ".txt",
  ".csv",
] as const;

export function isNewsHtmlTag(tag: string): tag is NewsHtmlTag {
  return (NEWS_HTML_TAGS as readonly string[]).includes(tag);
}

export function isNewsFlowTag(tag: NewsHtmlTag): tag is NewsFlowTag {
  return (NEWS_FLOW_TAGS as readonly string[]).includes(tag);
}

export function isNewsTableTag(tag: NewsHtmlTag): tag is NewsTableTag {
  return (NEWS_TABLE_TAGS as readonly string[]).includes(tag);
}

export function isNewsEmbedTag(tag: NewsHtmlTag): tag is NewsEmbedTag {
  return (NEWS_EMBED_TAGS as readonly string[]).includes(tag);
}

export function isNewsFileHref(href: string): boolean {
  const path = href.split("?")[0]?.split("#")[0]?.toLowerCase() ?? "";
  return NEWS_FILE_EXTENSIONS.some((extension) => path.endsWith(extension));
}

export function readNewsFileName(href: string): string {
  const path = href.split("?")[0]?.split("#")[0] ?? href;
  const name = path.split("/").pop();
  return name && name.length > 0 ? name : href;
}
