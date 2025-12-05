import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AppDownloadButtonsProps {
  layout?: 'horizontal' | 'vertical';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AppDownloadButtons({
  layout = 'horizontal',
  className = '',
  size = 'md',
}: AppDownloadButtonsProps) {
  const appLinks = {
    ios: process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://apps.apple.com',
    android:
      process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || 'https://play.google.com',
  };

  const sizes = {
    sm: { width: 120, height: 36 },
    md: { width: 160, height: 48 },
    lg: { width: 200, height: 60 },
  };

  const { width, height } = sizes[size];

  return (
    <div
      className={cn(
        'flex gap-4',
        layout === 'vertical' ? 'flex-col items-start' : 'flex-row flex-wrap items-center',
        className
      )}
    >
      <a
        href={appLinks.ios}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105 active:scale-95"
        aria-label="Descargar en App Store"
      >
        <Image
          src="/images/app/app-store-badge.svg"
          alt="Descargar en App Store"
          width={width}
          height={height}
          priority
          className="h-auto w-auto"
        />
      </a>

      <a
        href={appLinks.android}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105 active:scale-95"
        aria-label="Descargar en Google Play"
      >
        <Image
          src="/images/app/google-play-badge.svg"
          alt="Descargar en Google Play"
          width={width}
          height={height}
          priority
          className="h-auto w-auto"
        />
      </a>
    </div>
  );
}
