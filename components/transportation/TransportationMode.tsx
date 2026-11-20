import type { ReactElement } from "react";
import { TransportationBlock } from "@/components/transportation/TransportationBlock";
import type { TransportMode } from "@/components/transportation/transportation-model";

interface TransportationModeProps {
  readonly mode: TransportMode;
}

export function TransportationMode({
  mode,
}: TransportationModeProps): ReactElement {
  return (
    <div>
      {mode.blocks.map((block) => (
        <TransportationBlock key={block.id} block={block} />
      ))}
    </div>
  );
}
