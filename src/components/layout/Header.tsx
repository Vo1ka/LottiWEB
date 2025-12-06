'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, Download } from 'lucide-react';

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

  const leftNavigation = navigation.slice(0, 3);
  const rightNavigation = navigation.slice(3);

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

          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-10 flex-1">
            {leftNavigation.map((item) => (
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

          {/* Center Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0 lg:mx-11 shrink-0"
          >
            <span className="text-[24px] lg:text-[31px] font-serif font-bold text-gray-900 tracking-wide">
              LOTTI
            </span>
          </Link>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-10 flex-1 justify-end">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-[20px] font-serif font-normal text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button - Desktop */}
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#5a9fb8] text-white rounded-full hover:bg-[#4a8fa8] transition-colors text-base font-serif whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              {t('downloadApp')}
            </a>
          </div>

          {/* Mobile: Download Button Right */}
          <div className="flex lg:hidden">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#5a9fb8] text-white rounded-full hover:bg-[#4a8fa8] transition-colors text-sm font-serif"
            >
              <Download className="h-3.5 w-3.5" />
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
