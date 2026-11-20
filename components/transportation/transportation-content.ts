import gmpSubwayRoute from "@/images/transport-gmp-subway-route.png";
import gmpTaxiPlatform from "@/images/transport-gmp-taxi-platform.png";
import icnLimousineRoute from "@/images/transport-icn-limousine-route.png";
import icnSubwayRoute from "@/images/transport-icn-subway-route.png";
import icnTaxiTerminal1 from "@/images/transport-icn-taxi-terminal-1.png";
import icnTaxiTerminal2 from "@/images/transport-icn-taxi-terminal-2.png";
import icnTerminal1 from "@/images/transport-icn-terminal-1.png";
import icnTerminal2 from "@/images/transport-icn-terminal-2.png";
import type {
  TransportAirport,
  TransportBlock,
} from "@/components/transportation/transportation-model";

export const TRANSPORTATION_HEADING = "Transportation";

const MORE_INFO_LABEL = "More Info";
const CLICK_HERE_LABEL = "Click Here";
const HOTEL_LOCATION_URL =
  "https://www.lottehotel.com/seoul-grand/en/about/location";
const LIMOUSINE_SCHEDULE_URL = "https://klimousine.com/EN/bus/limousine.php";
const ICN_TAXI_URL = "https://www.airport.kr/ap_en/1515/subview.do";
const GMP_TAXI_URL =
  "https://www.airport.co.kr/gimpoeng/cms/frCon/index.do?MENU_ID=270&CONTENTS_NO=4";
const GMP_SUBWAY_URL =
  "https://www.airport.co.kr/gimpoeng/cms/frCon/index.do?MENU_ID=270&CONTENTS_NO=2";

const EXIT_NOTE = "Euljiro 1(il)-ga Station Exit 8 (3 mins by foot)";

const LIMOUSINE_BLOCKS: readonly TransportBlock[] = [
  { kind: "heading", id: "icn-bus-title", title: "K Limousine Bus" },
  {
    kind: "table",
    id: "icn-bus-fare",
    columns: [
      "Bus No.",
      "Operating Hours",
      "Fare",
      "Ticket Office",
      "Duration",
    ],
    rows: [
      [
        "KAL Limousine Bus: 6701",
        "05:35 – 22:05",
        "KRW 18,000",
        "Bus Ticket Office at Transportation Center",
        "Approx. 1 hour 30 min",
      ],
    ],
  },
  {
    kind: "note",
    id: "icn-bus-note",
    text: "Kindly check the bus schedule on the following website.",
  },
  {
    kind: "link",
    id: "icn-bus-link",
    label: CLICK_HERE_LABEL,
    href: LIMOUSINE_SCHEDULE_URL,
  },
  { kind: "heading", id: "icn-bus-route-title", title: "Route Information" },
  {
    kind: "image",
    id: "icn-bus-route",
    src: icnLimousineRoute,
    alt: "K Limousine bus route from Incheon Airport to Euljiro 1-ga Station",
  },
  {
    kind: "heading",
    id: "icn-t1-title",
    title: "Terminal 1 Boarding Area",
  },
  {
    kind: "table",
    id: "icn-t1-table",
    columns: ["Bus Stop", "Level", "Ticket Office / Kiosk"],
    rows: [
      [
        "3B, 4A",
        "1F",
        "Next to Gate 4 (inside) / Kiosk machine (inside and outside)",
      ],
    ],
  },
  {
    kind: "image",
    id: "icn-t1-map",
    src: icnTerminal1,
    alt: "Incheon Airport Terminal 1 limousine boarding area at stops 3B and 4A",
  },
  {
    kind: "heading",
    id: "icn-t2-title",
    title: "Terminal 2 Boarding Area",
  },
  {
    kind: "table",
    id: "icn-t2-table",
    columns: ["Bus Stop", "Level", "Ticket Office / Kiosk"],
    rows: [
      [
        "18, 19",
        "B1",
        "West ticket offices / Kiosk machine (B1 Transportation Center)",
      ],
    ],
  },
  {
    kind: "image",
    id: "icn-t2-map",
    src: icnTerminal2,
    alt: "Incheon Airport Terminal 2 limousine boarding area at stops 18 and 19",
  },
];

const ICN_TAXI_BLOCKS: readonly TransportBlock[] = [
  { kind: "heading", id: "icn-taxi-title", title: "By Taxi" },
  {
    kind: "table",
    id: "icn-taxi-fare",
    columns: ["Travel Time", "Fare"],
    rows: [["Approx. 60 min", "KRW 50,000 ~ KRW 60,000"]],
  },
  {
    kind: "note",
    id: "icn-taxi-note",
    text: "Please kindly check the taxi waiting information on the following website.",
  },
  {
    kind: "link",
    id: "icn-taxi-link",
    label: CLICK_HERE_LABEL,
    href: ICN_TAXI_URL,
  },
  {
    kind: "heading",
    id: "icn-taxi-t1-title",
    title: "Boarding Area (Terminal 1)",
  },
  {
    kind: "image",
    id: "icn-taxi-t1",
    src: icnTaxiTerminal1,
    alt: "Incheon Airport Terminal 1 taxi boarding area",
  },
  {
    kind: "heading",
    id: "icn-taxi-t2-title",
    title: "Boarding Area (Terminal 2)",
  },
  {
    kind: "image",
    id: "icn-taxi-t2",
    src: icnTaxiTerminal2,
    alt: "Incheon Airport Terminal 2 taxi boarding area",
  },
];

const ICN_SUBWAY_BLOCKS: readonly TransportBlock[] = [
  { kind: "heading", id: "icn-subway-title", title: "By Subway" },
  {
    kind: "table",
    id: "icn-subway-fare",
    columns: ["Travel Time", "Fare"],
    rows: [["Approx. 1 hour 30 min", "KRW 5,050"]],
  },
  { kind: "note", id: "icn-subway-exit", text: EXIT_NOTE },
  {
    kind: "image",
    id: "icn-subway-route",
    src: icnSubwayRoute,
    alt: "Subway route from Incheon Airport to Euljiro 1-ga Station",
  },
];

const GMP_TAXI_BLOCKS: readonly TransportBlock[] = [
  { kind: "heading", id: "gmp-taxi-title", title: "Taxi" },
  {
    kind: "table",
    id: "gmp-taxi-fare",
    columns: ["Duration", "Fare"],
    rows: [["Approx. 50 min", "KRW 30,000 ~ KRW 40,000"]],
  },
  {
    kind: "note",
    id: "gmp-taxi-note",
    text: "Please refer to the additional information on the following website.",
  },
  {
    kind: "link",
    id: "gmp-taxi-link",
    label: CLICK_HERE_LABEL,
    href: GMP_TAXI_URL,
  },
  {
    kind: "heading",
    id: "gmp-taxi-platform-title",
    title: "Taxi platforms in International terminal",
  },
  {
    kind: "image",
    id: "gmp-taxi-platform",
    src: gmpTaxiPlatform,
    alt: "Gimpo Airport international terminal taxi platform",
  },
];

const GMP_SUBWAY_BLOCKS: readonly TransportBlock[] = [
  { kind: "heading", id: "gmp-subway-title", title: "By Subway" },
  {
    kind: "table",
    id: "gmp-subway-fare",
    columns: ["Travel Time", "Fare"],
    rows: [["Approx. 1 hour", "KRW 1,600"]],
  },
  {
    kind: "note",
    id: "gmp-subway-note",
    text: "Please refer to the additional information on the following website.",
  },
  {
    kind: "link",
    id: "gmp-subway-link",
    label: CLICK_HERE_LABEL,
    href: GMP_SUBWAY_URL,
  },
  { kind: "note", id: "gmp-subway-exit", text: EXIT_NOTE },
  {
    kind: "image",
    id: "gmp-subway-route",
    src: gmpSubwayRoute,
    alt: "Subway route from Gimpo Airport to Euljiro 1-ga Station",
  },
];

export const TRANSPORT_AIRPORTS = [
  {
    id: "icn",
    label: "From ICN",
    moreInfoHref: HOTEL_LOCATION_URL,
    modes: [
      {
        id: "icn-limousine",
        label: "K Limousine Bus",
        blocks: LIMOUSINE_BLOCKS,
      },
      { id: "icn-taxi", label: "Taxi", blocks: ICN_TAXI_BLOCKS },
      { id: "icn-subway", label: "Subway", blocks: ICN_SUBWAY_BLOCKS },
    ],
  },
  {
    id: "gmp",
    label: "From GMP",
    moreInfoHref: HOTEL_LOCATION_URL,
    modes: [
      { id: "gmp-taxi", label: "Taxi", blocks: GMP_TAXI_BLOCKS },
      { id: "gmp-subway", label: "Subway", blocks: GMP_SUBWAY_BLOCKS },
    ],
  },
] as const satisfies readonly TransportAirport[];

export const MORE_INFO_BUTTON_LABEL = MORE_INFO_LABEL;

export function findTransportAirport(id: string): TransportAirport | null {
  return (
    TRANSPORT_AIRPORTS.find((airport) => airport.id === id) ??
    TRANSPORT_AIRPORTS[0] ??
    null
  );
}
