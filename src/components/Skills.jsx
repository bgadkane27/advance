import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Users, 
  Target, 
  Lightbulb, 
  MessageCircle, 
  Clock,
  Code,
  Database,
  Smartphone,
  Palette,
  Globe,
  GitBranch
} from 'lucide-react';
import SkillCard from './SkillCard';

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

  const softSkills = [
    { name: 'Attentive to Detail', level: 95, icon: Target },
    { name: 'Strong Analytical Skills', level: 90, icon: Brain },
    { name: 'Team Collaboration', level: 88, icon: Users },
    { name: 'Creative Problem Solving', level: 92, icon: Lightbulb },
    { name: 'Effective Communication', level: 85, icon: MessageCircle },
    { name: 'Time Management', level: 87, icon: Clock },
  ];

  const technicalSkills = [
    { name: 'HTML & CSS', level: 95, icon: Code },
    { name: 'JavaScript', level: 90, icon: Code },
    { name: 'React', level: 88, icon: Code },
    { name: 'Node.js', level: 82, icon: Database },
    { name: 'Mobile Development', level: 75, icon: Smartphone },
    { name: 'UI/UX Design', level: 80, icon: Palette },
    { name: 'Web APIs', level: 85, icon: Globe },
    { name: 'Version Control (Git)', level: 90, icon: GitBranch },
  ];

  return (
    <section id="skills-section" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills that drive success in every project
          </p>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Soft Skills</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className='max-w-7xl mx-auto'>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
                <Code size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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