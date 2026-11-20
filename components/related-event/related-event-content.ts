import eaesBanner from "@/images/banner_EAES2027.png";
import sagesBanner from "@/images/banner_SAGES2027.png";
import type { RelatedEventEntry } from "@/components/related-event/related-event-model";
import {
  createAccentField,
  createLinkField,
  createPlainField,
} from "@/components/related-event/related-event-model";

export const RELATED_EVENT_HEADING = "Related Events";

const SAGES_SITE_URL = "https://www.sages2027.org/";
const SAGES_ABSTRACT_URL =
  "https://www.submitmyabstract.com/default.cfm?meetingId=155853";
const EAES_SITE_URL = "https://eaes.eu/eaes-annual-congress/";
const EAES_ABSTRACT_URL =
  "https://congresscare.eventsair.com/eaes/abstractsubmission";

export const RELATED_EVENTS = [
  {
    id: "sages-2027",
    image: sagesBanner,
    imageAlt: "SAGES 2027",
    fields: [
      createAccentField("sages-title", "Title", "SAGES 2027"),
      createAccentField("sages-date", "Date", "April 6-9, 2027"),
      createPlainField("sages-venue", "Venue", "Las Vegas, NV"),
      createLinkField("sages-website", "Website", SAGES_SITE_URL),
      createLinkField(
        "sages-abstract",
        "Abstract Submission",
        SAGES_ABSTRACT_URL,
      ),
    ],
  },
  {
    id: "eaes-2027",
    image: eaesBanner,
    imageAlt: "EAES 2027",
    fields: [
      createAccentField("eaes-title", "Title", "EAES 2027"),
      createAccentField("eaes-date", "Date", "June 15-18, 2027"),
      createPlainField("eaes-venue", "Venue", "Düsseldorf, Germany"),
      createLinkField("eaes-website", "Website", EAES_SITE_URL),
      createLinkField(
        "eaes-abstract",
        "Abstract Submission",
        EAES_ABSTRACT_URL,
      ),
    ],
  },
] as const satisfies readonly RelatedEventEntry[];
