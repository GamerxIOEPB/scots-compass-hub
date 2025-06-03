
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import HomePage from '../components/HomePage';
import Assignments from '../components/Assignments';
import Datesheet from '../components/Datesheet';
import News from '../components/News';
import ThemeToggle from '../components/ThemeToggle';
import PageTransition from '../components/PageTransition';
import { useTheme } from '../hooks/useTheme';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'assignments':
        return <Assignments />;
      case 'datesheet':
        return <Datesheet />;
      case 'news':
        return <News />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="flex w-full min-h-screen bg-background text-foreground">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <div className="flex-1 ml-16 lg:ml-20">
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
            <div className="container flex h-16 items-center justify-end">
              {/* Top Right Controls */}
              <div className="flex items-center gap-4">
                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              </div>
            </div>
          </header>

          {/* Main Content with Page Transitions */}
          <main className="container py-6">
            <PageTransition currentPage={currentPage}>
              {renderCurrentPage()}
            </PageTransition>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
