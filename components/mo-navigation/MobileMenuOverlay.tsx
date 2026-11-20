import type { ReactElement } from "react";

interface MobileMenuOverlayProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function MobileMenuOverlay({
  isOpen,
  onClose,
}: MobileMenuOverlayProps): ReactElement {
  return (
    <button
      type="button"
      aria-label="메뉴 닫기"
      aria-hidden={!isOpen}
      tabIndex={isOpen ? 0 : -1}
      className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-black/50 transition-opacity duration-300 min-[1100px]:hidden ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
    />
  );
}
