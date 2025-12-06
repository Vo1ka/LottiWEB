'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';

export function Header() {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appLink, setAppLink] = useState('#');
  const pathname = usePathname();

  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/ru' || pathname === '/es';

  // Определение платформы только на клиенте
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setAppLink(process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://apps.apple.com');
    } else {
      setAppLink(process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || 'https://play.google.com');
    }
  }, []);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: isHomePage ? '#servicios' : '/#servicios' },
    { name: t('washModes'), href: isHomePage ? '#modos' : '/#modos' },
    { name: t('faq'), href: isHomePage ? '#faq' : '/#faq' },
    { name: t('reviews'), href: isHomePage ? '#resenas' : '/#resenas' },
    { name: t('contacts'), href: '/contacto' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="section-wrapper">
        <nav className="flex h-16 lg:h-24 items-center justify-between">
          {/* Mobile: Burger Left */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>

          {/* Logo - Left on Desktop, Center on Mobile */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0 shrink-0"
          >
            <span className="text-[24px] lg:text-[31px] font-serif font-bold text-gray-900 tracking-wide">
              LOTTI
            </span>
          </Link>

          {/* Center Navigation - Desktop Only */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-[20px] font-serif font-normal text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right CTA Button - Desktop */}
          <div className="hidden lg:block ml-auto">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-2.5 bg-[#d4e8f0] text-gray-900 rounded-full hover:bg-[#c0dce8] transition-colors text-base font-serif whitespace-nowrap"
            >
              {t('downloadApp')}
            </a>
          </div>

          {/* Mobile: Download Button Right */}
          <div className="flex lg:hidden ml-auto">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-[#d4e8f0] text-gray-900 rounded-full hover:bg-[#c0dce8] transition-colors text-sm font-serif"
            >
              {t('download')}
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-6">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleAnchorClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="text-lg font-serif text-gray-900 hover:text-gray-600 transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
