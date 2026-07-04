import { motion } from 'framer-motion';
import { Hourglass, ShieldCheck, Milestone, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';

export function TimelineSection() {
  const { locale } = useLanguage();
  const isRtl = locale === 'ar';

  const historyItems = [
    {
      year: '2004 - 2018',
      titleAr: 'عصر التأسيس والخبرة (Pegasus)',
      titleEn: 'Foundational Expertise Era',
      descAr: 'أكثر من ١٥ عاماً من العمل والقيادة داخل كبرى شركات التأمين المحلية ومتعددة الجنسيات تحت اسم Pegasus Assure.',
      descEn: 'Over 15 years of specialized risk operations and management under Pegasus Assure Brokerage.',
      icon: Hourglass,
    },
    {
      year: '2019',
      titleAr: 'تأسيس أصول للوساطة التأمينية',
      titleEn: 'Inception of Osoul (OIB)',
      descAr: 'تطور الشركة رسمياً إلى "أصول للوساطة التأمينية (OIB)" كشخصية اعتبارية رائدة في قطاع التأمين المصري.',
      descEn: 'Official transition and registration of Osoul Insurance Brokerage as the modern corporate entity in Egypt.',
      icon: Milestone,
    },
    {
      year: '2019',
      titleAr: 'الترخيص الرسمي رقم 92',
      titleEn: 'Official FRA Licensing',
      descAr: 'الحصول على رخصة الهيئة العامة للرقابة المالية (FRA) تحت رقم 92 للعمل كشركة وساطة تأمينية مرخصة.',
      descEn: 'Secured official registration and licensing from the Egyptian Financial Regulatory Authority (FRA) under No. 92.',
      icon: ShieldCheck,
    },
    {
      year: '2020 - Present',
      titleAr: 'التوسع الإقليمي والشراكات',
      titleEn: 'Corporate Scale & Partnerships',
      descAr: 'تقديم الحلول الطبية والممتلكات والحياة والمخاطر الخاصة للعديد من الهيئات والشركات الكبرى محلياً ودولياً.',
      descEn: 'Expanding medical, property, and group solutions, managing complex risks for enterprise clients regionally and globally.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden border-b border-border/40">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          title={isRtl ? 'مسيرتنا وتطورنا المهني' : 'Our Story & Milestones'}
          subtitle={isRtl ? 'تاريخ أصول' : 'Historical Timeline'}
          description={isRtl 
            ? 'خطوات ثابتة من الخبرة والاعتماد الرسمي بنينا بها منصة وساطة تأمينية رائدة تحمي ممتلكاتك ومستقبلك.' 
            : 'Formulated upon 15+ years of multinational insurance expertise and official regulatory compliance.'}
        />

        {/* Vertical Timeline container */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          
          {/* Central Trunk Line */}
          <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-0.5 bg-border -translate-x-1/2" />

          {/* Staggered Timeline Nodes */}
          <div className="space-y-12">
            {historyItems.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={`${item.year}-${index}`}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot / Icon */}
                  <div className="absolute left-[27px] md:left-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-card border-2 border-primary text-primary shadow-premium -translate-x-1/2 z-10">
                    <IconComponent className="h-5 w-5 shrink-0" />
                  </div>

                  {/* Spacer for MD screens to align item opposite */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Block */}
                  <motion.article
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      isEven ? 'md:pr-12 md:pl-0 text-start md:text-right' : 'md:pl-12 text-start'
                    }`}
                  >
                    <div className="rounded-2xl border border-border/80 bg-muted/40 p-6 shadow-sm hover:border-primary/20 hover:bg-card transition-all duration-300 relative group">
                      
                      {/* Year badge */}
                      <span className="inline-block px-3 py-1 text-xs font-bold font-mono tracking-wide text-primary bg-primary/10 border border-primary/20 rounded-full mb-3">
                        {item.year}
                      </span>
                      
                      <h3 className="text-lg font-bold text-foreground">
                        {isRtl ? item.titleAr : item.titleEn}
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-muted-foreground mt-2 font-light">
                        {isRtl ? item.descAr : item.descEn}
                      </p>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
