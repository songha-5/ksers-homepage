import type { SiteVisitingCenter } from "@/components/site-visiting/site-visiting-model";

export const SITE_VISITING_CENTERS_EARLY: readonly SiteVisitingCenter[] = [
  {
    id: "ajou-ugi",
    title: "1. Ajou University Hospital (UGI)",
    department: "Division of Gastrointestinal Surgery",
    personCount: "1",
    accommodation: "O (Dormitory)",
    homepage:
      "https://hosp.ajoumc.or.kr/en/hospital/deptView.do?deptCd=GIS&deptNo=100",
    content: [
      "Specialized fields: Surgery for Gastric cancer, Gastrointestinal tumor, Gastroesophageal reflux disease, Hernia, and Obesity",
    ],
  },
  {
    id: "asan-ugi",
    title: "2. Asan Medical Center (UGI)",
    department: "Department of Gastrointestinal Surgery",
    personCount: "4",
    accommodation: "X",
    homepage: "https://eng.amc.seoul.kr/gb/lang/main.do",
    content: [
      "Minimally invasive surgery",
      "Gastric cancer surgery",
      "Laparoscopic gastrectomy",
      "Robotic gastrectomy",
    ],
  },
  {
    id: "ewha-breast",
    title: "3. Ewha Womans University Seoul Hospital",
    department: "General Surgery (breast)",
    personCount: "2",
    accommodation: "O (Twin room - shared by two participants)",
    homepage: "https://seoul.eumc.ac.kr/eng/main.do",
    content: [
      "First day, visit the hospital to tour the hospital and observe the outpatient clinic, participation in ward rounding.",
      "Second day, visit the operation room and observe the surgery including the minimal invasive breast and thyroid surgery (endo and/or roboti-assisted breast surgery, robotic thyroid surgery) using Davinci Xi or SP.",
    ],
  },
  {
    id: "korea-anam-cr",
    title: "5. Korea University Anam Hospital (CR)",
    department: "Department of Colorectal Surgery",
    personCount: "4",
    accommodation: "X",
    homepage: "https://anam.kumc.or.kr/en/index.do",
    content: ["To be Updated"],
  },
  {
    id: "pusan-yangsan",
    title: "6. Pusan National University Yangsan Hospital",
    department: "Department of Surgery",
    personCount: "3",
    accommodation: "O",
    homepage: "https://english.pnuyh.or.kr/english/index.do",
    content: [
      "1. Observation for MIS of Gastric Cancer",
      "- Conventional/Reduced-port laparoscopic gastrectomy",
      "- Conventional/Reduced-port robotic gastrectomy (Xi, SP, DV5)",
      "- Navigation-guided robotic gastrectomy with RUS system",
      "2. Observation for MIS of Thyroid Cancer",
      "- Bilateral Axillo-Breast Approach robotic thyroidectomy",
      "- Transoral Robotic Thyroidectomy",
      "- Single Port Robotic Areolar approach",
      "3. Observation for MIS of Colorectal Cancer",
      "- Single-port robotic anterior resection",
      "- Conventional/Reduced-port laparoscopic colectomy",
      "- Fluorescent image-guided colorectal cancer surgery",
    ],
  },
];
