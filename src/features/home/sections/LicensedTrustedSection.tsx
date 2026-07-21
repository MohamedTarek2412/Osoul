import { Check, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fraLogo } from '@/assets';
import { license, trustHighlights } from '@/data/license';
import { useLanguage } from '@/hooks/useLanguage';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { Badge } from '@/components/shared/Badge';
import { Card, CardContent } from '@/components/ui/card';
import { staggerContainer, scaleIn, fadeInUp } from '@/lib/motion';

export function LicensedTrustedSection() {
  const { locale, copy } = useLanguage();

  return (
    <SectionReveal className="section-padding bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mb-10 text-center"
        >
          <Badge variant="default" className="mb-4 gap-1">
            <Star className="h-3 w-3 fill-current" />
            {copy.licensedTrusted.badge}
          </Badge>
          <h2 className="text-3xl font-extrabold md:text-4xl">{copy.licensedTrusted.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-muted-foreground">
            {copy.licensedTrusted.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustHighlights.map((item) => (
            <motion.div key={item.id} variants={scaleIn}>
              <Card className="h-full border-primary/20 transition-shadow hover:shadow-md">
                <CardContent className="flex items-start gap-3 p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-base font-bold">{locale === 'ar' ? item.labelAr : item.labelEn}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {locale === 'ar' ? item.labelAr : item.labelEn}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="mt-8"
        >
          <Card className="overflow-hidden border-2 border-primary/30 shadow-lg">
            <CardContent className="flex flex-col items-center gap-6 p-8 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                </div>
                <div className="text-center sm:text-start">
                  <p className="text-sm font-medium text-primary">{copy.licensedTrusted.licenseLabel}</p>
                  <p className="text-2xl font-bold">{license.licenseNo}</p>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'ar' ? license.authorityAr : license.authorityEn}
                  </p>
                </div>
              </div>
              <div className="flex h-20 w-48 items-center justify-center rounded-lg bg-muted/50 px-4">
                <img
                  src={fraLogo}
                  alt={locale === 'ar' ? license.authorityAr : license.authorityEn}
                  className="max-h-16 w-full object-contain"
                  width={160}
                  height={64}
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
