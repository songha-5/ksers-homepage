import type { ReactElement } from "react";
import { ServicePageLink } from "@/components/auth/ServicePageLink";
import {
  ABSTRACT_VIDEO_AWARD_TEXT,
  ABSTRACT_VIDEO_LINKS,
  ABSTRACT_VIDEO_REVIEW_TEXT,
} from "@/components/abstract-submission/abstract-submission-content";
import {
  SIMPLE_TABLE_CELL_CLASS,
  SIMPLE_TABLE_HEADER_CLASS,
} from "@/components/simple-table/simple-table-styles";
import { readServicePageUrl } from "@/config/read-service-url";
import { buildVideoUrl } from "@/config/registration-service";

const VIDEO_ROW_COUNT = ABSTRACT_VIDEO_LINKS.length;

export function AbstractVideoTable(): ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[880px] border-collapse text-sm">
        <VideoTableHeader />
        <tbody>
          {ABSTRACT_VIDEO_LINKS.map((row, index) => (
            <tr key={row.id}>
              <th scope="row" className={SIMPLE_TABLE_HEADER_CLASS}>
                {row.type}
              </th>
              <td className={SIMPLE_TABLE_CELL_CLASS}>{row.overview}</td>
              {index === 0 ? <ReviewCell /> : null}
              <td className={SIMPLE_TABLE_CELL_CLASS}>
                <ServicePageLink
                  href={readServicePageUrl((base) =>
                    buildVideoUrl(base, row.videoKind),
                  )}
                  className="font-bold text-[#09428f] underline"
                >
                  Video Submission Link
                </ServicePageLink>
              </td>
              <td className={SIMPLE_TABLE_CELL_CLASS}>{row.session}</td>
              {index === 0 ? <AwardCell /> : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function VideoTableHeader(): ReactElement {
  return (
    <thead>
      <tr>
        <th scope="col" className={SIMPLE_TABLE_HEADER_CLASS}>
          Type
        </th>
        <th scope="col" className={SIMPLE_TABLE_HEADER_CLASS}>
          Overview
        </th>
        <th scope="col" colSpan={2} className={SIMPLE_TABLE_HEADER_CLASS}>
          Abstract + Video (5min) for Review
        </th>
        <th scope="col" className={SIMPLE_TABLE_HEADER_CLASS}>
          Session to be Assigned
        </th>
        <th scope="col" className={SIMPLE_TABLE_HEADER_CLASS}>
          Award
        </th>
      </tr>
    </thead>
  );
}

function ReviewCell(): ReactElement {
  return (
    <td rowSpan={VIDEO_ROW_COUNT} className={SIMPLE_TABLE_CELL_CLASS}>
      {ABSTRACT_VIDEO_REVIEW_TEXT}
    </td>
  );
}

function AwardCell(): ReactElement {
  return (
    <td rowSpan={VIDEO_ROW_COUNT} className={SIMPLE_TABLE_CELL_CLASS}>
      {ABSTRACT_VIDEO_AWARD_TEXT}
    </td>
  );
}
