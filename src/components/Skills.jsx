import SectionWrapper from './SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Code2, Database, LayoutTemplate, BrainCircuit, Terminal, Users } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming & Languages",
    icon: <Terminal className="text-[#F97316]" size={24} />,
    skills: [...portfolioData.skills.programming, ...portfolioData.languages]
  },
  {
    title: "Web Technologies",
    icon: <LayoutTemplate className="text-[#F59E0B]" size={24} />,
    skills: portfolioData.skills.web
  },
  {
    title: "Data Analytics & Database",
    icon: <Database className="text-[#F59E0B]" size={24} />,
    skills: [...portfolioData.skills.database, ...portfolioData.skills.dataAnalytics]
  },
  {
    title: "Core CS & Tools",
    icon: <Code2 className="text-[#F97316]" size={24} />,
    skills: [...portfolioData.skills.coreCS, ...portfolioData.skills.tools]
  },
  {
    title: "Soft Skills",
    icon: <Users className="text-[#F97316]" size={24} />,
    skills: portfolioData.skills.soft
  }
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Technical Proficiency" subtitle="MY SKILLS" className="bg-white/40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl hover:border-[#FED7AA] transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#FAF7F0] rounded-xl shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <div key={skill} className="px-3 py-1.5 bg-[#FAF7F0] border border-[#E8E4DC] rounded-lg text-sm font-medium text-slate-600 hover:text-[#F97316] hover:border-[#FED7AA] transition-colors shadow-sm cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </SectionWrapper>
  );
}
