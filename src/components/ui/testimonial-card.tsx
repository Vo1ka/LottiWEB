import { Card, CardContent } from './card';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  text: string;
  usage: string;
  rating?: number;
  avatar?: string;
  className?: string;
}

export function TestimonialCard({
  name,
  text,
  usage,
  rating = 5,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn('relative h-full', className)}>
      <CardContent className="pt-6">
        {/* Quote icon */}
        <Quote className="h-8 w-8 text-primary/20 mb-4" />

        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              )}
            />
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{text}</p>

        {/* Author */}
        <div className="border-t pt-4 flex items-center gap-3">
          {avatar && (
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
              <img
                src={avatar}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{usage}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
