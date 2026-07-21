import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { heroOfficeMd, heroOfficeSm } from '@/assets';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/shared/Badge';
import { fadeInUp } from '@/lib/motion';

export function HeroSection() {
  const { copy } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background section-padding">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-6"
          >
            <Badge variant="secondary">
              <Shield className="ml-1 inline h-3 w-3" />
              {copy.hero.pretitle}
            </Badge>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="max-w-lg text-xl font-medium text-muted-foreground">{copy.hero.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/services">
                  {copy.hero.services}
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">{copy.hero.contact}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl shadow-xl"
          >
            <picture>
              <source srcSet={heroOfficeSm} media="(max-width: 640px)" />
              <source srcSet={heroOfficeMd} media="(max-width: 1024px)" />
              <img
                src={heroOfficeMd}
                alt={copy.hero.title}
                className="aspect-[4/3] w-full object-cover"
                width={748}
                height={499}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 right-4 left-4 rounded-lg bg-card/90 p-4 backdrop-blur">
              <p className="font-bold">{siteConfig.name}</p>
              <p className="text-sm text-muted-foreground">{copy.hero.spotlight}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
