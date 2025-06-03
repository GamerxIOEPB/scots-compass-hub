
import { useState, useEffect } from 'react';

export const useAnimations = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return {
    isLoaded,
    fadeIn: `transition-all duration-500 ease-out ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`,
    slideInLeft: `transition-all duration-400 ease-out ${
      isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
    }`,
    slideInRight: `transition-all duration-400 ease-out ${
      isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
    }`,
    scaleIn: `transition-all duration-300 ease-out ${
      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`,
    staggerDelay: (index: number) => ({ animationDelay: `${index * 100}ms` })
  };
};
