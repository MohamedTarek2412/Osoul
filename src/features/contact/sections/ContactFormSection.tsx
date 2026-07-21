import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  type ContactFormValues,
} from '@/schemas/contact-form.schema';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/useToast';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { fadeInUp } from '@/lib/motion';

export function ContactFormSection() {
  const { locale, copy } = useLanguage();
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      showToast(copy.contactPage.success, 'success');
      reset();
    } catch {
      showToast(copy.error.errorMessage, 'error');
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
    <Card>
      <CardHeader>
        <CardTitle>{copy.contactPage.formTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label={copy.contactPage.labels.name}
              id="name"
              error={errors.name?.message ? copy.contactPage.errors[errors.name.message as keyof typeof copy.contactPage.errors] : undefined}
            >
              <Input
                id="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder={copy.contactPage.labels.namePlaceholder}
                {...register('name')}
              />
            </Field>
            <Field
              label={copy.contactPage.labels.email}
              id="email"
              error={errors.email?.message ? copy.contactPage.errors[errors.email.message as keyof typeof copy.contactPage.errors] : undefined}
            >
              <Input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder={copy.contactPage.labels.emailPlaceholder}
                dir="ltr"
                {...register('email')}
              />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label={copy.contactPage.labels.phone}
              id="phone"
              error={errors.phone?.message ? copy.contactPage.errors[errors.phone.message as keyof typeof copy.contactPage.errors] : undefined}
            >
              <Input
                id="phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                placeholder={copy.contactPage.labels.phonePlaceholder}
                dir="ltr"
                {...register('phone')}
              />
            </Field>
            <Field
              label={copy.contactPage.labels.serviceType}
              id="serviceType"
              error={errors.serviceType?.message ? copy.contactPage.errors[errors.serviceType.message as keyof typeof copy.contactPage.errors] : undefined}
            >
              <select
                id="serviceType"
                aria-invalid={!!errors.serviceType}
                aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...register('serviceType')}
              >
                <option value="">{copy.contactPage.labels.servicePlaceholder}</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s[locale === 'ar' ? 'titleAr' : 'titleEn']}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field
            label={copy.contactPage.labels.subject}
            id="subject"
            error={errors.subject?.message ? copy.contactPage.errors[errors.subject.message as keyof typeof copy.contactPage.errors] : undefined}
          >
            <Input
              id="subject"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              placeholder={copy.contactPage.labels.subjectPlaceholder}
              {...register('subject')}
            />
          </Field>
          <Field
            label={copy.contactPage.labels.message}
            id="message"
            error={errors.message?.message ? copy.contactPage.errors[errors.message.message as keyof typeof copy.contactPage.errors] : undefined}
          >
            <Textarea
              id="message"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder={copy.contactPage.labels.messagePlaceholder}
              rows={5}
              {...register('message')}
            />
          </Field>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? copy.contactPage.labels.sending : copy.contactPage.labels.send}
          </Button>
        </form>
      </CardContent>
    </Card>
    </motion.div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id?: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && <p id={`${id}-error`} className={cn('text-xs text-destructive')}>{error}</p>}
    </div>
  );
}
