import type { ReactElement } from "react";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";

interface SubpageDateItem {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}

interface SubpageDateListProps {
  readonly title: string;
  readonly items: readonly SubpageDateItem[];
}

export function SubpageDateList({
  title,
  items,
}: SubpageDateListProps): ReactElement {
  return (
    <div>
      <SubpageSectionHeading title={title} />
      <div className="bg-[#e8eef5] px-5 py-4">
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.id}>
              {`${item.label}: `}
              <strong className="font-bold text-[#09428f]">{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
