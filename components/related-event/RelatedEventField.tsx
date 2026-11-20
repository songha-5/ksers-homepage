import type { ReactElement } from "react";
import type { RelatedEventField as RelatedEventFieldData } from "@/components/related-event/related-event-model";

interface RelatedEventFieldProps {
  readonly field: RelatedEventFieldData;
}

const ACCENT_CLASS_NAME = "text-[#f06292]";

const LINK_CLASS_NAME = "break-all underline hover:text-[#5c3a90]";

export function RelatedEventField({
  field,
}: RelatedEventFieldProps): ReactElement {
  switch (field.kind) {
    case "text":
      return (
        <div>
          <dt className="inline">{field.label}: </dt>
          <dd className={`inline ${field.isAccent ? ACCENT_CLASS_NAME : ""}`}>
            {field.value}
          </dd>
        </div>
      );
    case "link":
      return (
        <div>
          <dt className="inline">{field.label}: </dt>
          <dd className="inline">
            <a
              href={field.href}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS_NAME}
            >
              {field.href}
            </a>
          </dd>
        </div>
      );
    default: {
      const unreachable: never = field;
      return unreachable;
    }
  }
}
