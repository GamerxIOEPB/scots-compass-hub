
import React from 'react';
import { Home, Folder, Calendar, Newspaper } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar = ({ currentPage, onPageChange }: SidebarProps) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home', emoji: '🏠' },
    { id: 'assignments', icon: Folder, label: 'Assignments', emoji: '📂' },
    { id: 'datesheet', icon: Calendar, label: 'Datesheet', emoji: '📅' },
    { id: 'news', icon: Newspaper, label: 'News', emoji: '📰' },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-16 lg:w-20 bg-card border-r border-border backdrop-blur-sm">
      <div className="flex flex-col items-center py-4 space-y-4">
        {/* School Logo/Initial */}
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg transition-all duration-300 hover:scale-110 hover:rotate-3 animate-fade-in">
          S
        </div>
        
        {/* Navigation Items */}
        <nav className="flex flex-col space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`group relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                currentPage === item.id 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/80'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-xl transition-transform duration-200 group-hover:scale-110">
                {item.emoji}
              </span>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none transform translate-x-2 group-hover:translate-x-0 shadow-lg border border-border">
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-popover rotate-45 border-l border-b border-border"></div>
              </div>

              {/* Active indicator */}
              {currentPage === item.id && (
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-primary rounded-full animate-scale-in"></div>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
