"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { getSiteContent } from "@/content";
import { ButtonLink } from "@/components/ui/button-link";

const content = getSiteContent();

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="container site-header__inner">
        <Link
          aria-label={`${content.brand.name}, ir al inicio`}
          className="brand"
          href="/"
          onClick={closeMenu}
        >
          <span className="brand__name">{content.brand.name}</span>
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label={`${isOpen ? "Cerrar" : "Abrir"} menú principal`}
          className="menu-toggle"
          onClick={() => setIsOpen((current) => !current)}
          ref={menuButtonRef}
          type="button"
        >
          <span className="menu-toggle__label">{isOpen ? "Cerrar" : "Menú"}</span>
          <span aria-hidden="true" className="menu-toggle__icon">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          aria-label="Navegación principal"
          className="site-nav"
          data-open={isOpen}
          id="primary-navigation"
          ref={menuRef}
        >
          <ul className="site-nav__list">
            {content.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="site-nav__link"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            aria-current={pathname === content.primaryAction.href ? "page" : undefined}
            className="site-nav__cta"
            href={content.primaryAction.href}
            onClick={closeMenu}
          >
            {content.primaryAction.label}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
