import {
  createDivisionGroup,
  createGroupedBlock,
  createMember,
  createRoleBlock,
  type CommitteeBlock,
} from "@/components/committee/committee-model";

export const SCIENTIFIC_BLOCKS = [
  createRoleBlock("scientific-chair", "Scientific Committee Chair", [
    createMember(
      "jun-seok-park",
      "Jun Seok Park",
      "Kyungpook National University School of Medicine",
    ),
  ]),
  createRoleBlock("scientific-secretary", "Secretary", [
    createMember(
      "seung-yoon-yang",
      "Seung Yoon Yang",
      "Yonsei University College of Medicine",
    ),
  ]),
  createGroupedBlock("members", "Members", [
    createDivisionGroup("endocrine-breast", "Endocrine/ Breast", [
      createMember(
        "ji-young-yoo",
        "Ji Young Yoo",
        "Korea University College of Medicine",
      ),
      createMember(
        "hee-jun-choi",
        "Hee Jun Choi",
        "Sungkyunkwan University School of Medicine",
      ),
      createMember(
        "da-won-park",
        "Da Won Park",
        "Korea University College of Medicine",
      ),
      createMember(
        "woo-chul-kim",
        "Woo Chul Kim",
        "Seoul National University College of Medicine",
      ),
    ]),
    createDivisionGroup("colorectal", "Colorectal", [
      createMember(
        "bong-hyeon-kye",
        "Bong Hyeon Kye",
        "The Catholic University of Korea College of Medicine",
      ),
      createMember(
        "ji-seon-kim",
        "Ji Seon Kim",
        "Korea University College of Medicine",
      ),
      createMember(
        "sun-jung-kim",
        "Sun Jung Kim",
        "Ajou University School of Medicine",
      ),
      createMember(
        "eun-ji-park",
        "Eun Ji Park",
        "Kyung Hee University College of Medicine",
      ),
      createMember(
        "kyung-tae-noh",
        "Kyung Tae Noh",
        "Ewha Womans University College of Medicine",
      ),
      createMember(
        "seung-ho-song",
        "Seung Ho Song",
        "Kyungpook National University School of Medicine",
      ),
      createMember(
        "byung-kwan-park",
        "Byung Kwan Park",
        "Chung-Ang University College of Medicine",
      ),
      createMember(
        "hong-min-ahn",
        "Hong Min Ahn",
        "Seoul National University College of Medicine",
      ),
      createMember(
        "ji-yeon-moon",
        "Ji Yeon Moon",
        "The Catholic University of Korea College of Medicine",
      ),
    ]),
    createDivisionGroup("liver", "Liver", [
      createMember(
        "hye-sung-jo",
        "Hye Sung Jo",
        "Seoul National University College of Medicine",
      ),
      createMember(
        "nareum-kim",
        "Nareum Kim",
        "Yonsei University College of Medicine",
      ),
      createMember(
        "kwang-pyo-hong",
        "Kwang Pyo Hong",
        "University of Ulsan College of Medicine",
      ),
      createMember(
        "yeon-soo-kim",
        "Yeon Soo Kim",
        "Yonsei University College of Medicine",
      ),
    ]),
    createDivisionGroup("biliary-pancreatic", "Biliary Pancreatic", [
      createMember(
        "hongbeom-kim",
        "Hongbeom Kim",
        "Sungkyunkwan University School of Medicine",
      ),
      createMember(
        "yu-jin-choi",
        "Yu Jin Choi",
        "Korea University College of Medicine",
      ),
      createMember(
        "hee-ju-sohn",
        "Hee Ju Sohn",
        "Chung-Ang University College of Medicine",
      ),
      createMember(
        "hyung-seok-kim",
        "Hyung Seok Kim",
        "Sungkyunkwan University School of Medicine",
      ),
    ]),
    createDivisionGroup("ugi", "UGI", [
      createMember(
        "chang-in-choi",
        "Chang In Choi",
        "Pusan National University School of Medicine",
      ),
      createMember(
        "tae-han-kim",
        "Tae Han Kim",
        "Seoul National University College of Medicine",
      ),
      createMember(
        "jae-hoon-jung",
        "Jae Hoon Jung",
        "Pusan National University School of Medicine",
      ),
      createMember(
        "sung-hyun-park",
        "Sung Hyun Park",
        "Yonsei University College of Medicine",
      ),
    ]),
    createDivisionGroup("pediatric", "Pediatric", [
      createMember(
        "chaeyoun-oh",
        "Chaeyoun Oh",
        "Korea University College of Medicine",
      ),
      createMember(
        "kyong-ihn",
        "Kyong Ihn",
        "Yonsei University College of Medicine",
      ),
      createMember(
        "hee-beom-yang",
        "Hee Beom Yang",
        "Seoul National University College of Medicine",
      ),
    ]),
    createDivisionGroup("community-hospital", "Community Hospital", [
      createMember("kidoong-kim", "Kidoong Kim", "Mark One Surgery Clinic"),
      createMember("sung-bae-lee", "Sung Bae Lee", "Incheon Sejong Hospital"),
      createMember("je-hyung-lee", "Je Hyung Lee", "Goo Hospital"),
      createMember(
        "se-yeol-oh",
        "Se Yeol Oh",
        "Korea University College of Medicine",
      ),
      createMember("sang-jin-kim", "Sang Jin Kim", "Sungmo Chukgwan Hospital"),
    ]),
  ]),
] as const satisfies readonly CommitteeBlock[];
