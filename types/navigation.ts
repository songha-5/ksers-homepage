export interface NavigationLink {
  readonly label: string;
  readonly href: string;
}

export interface NavigationMenu {
  readonly label: string;
  readonly href: string;
  readonly items: readonly NavigationLink[];
}
