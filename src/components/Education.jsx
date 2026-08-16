import SectionWrapper from './SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, Laptop, BookOpen, FlaskConical } from 'lucide-react';

const getEducationIcon = (type) => {
  switch (type) {
    case 'Postgraduate':
      return <Laptop size={24} className="text-[#F97316]" />;
    case 'Graduate':
      return <GraduationCap size={24} className="text-[#F97316]" />;
    case 'Higher Secondary Education':
      return <FlaskConical size={24} className="text-[#F97316]" />;
    default:
      return <BookOpen size={24} className="text-[#F97316]" />;
  }
};

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education" subtitle="ACADEMIC BACKGROUND">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {portfolioData.education.map((edu, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl border-t-4 border-t-[#F97316] hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg group flex flex-col h-full">
            
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-white border border-orange-100 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {getEducationIcon(edu.type)}
              </div>
              {edu.percentage && (
                <span className="flex items-center gap-1 text-sm font-bold text-slate-700 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">
                  <Award size={14} className="text-[#F59E0B]" />
                  {edu.percentage}
                </span>
              )}
            </div>
            
            <span className="text-xs font-bold px-3 py-1 bg-orange-100 text-[#F97316] rounded-full uppercase tracking-wide w-fit mb-3">
              {edu.type}
            </span>
            
            <h4 className="text-xl font-bold text-[#171717] mb-2 group-hover:text-[#F97316] transition-colors">{edu.degree}</h4>
            <div className="text-slate-600 font-medium mb-4 text-sm">{edu.institution}</div>
            
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-white w-fit px-3 py-1.5 rounded-md mb-4 shadow-sm border border-slate-100 mt-auto">
              <Calendar size={14} className="text-[#F97316]" />
              {edu.duration}
            </div>
            
            {edu.description && (
              <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-4 mt-4">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
