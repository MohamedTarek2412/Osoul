import { siteConfig } from './site.config';

export const seoConfig = {
  default: {
    title: `${siteConfig.name} | ${siteConfig.nameEn}`,
    description: siteConfig.description,
    keywords: [
      'تأمين',
      'وسيط تأميني',
      'تأمين طبي',
      'تأمين سيارات',
      'تأمين شركات',
      'مصر', 
      'أصول للوساطة التأمينية',
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image' as const,
  },
  pages: {
    home: {
      title: `${siteConfig.name} - وسيط تأميني رائد في مصر`,
      description: siteConfig.description,
    },
    services: {
      title: `خدماتنا | ${siteConfig.name}`,
      description:
        'اكتشف مجموعة خدماتنا التأمينية الشاملة للأفراد والشركات - تأمين طبي، سيارات، ممتلكات، ومسؤولية.',
    },
    contact: {
      title: `تواصل معنا | ${siteConfig.name}`,
      description:
        'تواصل مع فريق أصول للوساطة التأمينية للحصول على استشارة مجانية وحلول تأمينية مخصصة لاحتياجاتك.',
    },
    notFound: {
      title: `الصفحة غير موجودة | ${siteConfig.name}`,
      description: 'الصفحة التي تبحث عنها غير موجودة.',
    },
  },
} as const;
