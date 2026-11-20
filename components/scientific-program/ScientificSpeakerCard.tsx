import type { ReactElement, ReactNode } from "react";
import type { ScientificSpeaker } from "@/components/scientific-program/scientific-program-model";

interface ScientificSpeakerCardProps {
  readonly speaker: ScientificSpeaker;
}

const BUTTON_CLASS_NAME =
  "inline-block bg-[#09428f] px-4 py-2 text-sm font-bold text-white";

const PHOTO_FRAME_CLASS_NAME = "h-[132px] w-[100px] shrink-0 border border-[#d0d0d0] bg-white";

function isDownloadUrl(url: string): boolean {
  return (
    url.startsWith("/") ||
    url.startsWith("https://") ||
    url.startsWith("http://")
  );
}

function DownloadLink({
  href,
  label,
}: {
  readonly href: string;
  readonly label: string;
}): ReactElement | null {
  if (!isDownloadUrl(href)) {
    return null;
  }

  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={BUTTON_CLASS_NAME}
    >
      {label}
    </a>
  );
}

function SpeakerPhotoSlot({
  imageUrl,
}: {
  readonly imageUrl: string | null;
}): ReactElement {
  if (!imageUrl) {
    return (
      <div className={`${PHOTO_FRAME_CLASS_NAME} flex items-center justify-center text-xs text-[#8d8d8d]`}>
        Photo
      </div>
    );
  }

  return (
    // 관리자가 넣는 주소라 next/image의 허용 도메인에 넣지 않는다.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={imageUrl} alt="" className={`${PHOTO_FRAME_CLASS_NAME} object-cover`} />
  );
}

function SpeakerActions({ speaker }: ScientificSpeakerCardProps): ReactNode {
  if (!speaker.cvUrl && !speaker.abstractUrl) {
    return null;
  }

  return (
    <div className="mt-3 flex gap-2">
      {speaker.cvUrl ? <DownloadLink href={speaker.cvUrl} label="CV" /> : null}
      {speaker.abstractUrl ? (
        <DownloadLink href={speaker.abstractUrl} label="Abstract" />
      ) : null}
    </div>
  );
}

function SpeakerCopy({ speaker }: ScientificSpeakerCardProps): ReactElement {
  return (
    <div className="min-w-0">
      <h3 className="text-base leading-snug font-semibold break-words text-primary">
        {speaker.talkTitle}
      </h3>
      <div className="mt-3">
        <p className="font-bold text-[#263238]">{speaker.name}</p>
        {speaker.affiliation ? (
          <p className="text-sm text-[#757575]">{speaker.affiliation}</p>
        ) : null}
        {speaker.description ? (
          <p className="mt-2 text-sm break-words text-[#595959]">
            {speaker.description}
          </p>
        ) : null}
        <SpeakerActions speaker={speaker} />
      </div>
    </div>
  );
}

export function ScientificSpeakerCard({
  speaker,
}: ScientificSpeakerCardProps): ReactElement {
  const imageUrl =
    speaker.imageUrl && isDownloadUrl(speaker.imageUrl)
      ? speaker.imageUrl
      : null;
  const bodyClassName = speaker.badge ? "flex gap-4 pr-16" : "flex gap-4";

  return (
    <article className="relative bg-[#f7f9fb] p-4">
      {speaker.badge ? (
        <span className="absolute top-3 right-3 bg-[#e8eef5] px-2 py-0.5 text-xs font-bold text-primary">
          {speaker.badge}
        </span>
      ) : null}
      <div className={bodyClassName}>
        <SpeakerPhotoSlot imageUrl={imageUrl} />
        <SpeakerCopy speaker={speaker} />
      </div>
    </article>
  );
}
