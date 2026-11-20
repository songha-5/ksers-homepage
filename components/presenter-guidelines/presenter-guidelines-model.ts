export interface PresenterGuidelinesPairRow {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}

export type PresenterInline =
  | {
      readonly kind: "text";
      readonly id: string;
      readonly text: string;
      readonly emphasis?: boolean;
    }
  | { readonly kind: "visa"; readonly id: string; readonly label: string }
  | {
      readonly kind: "download";
      readonly id: string;
      readonly href: string;
      readonly fileName: string;
    }
  | { readonly kind: "open"; readonly id: string; readonly href: string };

export interface PresenterListItem {
  readonly id: string;
  readonly parts: readonly PresenterInline[];
  readonly children?: readonly PresenterListItem[];
}

export interface PresenterParagraph {
  readonly id: string;
  readonly parts: readonly PresenterInline[];
  readonly emphasis?: boolean;
}

export type PresenterBlock =
  | {
      readonly kind: "paragraphs";
      readonly id: string;
      readonly items: readonly PresenterParagraph[];
    }
  | {
      readonly kind: "list";
      readonly id: string;
      readonly items: readonly PresenterListItem[];
    }
  | {
      readonly kind: "table";
      readonly id: string;
      readonly rows: readonly PresenterGuidelinesPairRow[];
    }
  | {
      readonly kind: "group";
      readonly id: string;
      readonly title: string;
      readonly blocks: readonly PresenterBlock[];
    };

export interface PresenterSection {
  readonly id: string;
  readonly title?: string;
  readonly tone: "notice" | "plain";
  readonly layout: "stack" | "poster";
  readonly blocks: readonly PresenterBlock[];
}

export function presenterText(
  id: string,
  text: string,
  emphasis = false,
): PresenterInline {
  if (!emphasis) {
    return { kind: "text", id, text };
  }

  return { kind: "text", id, text, emphasis: true };
}

export function presenterItem(
  id: string,
  parts: readonly PresenterInline[],
  children?: readonly PresenterListItem[],
): PresenterListItem {
  if (!children) {
    return { id, parts };
  }

  return { id, parts, children };
}

export function presenterParagraph(
  id: string,
  parts: readonly PresenterInline[],
  emphasis = false,
): PresenterParagraph {
  if (!emphasis) {
    return { id, parts };
  }

  return { id, parts, emphasis: true };
}
