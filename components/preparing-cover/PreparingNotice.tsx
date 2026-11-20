import type { ReactElement } from "react";

export function PreparingNotice(): ReactElement {
  return (
    <section className="w-full max-w-md overflow-hidden rounded-3xl bg-[#09428F] text-white shadow-[0_24px_60px_rgba(9,66,143,0.28)]">
      <div className="h-1.5 bg-[#00AEEF]" />
      <div className="px-8 py-10 text-center">
        <p className="text-xs font-medium tracking-[0.28em] text-white/70">
          KSERS 2027
        </p>
        <h2 className="mt-4 text-[2rem] leading-none font-semibold tracking-tight">
          준비 중
        </h2>
        <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-white/80">
          This page is being prepared for the congress.
        </p>
      </div>
    </section>
  );
}
