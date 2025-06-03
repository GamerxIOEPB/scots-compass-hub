
import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Users, ChevronDown, ChevronRight } from 'lucide-react';

const Datesheet = () => {
  const [expandedExams, setExpandedExams] = useState<string[]>([]);

  const examTypes = [
    {
      id: 'unit-test-1',
      name: 'Unit Test 1',
      period: 'September 2024',
      status: 'Completed',
      color: 'bg-green-500'
    },
    {
      id: 'mid-term',
      name: 'Mid Term Examination',
      period: 'November 2024',
      status: 'Upcoming',
      color: 'bg-blue-500'
    },
    {
      id: 'unit-test-2',
      name: 'Unit Test 2',
      period: 'January 2025',
      status: 'Scheduled',
      color: 'bg-yellow-500'
    },
    {
      id: 'final-exam',
      name: 'Final Examination',
      period: 'March 2025',
      status: 'Scheduled',
      color: 'bg-purple-500'
    }
  ];

  const getExamSchedule = (examId: string) => {
    const schedules = {
      'unit-test-1': [
        { date: '2024-09-15', time: '9:00 AM - 12:00 PM', subject: 'Mathematics', class: 'All Classes', room: 'Main Hall' },
        { date: '2024-09-16', time: '9:00 AM - 12:00 PM', subject: 'English', class: 'All Classes', room: 'Main Hall' },
        { date: '2024-09-17', time: '9:00 AM - 12:00 PM', subject: 'Science', class: 'All Classes', room: 'Main Hall' },
        { date: '2024-09-18', time: '9:00 AM - 12:00 PM', subject: 'Social Studies', class: 'All Classes', room: 'Main Hall' },
      ],
      'mid-term': [
        { date: '2024-11-20', time: '9:00 AM - 12:00 PM', subject: 'Mathematics', class: 'Classes 6-12', room: 'Exam Hall A' },
        { date: '2024-11-21', time: '9:00 AM - 12:00 PM', subject: 'English', class: 'Classes 6-12', room: 'Exam Hall A' },
        { date: '2024-11-22', time: '9:00 AM - 12:00 PM', subject: 'Science', class: 'Classes 6-12', room: 'Exam Hall A' },
        { date: '2024-11-23', time: '9:00 AM - 12:00 PM', subject: 'Social Studies', class: 'Classes 6-12', room: 'Exam Hall A' },
        { date: '2024-11-25', time: '9:00 AM - 12:00 PM', subject: 'Hindi', class: 'Classes 6-12', room: 'Exam Hall B' },
        { date: '2024-11-26', time: '9:00 AM - 12:00 PM', subject: 'Computer Science', class: 'Classes 9-12', room: 'Computer Lab' },
      ],
      'unit-test-2': [
        { date: '2025-01-20', time: '9:00 AM - 12:00 PM', subject: 'Mathematics', class: 'All Classes', room: 'Main Hall' },
        { date: '2025-01-21', time: '9:00 AM - 12:00 PM', subject: 'English', class: 'All Classes', room: 'Main Hall' },
        { date: '2025-01-22', time: '9:00 AM - 12:00 PM', subject: 'Science', class: 'All Classes', room: 'Main Hall' },
        { date: '2025-01-23', time: '9:00 AM - 12:00 PM', subject: 'Social Studies', class: 'All Classes', room: 'Main Hall' },
      ],
      'final-exam': [
        { date: '2025-03-15', time: '9:00 AM - 12:00 PM', subject: 'Mathematics', class: 'All Classes', room: 'Exam Hall A' },
        { date: '2025-03-17', time: '9:00 AM - 12:00 PM', subject: 'English', class: 'All Classes', room: 'Exam Hall A' },
        { date: '2025-03-19', time: '9:00 AM - 12:00 PM', subject: 'Science', class: 'All Classes', room: 'Exam Hall A' },
        { date: '2025-03-21', time: '9:00 AM - 12:00 PM', subject: 'Social Studies', class: 'All Classes', room: 'Exam Hall A' },
        { date: '2025-03-23', time: '9:00 AM - 12:00 PM', subject: 'Hindi', class: 'All Classes', room: 'Exam Hall B' },
        { date: '2025-03-25', time: '9:00 AM - 12:00 PM', subject: 'Computer Science', class: 'Classes 9-12', room: 'Computer Lab' },
        { date: '2025-03-27', time: '9:00 AM - 12:00 PM', subject: 'French', class: 'Classes 6-12', room: 'Language Lab' },
      ]
    };
    return schedules[examId] || [];
  };

  const toggleExam = (examId: string) => {
    setExpandedExams(prev => 
      prev.includes(examId) 
        ? prev.filter(id => id !== examId)
        : [...prev, examId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
      case 'Upcoming':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300';
      case 'Scheduled':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">📅 Examination Schedule</h1>
        <p className="text-muted-foreground">View exam dates and schedules for all classes</p>
      </div>

      {/* Exam Types */}
      <div className="space-y-6">
        {examTypes.map((exam) => {
          const isExpanded = expandedExams.includes(exam.id);
          const schedule = getExamSchedule(exam.id);
          
          return (
            <div key={exam.id} className="space-y-4">
              {/* Exam Header */}
              <button
                onClick={() => toggleExam(exam.id)}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                  isExpanded 
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg' 
                    : 'bg-card border-border hover:bg-accent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${exam.color}`}></div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">{exam.name}</h3>
                      <p className={`text-sm ${isExpanded ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {exam.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                      {exam.status}
                    </span>
                    {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
              </button>

              {/* Exam Schedule Table */}
              {isExpanded && (
                <div className="bg-card rounded-xl border border-border overflow-hidden animate-fade-in">
                  <div className="p-4 bg-accent/20 border-b border-border">
                    <h4 className="font-semibold flex items-center space-x-2">
                      <Calendar size={18} />
                      <span>Examination Timetable</span>
                    </h4>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-accent/10">
                        <tr>
                          <th className="p-4 text-left font-medium">Date</th>
                          <th className="p-4 text-left font-medium">Time</th>
                          <th className="p-4 text-left font-medium">Subject</th>
                          <th className="p-4 text-left font-medium">Classes</th>
                          <th className="p-4 text-left font-medium">Venue</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schedule.map((item, index) => (
                          <tr key={index} className="border-t border-border hover:bg-accent/5 transition-colors">
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <Calendar size={16} className="text-primary" />
                                <span className="font-medium">
                                  {new Date(item.date).toLocaleDateString('en-US', { 
                                    weekday: 'short', 
                                    month: 'short', 
                                    day: 'numeric' 
                                  })}
                                </span>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <Clock size={16} className="text-muted-foreground" />
                                <span>{item.time}</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <BookOpen size={16} className="text-blue-500" />
                                <span className="font-medium">{item.subject}</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <Users size={16} className="text-green-500" />
                                <span>{item.class}</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="px-2 py-1 bg-accent/20 rounded-md text-sm">
                                {item.room}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h3 className="text-lg font-bold mb-4">📋 Examination Instructions</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
            <p>Students must report to the examination hall 15 minutes before the scheduled time.</p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
            <p>Bring your admit card and valid school ID to the examination hall.</p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
            <p>Electronic devices including mobile phones are strictly prohibited.</p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
            <p>Use only blue or black ink pens for writing the examination.</p>
          </div>
        </div>
      </div>

      {expandedExams.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-4xl">📋</span>
          </div>
          <p className="text-muted-foreground">Click on an examination to view the detailed schedule</p>
        </div>
      )}
    </div>
  );
};

export default Datesheet;
