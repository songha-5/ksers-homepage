import Image from "next/image";
import type { ReactElement } from "react";
import type { WelcomeSignatureContent } from "@/components/welcome-message/welcome-content";

interface WelcomeSignatureProps {
  readonly signature: WelcomeSignatureContent;
}

const PORTRAIT_CLASS_NAME =
  "h-auto w-[108px] border border-[#e4e4e4] min-[1100px]:w-[150px] min-[1100px]:self-end";

export function WelcomeSignature({
  signature,
}: WelcomeSignatureProps): ReactElement {
  return (
    <li className="flex h-full min-w-0">
      <div className="flex h-full flex-col gap-2.5 min-[1100px]:flex-row min-[1100px]:items-end min-[1100px]:gap-0">
        <Image
          src={signature.image}
          alt=""
          width={signature.image.width}
          height={signature.image.height}
          className={PORTRAIT_CLASS_NAME}
        />
        <div className="min-[1100px]:pl-[10px] min-[1100px]:pt-[18px]">
          <p className="text-sm font-bold text-[#263238]">{signature.name}</p>
          <p className="pt-[5px] text-sm leading-[1.5] text-[#595959]">
            {signature.role}
          </p>
        </div>
      </div>
    </li>
  );
}
