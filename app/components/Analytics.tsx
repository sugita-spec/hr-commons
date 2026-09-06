"use client";

import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    const gaId = process.env.NEXT_PUBLIC_GA4_ID;

    window.dataLayer = window.dataLayer || [];

    if (gtmId) {
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(script);
      return () => script.remove();
    }

    if (gaId) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);
      window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
      window.gtag("js", new Date());
      window.gtag("config", gaId);
      return () => script.remove();
    }
  }, []);

  return null;
}
