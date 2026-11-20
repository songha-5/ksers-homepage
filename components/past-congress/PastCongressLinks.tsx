import type { ReactElement } from "react";
import type { PastCongressLink } from "@/components/past-congress/past-congress-model";

interface PastCongressLinksProps {
  readonly congressName: string;
  readonly links: readonly PastCongressLink[];
}

const LINK_CLASS_NAME =
  "inline-block min-w-[76px] border border-[#c8c8c8] bg-white px-3 py-[3px] text-center text-[13px] leading-[1.4] text-[#595959] hover:border-[#09428f] hover:text-[#09428f]";

export function PastCongressLinks({
  congressName,
  links,
}: PastCongressLinksProps): ReactElement {
  if (links.length === 0) {
    return <span>-</span>;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${congressName} ${link.label}`}
          className={LINK_CLASS_NAME}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
