export interface AbstractTextPart {
  readonly id: string;
  readonly kind: "text";
  readonly text: string;
}

export interface AbstractStrongPart {
  readonly id: string;
  readonly kind: "strong";
  readonly text: string;
}

export interface AbstractLinkPart {
  readonly id: string;
  readonly kind: "link";
  readonly text: string;
  readonly href: string;
}

export type AbstractInlinePart =
  | AbstractTextPart
  | AbstractStrongPart
  | AbstractLinkPart;

export interface AbstractBullet {
  readonly id: string;
  readonly parts: readonly AbstractInlinePart[];
}

export interface AbstractStep {
  readonly id: "select" | "login" | "author" | "write" | "save";
  readonly label: string;
  readonly text: string;
}

export interface AbstractTopic {
  readonly id: string;
  readonly number: string;
  readonly name: string;
}

export interface AbstractTopicGroup {
  readonly id: string;
  readonly topics: readonly AbstractTopic[];
}
