export interface SiteVisitingCenter {
  readonly id: string;
  readonly title: string;
  readonly department: string;
  readonly personCount: string;
  readonly accommodation: string;
  readonly homepage: string;
  readonly content: readonly string[];
}

export interface SiteVisitingDateItem {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}
