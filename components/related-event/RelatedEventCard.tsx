import Image from "next/image";
import type { ReactElement } from "react";
import { RelatedEventField } from "@/components/related-event/RelatedEventField";
import type { RelatedEventEntry } from "@/components/related-event/related-event-model";

interface RelatedEventCardProps {
  readonly event: RelatedEventEntry;
}

const CARD_CLASS_NAME =
  "flex flex-col items-center gap-6 bg-[#f2f4f5] px-5 py-8 text-center min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:gap-10 min-[1100px]:px-8 min-[1100px]:text-left";

export function RelatedEventCard({
  event,
}: RelatedEventCardProps): ReactElement {
  return (
    <article className={CARD_CLASS_NAME}>
      <Image
        src={event.image}
        alt={event.imageAlt}
        className="h-auto w-full max-w-[420px] min-[1100px]:w-[280px] min-[1100px]:max-w-none min-[1100px]:shrink-0"
      />
      <dl className="flex flex-col gap-1">
        {event.fields.map((field) => (
          <RelatedEventField key={field.id} field={field} />
        ))}
      </dl>
    </article>
  );
}
