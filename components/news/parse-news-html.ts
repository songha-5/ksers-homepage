import {
  isNewsHtmlTag,
  type NewsHtmlElement,
  type NewsHtmlNode,
  type NewsHtmlTag,
} from "@/components/news/news-html-model";

const VOID_TAGS = new Set<NewsHtmlTag>(["br", "hr", "img", "source"]);

interface OpenElement {
  readonly id: string;
  readonly tag: NewsHtmlTag;
  readonly href?: string;
  readonly src?: string;
  readonly alt?: string;
  readonly isDownload?: boolean;
  readonly downloadName?: string;
  readonly colSpan?: number;
  readonly rowSpan?: number;
  readonly children: NewsHtmlNode[];
}

export function parseNewsHtml(html: string): readonly NewsHtmlNode[] {
  const roots: NewsHtmlNode[] = [];
  const stack: OpenElement[] = [];
  let sequence = 0;
  let index = 0;

  while (index < html.length) {
    index = readNextChunk({
      html,
      index,
      roots,
      stack,
      nextId: () => {
        sequence += 1;
        return `html-${sequence}`;
      },
    });
  }

  return roots;
}

interface ReadChunkInput {
  readonly html: string;
  readonly index: number;
  readonly roots: NewsHtmlNode[];
  readonly stack: OpenElement[];
  readonly nextId: () => string;
}

function readNextChunk(input: ReadChunkInput): number {
  const next = input.html.indexOf("<", input.index);
  if (next === -1) {
    pushText(
      target(input.stack, input.roots),
      input.nextId,
      input.html.slice(input.index),
      parentTag(input.stack),
    );
    return input.html.length;
  }

  if (next > input.index) {
    pushText(
      target(input.stack, input.roots),
      input.nextId,
      input.html.slice(input.index, next),
      parentTag(input.stack),
    );
  }

  const end = input.html.indexOf(">", next);
  if (end === -1) {
    return input.html.length;
  }

  applyTag(
    input.html.slice(next + 1, end),
    input.stack,
    input.roots,
    input.nextId,
  );
  return end + 1;
}

function target(
  stack: readonly OpenElement[],
  roots: NewsHtmlNode[],
): NewsHtmlNode[] {
  const parent = stack[stack.length - 1];
  return parent ? parent.children : roots;
}

const TABLE_SKELETON_TAGS = new Set<NewsHtmlTag>([
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
]);

function parentTag(stack: readonly OpenElement[]): NewsHtmlTag | undefined {
  return stack[stack.length - 1]?.tag;
}

function pushText(
  nodes: NewsHtmlNode[],
  nextId: () => string,
  raw: string,
  parent: NewsHtmlTag | undefined,
): void {
  const text = decodeNewsText(raw);
  if (text.length === 0) {
    return;
  }

  if (parent && TABLE_SKELETON_TAGS.has(parent) && text.trim().length === 0) {
    return;
  }

  nodes.push({ id: nextId(), kind: "text", text });
}

function applyTag(
  rawTag: string,
  stack: OpenElement[],
  roots: NewsHtmlNode[],
  nextId: () => string,
): void {
  const parsed = readTag(rawTag.trim());
  if (!parsed || !isNewsHtmlTag(parsed.name)) {
    return;
  }

  if (parsed.isClosing) {
    closeTag(stack, roots, parsed.name);
    return;
  }

  const element = createElement(parsed.name, parsed.attributes, nextId);
  if (VOID_TAGS.has(parsed.name) || parsed.isSelfClosing) {
    target(stack, roots).push(toNode(element));
    return;
  }

  stack.push(element);
}

function closeTag(
  stack: OpenElement[],
  roots: NewsHtmlNode[],
  tag: NewsHtmlTag,
): void {
  const index = findOpenTag(stack, tag);
  if (index < 0) {
    return;
  }

  const closed = stack.splice(index);
  const element = closed[0];
  if (!element) {
    return;
  }

  target(stack, roots).push(toNode(element));
}

function findOpenTag(stack: readonly OpenElement[], tag: NewsHtmlTag): number {
  for (let index = stack.length - 1; index >= 0; index -= 1) {
    if (stack[index]?.tag === tag) {
      return index;
    }
  }

  return -1;
}

function createElement(
  tag: NewsHtmlTag,
  attributes: Readonly<Record<string, string>>,
  nextId: () => string,
): OpenElement {
  const href = readSafeUrl(attributes.href);
  const isDownload = Object.hasOwn(attributes, "download");

  return {
    id: nextId(),
    tag,
    href,
    src: readSafeUrl(attributes.src),
    alt: attributes.alt,
    isDownload,
    downloadName: readDownloadName(attributes.download, href),
    colSpan: readSpan(attributes.colspan),
    rowSpan: readSpan(attributes.rowspan),
    children: [],
  };
}

function toNode(element: OpenElement): NewsHtmlElement {
  return {
    id: element.id,
    kind: "element",
    tag: element.tag,
    href: element.href,
    src: element.src,
    alt: element.alt,
    isDownload: element.isDownload,
    downloadName: element.downloadName,
    colSpan: element.colSpan,
    rowSpan: element.rowSpan,
    children: element.children,
  };
}

interface ParsedTag {
  readonly name: string;
  readonly isClosing: boolean;
  readonly isSelfClosing: boolean;
  readonly attributes: Readonly<Record<string, string>>;
}

function readTag(rawTag: string): ParsedTag | undefined {
  const matched = /^(\/?)([a-zA-Z0-9]+)([\s\S]*?)(\/?)$/.exec(rawTag);
  const name = matched?.[2]?.toLowerCase();
  if (!matched || !name) {
    return undefined;
  }

  return {
    name,
    isClosing: matched[1] === "/",
    isSelfClosing: matched[4] === "/",
    attributes: readAttributes(matched[3] ?? ""),
  };
}

function readAttributes(raw: string): Readonly<Record<string, string>> {
  const attributes: Record<string, string> = {};
  const pattern = /([a-zA-Z]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
  for (const matched of raw.matchAll(pattern)) {
    const key = matched[1]?.toLowerCase();
    if (key) {
      attributes[key] = decodeNewsText(matched[2] ?? matched[3] ?? "");
    }
  }

  pattern.lastIndex = 0;
  const rest = raw.replace(pattern, " ");
  for (const token of rest.split(/\s+/)) {
    const key = token.replace("/", "").toLowerCase();
    if (/^[a-z]+$/.test(key) && !Object.hasOwn(attributes, key)) {
      attributes[key] = "";
    }
  }

  return attributes;
}

function readDownloadName(
  download: string | undefined,
  href: string | undefined,
): string | undefined {
  if (download) {
    return download;
  }

  if (!href) {
    return undefined;
  }

  const name = href.split("?")[0]?.split("#")[0]?.split("/").pop();
  return name && name.length > 0 ? name : undefined;
}

function readSpan(value: string | undefined): number | undefined {
  if (!value) {
    return undefined;
  }

  const span = Number(value);
  if (!Number.isInteger(span) || span < 1) {
    return undefined;
  }

  return span;
}

function readSafeUrl(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  const url = value.trim();
  const lower = url.toLowerCase();
  if (
    lower.startsWith("javascript:") ||
    lower.startsWith("data:") ||
    url.startsWith("//")
  ) {
    return undefined;
  }

  if (
    url.startsWith("/") ||
    lower.startsWith("mailto:") ||
    lower.startsWith("https://") ||
    lower.startsWith("http://")
  ) {
    return url;
  }

  if (/^[a-z][a-z0-9+.-]*:/i.test(url)) {
    return undefined;
  }

  return url;
}

function decodeNumericEntity(value: string, radix: number): string {
  const code = Number.parseInt(value, radix);
  if (!Number.isInteger(code) || code < 0 || code > 0x10ffff) {
    return "";
  }

  return String.fromCodePoint(code);
}

function decodeNewsText(value: string): string {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replace(/&#(\d+);/g, (_, digits: string) =>
      decodeNumericEntity(digits, 10),
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      decodeNumericEntity(hex, 16),
    );
}
