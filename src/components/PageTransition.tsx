
import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  currentPage: string;
}

const PageTransition = ({ children, currentPage }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [currentPage, children]);

  return (
    <div 
      className={`transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-95'
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
