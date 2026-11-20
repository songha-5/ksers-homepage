/**
 * Past Congresses 표의 한 행이다.
 * links가 비어 있으면 Homepage 칸은 "-"로 보여 준다.
 * 한 대회에 Website와 Video처럼 링크가 둘일 수 있다.
 */
export interface PastCongressLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface PastCongressEntry {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly date: string;
  readonly venue: string;
  readonly theme: string;
  readonly links: readonly PastCongressLink[];
}
