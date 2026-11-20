import type { ReactElement } from "react";
import { ScientificProgramMeta } from "@/components/scientific-program/ScientificProgramMeta";
import { ScientificSpeakerCard } from "@/components/scientific-program/ScientificSpeakerCard";
import type { ScientificSession } from "@/components/scientific-program/scientific-program-model";

interface ScientificProgramSessionProps {
  readonly session: ScientificSession;
}

const TITLE_CLASS_NAME = "text-xl font-bold text-[#1565c0]";

export function ScientificProgramSession({
  session,
}: ScientificProgramSessionProps): ReactElement {
  return (
    <article id={session.id} className="scroll-mt-24 min-[1100px]:scroll-mt-36">
      <h2 className={TITLE_CLASS_NAME}>{session.title}</h2>
      <ScientificProgramMeta session={session} />
      {session.speakers.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 min-[768px]:grid-cols-2">
          {session.speakers.map((speaker) => (
            <ScientificSpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
