import { readRegistrationBase } from "@/config/env";
import { buildNewsFileUrl } from "@/config/registration-service";

const REQUEST_TIMEOUT_MS = 8_000;
const STORED_NAME_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]{0,180}$/;

function readStoredName(request: Request): string | null {
  const name = new URL(request.url).searchParams.get("name") ?? "";
  return STORED_NAME_PATTERN.test(name) ? name : null;
}

function readDownloadLabel(request: Request, fallback: string): string {
  const filename = new URL(request.url).searchParams.get("filename") ?? "";
  const cleaned = filename
    .replace(/[\\/]/g, "")
    .replace(/[\r\n"]/g, "")
    .trim();

  if (cleaned.length === 0 || cleaned.length > 180) {
    return fallback;
  }

  return cleaned;
}

function attachmentHeader(filename: string): string {
  const fallback = filename.replace(/[^\x20-\x7E]/g, "_");
  return `attachment; filename="${fallback}"; filename*=UTF-8''${encodeURIComponent(filename)}`;
}

async function readNewsFile(url: string): Promise<Response | null> {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      return null;
    }

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return null;
    }

    return null;
  }
}

export async function GET(request: Request): Promise<Response> {
  const name = readStoredName(request);
  const base = readRegistrationBase();
  const url = name && base ? buildNewsFileUrl(base, name) : null;
  const file = url ? await readNewsFile(url) : null;

  if (!name || !file) {
    return new Response(null, { status: 404 });
  }

  return new Response(file.body, {
    headers: {
      "Content-Type":
        file.headers.get("Content-Type") ?? "application/octet-stream",
      "Content-Disposition": attachmentHeader(readDownloadLabel(request, name)),
      "Cache-Control": "private, no-store",
    },
  });
}
