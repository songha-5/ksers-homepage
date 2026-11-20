import type { ReactElement } from "react";
import { PresenterGuidelinesList } from "@/components/presenter-guidelines/PresenterGuidelinesList";
import { PresenterGuidelinesPairTable } from "@/components/presenter-guidelines/PresenterGuidelinesPairTable";
import { PresenterGuidelinesParagraphs } from "@/components/presenter-guidelines/PresenterGuidelinesParagraphs";
import { PresenterGuidelinesSubsection } from "@/components/presenter-guidelines/PresenterGuidelinesSubsection";
import type { PresenterBlock } from "@/components/presenter-guidelines/presenter-guidelines-model";

interface PresenterGuidelinesBlocksProps {
  readonly blocks: readonly PresenterBlock[];
}

export function PresenterGuidelinesBlocks({
  blocks,
}: PresenterGuidelinesBlocksProps): ReactElement {
  return (
    <div>
      {blocks.map((block, index) => (
        <div key={block.id} className={blockOffsetClassName(index, block.kind)}>
          {renderBlock(block)}
        </div>
      ))}
    </div>
  );
}

function renderBlock(block: PresenterBlock): ReactElement {
  switch (block.kind) {
    case "paragraphs":
      return <PresenterGuidelinesParagraphs items={block.items} />;
    case "list":
      return <PresenterGuidelinesList items={block.items} />;
    case "table":
      return <PresenterGuidelinesPairTable rows={block.rows} />;
    case "group":
      return (
        <PresenterGuidelinesSubsection title={block.title}>
          <PresenterGuidelinesBlocks blocks={block.blocks} />
        </PresenterGuidelinesSubsection>
      );
    default: {
      const unreachable: never = block;
      return unreachable;
    }
  }
}

function blockOffsetClassName(
  index: number,
  kind: PresenterBlock["kind"],
): string | undefined {
  if (index === 0 || kind === "group") {
    return undefined;
  }

  return "mt-4";
}
