import { z } from "zod";

const googleMapsApiKeySchema = z.string().min(1);

/** 키가 없으면 null이다. 이 경우 장소 지도는 주소 임베드를 쓴다. */
export function readGoogleMapsApiKey(): string | null {
  const parsed = googleMapsApiKeySchema.safeParse(
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  );

  if (!parsed.success) {
    return null;
  }

  return parsed.data;
}

const registrationBaseSchema = z.url();

/** 없거나 주소에 계정 정보가 있으면 null이다. 로그인·접수 버튼은 그때 이동하지 않는다. */
export function readRegistrationBase(): string | null {
  const parsed = registrationBaseSchema.safeParse(
    process.env.KSERS_REGISTRATION_BASE,
  );

  if (!parsed.success) {
    return null;
  }

  return readPublicOrigin(parsed.data);
}

function readPublicOrigin(value: string): string | null {
  const url = new URL(value);
  if (url.username || url.password) {
    return null;
  }

  return url.origin;
}
