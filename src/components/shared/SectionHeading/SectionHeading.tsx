import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'center' | 'start';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const headingId = title.replace(/\s+/g, '-').toLowerCase();

  return (
    <section className={cn('mb-12 max-w-2xl', className)} aria-labelledby={headingId}>
      {subtitle && (
        <p className={cn(
          'mb-2 text-base font-bold uppercase tracking-wider text-primary',
          align === 'center' ? 'text-center' : 'text-start',
        )}>
          {subtitle}
        </p>
      )}
      <h2
        id={headingId}
        className={cn(
          'text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl',
          align === 'center' ? 'text-center' : 'text-start',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl',
          align === 'center' ? 'mx-auto text-center' : 'text-start',
        )}>
          {description}
        </p>
      )}
    </section>
  );
}
