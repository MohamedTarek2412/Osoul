import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { footerNav } from '@/config/nav.config';
import { siteConfig } from '@/config/site.config';
import { oibLogo } from '@/assets';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { locale, copy } = useLanguage();
  const address = locale === 'ar' ? siteConfig.address : siteConfig.addressEn;

  return (
    <footer className="border-t bg-muted/30">
      <div className="section-container section-padding">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <img src={oibLogo} alt={locale === 'ar' ? siteConfig.name : siteConfig.nameEn} className="h-10 w-auto" width={136} height={40} decoding="async" loading="lazy" />
            </div>
            <p className="text-sm text-muted-foreground">
              {locale === 'ar' ? siteConfig.description : siteConfig.descriptionEn}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{copy.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {copy.nav[item.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{copy.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <div className="flex flex-col gap-0.5" dir="ltr">
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                  <a href={`tel:${siteConfig.phoneSecondary}`}>{siteConfig.phoneSecondary}</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  <a href={`mailto:${siteConfig.emailSecondary}`}>{siteConfig.emailSecondary}</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
