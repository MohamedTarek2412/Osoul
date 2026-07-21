import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { footerNav } from '@/config/nav.config';
import { siteConfig } from '@/config/site.config';
import { oibLogoSm } from '@/assets';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { locale, copy } = useLanguage();
  const address = locale === 'ar' ? siteConfig.address : siteConfig.addressEn;
  const phoneValues = [siteConfig.phone].filter(Boolean);
  const emailValues = [siteConfig.email].filter(Boolean);

  return (
    <footer className="border-t bg-muted/30">
      <div className="section-container section-padding">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2 sm:gap-3">
              <img
                src={oibLogoSm}
                alt={locale === 'ar' ? siteConfig.name : siteConfig.nameEn}
                className="h-14 w-auto sm:h-16"
                width={160}
                height={64}
                decoding="async"
                loading="lazy"
              />
              <div className="flex flex-col leading-tight text-foreground">
                <span className="text-sm font-semibold">
                  {locale === 'ar' ? 'أصول للوساطة التأمينية' : 'Osoul Insurance Brokerage'}
                </span>
                <span className="text-xs font-medium text-foreground/80">
                  {locale === 'ar' ? 'Osoul Insurance Brokerage' : 'أصول للوساطة التأمينية'}
                </span>
              </div>
            </div>
            <p className="text-base text-muted-foreground">
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
                    className="text-base text-muted-foreground transition-colors hover:text-primary"
                  >
                    {copy.nav[item.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{copy.footer.contact}</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <div className="flex flex-col gap-0.5" dir="ltr">
                  {phoneValues.map((value) => (
                    <a key={value} href={`tel:${value.replace(/^0/, '+20')}`}>
                      {value}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <div className="flex flex-col gap-0.5">
                  {emailValues.map((value) => (
                    <a key={value} href={`mailto:${value}`}>
                      {value}
                    </a>
                  ))}
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
