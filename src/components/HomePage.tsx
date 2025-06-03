
import React from 'react';

const HomePage = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/10 via-accent to-secondary/10 p-8 lg:p-12">
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            St Andrews Scots Sr. Sec. School
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
            Excellence in Education, Character, and Leadership
          </p>
          <div className="w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop" 
              alt="School Building" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Welcome to Our School</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            St Andrews Scots Sr. Sec. School has been a beacon of educational excellence for decades. 
            We are committed to nurturing young minds and preparing them for the challenges of tomorrow 
            through innovative teaching methods and comprehensive development programs.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Academic Excellence</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Character Development</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Innovation in Learning</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
            alt="Students Learning" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-card rounded-3xl p-8 border border-border">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            To provide a comprehensive education that fosters intellectual curiosity, 
            emotional intelligence, and moral values. We strive to create an environment 
            where every student can discover their potential and develop the skills 
            necessary to become responsible global citizens.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold mb-2">Academic Excellence</h3>
              <p className="text-sm text-muted-foreground">Rigorous curriculum designed for success</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="font-semibold mb-2">Character Building</h3>
              <p className="text-sm text-muted-foreground">Developing ethical and responsible citizens</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">Future Ready</h3>
              <p className="text-sm text-muted-foreground">Preparing students for tomorrow's challenges</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
