import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { fadeInUp } from '@/lib/motion';

export function MapSection() {
  const { locale, copy } = useLanguage();
  const mapQuery = encodeURIComponent(locale === 'ar' ? siteConfig.address : siteConfig.addressEn);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <iframe
            title={copy.contactPage.mapTitle}
            src={mapEmbedUrl}
            className="h-80 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}
