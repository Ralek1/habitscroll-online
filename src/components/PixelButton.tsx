
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface PixelButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const PixelButton: React.FC<PixelButtonProps> = ({ onClick, children, className = '' }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      className={`
        pixel-button rounded-md flex items-center justify-center
        gap-2 min-w-[200px] animate-float
        ${isAnimating ? 'animate-pixel-button-press' : ''}
        ${className}
      `}
      onClick={handleClick}
    >
      <Sparkles className="w-5 h-5" />
      <span>{children}</span>
    </button>
  );
};

export default PixelButton;
