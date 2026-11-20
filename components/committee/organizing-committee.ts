import {
  createMember,
  createRoleBlock,
  type CommitteeBlock,
} from "@/components/committee/committee-model";

export const ORGANIZING_BLOCKS = [
  createRoleBlock("president", "President", [
    createMember(
      "ryu-seong-yeob",
      "Ryu Seong-yeob",
      "Chosun University College of Medicine",
    ),
  ]),
  createRoleBlock("first-vice-president", "1st Vice President", [
    createMember(
      "lee-gil-yeon",
      "Lee Gil-yeon",
      "Kyung Hee University College of Medicine",
    ),
  ]),
  createRoleBlock("second-vice-president", "2nd Vice President", [
    createMember("kim-ji-heon", "Kim Ji-heon", "Wellness Hospital"),
  ]),
  createRoleBlock("chairman", "Chairman of the Board of Directors", [
    createMember("kim-jin", "Kim Jin", "Korea University College of Medicine"),
  ]),
  createRoleBlock("educational", "Director of the Educational Committee", [
    createMember(
      "kim-yu-min",
      "Kim Yu-min",
      "Yonsei University College of Medicine",
    ),
  ]),
  createRoleBlock("international", "Directors of the International Committee", [
    createMember(
      "min-jae-seok",
      "Min Jae-seok",
      "Korea University College of Medicine",
    ),
  ]),
  createRoleBlock("planning", "Director of the Planning Committee", [
    createMember(
      "yoon-yu-seok",
      "Yoon Yu-seok",
      "Seoul National University College of Medicine",
    ),
  ]),
  createRoleBlock("endoscopy", "Director of the Endoscopy Committee", [
    createMember(
      "roh-seung-jae",
      "Roh Seung-jae",
      "Konyang University College of Medicine",
    ),
    createMember(
      "lee-han-hong",
      "Lee Han-hong",
      "The Catholic University College of Medicine",
    ),
  ]),
  createRoleBlock("external-affair", "Director of External Affair Committee", [
    createMember(
      "kwak-jeong-myeon",
      "Kwak Jeong-myeon",
      "Korea University College of Medicine",
    ),
  ]),
  createRoleBlock("legislation", "Director of the Legislation Committee", [
    createMember(
      "jeong-sang-ho",
      "Jeong Sang-ho",
      "Gyeongsang National University College of Medicine",
    ),
  ]),
  createRoleBlock(
    "medical-insurance",
    "Director of the Medical Insurance Committee",
    [
      createMember(
        "choi-seong-il",
        "Choi Seong-il",
        "Kyung Hee University College of Medicine",
      ),
    ],
  ),
  createRoleBlock(
    "laparoscopic-authentication",
    "Director of the Promotion of laparoscopic authentication",
    [
      createMember(
        "lee-sang-eok",
        "Lee Sang-eok",
        "Konyang University College of Medicine",
      ),
    ],
  ),
  createRoleBlock(
    "new-technology",
    "Director of the New Technology Committee",
    [
      createMember(
        "kim-hyeong-il",
        "Kim Hyeong-il",
        "Yonsei University College of Medicine",
      ),
    ],
  ),
  createRoleBlock("research", "Director of the Research Committee", [
    createMember(
      "choi-ki-hong",
      "Choi Ki-hong",
      "Yonsei University College of Medicine",
    ),
  ]),
  createRoleBlock("ethics", "Director of the Ethics Committee", [
    createMember(
      "lee-ji-yeon",
      "Lee Ji-yeon",
      "Kyungpook National University School of Medicine",
    ),
  ]),
  createRoleBlock(
    "medical-review",
    "Director of the Medical Review Committee",
    [
      createMember(
        "kim-dong-jin",
        "Kim Dong-jin",
        "The Catholic University College of Medicine",
      ),
    ],
  ),
  createRoleBlock(
    "secondary-hospital",
    "Director of the Secondary Hospital Collaboration Committee",
    [
      createMember(
        "lee-tae-soon",
        "Lee Tae-soon",
        "Daegu Dream General Hospital",
      ),
    ],
  ),
  createRoleBlock("finance", "Director of the Finance Committee", [
    createMember(
      "park-jung-min",
      "Park Jung-min",
      "Chung-Ang University College of Medicine",
    ),
  ]),
  createRoleBlock("information", "Director of the Information Committee", [
    createMember(
      "choi-sae-byeol",
      "Choi Sae-byeol",
      "Korea University College of Medicine",
    ),
  ]),
  createRoleBlock("editorial", "Director of the Editorial Committee", [
    createMember(
      "park-seon-jin",
      "Park Seon-jin",
      "Kyung Hee University College of Medicine",
    ),
  ]),
  createRoleBlock("academic", "Director of the Academic Committee", [
    createMember(
      "park-jun-seok",
      "Park Jun-seok",
      "Kyungpook National University School of Medicine",
    ),
  ]),
  createRoleBlock(
    "public-relation",
    "Director of the Public Relation Committee",
    [
      createMember(
        "lee-cho-rok",
        "Lee Cho-rok",
        "Yonsei University College of Medicine",
      ),
    ],
  ),
  createRoleBlock("publication", "Director of the Publication Committee", [
    createMember(
      "kim-ji-hoon",
      "Kim Ji-hoon",
      "The Catholic University College of Medicine",
    ),
  ]),
  createRoleBlock("ai-surgery", "AI Surgery Task Force", [
    createMember(
      "kim-hyeong-il-ai",
      "Kim Hyeong-il",
      "Yonsei University College of Medicine",
    ),
  ]),
  createRoleBlock("surgical-future", "Surgical Future Planning Task Force", [
    createMember(
      "kwak-jeong-myeon-future",
      "Kwak Jeong-myeon",
      "Korea University College of Medicine",
    ),
  ]),
  createRoleBlock("special-duty", "Special Duty Committee", [
    createMember(
      "lee-min-woo",
      "Lee Min-woo",
      "Korea University College of Medicine",
    ),
    createMember(
      "ko-yang-seok",
      "Ko Yang-seok",
      "Chonnam National University Medical School",
    ),
    createMember(
      "min-byung-so",
      "Min Byung-so",
      "Yonsei University College of Medicine, Severance Hospital",
    ),
    createMember(
      "lee-kyu-eon",
      "Lee Kyu-eon",
      "Seoul National University College of Medicine",
    ),
    createMember(
      "lee-yun-seok",
      "Lee Yun-seok",
      "The Catholic University College of Medicine",
    ),
    createMember("son-dae-kyung", "Son Dae-kyung", "National Cancer Center"),
    createMember(
      "han-in-woong",
      "Han In-woong",
      "Sungkyunkwan University School of Medicine",
    ),
    createMember(
      "park-young-mok",
      "Park Young-mok",
      "Pusan National University School of Medicine",
    ),
    createMember(
      "kim-jong-han",
      "Kim Jong-han",
      "Korea University College of Medicine",
    ),
  ]),
  createRoleBlock("secretary-general", "Secretary General", [
    createMember(
      "ji-woong-bae",
      "Ji Woong-bae",
      "Korea University College of Medicine",
    ),
  ]),
  createRoleBlock("deputy-secretary", "Deputy Secretary General", [
    createMember(
      "jeong-jun-seong",
      "Jeong Jun-seong",
      "Chonnam National University Medical School",
    ),
    createMember(
      "seo-won-jun",
      "Seo Won-jun",
      "Korea University College of Medicine",
    ),
    createMember(
      "hong-seok-gyun",
      "Hong Seok-gyun",
      "Seoul National University College of Medicine",
    ),
    createMember(
      "park-da-won",
      "Park Da-won",
      "Korea University College of Medicine",
    ),
  ]),
  createRoleBlock("auditor", "Auditor", [
    createMember(
      "moon-ju-ik",
      "Moon Ju-ik",
      "Konyang University College of Medicine",
    ),
    createMember(
      "kang-sang-wook",
      "Kang Sang-wook",
      "Yonsei University College of Medicine",
    ),
  ]),
] as const satisfies readonly CommitteeBlock[];
