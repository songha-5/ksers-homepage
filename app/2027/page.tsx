import type { ReactElement } from "react";
import { MainBanner } from "@/components/main-banner/MainBanner";
import { MainNews } from "@/components/main-news/MainNews";
import { MainSubmenu } from "@/components/main-submenu/MainSubmenu";

export default function MainPage(): ReactElement {
  return (
    <>
      <MainBanner />
      <MainSubmenu />
      <MainNews />
    </>
  );
}
