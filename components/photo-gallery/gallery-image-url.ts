const LOOPBACK_HOSTS = new Set(["127.0.0.1", "localhost", "[::1]"]);

function readUrl(value: string, base?: string): URL | null {
  try {
    return base ? new URL(value, base) : new URL(value);
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      return null;
    }

    return null;
  }
}

/** 등록 서버가 자기 로컬 주소를 주면, 홈페이지가 붙은 등록 서버 주소로 바꾼다. */
export function readGalleryImageUrl(src: string, base: string): string | null {
  const fileUrl = readUrl(src, base);
  const baseUrl = readUrl(base);
  if (!fileUrl || !baseUrl || fileUrl.username || fileUrl.password) {
    return null;
  }

  if (LOOPBACK_HOSTS.has(fileUrl.hostname.toLowerCase())) {
    fileUrl.protocol = baseUrl.protocol;
    fileUrl.host = baseUrl.host;
  }

  return fileUrl.toString();
}
