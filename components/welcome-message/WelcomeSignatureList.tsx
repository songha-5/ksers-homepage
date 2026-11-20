import type { ReactElement } from "react";
import { WelcomeSignature } from "@/components/welcome-message/WelcomeSignature";
import type { WelcomeSignatureContent } from "@/components/welcome-message/welcome-content";

interface WelcomeSignatureListProps {
  readonly signatures: readonly WelcomeSignatureContent[];
}

export function WelcomeSignatureList({
  signatures,
}: WelcomeSignatureListProps): ReactElement {
  return (
    <ul className="grid grid-cols-2 items-end gap-x-4 min-[1100px]:gap-x-[30px]">
      {signatures.map((signature) => (
        <WelcomeSignature key={signature.id} signature={signature} />
      ))}
    </ul>
  );
}
