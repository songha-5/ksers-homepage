"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactElement } from "react";
import type { NavigationMenu } from "@/types/navigation";
import { NavigationSubmenu } from "@/components/pc-navigation/NavigationSubmenu";
import { isNavigationMenuActive } from "@/utils/is-navigation-menu-active";

interface NavigationMenuItemProps {
  readonly menu: NavigationMenu;
}

const MENU_LINK_CLASS_NAME =
  "block px-5 py-4 text-lg font-extrabold whitespace-nowrap transition-colors group-hover:text-(--palette-danger) group-focus-within:text-(--palette-danger)";

interface SubmenuVisibility {
  readonly isOpen: boolean;
  readonly handleOpen: () => void;
  readonly handleClose: () => void;
}

function useSubmenuVisibility(): SubmenuVisibility {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    handleOpen: () => {
      setIsOpen(true);
    },
    handleClose: () => {
      setIsOpen(false);
    },
  };
}

export function NavigationMenuItem({
  menu,
}: NavigationMenuItemProps): ReactElement {
  const pathname = usePathname();
  const isActive = isNavigationMenuActive(pathname, menu);
  const { isOpen, handleOpen, handleClose } = useSubmenuVisibility();
  const toneClassName = isActive
    ? "text-(--palette-danger)"
    : "text-(--palette-primary)";

  return (
    <li
      className="group relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <Link
        href={menu.href}
        aria-current={isActive ? "true" : undefined}
        className={`${MENU_LINK_CLASS_NAME} ${toneClassName}`}
        onClick={handleClose}
      >
        {menu.label}
      </Link>
      <NavigationSubmenu
        items={menu.items}
        isOpen={isOpen}
        pathname={pathname}
        onNavigate={handleClose}
      />
    </li>
  );
}
