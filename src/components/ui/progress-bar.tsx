import React from 'react';
import { cn } from '../../lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  animated?: boolean;
  color?: 'primary' | 'secondary' | 'success';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  className,
  animated = true,
  color = 'primary',
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colorClasses = {
    primary: 'bg-primary-colorscolor-1',
    secondary: 'bg-secondary-colorscolor-3',
    success: 'bg-system-colorsgreen-300',
  };

  return (
    <div className={cn("w-full bg-neutral-colors700 rounded-full h-2", className)}>
      <div
        className={cn(
          "h-2 rounded-full transition-all duration-700 ease-out",
          colorClasses[color],
          animated && "animate-pulse"
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};