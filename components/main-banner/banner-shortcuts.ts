import {
  BookCopy,
  BookOpen,
  ClipboardCheck,
  Images,
  type LucideIcon,
} from "lucide-react";

const WELCOME_MESSAGE_PATH = "/2027/en/welcome";

export interface BannerShortcut {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon: LucideIcon;
  readonly backgroundClassName: string;
}

export const BANNER_SHORTCUTS = [
  {
    id: "program-book",
    label: "Program Book",
    href: "/2027/en/program-book",
    icon: BookOpen,
    backgroundClassName: "bg-[#f4f4f5]",
  },
  {
    id: "abstract-book",
    label: "Abstract Book",
    href: "/2027/en/abstract-book",
    icon: BookCopy,
    backgroundClassName: "bg-[#f4f4f5]",
  },
  {
    id: "presenter-guidelines",
    label: "Presenter Guidelines",
    href: "/2027/en/guidelines",
    icon: ClipboardCheck,
    backgroundClassName: "bg-[#f4f4f5]",
  },
  {
    id: "photo-gallery",
    label: "KSERS 2027 Photo Gallery",
    href: "/2027/en/photo-gallery",
    icon: Images,
    backgroundClassName: "bg-[#f4f4f5]",
  },
] as const satisfies readonly BannerShortcut[];

export const WELCOME_LINK = {
  href: WELCOME_MESSAGE_PATH,
  label: "Welcome Message",
} as const;

/** 바로가기 메뉴는 배너의 행사 정보를 가리지 않도록 모든 화면에서 배너 아래에 둔다. */
export const BANNER_SHORTCUT_PC_CLASS =
  "hidden grid-cols-4 gap-x-[50px] py-8 min-[1100px]:grid";

export const BANNER_SHORTCUT_MO_CLASS =
  "grid grid-cols-2 gap-5 pt-[30px] min-[768px]:grid-cols-4 min-[768px]:gap-4 min-[1100px]:hidden";
