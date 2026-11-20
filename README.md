# KSERS 2027

대한내시경로봇외과학회(KSERS) 2027 학술대회 홈페이지입니다. 참가자가 대회 안내, 프로그램, 초록, 등록, 후원, 장소 정보를 한곳에서 볼 수 있게 만드는 것이 목적입니다.

- 대회: KSERS 2027, The 59th Congress of KSERS & the 17th International Symposium
- 일정: 2027년 4월 22–24일
- 장소: The Grand Lotte Seoul, 30 Eulji-ro, Jung District, Seoul, South Korea
- 배포: [https://ksers.kr/2027](https://ksers.kr/2027)

## 기술 스택

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- BE 예정: railway
- Google Maps: Venue 지도

화면 문구와 표 데이터는 대부분 `components` 안의 콘텐츠 파일에 있습니다. Program at a Glance와 Scientific Program은 등록 서버의 2027 데이터가 없거나 조회가 실패하면 저장소의 내용을 보여 줍니다.

## 실행 방법

Node.js와 npm이 필요합니다. 의존성은 `package-lock.json` 기준으로 설치합니다.

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다. `/`는 `/2027`로 이동합니다.

| 명령                   | 설명                 |
| ---------------------- | -------------------- |
| `npm run dev`          | 개발 서버            |
| `npm run lint`         | ESLint               |
| `npm run format`       | Prettier로 코드 정리 |
| `npm run format:check` | 포맷 검사            |
| `npm run build`        | 프로덕션 빌드        |
| `npm run start`        | 빌드 결과 실행       |

## 환경 변수

`.env.local`에 둡니다. 없어도 개발 서버는 실행됩니다.

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
KSERS_REGISTRATION_BASE=
```

- Google Maps 키가 없으면 Venue 지도는 주소 임베드를 사용합니다.
- `KSERS_REGISTRATION_BASE`는 홈페이지 서버에만 둔다. 저장소와 GitHub에는 값을 넣지 않는다. 없으면 로그인, 참가 등록, 초록 접수 버튼은 이동하지 않는다. `main`의 운영 주소 `ksers.kr`은 `https://reg.ksers.kr`을 본다. `staging` 브랜치의 `dev.ksers.kr`과 그 외 프리뷰는 `https://dev.reg.ksers.kr`을 본다. 로컬 개발은 `http://127.0.0.1:8080`을 본다. 로그인, 마이페이지, 시간표, 학술 프로그램, 갤러리, News & Notices가 같은 주소의 데이터를 읽는다.
- 로그인 표시는 이름과 역할만 담은 쿠키다. 회원 번호로 등록 서버에 다시 로그인하지 않는다. 로그인 후 30분이 지나면 그 쿠키를 지우고 등록 서버 로그아웃으로 이동한다.
- Program at a Glance는 홈페이지 서버가 `KSERS_REGISTRATION_BASE`의 `/service/glance.json.php?year=2027`을 읽는다. 응답 키는 `year`, `rooms`, `days`, `timeSlots`, `sessions`다. `year`를 빼면 열린 행사 연도가 오며, 허용 범위는 2027–2035다. 없거나 날짜가 비어 있으면 저장소의 시간표를 사용한다.
- Scientific Program은 홈페이지 서버가 `KSERS_REGISTRATION_BASE`의 `/service/scientific.json.php?year=2027`을 읽는다. 응답 키는 `year`, `categories`다. 세션의 `glance_id`는 시간표 칸 하나와 연결되고, `free-paper` 탭은 항상 마지막이다. 없거나 탭이 없으면 저장소의 프로그램을 사용한다.
- Gallery는 홈페이지 서버가 `KSERS_REGISTRATION_BASE`의 `/service/gallery.json.php?year=2027`을 읽는다. 응답 키는 `year`, `photos`다. 사진 키는 `id`, `src`, `width`, `height`, `alt`, `file_name`, `sort_order`다. `src`가 등록 서버의 로컬 주소면 등록 서버 주소로 바꿔 불러온다. 없거나 사진이 없으면 준비 문구를 보여 준다.
- News & Notices는 홈페이지 서버가 `KSERS_REGISTRATION_BASE`의 `/service/news.json.php?year=2027`을 읽는다. 글 하나는 `id`를 더한다. 응답 키는 `year`, `posts` 또는 `post`다. 글 키는 `id`, `title`, `writtenAt`, `viewCount`, `body`다. 목록과 글 조회는 조회수를 올리지 않는다. 상세 화면이 열리면 `/service/news_view.php`에 `id`와 `year` 폼을 한 번 보내 조회수를 1 올린다. 첨부파일은 `/service/news_file.php`를 홈페이지가 대신 받아 원래 파일 이름으로 내려준다. 메인은 2개, 목록은 10개씩 자른다. 없거나 미표출이면 상세는 404이고, 목록이 비면 등록된 글이 없다는 문구를 보여 준다.
- 테이블 SQL은 `supabase/program-glance.sql`, `supabase/scientific-program.sql`에 있습니다. 둘 다 Railway MySQL 정의다.

## 경로

영어 페이지는 `/2027/en` 아래입니다. 연구비 공모만 `/2027/kr/research-grant`입니다.

| 구역          | 경로 예                                                                   |
| ------------- | ------------------------------------------------------------------------- |
| Congress Info | `/2027/en/welcome`, `/2027/en/overview`, `/2027/en/committee`             |
| Program       | `/2027/en/glance`, `/2027/en/scientific-program`, `/2027/en/master-class` |
| Abstract      | `/2027/en/submission`, `/2027/en/award`, `/2027/kr/research-grant`        |
| Registration  | `/2027/en/registration`, `/2027/en/visa`                                  |
| Sponsorship   | `/2027/en/sponsorship-oppt`, `/2027/en/our-sponsors`                      |
| Information   | `/2027/en/venue`, `/2027/en/news`                                         |

메뉴 목록은 `config/navigation.ts`에 있습니다. import 경로는 `@/`가 저장소 루트입니다.

## 폴더 구조

```text
app/                  라우트. / 는 /2027 로 이동
  2027/en/            영어 페이지. 괄호 폴더는 URL에 포함되지 않는 구역
  2027/kr/            한국어 페이지
components/           화면과 페이지 콘텐츠. 기능 단위 폴더
config/               메뉴, 대회 시작일, 글꼴, 환경 변수 검증
hooks/                공통 훅
images/               컴포넌트에서 불러오는 이미지
public/               정적 파일
supabase/             Program at a Glance, Scientific Program MySQL
types/                공유 타입
utils/                공유 함수
```

페이지 파일은 얇게 두고, 화면은 `components/<기능>/`에서 조립합니다. 표나 문단처럼 바뀌는 내용은 `*-content.ts`에 둡니다.
