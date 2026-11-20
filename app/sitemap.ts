import type { MetadataRoute } from "next";

/** 검색 제출용 정식 주소. 로그인·마이페이지는 reg.ksers.kr 이라 넣지 않는다. */
const SITE_ORIGIN = "https://ksers.kr";

const SITEMAP_PATHS = [
  "/2027",
  "/2027/en/welcome",
  "/2027/en/overview",
  "/2027/en/committee",
  "/2027/en/congress",
  "/2027/en/related-events",
  "/2027/en/glance",
  "/2027/en/master-class",
  "/2027/en/site-visiting",
  "/2027/en/scientific-program",
  "/2027/en/endoscopy",
  "/2027/en/training",
  "/2027/en/social-event",
  "/2027/en/event",
  "/2027/en/submission",
  "/2027/en/award",
  "/2027/en/grants",
  "/2027/kr/research-grant",
  "/2027/en/guidelines",
  "/2027/en/registration",
  "/2027/en/visa",
  "/2027/en/sponsorship-oppt",
  "/2027/en/our-sponsors",
  "/2027/en/venue",
  "/2027/en/accommodation",
  "/2027/en/transportation",
  "/2027/en/news",
  "/2027/en/photo-gallery",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: `${SITE_ORIGIN}${path}`,
  }));
}
