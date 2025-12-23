import '@/app/globals.css';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_MEASUREMENT_ID = 'G-837FKFBHJ1';

  return (
    <html lang="en">
      <body>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />

        {children}
        </body>
    </html>
  );
}
