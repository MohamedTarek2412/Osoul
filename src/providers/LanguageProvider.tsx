import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { locales, translationCopy, type Locale } from '@/config/i18n.config';
import { LanguageProviderContext } from './language-context';

interface LanguageProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
  storageKey?: string;
}

export function LanguageProvider({
  children,
  defaultLocale = 'ar',
  storageKey = 'oib-locale',
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') {
      return defaultLocale;
    }

    try {
      const storedLocale = window.localStorage.getItem(storageKey) as Locale | null;
      return storedLocale && locales.includes(storedLocale) ? storedLocale : defaultLocale;
    } catch {
      return defaultLocale;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(storageKey, locale);
    } catch {
      // Ignore storage failures and continue with runtime defaults.
    }

    document.documentElement.lang = locale === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale, storageKey]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
      copy: translationCopy[locale],
    }),
    [locale],
  );

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}
