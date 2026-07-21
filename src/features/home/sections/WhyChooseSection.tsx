import { motion } from 'framer-motion';
import { companyProfile } from '@/data/company-profile';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { staggerContainer, scaleIn } from '@/lib/motion';

export function WhyChooseSection() {
  const { locale, copy } = useLanguage();

  return (
    <SectionReveal className="section-padding bg-muted/30">
      <div className="section-container">
        <SectionHeading
          title={copy.whyChoose.title}
          subtitle={copy.whyChoose.subtitle}
          description={copy.whyChoose.description}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {companyProfile.whyChooseUs.map((item) => (
            <motion.div key={item.title} variants={scaleIn}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {locale === 'ar' ? item.title : item.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground">
                    {locale === 'ar' ? item.description : item.descriptionEn}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
