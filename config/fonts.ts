import localFont from "next/font/local";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  // 폰트 로더는 리터럴만 받는다. 45 920은 Pretendard Variable의 굵기 축이다.
  weight: "45 920",
  variable: "--font-pretendard",
  display: "swap",
});

// Google Fonts가 확장자 없는 주소를 주면 Next 16.3.6 빌드가 실패한다.
const roboto = localFont({
  src: [
    {
      path: "../fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const fontVariableClassName = `${pretendard.variable} ${roboto.variable}`;
