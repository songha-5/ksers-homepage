import type { ReactElement } from "react";

interface VenueSectionProps {
  readonly title: string;
  readonly body: string;
}

const TITLE_CLASS_NAME =
  "mb-3 font-(family-name:--font-roboto) text-xl leading-[1.4] font-bold text-[#09428f] min-[1100px]:text-2xl";

export function VenueSection({ title, body }: VenueSectionProps): ReactElement {
  return (
    <section>
      <h2 className={TITLE_CLASS_NAME}>{title}</h2>
      <p>{body}</p>
    </section>
  );
}
