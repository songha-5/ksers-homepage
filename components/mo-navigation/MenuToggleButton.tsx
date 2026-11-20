import type { ReactElement } from "react";

const BAR_CLASS =
  "block h-0.5 w-6 bg-(--palette-primary) transition-all duration-300 ease-in-out";

interface MenuToggleButtonProps {
  readonly isOpen: boolean;
  readonly onToggle: () => void;
}

export function MenuToggleButton({
  isOpen,
  onToggle,
}: MenuToggleButtonProps): ReactElement {
  return (
    <button
      type="button"
      className="flex h-11 w-11 items-center justify-center"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation-panel"
      aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      onClick={onToggle}
    >
      <span className="flex flex-col gap-1.5">
        <span
          className={`${BAR_CLASS} ${isOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`${BAR_CLASS} ${isOpen ? "opacity-0" : ""}`} />
        <span
          className={`${BAR_CLASS} ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </span>
    </button>
  );
}
