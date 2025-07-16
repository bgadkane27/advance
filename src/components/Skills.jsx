import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Code
} from 'lucide-react';
import SkillCard from './SkillCard';
import { softSkills, technicalSkills } from '../constants';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  
  return (
    <section id="skills-section" className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-4">
          <h1 className="
                text-4xl sm:text-6xl font-extrabold max-w-fit mb-4
                bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                text-transparent bg-clip-text
                ">
          Skills
        </h1>
          <p className="text-2xl">
            A comprehensive overview of my <strong className="text-[#747bff]">soft skills and technical expertise</strong> that drive success in every project.
          </p>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                category="soft"
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Code size={28} />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                category="technical"
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600">Core Soft Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
                <div className="text-gray-600">Technical Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                <div className="text-gray-600">Average Proficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;