import { Link, NavLink } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { mainNav } from '@/config/nav.config';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { oibLogoSm } from '@/assets';
import { cn } from '@/lib/utils';

interface HeaderProps {
  mobileNavOpen: boolean;
  onMenuOpen: () => void;
}

export function Header({ mobileNavOpen, onMenuOpen }: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale, setLocale, copy } = useLanguage();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLocale(locale === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src={oibLogoSm}
            alt={locale === 'ar' ? siteConfig.name : siteConfig.nameEn}
            className="h-14 w-auto object-contain transition-all duration-300 sm:h-16"
            width={160}
            height={64}
            decoding="async"
            loading="eager"
            fetchPriority="high"
          />
          <div className="flex flex-col leading-tight text-foreground">
            <span className="text-[11px] font-semibold sm:text-[12px]">
              {locale === 'ar' ? 'أصول للوساطة التأمينية' : 'Osoul Insurance Brokerage'}
            </span>
            <span className="text-[10px] font-medium text-foreground/80 sm:text-[11px]">
              {locale === 'ar' ? 'Osoul Insurance Brokerage' : 'أصول للوساطة التأمينية'}
            </span>
          </div>
        </Link>

        <nav aria-label={copy.header.mainNavLabel} className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                  isActive ? 'text-primary' : 'text-muted-foreground',
                )
              }
            >
              {copy.nav[item.id]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={copy.header.toggleThemeLabel}>
            {resolvedTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline" size="sm" onClick={toggleLanguage} aria-label={copy.header.switchLangLabel}>
            {copy.header.switchLang}
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">{copy.header.contact}</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuOpen}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation"
            aria-label={copy.header.mobileMenu}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
