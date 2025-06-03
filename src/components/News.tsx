
import React, { useState, useMemo } from 'react';
import { Calendar, Clock, Users, Search, Filter } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const newsItems = [
    {
      id: 1,
      title: "Annual Sports Day 2024",
      content: "Join us for our Annual Sports Day celebration on December 15th. Various competitions and events will be held throughout the day.",
      date: "2024-12-01",
      time: "09:00 AM",
      category: "Events",
      priority: "high"
    },
    {
      id: 2,
      title: "Winter Break Schedule",
      content: "School will be closed from December 20th to January 5th for winter break. Classes will resume on January 6th, 2025.",
      date: "2024-11-28",
      time: "10:00 AM",
      category: "Schedule",
      priority: "medium"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      content: "Monthly parent-teacher meetings scheduled for December 10th. Please check your class timings with respective teachers.",
      date: "2024-11-25",
      time: "02:00 PM",
      category: "Meeting",
      priority: "high"
    },
    {
      id: 4,
      title: "Science Exhibition",
      content: "Students from Classes 6-12 can participate in the upcoming Science Exhibition. Registration deadline is December 5th.",
      date: "2024-11-20",
      time: "11:30 AM",
      category: "Academic",
      priority: "medium"
    },
    {
      id: 5,
      title: "New Library Books",
      content: "Our library has been updated with 200+ new books across various subjects. Students can now access these during library hours.",
      date: "2024-11-15",
      time: "03:00 PM",
      category: "Library",
      priority: "low"
    },
    {
      id: 6,
      title: "Art Competition Winners",
      content: "Congratulations to all students who participated in the Inter-House Art Competition. Winners will be announced in the morning assembly.",
      date: "2024-11-10",
      time: "02:30 PM",
      category: "Academic",
      priority: "low"
    }
  ];

  const categories = ['All', 'Events', 'Schedule', 'Meeting', 'Academic', 'Library'];

  const filteredNews = useMemo(() => {
    return newsItems.filter(news => {
      const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          news.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || news.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50 dark:bg-red-950/20';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20';
      case 'low':
        return 'border-l-green-500 bg-green-50 dark:bg-green-950/20';
      default:
        return 'border-l-gray-500 bg-gray-50 dark:bg-gray-950/20';
    }
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'Events':
        return '🎉';
      case 'Schedule':
        return '📅';
      case 'Meeting':
        return '👥';
      case 'Academic':
        return '📚';
      case 'Library':
        return '📖';
      default:
        return '📰';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">📰 School News</h1>
        <p className="text-muted-foreground">Stay updated with the latest announcements and events</p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-muted-foreground" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* News Items */}
      <div className="grid gap-6">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            className={`border-l-4 rounded-lg border border-border p-6 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${getPriorityColor(news.priority)}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getCategoryEmoji(news.category)}</span>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{news.title}</h3>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div className="flex items-center space-x-1 mb-1">
                  <Calendar size={14} />
                  <span>{new Date(news.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{news.time}</span>
                </div>
              </div>
            </div>
            
            <p className="text-foreground leading-relaxed">{news.content}</p>
            
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users size={16} />
                  <span>All Students & Parents</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                  news.priority === 'high' 
                    ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    : news.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {news.priority.charAt(0).toUpperCase() + news.priority.slice(1)} Priority
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-2xl">🔍</span>
          </div>
          <p className="text-muted-foreground">No news found matching your search criteria.</p>
        </div>
      )}

      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-2xl">📢</span>
        </div>
        <p className="text-muted-foreground">Stay tuned for more updates!</p>
      </div>
    </div>
  );
};

export default News;
