import type { ReactElement } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";

interface RoutePlaceholderProps {
  readonly title: string;
  readonly path: string;
}

export function RoutePlaceholder({
  title,
  path,
}: RoutePlaceholderProps): ReactElement {
  return (
    <section className="flex flex-1 flex-col py-10 min-[768px]:py-12">
      <ContentContainer className="flex flex-col gap-2">
        <p className="text-sm text-zinc-500">{path}</p>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      </ContentContainer>
    </section>
  );
}
