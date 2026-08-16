import SectionWrapper from './SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { FolderGit2, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectTitle) => {
    setImageErrors(prev => ({ ...prev, [projectTitle]: true }));
  };

  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="MY WORK">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {portfolioData.projects.map((project, idx) => (
          <div key={idx} className="glass rounded-3xl overflow-hidden flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300">
            
            {project.image && !imageErrors[project.title] ? (
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                <img 
                  src={project.image} 
                  alt={`${project.title} - Project by Ananya Deshpande`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={() => handleImageError(project.title)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ) : (
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon size={48} className="text-orange-300 mx-auto mb-2" />
                  <p className="text-orange-400 text-sm font-medium">Project Image</p>
                </div>
              </div>
            )}
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FEF8EC] flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-300">
                  <FolderGit2 size={24} />
                </div>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#F97316] hover:border-[#F97316] transition-colors">
                  <ArrowUpRight size={20} />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tools.map(tool => (
                  <span key={tool} className="text-xs font-semibold text-[#F97316] bg-[#FEF8EC] px-3 py-1.5 rounded-md">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </SectionWrapper>
  );
}
