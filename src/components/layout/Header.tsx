'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: `/${locale}`, external: false },
    { name: t('services'), href: `/${locale}#servicios`, external: false },
    { name: t('washModes'), href: `/${locale}#modos`, external: false },
    { name: t('faq'), href: `/${locale}#faq`, external: false },
    { name: t('reviews'), href: `/${locale}#resenas`, external: false },
    { name: t('contacts'), href: 'https://wa.me/+34635669900', external: true },
    { name: t('about'), href: `/${locale}/about`, external: false },
  ];

  const downloadAppText = t('downloadApp');
  const downloadText = t('download');

  const isHomePage =
    typeof window !== 'undefined' &&
    [`/${locale}`, '/en', '/ru', '/es'].includes(window.location.pathname);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="section-wrapper">
        <nav className="flex items-center justify-between h-16 lg:h-24 px-4 lg:px-8">
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

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link
              href={`/${locale}`}
              className="font-bold text-2xl lg:text-3xl text-gray-900 tracking-wide"
            >
              LOTTI
            </Link>
          </div>

          {/* Right: Desktop nav + LanguageSwitcher + CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-8">
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-900 hover:text-[#70CCFF] whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="text-lg text-gray-900 hover:text-[#70CCFF] whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            <div className="min-w-[80px] z-50">
              <LanguageSwitcher />
            </div>

            <a
              href="https://lotti.delivery/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-2.5 bg-[#70CCFF] text-white rounded-full hover:bg-[#5CB8E6] transition-all hover:shadow-lg font-bold whitespace-nowrap max-w-[150px] text-center"
            >
              {downloadAppText}
            </a>
          </div>

          {/* Mobile: Download + LanguageSwitcher */}
          <div className="flex lg:hidden items-center gap-4 ml-auto">
            <div className="min-w-[60px] z-50">
              <LanguageSwitcher />
            </div>
            <a
              href="https://lotti.delivery/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#70CCFF] text-white rounded-full hover:bg-[#5CB8E6] transition-all text-sm font-bold"
            >
              {downloadText}
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-6">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-900 hover:text-[#70CCFF] transition-colors py-2"
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
                    className="text-lg text-gray-900 hover:text-[#70CCFF] transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
