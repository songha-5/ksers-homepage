import type { ReactElement, ReactNode } from "react";

interface SubpageBullet {
  readonly id: string;
  readonly children: ReactNode;
}

interface SubpageBulletListProps {
  readonly items: readonly SubpageBullet[];
}

export function SubpageBulletList({
  items,
}: SubpageBulletListProps): ReactElement {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.id} className="pl-3">
          {item.children}
        </li>
      ))}
    </ul>
  );
}
