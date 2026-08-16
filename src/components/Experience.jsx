import SectionWrapper from './SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="MY PROFESSIONAL JOURNEY" className="bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-4 border-[#FFEDD5] ml-6 md:ml-8 pb-8">
          
          {portfolioData.internships.map((job, idx) => (
            <div key={idx} className="mb-12 relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute w-8 h-8 bg-[#F97316] rounded-full -left-[18px] top-1 border-4 border-white shadow-sm flex items-center justify-center">
                <Briefcase size={12} className="text-white" />
              </div>
              
              <div className="glass rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#F97316] transition-colors">
                      {job.title}
                    </h3>
                    <div className="text-lg font-medium text-slate-600 mt-1">
                      {job.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 shrink-0 text-sm font-medium text-slate-500 bg-slate-100 px-4 py-2 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#F97316]" />
                      {job.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#F97316]" />
                      {job.location}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  {job.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 size={20} className="text-[#F97316] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{resp}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200/60">
                  <span className="text-sm font-bold text-slate-500 mr-3">Tools:</span>
                  <div className="inline-flex flex-wrap gap-2">
                    {job.tools.map(tool => (
                      <span key={tool} className="px-3 py-1 bg-[#FEF8EC] border border-slate-200 text-slate-600 rounded-md text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </SectionWrapper>
  );
}
