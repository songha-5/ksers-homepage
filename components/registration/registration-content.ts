export const REGISTRATION_HEADING = "Registration";

export const REGISTRATION_EMAIL = "ksers2027@ksers.kr";

export const REGISTRATION_DOCUMENT_URL =
  "https://www.dropbox.com/request/68vhG2xKaAcZTcYYrlNB";

export const REGISTRATION_GROUP_FORM_URL =
  "https://www.ksers.org/data/KSERS2026_groupregi_pre%20(Kor).xlsx";

export const REGISTRATION_STEPS = [
  { id: "sign-up", label: "Step 1", text: "Sign Up" },
  { id: "online", label: "Step 2", text: "Online Registration" },
  { id: "payment", label: "Step 3", text: "Payment" },
  {
    id: "letter",
    label: "Step 4",
    text: "Receive the confirmation letter",
  },
  { id: "complete", label: "Step 5", text: "Complete" },
] as const;

export const EARLY_BIRD_DEADLINE = "February 28 (Sun), 2027 (KST)";

export const PRE_REGISTRATION_DEADLINE = "April 11 (Sun), 2027 (KST)";

export const FEE_PERIODS = [
  { id: "early", label: "Early-bird Registration (by February 28)" },
  { id: "pre", label: "Pre Registration (by April 11)" },
  { id: "onsite", label: "On-site Registration (April 22-24)" },
] as const;

export const PHYSICIAN_CATEGORY = "Physician / Fellow(전문의)";

export const PHYSICIAN_FEES = [
  {
    id: "lifetime",
    label: "KSERS Lifetime Member(평생회원)",
    domestic: ["250,000", "300,000", "400,000"],
  },
  {
    id: "regular",
    label: "KSERS Regular Member(정회원)",
    domestic: ["270,000", "320,000", "420,000"],
  },
  {
    id: "non-member",
    label: "Non Member(비회원)",
    domestic: ["300,000", "350,000", "450,000"],
  },
] as const;

export const OVERSEAS_PHYSICIAN_FEES = ["USD 200", "USD 300", "USD 400"] as const;

export const TRAINEE_LABEL =
  "Foreign Trainee in Korea\nResident, Trainee\n(전공의, 군의관, 공보의)";

export const TRAINEE_FEES = [
  "120,000",
  "USD 120",
  "140,000",
  "USD 160",
  "170,000",
  "USD 170",
] as const;

export const FREE_FEE_ROWS = [
  {
    id: "student",
    label: "Student, Nurse (학생, 간호사)",
    note: "무료 (국내에 해당)",
  },
  {
    id: "senior",
    label: "KSERS 65세 이상 평생회원",
    note: "무료 (국내에 해당)",
  },
  {
    id: "gala",
    label: "Gala Dinner",
    note: "Individual: KRW 70,000/ USD 70\nGroup Discount: KRW 50,000/ USD 50",
  },
] as const;

export const ONLINE_PAYMENT_NOTES = [
  {
    id: "card",
    text: "Payment by credit card is available through the online registration and onsite payment.",
  },
  {
    id: "brands",
    text: "The following credit cards will be accepted: VISA, MasterCard, and JCB.",
  },
] as const;

export const OVERSEAS_BANK_ROWS = [
  { id: "bank-name", label: "Bank Name", value: "KEB Hana Bank" },
  { id: "account-no", label: "Account No", value: "576-910013-04605" },
  {
    id: "holder",
    label: "Account Holder",
    value: "The Korean Society of Endo-Laparoscopic & Robotic Surgery",
  },
  { id: "swift", label: "Swift Code", value: "KOEXKRSE" },
  {
    id: "address",
    label: "Bank Address",
    value: "73 Inchon-ro, Seongbuk-gu, Seoul 136-705, Korea",
  },
  { id: "branch", label: "Branch", value: "Korea University Seoul Branch" },
] as const;

export const DOMESTIC_BANK_ROWS = [
  { id: "bank-name", label: "은행명", value: "KEB하나은행" },
  { id: "holder", label: "예금주", value: "대한내시경로봇외과학회" },
  { id: "account-no", label: "계좌번호", value: "576-910013-04605" },
] as const;

export const REFUND_COLUMNS = ["Date", "Portion to be Refunded"] as const;

export const REFUND_ROWS = [
  ["By March 31 (Wed), 2027", "Full Refund"],
  ["From April 1 (Thu), 2027", "No Refund"],
] as const;
