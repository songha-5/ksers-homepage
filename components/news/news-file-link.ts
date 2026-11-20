const NEWS_FILE_SCRIPT = "/service/news_file.php";
const STORED_NAME_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]{0,180}$/;

function readStoredFileName(href: string): string | null {
  let url: URL;
  try {
    url = new URL(href);
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      return null;
    }

    return null;
  }

  if (!url.pathname.endsWith(NEWS_FILE_SCRIPT)) {
    return null;
  }

  const name = url.searchParams.get("name") ?? "";
  return STORED_NAME_PATTERN.test(name) ? name : null;
}

function readDownloadLabel(
  downloadName: string | undefined,
  fallback: string,
): string {
  const cleaned = downloadName
    ?.replace(/[\\/]/g, "")
    .replace(/[\r\n"]/g, "")
    .trim();

  if (!cleaned || cleaned.length > 180) {
    return fallback;
  }

  return cleaned;
}

/** 등록 서버 파일 주소를 같은 출처의 다운로드 주소로 바꾼다. */
export function readNewsFileProxyPath(
  href: string,
  downloadName: string | undefined,
): string | null {
  const name = readStoredFileName(href);
  if (!name) {
    return null;
  }

  const params = new URLSearchParams({
    name,
    filename: readDownloadLabel(downloadName, name),
  });

  return `/api/news-file?${params.toString()}`;
}
