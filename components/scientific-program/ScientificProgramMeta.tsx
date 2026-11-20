import type { ReactElement } from "react";
import type { ScientificSession } from "@/components/scientific-program/scientific-program-model";

interface ScientificProgramMetaProps {
  readonly session: ScientificSession;
}

const LABEL_CLASS_NAME =
  "w-36 border border-[#e4e4e4] bg-white px-3 py-2 text-left align-top font-normal text-[#595959]";

const VALUE_CLASS_NAME =
  "border border-[#e4e4e4] px-3 py-2 text-left align-top text-[#595959]";

function chairLabel(count: number): string {
  return count > 1 ? "Chairs" : "Chair";
}

function MetaRow({
  label,
  children,
}: {
  readonly label: string;
  readonly children: ReactElement | string;
}): ReactElement {
  return (
    <tr>
      <th scope="row" className={LABEL_CLASS_NAME}>
        {label}
      </th>
      <td className={VALUE_CLASS_NAME}>{children}</td>
    </tr>
  );
}

export function ScientificProgramMeta({
  session,
}: ScientificProgramMetaProps): ReactElement | null {
  if (!session.dateTime && !session.language && session.chairs.length === 0) {
    return null;
  }

  return (
    <table className="mt-3 w-full border-collapse text-sm">
      <tbody>
        {session.dateTime ? (
          <MetaRow label="Date/ Time">
            <span className="text-[#e91e63]">{session.dateTime}</span>
          </MetaRow>
        ) : null}
        {session.language ? (
          <MetaRow label="Language">{session.language}</MetaRow>
        ) : null}
        {session.chairs.length > 0 ? (
          <MetaRow label={chairLabel(session.chairs.length)}>
            <>
              {session.chairs.map((chair) => (
                <span key={chair} className="block">
                  {chair}
                </span>
              ))}
            </>
          </MetaRow>
        ) : null}
      </tbody>
    </table>
  );
}
