
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
    >
      {isDark ? (
        <>
          <Sun size={16} />
          <span className="text-sm font-medium">Light Mode</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span className="text-sm font-medium">Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
