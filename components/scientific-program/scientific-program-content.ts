import {
  createSession,
  createSpeaker,
  type ScientificProgramPage,
} from "@/components/scientific-program/scientific-program-model";

export const LOCAL_SCIENTIFIC_PROGRAM: ScientificProgramPage = {
  heading: "Scientific Program",
  categories: [
  {
    id: "keynote-lecture",
    label: "Keynote Lecture",
    sessions: [
    createSession({
      id: "keynote",
      title: "[Keynote Lecture]",
      dateTime: "4/22 (Thu), 11:40-12:10",
      // 주석: 수정필요. 연자 데이터는 조회 연동 후 이 예시를 교체한다.
      speakers: [
        createSpeaker({
          id: "keynote-1",
          badge: "Keynote",
          talkTitle: "Where robotic surgery is heading",
          name: "Alex Kim",
          affiliation: "KSERS",
          description: "Opening keynote on the next decade of robotic surgery.",
          cvUrl: "/KSERS_LOGO.pdf",
          abstractUrl: "/KSERS2026_Poster.pdf",
        }),
        createSpeaker({
          id: "keynote-2",
          talkTitle: "Building a training pathway",
          name: "Jordan Lee",
          affiliation: "University Hospital",
          description: "How a keynote program can shape surgical training.",
          cvUrl: "/KSERS_LOGO.pdf",
        }),
        createSpeaker({
          id: "keynote-3",
          talkTitle: "What the operating room will look like",
          name: "Morgan Park",
          affiliation: "Congress Faculty",
          abstractUrl: "/KSERS2026_Poster.pdf",
        }),
      ],
    }),
    ],
  },
  {
    id: "presidential",
    label: "KSERS Presidential Lecture",
    sessions: [
    createSession({
      id: "presidential",
      title: "[KSERS Presidential Lecture]",
      dateTime: "4/23 (Fri), 10:40-11:10",
      chairs: ["Seong Yeob Ryu (Chosun University College of Medicine, Korea)"],
    }),
    ],
  },
  {
    id: "co-symposium",
    label: "Co-Symposium",
    sessions: [
    createSession({ id: "cs01", title: "[CS01] Co-Symposium 1", dateTime: "4/22 (Thu), 13:00-14:20" }),
    createSession({
      id: "cs02",
      title: "[CS02] Co-Symposium 2",
      dateTime: "4/23 (Fri), 13:00-14:20",
      chairs: [
        "Woo Jung Lee (Jeil ENT Clinic, Korea)",
        "Suk-Hwan Lee (Kyung Hee University College of Medicine, Korea)",
      ],
    }),
    createSession({ id: "cs03", title: "[CS03] Symposium 12", dateTime: "4/24 (Sat), 08:30-10:00" }),
    createSession({ id: "cs04", title: "[CS04] Co-Symposium 3", dateTime: "4/24 (Sat), 10:20-11:50" }),
    ],
  },
  {
    id: "joint-session",
    label: "Joint Session",
    sessions: [
    createSession({ id: "js01", title: "[JS01] KSERS - SAGES Joint Symposium", dateTime: "4/22 (Thu), 09:50-11:00" }),
    createSession({ id: "js02", title: "[JS02] KSERS - EAES Joint Symposium", dateTime: "4/23 (Fri), 09:10-10:20" }),
    createSession({ id: "js03", title: "[JS03] KSERS - AMASI Joint Symposium", dateTime: "4/23 (Fri), 16:10-17:30" }),
    createSession({ id: "js04", title: "[JS04] KSERS - JSES Joint Symposium", dateTime: "4/24 (Sat), 08:30-10:00" }),
    createSession({ id: "js05", title: "[JS05] KSERS - PALES Joint Symposium", dateTime: "4/24 (Sat), 10:20-11:50" }),
    ],
  },
  {
    id: "symposium",
    label: "Symposium",
    sessions: [
    createSession({ id: "sy01", title: "[SY01] Symposium 01", dateTime: "4/22 (Thu), 09:50-11:00" }),
    createSession({ id: "sy02", title: "[SY02] Symposium 02", dateTime: "4/22 (Thu), 09:50-11:00" }),
    createSession({ id: "sy03", title: "[SY03] Symposium 03", dateTime: "4/22 (Thu), 09:50-11:00" }),
    createSession({ id: "sy04", title: "[SY04] Symposium 04", dateTime: "4/22 (Thu), 09:50-11:00" }),
    createSession({ id: "sy05", title: "[SY05] Symposium 05", dateTime: "4/23 (Fri), 09:10-10:20" }),
    createSession({ id: "sy06", title: "[SY06] Symposium 06", dateTime: "4/23 (Fri), 09:10-10:20" }),
    createSession({ id: "sy07", title: "[SY07] Symposium 07", dateTime: "4/23 (Fri), 09:10-10:20" }),
    createSession({ id: "sy08", title: "[SY08] Symposium 08", dateTime: "4/23 (Fri), 09:10-10:20" }),
    createSession({ id: "sy09", title: "[SY09] Symposium 9", dateTime: "4/23 (Fri), 16:10-17:30" }),
    createSession({ id: "sy10", title: "[SY10] Symposium 10", dateTime: "4/23 (Fri), 16:10-17:30" }),
    createSession({ id: "sy11", title: "[SY11] Symposium 11", dateTime: "4/24 (Sat), 08:30-10:00" }),
    createSession({ id: "sy12", title: "[SY12] Symposium 12", dateTime: "4/24 (Sat), 10:20-11:50" }),
    createSession({ id: "sy13", title: "[SY13] Symposium 13", dateTime: "4/24 (Sat), 10:20-11:50" }),
    ],
  },
  {
    id: "master-video",
    label: "Master Video",
    sessions: [
    createSession({ id: "mv01", title: "[MV01] Master Video Session 1", dateTime: "4/22 (Thu), 15:00-16:00" }),
    createSession({ id: "mv02", title: "[MV02] Master Video Session 2", dateTime: "4/22 (Thu), 15:00-16:00" }),
    createSession({ id: "mv03", title: "[MV03] Master Video Session 3", dateTime: "4/22 (Thu), 15:00-16:00" }),
    createSession({ id: "mv04", title: "[MV04] Master Video Session 4", dateTime: "4/22 (Thu), 15:00-16:00" }),
    createSession({ id: "mv05", title: "[MV05] Master Video Session 5", dateTime: "4/22 (Thu), 15:00-16:00" }),
    ],
  },
  {
    id: "video-presentation",
    label: "Video Presentation",
    sessions: [
    createSession({ id: "vp01", title: "[VP01] Video Presentation 1", dateTime: "4/22 (Thu), 08:30-09:30" }),
    createSession({ id: "vp02", title: "[VP02] Video Presentation 2", dateTime: "4/22 (Thu), 08:30-09:30" }),
    createSession({ id: "vp03", title: "[VP03] Video Presentation 3", dateTime: "4/22 (Thu), 08:30-09:30" }),
    createSession({ id: "vp04", title: "[VP04] Video Presentation 4", dateTime: "4/22 (Thu), 08:30-09:30" }),
    createSession({ id: "vp05", title: "[VP05] Video Presentation 5", dateTime: "4/22 (Thu), 08:30-09:30" }),
    ],
  },
  {
    id: "oral-presentation",
    label: "Oral Presentation",
    sessions: [
    createSession({ id: "op01", title: "[OP01] Oral Presentation 1", dateTime: "4/22 (Thu), 16:10-17:30" }),
    createSession({ id: "op02", title: "[OP02] Oral Presentation 2", dateTime: "4/22 (Thu), 16:10-17:30" }),
    createSession({ id: "op03", title: "[OP03] Oral Presentation 3", dateTime: "4/22 (Thu), 16:10-17:30" }),
    createSession({ id: "op04", title: "[OP04] Oral Presentation 4", dateTime: "4/22 (Thu), 16:10-17:30" }),
    createSession({ id: "op05", title: "[OP05] Oral Presentation 5", dateTime: "4/22 (Thu), 16:10-17:30" }),
    createSession({ id: "op06", title: "[OP06] Oral Presentation 6", dateTime: "4/23 (Fri), 08:00-09:00" }),
    createSession({ id: "op07", title: "[OP07] Oral Presentation 7", dateTime: "4/23 (Fri), 08:00-09:00" }),
    createSession({ id: "op08", title: "[OP08] Oral Presentation 8", dateTime: "4/23 (Fri), 08:00-09:00" }),
    createSession({ id: "op09", title: "[OP09] Oral Presentation 9", dateTime: "4/23 (Fri), 08:00-09:00" }),
    createSession({ id: "op10", title: "[OP10] Oral Presentation 10", dateTime: "4/23 (Fri), 08:00-09:00" }),
    ],
  },
  {
    id: "plenary-oral",
    label: "Plenary Oral",
    sessions: [
    createSession({ id: "ps01", title: "[PS01] Plenary Oral Session", dateTime: "4/24 (Sat), 08:30-10:00" }),
    ],
  },
  {
    id: "best",
    label: "Best Mentor-Mentee",
    sessions: [
    createSession({ id: "mm01", title: "[MM01] Best Mentor-Mentee Award", dateTime: "4/23 (Fri), 16:10-17:30" }),
    ],
  },
  {
    id: "semi-live",
    label: "Semi-Live",
    sessions: [
    createSession({ id: "sl01", title: "[SL01] Semi-Live Session 1", dateTime: "4/23 (Fri), 15:00-16:00" }),
    createSession({ id: "sl02", title: "[SL02] Semi-Live Session 2", dateTime: "4/23 (Fri), 15:00-16:00" }),
    createSession({ id: "sl03", title: "[SL03] Semi-Live Session 3", dateTime: "4/23 (Fri), 15:00-16:00" }),
    createSession({ id: "sl04", title: "[SL04] Semi-Live Session 4", dateTime: "4/23 (Fri), 15:00-16:00" }),
    createSession({ id: "sl05", title: "[SL05] Semi-Live Session 5", dateTime: "4/23 (Fri), 15:00-16:00" }),
    ],
  },
  {
    id: "luncheon",
    label: "Luncheon Symposium",
    sessions: [
    createSession({ id: "ls01", title: "[LS01] Luncheon Symposium 1 (TBA)", dateTime: "4/22 (Thu), 12:10-13:00" }),
    createSession({ id: "ls02", title: "[LS02] Luncheon Symposium 2 (TBA)", dateTime: "4/22 (Thu), 12:10-13:00" }),
    createSession({ id: "ls03", title: "[LS03] Luncheon Symposium 3 (TBA)", dateTime: "4/23 (Fri), 11:40-13:00" }),
    ],
  },
  {
    id: "research-grant",
    label: "연구비 공모",
    sessions: [
    createSession({ id: "rgp", title: "[RGP] 연구비 공모 세션", dateTime: "4/23 (Fri), 16:10-17:30", language: "Kor" }),
    ],
  },
  ],
};
