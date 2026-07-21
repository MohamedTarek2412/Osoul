import { motion } from 'framer-motion';
import { aboutTeam } from '@/assets';
import { companyProfile } from '@/data/company-profile';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp } from '@/lib/motion';

export function AboutSection() {
  const { locale, copy } = useLanguage();

  return (
    <SectionReveal className="section-padding">
      <div className="section-container">
        <SectionHeading
          subtitle={locale === 'ar' ? companyProfile.about.title : companyProfile.about.titleEn}
          title={copy.about.title}
          description={copy.about.content}
          align="start"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid items-center gap-8 lg:grid-cols-2"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.01]">
            <img
              src={aboutTeam}
              alt={locale === 'ar' ? companyProfile.about.title : companyProfile.about.title}
              className="aspect-[4/3] w-full object-cover"
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <p className="text-xl font-medium leading-relaxed text-muted-foreground">
              {locale === 'ar'
                ? 'نؤمن بأن التأمين ليس مجرد وثيقة، بل هو راحة البال والأمان لمستقبلك وعائلتك وعملك. فريقنا المتخصص يعمل على تقديم أفضل الحلول بأنسب الأسعار.'
                : 'We believe insurance is more than a policy — it is peace of mind and protection for your future, family, and business. Our specialized team delivers the best solutions at competitive prices.'}
            </p>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
