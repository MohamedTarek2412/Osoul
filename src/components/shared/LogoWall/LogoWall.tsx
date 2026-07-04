import type { Client } from '@/types/client.types';
import { cn } from '@/lib/utils';

interface LogoWallProps {
  clients: Client[];
  className?: string;
}

export function LogoWall({ clients, className }: LogoWallProps) {
  return (
    <ul
      className={cn(
        'grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
        className,
      )}
      role="list"
    >
      {clients.map((client) => (
        <li key={client.id} role="listitem">
          <div className="group overflow-hidden rounded-[1.75rem] border border-accent/20 bg-gradient-to-br from-background via-secondary/5 to-accent/10 p-6 shadow-lg shadow-accent/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex min-h-[120px] items-center justify-center rounded-3xl bg-card px-6 py-5 transition duration-300 group-hover:bg-white/95">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-20 w-full object-contain opacity-95 transition duration-300 group-hover:opacity-100"
                width={200}
                height={80}
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="mt-5 text-center">
              <p className="text-base font-semibold text-foreground">{client.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{client.industry}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
