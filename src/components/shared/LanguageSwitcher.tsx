'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames } from '@/i18n';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // Удаляем текущую локаль из пути
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    
    // Добавляем новую локаль
    const newPath = newLocale === 'es' 
      ? pathWithoutLocale || '/'
      : `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Cambiar idioma"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{locale}</span>
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-32 rounded-lg border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              'block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg',
              locale === loc && 'bg-primary/10 font-semibold text-primary'
            )}
          >
            {localeNames[loc]}
          </button>
        ))}
      </div>
    </div>
  );
}
