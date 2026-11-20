const DEFAULT_HOMEPAGE_ORIGIN = "https://ksers.kr";

const ALLOWED_HOMEPAGE_ORIGINS = [
  "https://ksers.kr",
  "https://www.ksers.kr",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
] as const;

const SERVICE_PATH = {
  login: "/service/login.php",
  auth: "/service/auth.json.php",
  logout: "/service/logout.php",
  join: "/service/join.php",
  mypage: "/service/mypage.php",
  registration: "/service/registration.php",
  abstract: "/service/abstract.php",
  materials: "/service/materials.php",
  glance: "/service/glance.json.php",
  scientific: "/service/scientific.json.php",
  gallery: "/service/gallery.json.php",
  news: "/service/news.json.php",
  newsView: "/service/news_view.php",
  newsFile: "/service/news_file.php",
} as const;

export function isAllowedHomepageOrigin(origin: string): boolean {
  if ((ALLOWED_HOMEPAGE_ORIGINS as readonly string[]).includes(origin)) {
    return true;
  }

  let url: URL;
  try {
    url = new URL(origin);
  } catch {
    return false;
  }

  if (
    url.username ||
    url.password ||
    url.protocol !== "https:" ||
    url.port !== ""
  ) {
    return false;
  }

  const host = url.hostname.toLowerCase();
  return host === "ksers.kr" || host.endsWith(".ksers.kr");
}

export function buildCongressReturnUrl(
  origin: string,
  pathname: string,
): string {
  const safeOrigin = isAllowedHomepageOrigin(origin)
    ? origin
    : DEFAULT_HOMEPAGE_ORIGIN;
  const yearMatch = /^\/(20\d{2})(?:\/|$)/.exec(pathname);
  const pathYear = yearMatch ? Number(yearMatch[1]) : 0;
  const path =
    pathYear >= 2027 &&
    pathYear <= 2035 &&
    (pathname === `/${pathYear}` || pathname.startsWith(`/${pathYear}/`))
      ? pathname
      : "/2027";

  return `${safeOrigin}${path}`;
}

export function buildLoginUrl(
  base: string,
  origin: string,
  pathname: string,
): string | null {
  return buildServiceUrl(base, SERVICE_PATH.login, {
    next: buildCongressReturnUrl(origin, pathname),
  });
}

/** 등록 서버에 세션이 있으면 비밀번호 없이 돌아오고, 없으면 로그인 화면을 띄우지 않는다. */
export function buildLoginProbeUrl(
  base: string,
  origin: string,
  pathname: string,
): string | null {
  return buildServiceUrl(base, SERVICE_PATH.login, {
    next: buildCongressReturnUrl(origin, pathname),
    probe: "1",
  });
}

export function buildLogoutUrl(
  base: string,
  origin: string,
  pathname: string,
): string | null {
  return buildServiceUrl(base, SERVICE_PATH.logout, {
    next: buildCongressReturnUrl(origin, pathname),
  });
}

export function buildAuthUrl(base: string, code: string): string | null {
  return buildServiceUrl(base, SERVICE_PATH.auth, { code });
}

export function buildJoinUrl(base: string): string | null {
  return buildServiceUrl(base, SERVICE_PATH.join);
}

export function buildMypageUrl(base: string): string | null {
  return buildServiceUrl(base, SERVICE_PATH.mypage);
}

export function buildRegistrationUrl(base: string): string | null {
  return buildServiceUrl(base, SERVICE_PATH.registration);
}

export function buildAbstractUrl(base: string): string | null {
  return buildServiceUrl(base, SERVICE_PATH.abstract);
}

export function buildCvUrl(base: string): string | null {
  return buildMaterialsUrl(base, "cv");
}

export function buildScientificUrl(base: string, year: number): string | null {
  if (!Number.isInteger(year)) {
    return null;
  }

  return buildServiceUrl(base, SERVICE_PATH.scientific, { year: String(year) });
}

export function buildGlanceUrl(base: string, year: number): string | null {
  if (!Number.isInteger(year)) {
    return null;
  }

  return buildServiceUrl(base, SERVICE_PATH.glance, { year: String(year) });
}

export function buildGalleryUrl(base: string, year: number): string | null {
  if (!Number.isInteger(year)) {
    return null;
  }

  return buildServiceUrl(base, SERVICE_PATH.gallery, { year: String(year) });
}

export function buildNewsListUrl(base: string, year: number): string | null {
  if (!Number.isInteger(year)) {
    return null;
  }

  return buildServiceUrl(base, SERVICE_PATH.news, { year: String(year) });
}

export function buildNewsPostUrl(
  base: string,
  year: number,
  id: string,
): string | null {
  if (!Number.isInteger(year)) {
    return null;
  }

  return buildServiceUrl(base, SERVICE_PATH.news, {
    year: String(year),
    id,
  });
}

export function buildNewsViewUrl(base: string): string | null {
  return buildServiceUrl(base, SERVICE_PATH.newsView);
}

export function buildNewsFileUrl(base: string, name: string): string | null {
  return buildServiceUrl(base, SERVICE_PATH.newsFile, { name });
}

export function buildVideoUrl(
  base: string,
  kind: "physician" | "mentor",
): string | null {
  return buildMaterialsUrl(base, kind);
}

const MATERIAL_KIND = {
  cv: "master_class_cv",
  physician: "abstract_video_1",
  mentor: "abstract_video_2",
} as const;

type MaterialLinkKind = keyof typeof MATERIAL_KIND;

function buildMaterialsUrl(
  base: string,
  kind: MaterialLinkKind,
): string | null {
  return buildServiceUrl(base, SERVICE_PATH.materials, {
    kind: MATERIAL_KIND[kind],
  });
}

function buildServiceUrl(
  base: string,
  pathname: string,
  params?: Readonly<Record<string, string>>,
): string | null {
  const url = readServiceUrl(base, pathname);
  if (!url) {
    return null;
  }

  if (!params) {
    return url.toString();
  }

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  return url.toString();
}

function readServiceUrl(base: string, pathname: string): URL | null {
  try {
    return new URL(pathname, base);
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      return null;
    }

    return null;
  }
}
