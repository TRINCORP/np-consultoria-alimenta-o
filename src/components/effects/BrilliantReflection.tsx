import { memo } from 'react';

interface BrilliantReflectionProps {
  className?: string;
}

export const BrilliantReflection = memo(({ className = "" }: BrilliantReflectionProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Single subtle sweep — no infinite sparkles */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
        style={{
          animation: "reflection-sweep 4s ease-in-out infinite",
          willChange: "transform",
        }}
      />
    </div>
  );
});

BrilliantReflection.displayName = 'BrilliantReflection';
