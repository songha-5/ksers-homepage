import type { ReactElement } from "react";
import { SubmenuCircleLink } from "@/components/main-submenu/SubmenuCircleLink";
import type { SubmenuGroup } from "@/components/main-submenu/submenu-items";

interface SubmenuGroupListProps {
  readonly group: SubmenuGroup;
}

export function SubmenuGroupList({
  group,
}: SubmenuGroupListProps): ReactElement {
  // PC에서는 그룹 상자를 없애 원 8개가 한 줄로 양 끝에 맞는다.
  return (
    <ul className="mx-auto grid w-fit grid-cols-2 gap-x-5 gap-y-4 min-[768px]:grid-cols-4 min-[768px]:gap-x-4 min-[1100px]:contents">
      {group.items.map((item) => (
        <SubmenuCircleLink
          key={item.id}
          item={item}
          backgroundClassName={group.backgroundClassName}
        />
      ))}
    </ul>
  );
}
