
import React, { useState, useEffect } from 'react';
import { Calendar, Github, Code, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ActivitySection = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for demonstration - replace with actual API calls
    const mockGithubData = generateMockHeatmapData();
    const mockLeetcodeData = generateMockLeetCodeData();
    
    setTimeout(() => {
      setGithubData(mockGithubData);
      setLeetcodeData(mockLeetcodeData);
      setLoading(false);
    }, 1000);
  }, []);

  const generateMockHeatmapData = () => {
    const data = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 10),
        level: Math.floor(Math.random() * 5)
      });
    }
    return data;
  };

  const generateMockLeetCodeData = () => {
    const data = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 5),
        level: Math.floor(Math.random() * 4)
      });
    }
    return data;
  };

  const getColorIntensity = (level, platform) => {
    if (platform === 'github') {
      const colors = [
        'bg-gray-800',
        'bg-green-900',
        'bg-green-700',
        'bg-green-500',
        'bg-green-300'
      ];
      return colors[level] || colors[0];
    } else {
      const colors = [
        'bg-gray-800',
        'bg-orange-900',
        'bg-orange-600',
        'bg-orange-400'
      ];
      return colors[level] || colors[0];
    }
  };

  const HeatmapGrid = ({ data, platform }) => {
    if (!data) return null;

    const weeks = [];
    let currentWeek = [];
    
    data.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay();
      
      if (index === 0) {
        // Fill the first week with empty cells if needed
        for (let i = 0; i < dayOfWeek; i++) {
          currentWeek.push(null);
        }
      }
      
      currentWeek.push(day);
      
      if (currentWeek.length === 7) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });
    
    if (currentWeek.length > 0) {
      weeks.push([...currentWeek]);
    }

    return (
      <div className="overflow-x-auto">
        <div className="inline-flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded-sm ${
                    day 
                      ? getColorIntensity(day.level, platform)
                      : 'bg-transparent'
                  }`}
                  title={day ? `${day.date}: ${day.count} contributions` : ''}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="activity" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Coding Activity
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            My coding journey visualized through GitHub contributions and LeetCode problem solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* GitHub Heatmap */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Github className="w-6 h-6 text-green-400" />
                GitHub Contributions
                <a 
                  href="https://github.com/Rohansaini1512" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-auto text-sm text-blue-400 hover:text-blue-300"
                >
                  View Profile →
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  <HeatmapGrid data={githubData} platform="github" />
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Less</span>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4].map(level => (
                        <div
                          key={level}
                          className={`w-3 h-3 rounded-sm ${getColorIntensity(level, 'github')}`}
                        />
                      ))}
                    </div>
                    <span>More</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* LeetCode Heatmap */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Code className="w-6 h-6 text-orange-400" />
                LeetCode Activity
                <a 
                  href="https://leetcode.com/u/Rohansaini1512/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-auto text-sm text-blue-400 hover:text-blue-300"
                >
                  View Profile →
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  <HeatmapGrid data={leetcodeData} platform="leetcode" />
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Less</span>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3].map(level => (
                        <div
                          key={level}
                          className={`w-3 h-3 rounded-sm ${getColorIntensity(level, 'leetcode')}`}
                        />
                      ))}
                    </div>
                    <span>More</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">365+</h3>
              <p className="text-gray-400">Days of Code</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <Github className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">150+</h3>
              <p className="text-gray-400">GitHub Contributions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <Code className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
              <p className="text-gray-400">Problems Solved</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
