
import React, { useState } from 'react';

const Datesheet = () => {
  const [activeExam, setActiveExam] = useState<string | null>(null);

  const examData = {
    'pa1': {
      title: 'Periodic Assessment 1 (P.A.1)',
      dates: [
        { date: '15th March 2024', day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 12:00 PM' },
        { date: '17th March 2024', day: 'Wednesday', subject: 'Science', time: '9:00 AM - 12:00 PM' },
        { date: '19th March 2024', day: 'Friday', subject: 'English', time: '9:00 AM - 12:00 PM' },
        { date: '21st March 2024', day: 'Monday', subject: 'Social Studies', time: '9:00 AM - 12:00 PM' },
        { date: '23rd March 2024', day: 'Wednesday', subject: 'Hindi', time: '9:00 AM - 12:00 PM' },
      ]
    },
    'halfyearly': {
      title: 'Half Yearly Examination',
      dates: [
        { date: '1st October 2024', day: 'Tuesday', subject: 'Mathematics', time: '9:00 AM - 12:00 PM' },
        { date: '3rd October 2024', day: 'Thursday', subject: 'Science', time: '9:00 AM - 12:00 PM' },
        { date: '5th October 2024', day: 'Saturday', subject: 'English', time: '9:00 AM - 12:00 PM' },
        { date: '7th October 2024', day: 'Monday', subject: 'Social Studies', time: '9:00 AM - 12:00 PM' },
        { date: '9th October 2024', day: 'Wednesday', subject: 'Hindi', time: '9:00 AM - 12:00 PM' },
        { date: '11th October 2024', day: 'Friday', subject: 'French', time: '9:00 AM - 12:00 PM' },
        { date: '13th October 2024', day: 'Sunday', subject: 'Computer Science', time: '9:00 AM - 12:00 PM' },
      ]
    },
    'pa2': {
      title: 'Periodic Assessment 2 (P.A.2)',
      dates: [
        { date: '15th January 2025', day: 'Wednesday', subject: 'Mathematics', time: '9:00 AM - 12:00 PM' },
        { date: '17th January 2025', day: 'Friday', subject: 'Science', time: '9:00 AM - 12:00 PM' },
        { date: '20th January 2025', day: 'Monday', subject: 'English', time: '9:00 AM - 12:00 PM' },
        { date: '22nd January 2025', day: 'Wednesday', subject: 'Social Studies', time: '9:00 AM - 12:00 PM' },
        { date: '24th January 2025', day: 'Friday', subject: 'Hindi', time: '9:00 AM - 12:00 PM' },
      ]
    },
    'final': {
      title: 'Final Examination',
      dates: [
        { date: '1st March 2025', day: 'Saturday', subject: 'Mathematics', time: '9:00 AM - 12:00 PM' },
        { date: '4th March 2025', day: 'Tuesday', subject: 'Science', time: '9:00 AM - 12:00 PM' },
        { date: '6th March 2025', day: 'Thursday', subject: 'English', time: '9:00 AM - 12:00 PM' },
        { date: '8th March 2025', day: 'Saturday', subject: 'Social Studies', time: '9:00 AM - 12:00 PM' },
        { date: '10th March 2025', day: 'Monday', subject: 'Hindi', time: '9:00 AM - 12:00 PM' },
        { date: '12th March 2025', day: 'Wednesday', subject: 'French', time: '9:00 AM - 12:00 PM' },
        { date: '14th March 2025', day: 'Friday', subject: 'Computer Science', time: '9:00 AM - 12:00 PM' },
      ]
    }
  };

  const examButtons = [
    { id: 'pa1', label: 'P.A.1', color: 'bg-blue-500 hover:bg-blue-600' },
    { id: 'halfyearly', label: 'Half Yearly', color: 'bg-green-500 hover:bg-green-600' },
    { id: 'pa2', label: 'P.A.2', color: 'bg-purple-500 hover:bg-purple-600' },
    { id: 'final', label: 'Final Tests', color: 'bg-red-500 hover:bg-red-600' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Examination Schedule</h1>
        <p className="text-muted-foreground">View exam dates and timings</p>
      </div>

      {/* Exam Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {examButtons.map((exam) => (
          <button
            key={exam.id}
            onClick={() => setActiveExam(activeExam === exam.id ? null : exam.id)}
            className={`${exam.color} text-white p-6 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 ${
              activeExam === exam.id ? 'ring-4 ring-white/20' : ''
            }`}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold">{exam.label}</h3>
              <p className="text-sm opacity-90 mt-1">
                {activeExam === exam.id ? 'Click to hide' : 'Click to view'}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Exam Schedule Table */}
      {activeExam && (
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg animate-fade-in">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold">{examData[activeExam as keyof typeof examData].title}</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-accent/50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Date</th>
                  <th className="px-6 py-4 text-left font-semibold">Day</th>
                  <th className="px-6 py-4 text-left font-semibold">Subject</th>
                  <th className="px-6 py-4 text-left font-semibold">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {examData[activeExam as keyof typeof examData].dates.map((exam, index) => (
                  <tr key={index} className="hover:bg-accent/30 transition-colors">
                    <td className="px-6 py-4 font-medium">{exam.date}</td>
                    <td className="px-6 py-4 text-muted-foreground">{exam.day}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {exam.subject}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{exam.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!activeExam && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-4xl">📅</span>
          </div>
          <p className="text-muted-foreground">Select an exam type to view the schedule</p>
        </div>
      )}
    </div>
  );
};

export default Datesheet;
