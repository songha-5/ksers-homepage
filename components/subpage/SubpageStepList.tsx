import type { ReactElement, ReactNode } from "react";

interface SubpageStepListProps {
  readonly children: ReactNode;
}

export function SubpageStepList({
  children,
}: SubpageStepListProps): ReactElement {
  return (
    <ol className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-2 min-[1100px]:grid-cols-5">
      {children}
    </ol>
  );
}
