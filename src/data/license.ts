import type { LicenseInfo, TrustHighlight } from '@/types/license.types';

export const license: LicenseInfo = {
  licenseNo: '92',
  authority: 'Financial Regulatory Authority',
  authorityEn: 'Financial Regulatory Authority',
  authorityAr: 'هيئة الرقابة المالية',
  description:
    'Osoul Insurance Brokerage is licensed and regulated by the Egyptian Financial Regulatory Authority (FRA) to operate as an insurance broker under license number 92.',
  descriptionEn:
    'Osoul Insurance Brokerage is licensed and regulated by the Egyptian Financial Regulatory Authority (FRA) to operate as an insurance broker under license number 92.',
  descriptionAr:
  'أصول للوساطة التأمينية شركة مرخصة وخاضعة لإشراف ورقابة الهيئة العامة للرقابة المالية (FRA)، وتمارس نشاط الوساطة التأمينية بموجب الترخيص رقم 92 لسنة 2019.',
  issuedYear: 2019,
  status: 'Active',
};

export const trustHighlights: TrustHighlight[] = [
  {
    id: 'fra',
    label: 'Financial Regulatory Authority',
    labelEn: 'Financial Regulatory Authority',
    labelAr: 'هيئة الرقابة المالية',
  },
  {
    id: 'license',
    label: 'License No. 92 / 2019',
    labelEn: 'License No. 92 / 2019',
    labelAr: 'ترخيص رقم 92 / 2019',
  },
  {
    id: 'experience',
    label: '7+ Years Experience',
    labelEn: '7+ Years Experience',
    labelAr: 'أكثر من 7 سنوات خبرة',
  },
  {
    id: 'international',
    label: 'International Insurance Solutions',
    labelEn: 'International Insurance Solutions',
    labelAr: 'حلول تأمينية دولية',
  },
];
