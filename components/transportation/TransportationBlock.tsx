import type { ReactElement } from "react";
import { SimpleTable } from "@/components/simple-table/SimpleTable";
import { SubpageSectionHeading } from "@/components/subpage/SubpageSectionHeading";
import { TransportationFigure } from "@/components/transportation/TransportationFigure";
import { TransportationLinkButton } from "@/components/transportation/TransportationLinkButton";
import type { TransportBlock } from "@/components/transportation/transportation-model";

interface TransportationBlockProps {
  readonly block: TransportBlock;
}

export function TransportationBlock({
  block,
}: TransportationBlockProps): ReactElement {
  switch (block.kind) {
    case "heading":
      return <SubpageSectionHeading title={block.title} />;
    case "table":
      return <SimpleTable columns={block.columns} rows={block.rows} />;
    case "note":
      return <p className="mt-4">{block.text}</p>;
    case "link":
      return (
        <TransportationLinkButton
          href={block.href}
          label={block.label}
          tone="fill"
        />
      );
    case "image":
      return <TransportationFigure src={block.src} alt={block.alt} />;
    default: {
      const unreachable: never = block;
      return unreachable;
    }
  }
}
