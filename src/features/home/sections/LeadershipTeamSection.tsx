import { motion } from 'framer-motion';
import { team } from '@/data/team';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { staggerContainer, scaleIn } from '@/lib/motion';

function getInitials(name: string) {
  return name.charAt(0).toUpperCase();
}

export function LeadershipTeamSection() {
  const { locale, copy } = useLanguage();

  return (
    <SectionReveal className="section-padding">
      <div className="section-container">
        <SectionHeading
          title={copy.leadership.title}
          subtitle={copy.leadership.subtitle}
          description={copy.leadership.description}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member) => (
            <motion.div key={member.id} variants={scaleIn}>
              <Card className="h-full text-center transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                    {getInitials(member.name)}
                  </div>
                  <h3 className="text-xl font-bold">{locale === 'ar' ? member.name : member.nameEn}</h3>
                  <p className="mt-1 text-base font-semibold text-primary">
                    {locale === 'ar' ? member.roleAr : member.roleEn}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-3 text-base text-muted-foreground">
                    {locale === 'ar' ? member.bio : member.bioEn}
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
