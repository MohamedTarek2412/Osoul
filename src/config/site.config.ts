export const siteConfig = {
  name: 'أصول للوساطة التأمينية',
  nameEn: 'Osoul Insurance Brokerage',
  shortName: 'OIB',
  description:
    'وسيط تأميني رائد في مصر، نقدم حلول تأمينية متكاملة للأفراد والشركات بأعلى معايير الجودة والاحترافية.',
  descriptionEn:
    'Osoul Insurance Brokerage is a leading Egyptian insurance brokerage offering comprehensive local, regional, and international coverage while helping your business grow.',
  url: import.meta.env.VITE_APP_URL ?? 'https://osoul-insurance.com',
  email: import.meta.env.VITE_CONTACT_EMAIL ?? 'Mohamed@osoulinsurance.com',
  emailSecondary: import.meta.env.VITE_CONTACT_EMAIL_SECONDARY ?? '',
  phone: import.meta.env.VITE_CONTACT_PHONE ?? '01200077714',
  phoneSecondary: import.meta.env.VITE_CONTACT_PHONE_SECONDARY ?? '',
  address: '107 شارع عمر مكرم - النرجس 8 - التجمع الخامس - القاهرة الجديدة',
  addressEn:
    '107 Omar Makram Street, Al Narjes 8, Fifth Settlement, New Cairo',
  licenseNumber: '92',
  foundedYear: 2019,
  yearsExperience: 7,
  social: {
    facebook: 'https://facebook.com/osoul-insurance',
    linkedin: 'https://linkedin.com/company/osoul-insurance',
    twitter: 'https://twitter.com/osoul_insurance',
  },
} as const;
