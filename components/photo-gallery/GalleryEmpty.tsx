import type { ReactElement } from "react";

export function GalleryEmpty(): ReactElement {
  return (
    <p className="border border-[#e4e4e7] bg-[#f4f7fb] px-6 py-16 text-center text-sm text-[#52525b]">
      Photos will be available soon.
    </p>
  );
}
