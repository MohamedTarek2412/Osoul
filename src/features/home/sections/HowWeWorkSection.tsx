import { motion } from 'framer-motion';
import { howWeWorkSteps } from '@/data/how-we-work';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { staggerContainer, scaleIn } from '@/lib/motion';

export function HowWeWorkSection() {
  const { locale, copy } = useLanguage();

  return (
    <SectionReveal className="section-padding bg-muted/30">
      <div className="section-container">
        <SectionHeading
          title={copy.howWeWork.title}
          subtitle={copy.howWeWork.subtitle}
          description={copy.howWeWork.description}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {howWeWorkSteps.map((step) => (
            <motion.div key={step.id} variants={scaleIn}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">
                    {locale === 'ar' ? step.title : step.titleEn}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    {locale === 'ar' ? step.description : step.descriptionEn}
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
