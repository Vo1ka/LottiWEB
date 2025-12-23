'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const quickLinks = [
    { name: tNav('home'), href: '/' },
    { name: tNav('services'), href: '/#servicios' },
    { name: tNav('washModes'), href: '/#modos' },
    { name: tNav('faq'), href: '/#faq' },
    { name: tNav('contacts'), href: '/contacto' },
  ];

  const legalLinks = [
    { name: t('legal.privacy'), href: '/legal/privacidad' },
    { name: t('legal.terms'), href: '/legal/terminos' },
    { name: t('legal.cookies'), href: '/legal/cookies' },
  ];

  return (
    <footer className="bg-[#96CEEA]">
      <div className="px-5 py-[15px] md:px-8 md:py-8 lg:px-0 lg:py-0">
        <div className="lg:section-wrapper">
          <div className="lg:py-[48px] lg:px-[139px]">
            <div className="lg:max-w-[962px] lg:mx-auto">
              {/* Mobile */}
              <div className="md:hidden space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif text-gray-900">LOTTI</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">{t('description')}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-3">{t('quickLinks')}</h4>
                  <ul className="space-y-1.5">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-sm text-gray-800 hover:text-gray-900 transition-colors font-serif">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-3">{t('contact.title')}</h4>
                  <ul className="space-y-1.5 text-sm text-gray-800 font-serif">
                    <li>{t('contact.location')}</li>
                    <li>
                      <a href="tel:+34635669900" className="hover:text-gray-900 transition-colors">
                        +34 635 669 900
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@lotti.com" className="hover:text-gray-900 transition-colors">
                        info@lotti.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-400/30">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-3">{t('legal.title')}</h4>
                  <ul className="space-y-1.5">
                    {legalLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-sm text-gray-800 hover:text-gray-900 transition-colors font-serif">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-[1fr_auto_auto_auto] gap-8 lg:gap-16">
                <div className="space-y-4 lg:max-w-[280px]">
                  <h3 className="text-2xl lg:text-[28px] font-serif text-gray-900">LOTTI</h3>
                  <p className="text-base text-gray-800 leading-relaxed">{t('description')}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4 lg:mb-6">{t('quickLinks')}</h4>
                  <ul className="space-y-2 lg:space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-base text-gray-800 hover:text-gray-900 transition-colors font-serif">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden lg:block">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-6">{t('legal.title')}</h4>
                  <ul className="space-y-3">
                    {legalLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-base text-gray-800 hover:text-gray-900 transition-colors font-serif">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4 lg:mb-6">{t('contact.title')}</h4>
                  <ul className="space-y-2 lg:space-y-3 text-base text-gray-800 font-serif">
                    <li>{t('contact.location')}</li>
                    <li>
                      <a href="tel:+34635669900" className="hover:text-gray-900 transition-colors">
                        +34 635 669 900
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@lotti.com" className="hover:text-gray-900 transition-colors">
                        info@lotti.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block border-t border-gray-400/30 py-6 lg:py-8">
            <p className="text-sm text-gray-800 text-center">
              © {new Date().getFullYear()} Lotti. {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
