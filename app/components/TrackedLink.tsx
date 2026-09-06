"use client";

import Link from "next/link";
import type { ReactNode } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  href: string;
  className?: string;
  location: string;
  children: ReactNode;
};

export function TrackedLink({ href, className, location, children }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        window.dataLayer = window.dataLayer || [];
        const payload = {
          event: "cta_click",
          cta_location: location,
          cta_destination: href,
        };
        window.dataLayer.push(payload);
        window.gtag?.("event", "cta_click", {
          cta_location: location,
          cta_destination: href,
        });
      }}
    >
      {children}
    </Link>
  );
}
