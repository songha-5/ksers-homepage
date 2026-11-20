"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";

/** PC 네비게이션이 보이는 최소 너비. 이 너비에 들어가면 모바일 메뉴를 닫는다. */
const DESKTOP_NAVIGATION_QUERY = "(min-width: 1100px)";

interface MobileMenuState {
  /** 햄버거 메뉴 패널이 열려 있으면 true. */
  readonly isOpen: boolean;
  /** 펼쳐진 상위 메뉴 이름. null이면 모두 접혀 있다. */
  readonly expandedLabel: string | null;
  /** 메뉴 패널을 열거나 닫는다. */
  readonly toggleMenu: () => void;
  /** 메뉴 패널을 닫고 펼쳐진 아코디언도 접는다. */
  readonly closeMenu: () => void;
  /** 해당 상위 메뉴만 펼친다. 이미 펼쳐져 있으면 접는다. */
  readonly toggleSection: (label: string) => void;
}

/** 모바일 메뉴의 열림, 아코디언, 스크롤 잠금, 닫기 조건을 관리한다. */
export function useMobileMenuState(): MobileMenuState {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);
  const [trackedPathname, setTrackedPathname] = useState(pathname);

  // 경로가 바뀌면 열린 메뉴를 닫는다.
  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setIsOpen(false);
    setExpandedLabel(null);
  }

  /** 메뉴 패널을 닫고, 펼쳐 둔 아코디언도 함께 접는다. */
  const closeMenu = (): void => {
    setIsOpen(false);
    setExpandedLabel(null);
  };

  useLockBodyScroll(isOpen);
  useDismissMobileMenu(isOpen, closeMenu);

  return {
    isOpen,
    expandedLabel,
    closeMenu,
    toggleMenu: () => toggleMenu(isOpen, closeMenu, setIsOpen),
    toggleSection: (label: string) => toggleSection(label, setExpandedLabel),
  };
}

/** 메뉴가 열려 있으면 닫고, 닫혀 있으면 연다. */
function toggleMenu(
  isOpen: boolean,
  closeMenu: () => void,
  setIsOpen: (isOpen: boolean) => void,
): void {
  if (isOpen) {
    closeMenu();
    return;
  }

  setIsOpen(true);
}

/** 같은 메뉴를 다시 누르면 접고, 다른 메뉴를 누르면 그 메뉴만 펼친다. */
function toggleSection(
  label: string,
  setExpandedLabel: (update: (current: string | null) => string | null) => void,
): void {
  setExpandedLabel((current) => (current === label ? null : label));
}

/** 데스크톱 너비로 넓어지거나 Escape를 누르면 메뉴를 닫는다. */
function useDismissMobileMenu(isOpen: boolean, onClose: () => void): void {
  useCloseMenuOnDesktop(onClose);
  useCloseMenuOnEscape(isOpen, onClose);
}

/** 화면이 1100px 이상이 되면 모바일 메뉴를 닫는다. */
function useCloseMenuOnDesktop(onClose: () => void): void {
  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_NAVIGATION_QUERY);

    const handleChange = (): void => {
      if (mediaQuery.matches) {
        onClose();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [onClose]);
}

/** 메뉴가 열린 동안 Escape 키로 메뉴를 닫는다. */
function useCloseMenuOnEscape(isOpen: boolean, onClose: () => void): void {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
}
