import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
};

const paddings = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24 lg:py-32',
};

export function Section({
  children,
  className,
  id,
  background = 'white',
  padding = 'lg',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
    >
      {children}
    </section>
  );
}
