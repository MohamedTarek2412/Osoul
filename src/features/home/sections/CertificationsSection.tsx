import { motion } from 'framer-motion';
import { certifications } from '@/data/certifications';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { staggerContainer, scaleIn } from '@/lib/motion';

export function CertificationsSection() {
  const { locale, copy } = useLanguage();

  return (
    <SectionReveal className="section-padding bg-muted/30">
      <div className="section-container">
        <SectionHeading
          title={copy.certifications.title}
          subtitle={copy.certifications.subtitle}
          description={copy.certifications.description}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={scaleIn}
              className="flex h-32 flex-col items-center justify-center rounded-xl border bg-card px-6 transition-shadow hover:shadow-md"
            >
              <img
                src={cert.logo}
                alt={locale === 'ar' ? cert.nameAr : cert.nameEn}
                className="max-h-16 w-full object-contain"
                width={150}
                height={64}
                decoding="async"
                loading="lazy"
                fetchPriority="low"
              />
              <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                {locale === 'ar' ? cert.nameAr : cert.nameEn}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
