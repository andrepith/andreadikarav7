import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PokedexCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  type?: string;
  sprite?: string;
}

export const PokedexCard = ({ children, className, title, type, sprite }: PokedexCardProps) => {
  return (
    <div className={cn("pokedex-card electric-glow", className)}>
      {(title || type || sprite) && (
        <div className="flex items-center gap-4 mb-4">
          {sprite && (
            <div className="w-16 h-16 rounded-full bg-gradient-electric p-2 flex items-center justify-center">
              <img src={sprite} alt={title} className="w-12 h-12 object-contain" />
            </div>
          )}
          <div className="flex-1">
            {title && (
              <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
            )}
            {type && (
              <span className="type-badge">{type}</span>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};