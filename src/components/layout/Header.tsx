'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';

export function Header() {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/ru' || pathname === '/es';

  const navigation = [
    { 
      name: t('home'), 
      href: '/',
    },
    { 
      name: t('services'), 
      href: isHomePage ? '#servicios' : '/#servicios',
    },
    { 
      name: t('washModes'), 
      href: isHomePage ? '#modos' : '/#modos',
    },
    { 
      name: t('pricing'), 
      href: isHomePage ? '#tarifas' : '/#tarifas',
    },
    { 
      name: t('reviews'), 
      href: isHomePage ? '#resenas' : '/#resenas',
    },
    { 
      name: t('about'), 
      href: '/sobre-nosotros',
    },
    { 
      name: t('contacts'), 
      href: '/contacto',
    },
  ];

  const leftNavigation = navigation.slice(0, 3);
  const rightNavigation = navigation.slice(3);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f5f5f5]/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-24 items-center">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 flex-1 justify-start">
            {leftNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-base text-gray-900 hover:text-[#5a9fb8] transition-colors font-normal relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5a9fb8] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Center Logo */}
             <Link
                href="/"
                className="flex-shrink-0 mx-auto lg:mx-8"
                >
                <div className="relative">
                    <span 
                    className="text-4xl lg:text-5xl font-black tracking-tight"
                    style={{
                        background: 'linear-gradient(180deg, #A8D5E2 0%, #E8B4D9 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 2px 8px rgba(168, 213, 226, 0.3)',
                        filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                        WebkitTextStroke: '2px #2D4A6E',
                        paintOrder: 'stroke fill',
                    }}
                    >
                    LOTTI
                    </span>
                </div>
</Link>


          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 flex-1 justify-end">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-base text-gray-900 hover:text-[#5a9fb8] transition-colors font-normal relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5a9fb8] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 ml-auto rounded-lg hover:bg-gray-200 transition-colors"
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleAnchorClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="text-base text-gray-900 hover:text-[#5a9fb8] transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
