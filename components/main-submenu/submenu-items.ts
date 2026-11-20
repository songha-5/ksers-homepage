import {
  Camera,
  FileUp,
  GalleryHorizontalEnd,
  GraduationCap,
  ListChecks,
  PanelTop,
  Presentation,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import posterFile from "@/images/KSERS2027_poster.jpg";
import webBannerFile from "@/images/visual_main02_m.png";

const LOGO_FILE_PATH = "/KSERS_LOGO.pdf";
// PDF가 오면 이 이미지를 그 파일로 교체한다.
const POSTER_FILE_NAME = "KSERS2027_poster.jpg";

interface SubmenuItemBase {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly lines: readonly string[];
}

export interface SubmenuPageItem extends SubmenuItemBase {
  readonly kind: "page";
  readonly href: string;
}

export interface SubmenuFileItem extends SubmenuItemBase {
  readonly kind: "file";
  readonly href: string;
  readonly fileName: string;
}

export type SubmenuItem = SubmenuPageItem | SubmenuFileItem;

export interface SubmenuGroup {
  readonly id: string;
  readonly backgroundClassName: string;
  readonly items: readonly SubmenuItem[];
}

const WHITE_BACKGROUND_CLASS = "bg-white";
const LIGHT_GRAY_BACKGROUND_CLASS = "bg-[#f4f4f5]";

export const SUBMENU_GROUPS = [
  {
    id: "congress",
    backgroundClassName: WHITE_BACKGROUND_CLASS,
    items: [
      {
        id: "program",
        kind: "page",
        href: "/2027/en/glance",
        icon: ListChecks,
        lines: ["Program"],
      },
      {
        id: "submission",
        kind: "page",
        href: "/2027/en/submission",
        icon: FileUp,
        lines: ["Submission"],
      },
      {
        id: "master-class",
        kind: "page",
        href: "/2027/en/master-class",
        icon: GraduationCap,
        lines: ["Master Class"],
      },
      {
        id: "grants-award",
        kind: "page",
        href: "/2027/en/grants",
        icon: Trophy,
        lines: ["Grants &", "Award"],
      },
    ],
  },
  {
    id: "promotion",
    backgroundClassName: LIGHT_GRAY_BACKGROUND_CLASS,
    items: [
      {
        id: "poster",
        kind: "file",
        href: posterFile.src,
        fileName: POSTER_FILE_NAME,
        icon: Presentation,
        lines: ["Poster"],
      },
      {
        id: "web-banner",
        kind: "file",
        href: webBannerFile.src,
        fileName: "visual_main02_m.png",
        icon: PanelTop,
        lines: ["Web Banner"],
      },
      {
        id: "slide",
        kind: "file",
        href: LOGO_FILE_PATH,
        fileName: "KSERS_LOGO.pdf",
        icon: GalleryHorizontalEnd,
        lines: ["Slide"],
      },
      {
        id: "photo",
        kind: "page",
        href: "/2027/en/photo-gallery",
        icon: Camera,
        lines: ["KSERS 2026", "Photo"],
      },
    ],
  },
] as const satisfies readonly SubmenuGroup[];

export const SUBMENU_HOVER_CLASS =
  "transition-colors hover:bg-(--palette-primary) hover:text-white focus-visible:bg-(--palette-primary) focus-visible:text-white focus-visible:outline-none";
