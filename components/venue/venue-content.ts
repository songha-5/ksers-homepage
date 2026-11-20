export interface MapPosition {
  readonly lat: number;
  readonly lng: number;
}

export interface VenueSectionContent {
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

export const VENUE_HEADING = "Venue";

export const VENUE_MAP_ADDRESS =
  "The Grand Lotte Seoul, 30 Eulji-ro, Jung District, Seoul, South Korea";

export const VENUE_MAP_TITLE = "KSERS 2027 Venue";

export const VENUE_MAP_CLASS_NAME =
  "h-[320px] w-full border-0 min-[1100px]:h-[480px]";

/** 주소 지오코딩이 끝나기 전, 같은 블록의 대략적인 중심이다. */
export const VENUE_MAP_FALLBACK_POSITION: MapPosition = {
  lat: 37.5652278,
  lng: 126.9806285,
};

// 주석: 수정필요. 소개 문구는 DB 내용으로 교체한다.
export const VENUE_SECTIONS = [
  {
    id: "hotel",
    title: "Venue: Lotte Hotel Seoul, Korea",
    body: "LOTTE HOTEL SEOUL, Korea's premier luxury business hotel, is located in the center of Seoul. The hotel's optimal location makes it easily accessible from Seoul's major sightseeing spots such as Myeong-dong, Euljiro, and Cheonggyecheon.",
  },
  {
    id: "seoul",
    title: "Trendy and Historic Seoul",
    body: "The capital, Seoul, has a rich history of over 600 years of culture and tradition but is also an exciting futuristic city featuring the latest state-of-the-art technology. You can enjoy Historical Legacies, Dynamic Cityscapes and Exquisite Cuisine!",
  },
] as const satisfies readonly VenueSectionContent[];
