"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
  disabled?: boolean;
};

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  onClick,
  tabIndex,
  ...props
}: ButtonLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  }

  return (
    <Link
      {...props}
      aria-disabled={disabled || undefined}
      className={["button", `button--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      onClick={handleClick}
      tabIndex={disabled ? -1 : tabIndex}
    >
      {children}
    </Link>
  );
}
