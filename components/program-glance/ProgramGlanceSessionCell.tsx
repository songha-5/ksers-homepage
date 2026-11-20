import type { ReactElement } from "react";
import { getSessionColorClass } from "@/components/program-glance/program-glance-colors";
import type { ProgramSession } from "@/components/program-glance/program-glance-model";

interface ProgramGlanceSessionCellProps {
  readonly session: ProgramSession;
}

const CELL_CLASS_NAME =
  "border border-[#e4e4e4] px-2 py-3 text-center align-middle break-words";

const LINK_CLASS_NAME = "mt-1 block cursor-pointer underline";

function SessionLink({
  href,
  className,
  children,
}: {
  readonly href: string;
  readonly className: string;
  readonly children: ReactElement;
}): ReactElement {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function SessionTitle({
  session,
}: ProgramGlanceSessionCellProps): ReactElement | null {
  if (!session.title) {
    return null;
  }

  return <strong className="block text-[#263238]">{session.title}</strong>;
}

function SessionContent({
  session,
}: ProgramGlanceSessionCellProps): ReactElement | null {
  if (!session.content) {
    return null;
  }

  const className = session.href ? LINK_CLASS_NAME : "mt-1 block";

  return <span className={className}>{session.content}</span>;
}

export function ProgramGlanceSessionCell({
  session,
}: ProgramGlanceSessionCellProps): ReactElement {
  const colorClassName = getSessionColorClass(session.color);

  const body = (
    <>
      <SessionTitle session={session} />
      <SessionContent session={session} />
      {session.topic ? (
        <span className="mt-1 block text-[#455a64]">{session.topic}</span>
      ) : null}
      {session.label ? (
        <span className="mt-1 inline-block bg-[#f06292] px-1.5 py-px text-xs text-white">
          {session.label}
        </span>
      ) : null}
    </>
  );

  return (
    <td
      colSpan={session.columnSpan}
      rowSpan={session.rowSpan}
      className={`${CELL_CLASS_NAME} ${colorClassName}`}
    >
      {session.href ? (
        <SessionLink href={session.href} className="block text-inherit">
          {body}
        </SessionLink>
      ) : (
        body
      )}
    </td>
  );
}
