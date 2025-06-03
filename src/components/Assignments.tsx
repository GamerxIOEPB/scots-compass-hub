
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, FileText, Users } from 'lucide-react';

const Assignments = () => {
  const [expandedClasses, setExpandedClasses] = useState<string[]>([]);
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);

  const classes = Array.from({ length: 12 }, (_, i) => ({
    id: `class-${i + 1}`,
    name: `Class ${i + 1}`,
    number: i + 1
  }));

  const subjects = [
    { id: 'english', name: 'English', color: 'bg-blue-500', emoji: '📚' },
    { id: 'maths', name: 'Mathematics', color: 'bg-purple-500', emoji: '📐' },
    { id: 'science', name: 'Science', color: 'bg-green-500', emoji: '🔬' },
    { id: 'hindi', name: 'Hindi', color: 'bg-orange-500', emoji: '🇮🇳' },
    { id: 'french', name: 'French', color: 'bg-pink-500', emoji: '🇫🇷' },
    { id: 'sst', name: 'Social Studies (SST)', color: 'bg-cyan-500', emoji: '🌍' },
    { id: 'computer', name: 'Computer Science', color: 'bg-red-500', emoji: '💻' },
  ];

  const toggleClass = (classId: string) => {
    setExpandedClasses(prev => 
      prev.includes(classId) 
        ? prev.filter(id => id !== classId)
        : [...prev, classId]
    );
  };

  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const getSampleAssignments = (className: string, subject: string) => {
    return {
      homework: [
        `${className} ${subject} - Chapter 1 Exercises`,
        `${className} ${subject} - Practice Problems Set A`,
        `${className} ${subject} - Review Questions 1-15`,
      ],
      projects: [
        `${className} ${subject} - Research Project`,
        `${className} ${subject} - Creative Assignment`,
        `${className} ${subject} - Group Presentation`,
      ],
      classwork: [
        `${className} ${subject} - Daily Notes`,
        `${className} ${subject} - In-class Activities`,
        `${className} ${subject} - Worksheet Solutions`,
      ]
    };
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Class Assignments</h1>
        <p className="text-muted-foreground">Select your class and subject to view assignments</p>
      </div>

      {/* Classes and Assignments Layout */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {classes.map((classItem) => {
          const isExpanded = expandedClasses.includes(classItem.id);
          
          return (
            <div key={classItem.id} className="space-y-4">
              {/* Class Card */}
              <button
                onClick={() => toggleClass(classItem.id)}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isExpanded 
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg' 
                    : 'bg-card border-border hover:bg-accent'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Users size={24} />
                  <span className="text-lg font-semibold">{classItem.name}</span>
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
              </button>

              {/* Subjects and Assignments for this class */}
              {isExpanded && (
                <div className="space-y-3 animate-fade-in">
                  {subjects.map((subject) => {
                    const subjectKey = `${classItem.id}-${subject.id}`;
                    const isSubjectExpanded = expandedSubjects.includes(subjectKey);
                    
                    return (
                      <div key={subject.id} className="space-y-3">
                        {/* Subject Header */}
                        <button
                          onClick={() => toggleSubject(subjectKey)}
                          className="w-full p-4 bg-card rounded-xl border border-border hover:bg-accent transition-all duration-200 flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg ${subject.color} flex items-center justify-center text-white text-sm`}>
                              {subject.emoji}
                            </div>
                            <span className="font-medium">{subject.name}</span>
                          </div>
                          {isSubjectExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>

                        {/* Assignments for this subject */}
                        {isSubjectExpanded && (
                          <div className="space-y-3 animate-fade-in">
                            {Object.entries(getSampleAssignments(classItem.name, subject.name)).map(([category, assignments]) => (
                              <div key={category} className="bg-background rounded-xl border border-border overflow-hidden">
                                <div className="p-3 border-b border-border bg-accent/20">
                                  <div className="flex items-center space-x-2">
                                    {category === 'homework' && <FileText size={16} className="text-orange-500" />}
                                    {category === 'projects' && <BookOpen size={16} className="text-blue-500" />}
                                    {category === 'classwork' && <Users size={16} className="text-green-500" />}
                                    <span className="font-medium capitalize">{category}</span>
                                  </div>
                                </div>
                                <div className="p-3 space-y-2">
                                  {assignments.map((assignment, index) => (
                                    <div key={index} className="p-3 bg-accent/10 rounded-lg border border-border/50 hover:bg-accent/20 transition-colors">
                                      <p className="text-sm font-medium">{assignment}</p>
                                      <p className="text-xs text-muted-foreground mt-1">Due: Next class</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {expandedClasses.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-4xl">📚</span>
          </div>
          <p className="text-muted-foreground">Click on a class to view subject assignments</p>
        </div>
      )}
    </div>
  );
};

export default Assignments;
