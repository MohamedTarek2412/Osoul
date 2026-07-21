import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp } from '@/lib/motion';

export function CtaSection() {
  const { copy } = useLanguage();

  return (
    <SectionReveal className="section-padding">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-2xl bg-gradient-to-l from-primary to-primary/80 p-8 text-center text-primary-foreground transition-transform hover:scale-[1.01] md:p-12"
        >
          <h2 className="text-3xl font-extrabold md:text-4xl">{copy.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-primary-foreground/90">
            {copy.cta.description}
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link to="/contact">
              {copy.cta.action}
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
