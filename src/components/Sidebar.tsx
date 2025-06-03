
import React from 'react';
import { Home, Folder, Calendar } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar = ({ currentPage, onPageChange }: SidebarProps) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home', emoji: '🏠' },
    { id: 'assignments', icon: Folder, label: 'Assignments', emoji: '📂' },
    { id: 'datesheet', icon: Calendar, label: 'Datesheet', emoji: '📅' },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-16 lg:w-20 bg-card border-r border-border">
      <div className="flex flex-col items-center py-4 space-y-4">
        {/* School Logo/Initial */}
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
          S
        </div>
        
        {/* Navigation Items */}
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`group relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-accent ${
                currentPage === item.id 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="text-xl">{item.emoji}</span>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
