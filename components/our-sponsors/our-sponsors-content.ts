import bbraunLogo from "@/images/logo_bbraun.png";
import gcBiopharmaLogo from "@/images/logo_gcbiopharma.png";
import hanmiScienceLogo from "@/images/logo_hanmiscience.png";
import intuitiveLogo from "@/images/logo_intuitive.png";
import jnjMedTechLogo from "@/images/logo_jnjmedtech.png";
import jwLifeScienceLogo from "@/images/logo_jw-lifescience.png";
import kyongboPharmLogo from "@/images/logo_kbpharma.png";
import livsmedLogo from "@/images/logo_livsmed.png";
import medtronicLogo from "@/images/logo_medtronic.png";
import olympusLogo from "@/images/logo_olympus.png";
import meerecompanyLogo from "@/images/logo_revosurgical.png";
import { ANGEL_SPONSORS } from "@/components/our-sponsors/angel-sponsors";
import type { SponsorTier } from "@/components/our-sponsors/sponsor-model";

export type {
  SponsorLogo,
  SponsorTier,
} from "@/components/our-sponsors/sponsor-model";

export const OUR_SPONSORS_HEADING = "Our Sponsors";

/**
 * 등급과 링크 순서는 KSERS 2026 Our Sponsors 페이지를 따른다.
 * https://www.ksers.org/sub05_02.php
 */
export const SPONSOR_TIERS = [
  {
    id: "diamond",
    title: "Diamond",
    sponsors: [
      {
        id: "diamond-intuitive",
        name: "Intuitive",
        href: "https://www.intuitive.com/ko-kr",
        image: intuitiveLogo,
      },
    ],
  },
  {
    id: "platinum",
    title: "Platinum",
    sponsors: [
      {
        id: "platinum-medtronic",
        name: "Medtronic",
        href: "https://www.medtronic.com/en-us/healthcare-professionals/specialties/surgical-robotics/robotic-assisted-surgery.html",
        image: medtronicLogo,
      },
    ],
  },
  {
    id: "gold",
    title: "Gold",
    sponsors: [
      {
        id: "gold-livsmed",
        name: "LivsMed",
        href: "https://www.livsmed.com/",
        image: livsmedLogo,
      },
      {
        id: "gold-hanmi-science",
        name: "Hanmi Science",
        href: "https://hanmiscience.co.kr/",
        image: hanmiScienceLogo,
      },
      {
        id: "gold-jnj-medtech",
        name: "Johnson & Johnson MedTech",
        href: "https://www.jnjmedtech.com/ko-KR",
        image: jnjMedTechLogo,
      },
      {
        id: "gold-olympus",
        name: "Olympus",
        href: "https://www.olympus.co.kr/Company",
        image: olympusLogo,
      },
    ],
  },
  {
    id: "silver",
    title: "Silver",
    sponsors: [
      {
        id: "silver-gc-biopharma",
        name: "GC Biopharma",
        href: "https://www.gcbiopharma.com/kor/index.do",
        image: gcBiopharmaLogo,
      },
      {
        id: "silver-kyongbo-pharm",
        name: "Kyongbo Pharm",
        href: "https://www.kbpharma.co.kr/",
        image: kyongboPharmLogo,
      },
    ],
  },
  {
    id: "bronze",
    title: "Bronze",
    sponsors: [
      {
        id: "bronze-bbraun",
        name: "B. Braun",
        href: "https://www.bbraun.co.kr/",
        image: bbraunLogo,
      },
      {
        id: "bronze-meerecompany",
        name: "meerecompany",
        href: "http://www.revosurgical.com/",
        image: meerecompanyLogo,
      },
      {
        id: "bronze-jw-life-science",
        name: "JW Life Science",
        href: "https://www.jw-lifescience.co.kr/",
        image: jwLifeScienceLogo,
      },
    ],
  },
  {
    id: "angel",
    title: "Angel",
    sponsors: ANGEL_SPONSORS,
  },
] as const satisfies readonly SponsorTier[];
