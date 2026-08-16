import SectionWrapper from './SectionWrapper';
import { Code, BookOpen, Cpu } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const toolsData = [
  {
    name: "VS Code",
    icon: <Code className="text-[#F97316]" size={28} />,
    description: "Primary code editor for development",
    category: "IDE"
  },
  {
    name: "GitHub",
    icon: <FiGithub className="text-[#F97316]" style={{ fontSize: '28px' }} />,
    description: "Version control and collaboration",
    category: "Development"
  },
  {
    name: "Antigravity",
    icon: <Cpu className="text-[#F59E0B]" size={28} />,
    description: "Development environment and tools",
    category: "Platform"
  },
  {
    name: "Jupyter Notebook",
    icon: <BookOpen className="text-[#F59E0B]" size={28} />,
    description: "Data analysis and documentation",
    category: "Data Science"
  }
];

export default function ToolsAndPlatforms() {
  return (
    <SectionWrapper id="tools" title="Tools & Platforms" subtitle="DEVELOPMENT ENVIRONMENT" className="bg-slate-50/50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {toolsData.map((tool, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl hover:border-[#FFEDD5] transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FEF8EC] rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                {tool.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2">{tool.name}</h3>
              
              <span className="text-xs font-semibold text-[#F97316] bg-[#FEF8EC] px-3 py-1 rounded-full mb-3">
                {tool.category}
              </span>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </SectionWrapper>
  );
}