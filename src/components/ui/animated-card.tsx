import React from 'react';
import { Card } from './card';
import { cn } from '../../lib/utils';
import { useHover } from '../../hooks/useHover';
import { useInView } from '../../hooks/useInView';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  delay = 0,
  hoverScale = true,
}) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement | null>();
  const [inViewRef, isInView] = useInView();

  return (
    <Card
      ref={(node) => {
        hoverRef.current = node;
        inViewRef.current = node;
      }}
      className={cn(
        "transition-all duration-300 ease-out",
        "transform-gpu", 
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        hoverScale && isHovered && "scale-[1.02] shadow-lg",
        className
      )}
      style={{
        transitionDelay: isInView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </Card>
  );
};