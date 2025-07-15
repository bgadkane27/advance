import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

const SkillCard = ({ name, level, icon: Icon, category, delay = 0 }) => {
  const categoryStyles = {
    soft: 'from-purple-500 to-pink-500 border-purple-200',
    technical: 'from-blue-500 to-cyan-500 border-blue-200'
  };

  return (
    <div
      className={`group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${categoryStyles[category]} animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${categoryStyles[category]} text-white group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-800">{level}%</div>
          <div className="text-sm text-gray-500 capitalize">{category}</div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">{name}</h3>

      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${categoryStyles[category]} transition-all duration-1000 ease-out`}
            style={{ width: `${level}%` }}
          />
        </div>
        <div
          className="absolute -top-1 bg-white rounded-full w-4 h-4 border-2 border-gray-300 transition-all duration-300 group-hover:border-blue-500"
          style={{ left: `calc(${level}% - 8px)` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
