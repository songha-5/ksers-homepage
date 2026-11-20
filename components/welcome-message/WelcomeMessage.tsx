import type { ReactElement } from "react";
import { SubpageFrame } from "@/components/subpage/SubpageFrame";
import { WelcomeParagraph } from "@/components/welcome-message/WelcomeParagraph";
import { WelcomeSignatureList } from "@/components/welcome-message/WelcomeSignatureList";
import {
  WELCOME_GREETING,
  WELCOME_PARAGRAPHS,
  WELCOME_SIGNATURES,
  WELCOME_TITLE,
} from "@/components/welcome-message/welcome-content";

const GREETING_CLASS_NAME =
  "pb-5 font-(family-name:--font-roboto) text-[22px] leading-[1.4] text-[#f06292] min-[1100px]:text-[26px]";

export function WelcomeMessage(): ReactElement {
  return (
    <SubpageFrame title={WELCOME_TITLE}>
      <h2 className={GREETING_CLASS_NAME}>{WELCOME_GREETING}</h2>
      <div className="mb-10 flex flex-col gap-5">
        {WELCOME_PARAGRAPHS.map((paragraph) => (
          <WelcomeParagraph key={paragraph.id} paragraph={paragraph} />
        ))}
      </div>
      <WelcomeSignatureList signatures={WELCOME_SIGNATURES} />
    </SubpageFrame>
  );
}
