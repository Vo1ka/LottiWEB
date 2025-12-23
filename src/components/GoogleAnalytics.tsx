'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag('config', measurementId, {
      page_path: pathname,
    });
  }, [pathname, measurementId]);

  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
