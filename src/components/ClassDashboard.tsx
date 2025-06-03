
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, FileText } from 'lucide-react';

const ClassDashboard = () => {
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const subjects = [
    { id: 'sst', name: 'Social Studies (SST)', color: 'bg-blue-500', emoji: '🌍' },
    { id: 'science', name: 'Science', color: 'bg-green-500', emoji: '🔬' },
    { id: 'maths', name: 'Mathematics', color: 'bg-purple-500', emoji: '📐' },
    { id: 'english', name: 'English', color: 'bg-red-500', emoji: '📚' },
    { id: 'hindi', name: 'Hindi', color: 'bg-orange-500', emoji: '🇮🇳' },
    { id: 'french', name: 'French', color: 'bg-pink-500', emoji: '🇫🇷' },
    { id: 'computer', name: 'Computer Science', color: 'bg-cyan-500', emoji: '💻' },
  ];

  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getSampleContent = (subject: string, type: string) => {
    const content = {
      classwork: [
        `Chapter 1: Introduction to ${subject}`,
        `Chapter 2: Fundamentals of ${subject}`,
        `Practice Exercise Set A`,
      ],
      homework: [
        `Assignment 1: ${subject} Basics`,
        `Project: Research on ${subject}`,
        `Practice Questions 1-20`,
      ],
    };
    return content[type as keyof typeof content] || [];
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Class Dashboard</h1>
        <p className="text-muted-foreground">Access your subjects, classwork, and homework</p>
      </div>

      <div className="grid gap-4">
        {subjects.map((subject) => {
          const isExpanded = expandedSubjects.includes(subject.id);
          
          return (
            <div key={subject.id} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              {/* Subject Header */}
              <button
                onClick={() => toggleSubject(subject.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl ${subject.color} flex items-center justify-center text-white text-xl`}>
                    {subject.emoji}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isExpanded ? 'Click to collapse' : 'Click to expand'}
                    </p>
                  </div>
                </div>
                {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>

              {/* Subject Content */}
              {isExpanded && (
                <div className="px-6 pb-6 space-y-4">
                  {/* Classwork Section */}
                  <div className="bg-background rounded-xl border border-border overflow-hidden">
                    <button
                      onClick={() => toggleSection(`${subject.id}-classwork`)}
                      className="w-full p-4 flex items-center justify-between hover:bg-accent/30 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <BookOpen size={18} className="text-blue-500" />
                        <span className="font-medium">Classwork</span>
                      </div>
                      {expandedSections.includes(`${subject.id}-classwork`) ? 
                        <ChevronDown size={16} /> : <ChevronRight size={16} />
                      }
                    </button>
                    
                    {expandedSections.includes(`${subject.id}-classwork`) && (
                      <div className="px-4 pb-4">
                        <div className="space-y-2">
                          {getSampleContent(subject.name, 'classwork').map((item, index) => (
                            <div key={index} className="p-3 bg-accent/20 rounded-lg border border-border/50">
                              <p className="text-sm">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Homework Section */}
                  <div className="bg-background rounded-xl border border-border overflow-hidden">
                    <button
                      onClick={() => toggleSection(`${subject.id}-homework`)}
                      className="w-full p-4 flex items-center justify-between hover:bg-accent/30 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <FileText size={18} className="text-orange-500" />
                        <span className="font-medium">Homework</span>
                      </div>
                      {expandedSections.includes(`${subject.id}-homework`) ? 
                        <ChevronDown size={16} /> : <ChevronRight size={16} />
                      }
                    </button>
                    
                    {expandedSections.includes(`${subject.id}-homework`) && (
                      <div className="px-4 pb-4">
                        <div className="space-y-2">
                          {getSampleContent(subject.name, 'homework').map((item, index) => (
                            <div key={index} className="p-3 bg-accent/20 rounded-lg border border-border/50">
                              <p className="text-sm">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassDashboard;
