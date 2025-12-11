'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';

export function Header() {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/ru' || pathname === '/es';

  const navigation = [
    { name: t('home'), href: '/', external: false },
    { name: t('services'), href: isHomePage ? '#servicios' : '/#servicios', external: false },
    { name: t('washModes'), href: isHomePage ? '#modos' : '/#modos', external: false },
    { name: t('faq'), href: isHomePage ? '#faq' : '/#faq', external: false },
    { name: t('reviews'), href: isHomePage ? '#resenas' : '/#resenas', external: false },
    { name: t('contacts'), href: 'https://wa.me/+34635669900', external: true },
    { name: t('about'), href: '/about', external: false },
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

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0 shrink-0"
          >
            <span className="text-[24px] lg:text-[31px] font-bold text-gray-900 tracking-wide">
              LOTTI
            </span>
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] font-regular text-gray-900 hover:text-[#70CCFF] transition-colors whitespace-nowrap"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="text-[20px] font-regular text-gray-900 hover:text-[#70CCFF] transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Right CTA Button - Desktop */}
          <div className="hidden lg:block ml-auto">
            <a
              href="https://lotti.delivery/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-2.5 bg-[#70CCFF] text-white rounded-full hover:bg-[#5CB8E6] transition-all hover:shadow-lg text-base font-bold whitespace-nowrap"
            >
              {t('downloadApp')}
            </a>
          </div>

          {/* Mobile: Download Button Right */}
          <div className="flex lg:hidden ml-auto">
            <a
              href="https://lotti.delivery/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-[#70CCFF] text-white rounded-full hover:bg-[#5CB8E6] transition-all text-sm font-bold"
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
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-regular text-gray-900 hover:text-[#70CCFF] transition-colors py-2"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleAnchorClick(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="text-lg font-regular text-gray-900 hover:text-[#70CCFF] transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
