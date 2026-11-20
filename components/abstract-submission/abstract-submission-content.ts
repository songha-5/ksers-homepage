import type {
  AbstractBullet,
  AbstractStep,
  AbstractTopicGroup,
} from "@/components/abstract-submission/abstract-submission-model";

export const ABSTRACT_SUBMISSION_HEADING = "Abstract Submission";

export const ABSTRACT_JMIS_URL = "https://www.e-jmis.org/main.html";

export const ABSTRACT_SECRETARIAT_EMAIL = "ksers2027@ksers.kr";

export const ABSTRACT_SUBMISSION_DEADLINE = "January 14 (Thu), 2027";

export const ABSTRACT_ACCEPTANCE_DATE = "February 8 (Mon), 2027";

export const ABSTRACT_REGISTRATION_DATE = "March 15 (Mon), 2027";

export const ABSTRACT_VIDEO_REVIEW_TEXT =
  "Abstract under 300 words + Video under 5 min.";

export const ABSTRACT_VIDEO_AWARD_TEXT =
  "The best presenters will be awarded with prize money.";

export const ABSTRACT_VIDEO_LINKS = [
  {
    id: "physician-video",
    type: "Video",
    overview:
      "Presentation focused on techniques with your Surgery Video done by the Physician",
    videoKind: "physician",
    session:
      "Plenary Oral/ or Best Video/ or Video Presentation/ or Video-Exhibition",
  },
  {
    id: "mentor-video",
    type: "Mentor-Mentee Video",
    overview: "Surgery Video done focused on techniques with your Mentor",
    videoKind: "mentor",
    session:
      "Mentor-Mentee Video/ or Video Presentation/ or Video-Exhibition",
  },
] as const;

export const ABSTRACT_STEPS = [
  {
    id: "select",
    label: "Step 1",
    text: "Click the Abstract Submission button",
  },
  {
    id: "login",
    label: "Step 2",
    text: "Sign up or Log in",
  },
  {
    id: "author",
    label: "Step 3",
    text: "Fill out Participant Info and Click “Add”",
  },
  {
    id: "write",
    label: "Step 4",
    text: "Complete Abstract Submission and Author Info Section",
  },
  {
    id: "save",
    label: "Step 5",
    text: `Save and Review until\n${ABSTRACT_SUBMISSION_DEADLINE}`,
  },
] as const satisfies readonly AbstractStep[];

export const ABSTRACT_TOPIC_GROUPS = [
  {
    id: "topics-1",
    topics: [
      { id: "upper-gi", number: "1", name: "Upper Gastrointestinal" },
      { id: "bariatric", number: "2", name: "Bariatric & Metabolic" },
      {
        id: "endocrine",
        number: "3",
        name: "Endocrine (Thyroid, Adrenal gland) & Breast",
      },
      { id: "lower-gi", number: "4", name: "Lower Gastrointestinal" },
      { id: "hernia", number: "5", name: "Hernia" },
      { id: "liver", number: "6", name: "Liver" },
    ],
  },
  {
    id: "topics-2",
    topics: [
      { id: "biliary", number: "7", name: "Biliary & Pancreas" },
      { id: "pediatric", number: "8", name: "Pediatric" },
      {
        id: "endoscopy",
        number: "9",
        name: "Surgical Endoscopy (including NOTES)",
      },
      {
        id: "innovation",
        number: "10",
        name: "New Technology & Innovation",
      },
      { id: "others", number: "11", name: "Others" },
    ],
  },
] as const satisfies readonly AbstractTopicGroup[];

export const ABSTRACT_ORAL_COLUMNS = [
  "Type",
  "Overview",
  "Abstract for Review",
  "Session to be Assigned",
  "Award",
] as const;

export const ABSTRACT_ORAL_ROWS = [
  [
    "Oral",
    "Presentation focused on conclusions and results",
    "Abstract under 300 words",
    "Plenary Oral/ or Best Oral/or Oral Presentation/ or E-Poster",
    "The best presenters will be awarded with prize money.",
  ],
] as const;

export const ABSTRACT_EPOSTER_COLUMNS = [
  "Type",
  "Abstract for Review",
  "Session to be Assigned",
  "Award",
] as const;

export const ABSTRACT_EPOSTER_ROWS = [
  [
    "E-Poster",
    "Under 300 words",
    "E-Poster",
    "The best E-posters will be awarded with prize money.",
  ],
] as const;

const MAILTO_SECRETARIAT = `mailto:${ABSTRACT_SECRETARIAT_EMAIL}`;

export const ABSTRACT_GUIDELINES: readonly AbstractBullet[] = [
  {
    id: "online-deadline",
    parts: [
      {
        id: "online-lead",
        kind: "text",
        text: "All abstracts must be submitted online prior to ",
      },
      {
        id: "online-date",
        kind: "strong",
        text: ABSTRACT_SUBMISSION_DEADLINE,
      },
    ],
  },
  {
    id: "word-limit",
    parts: [
      {
        id: "word-limit-text",
        kind: "text",
        text: "Abstracts should be no more than 300 words. (Including spaces)",
      },
    ],
  },
  {
    id: "english",
    parts: [
      {
        id: "english-text",
        kind: "text",
        text: "Abstracts must be written in clear English and presented in English.",
      },
    ],
  },
  {
    id: "edit",
    parts: [
      {
        id: "edit-text",
        kind: "text",
        text: "Authors may further edit and modify submitted abstracts until the submission deadline.",
      },
    ],
  },
  {
    id: "proofreading",
    parts: [
      {
        id: "proofreading-text",
        kind: "text",
        text: "It is the responsibility of the authors to ensure that their text (including their affiliations and departments) does not contain typos or grammatical errors.",
      },
    ],
  },
  {
    id: "registration",
    parts: [
      {
        id: "registration-lead",
        kind: "text",
        text: "Presenting authors must register for the congress through the website before ",
      },
      {
        id: "registration-date",
        kind: "strong",
        text: ABSTRACT_REGISTRATION_DATE,
      },
    ],
  },
  {
    id: "email-notice",
    parts: [
      {
        id: "email-notice-lead",
        kind: "text",
        text: "The e-mail you provided us will be used to notify you of the acceptance status and to send you updates. If you have any inquiries, please contact the secretariat at ",
      },
      {
        id: "email-notice-link",
        kind: "link",
        text: ABSTRACT_SECRETARIAT_EMAIL,
        href: MAILTO_SECRETARIAT,
      },
      { id: "email-notice-end", kind: "text", text: "." },
    ],
  },
];

export const ABSTRACT_ACCEPTANCE_NOTES: readonly AbstractBullet[] = [
  {
    id: "review",
    parts: [
      {
        id: "review-text",
        kind: "text",
        text: "All submitted abstracts will be reviewed by the Scientific Committee according to standard review procedures.",
      },
    ],
  },
  {
    id: "notice-date",
    parts: [
      {
        id: "notice-lead",
        kind: "text",
        text: "Notification of acceptance will be sent by e-mail to corresponding, presenting and abstract submitting authors by ",
      },
      {
        id: "notice-date-value",
        kind: "strong",
        text: ABSTRACT_ACCEPTANCE_DATE,
      },
    ],
  },
];

export const ABSTRACT_WITHDRAWAL_NOTES: readonly AbstractBullet[] = [
  {
    id: "auto-withdraw",
    parts: [
      {
        id: "auto-withdraw-text",
        kind: "text",
        text: "If the presenting author of an accepted abstract does not register by the pre-registration date, the abstract will be automatically withdrawn from the final program.",
      },
    ],
  },
  {
    id: "withdraw-mail",
    parts: [
      {
        id: "withdraw-lead",
        kind: "text",
        text: "If you would like to withdraw an abstract, please notify the secretariat (Email: ",
      },
      {
        id: "withdraw-link",
        kind: "link",
        text: ABSTRACT_SECRETARIAT_EMAIL,
        href: MAILTO_SECRETARIAT,
      },
      {
        id: "withdraw-end",
        kind: "text",
        text: ") in writing as soon as possible.",
      },
    ],
  },
];
