
import React from 'react';
import { Calendar, Users, BookOpen, Trophy, Clock, MapPin } from 'lucide-react';

const HomePage = () => {
  const quickStats = [
    { icon: Users, label: "Students", value: "1,200+", color: "text-blue-500" },
    { icon: BookOpen, label: "Subjects", value: "15+", color: "text-green-500" },
    { icon: Trophy, label: "Awards", value: "50+", color: "text-yellow-500" },
    { icon: Calendar, label: "Years", value: "75+", color: "text-purple-500" }
  ];

  const upcomingEvents = [
    { title: "Annual Sports Day", date: "Dec 15", type: "Event" },
    { title: "Parent-Teacher Meeting", date: "Dec 10", type: "Meeting" },
    { title: "Science Exhibition", date: "Dec 20", type: "Academic" },
    { title: "Winter Break Begins", date: "Dec 20", type: "Schedule" }
  ];

  const schoolInfo = [
    { icon: Clock, label: "School Hours", value: "8:00 AM - 3:30 PM" },
    { icon: MapPin, label: "Location", value: "Delhi, India" },
    { icon: Calendar, label: "Academic Year", value: "April - March" }
  ];

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
          <div className="w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop" 
              alt="School Building" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3 mb-2">
              <stat.icon className={`${stat.color}`} size={24} />
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <p className="text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Upcoming Events and School Info */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <Calendar className="text-primary" size={24} />
            <span>Upcoming Events</span>
          </h3>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.type}</p>
                </div>
                <span className="text-primary font-semibold">{event.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* School Information */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h3 className="text-xl font-bold mb-4">School Information</h3>
          <div className="space-y-4">
            {schoolInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                <info.icon className="text-primary" size={20} />
                <div>
                  <p className="font-medium">{info.label}</p>
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                </div>
              </div>
            ))}
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
            <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Academic Excellence</span>
            </div>
            <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Character Development</span>
            </div>
            <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Innovation in Learning</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
            alt="Students Learning" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold mb-2">Academic Excellence</h3>
              <p className="text-sm text-muted-foreground">Rigorous curriculum designed for success</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="font-semibold mb-2">Character Building</h3>
              <p className="text-sm text-muted-foreground">Developing ethical and responsible citizens</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
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
