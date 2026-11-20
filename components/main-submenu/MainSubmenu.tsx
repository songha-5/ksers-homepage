import type { ReactElement } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";
import { SubmenuGroupList } from "@/components/main-submenu/SubmenuGroupList";
import { SUBMENU_GROUPS } from "@/components/main-submenu/submenu-items";

export function MainSubmenu(): ReactElement {
  return (
    <section
      aria-label="서브 메뉴"
      className="mbs-8 bg-[#e8eaf6] py-8 min-[768px]:py-10 min-[1100px]:mbs-0 min-[1100px]:py-12"
    >
      <ContentContainer className="flex flex-col gap-8 min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:justify-between min-[1100px]:gap-0">
        {SUBMENU_GROUPS.map((group) => (
          <SubmenuGroupList key={group.id} group={group} />
        ))}
      </ContentContainer>
    </section>
  );
}
