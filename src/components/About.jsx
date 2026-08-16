import { portfolioData } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';
import { User, Code2, Database } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="GET TO KNOW ME">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="relative">
          {/* Aesthetic background behind image placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F97316] to-[#F59E0B] rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
          
          <div className="glass rounded-3xl p-8 relative z-10 aspect-square flex flex-col justify-center items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-xl border-4 border-white/50">
              <img src={profileImg} alt="Ananya Prakash Deshpande - Data Analyst and Frontend Developer" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Ananya Deshpande</h3>
            <p className="text-[#F97316] font-medium mb-6">{portfolioData.personal.role}</p>
            
            <div className="flex gap-4 justify-center">
              <div className="flex flex-col items-center p-3 glass rounded-xl w-24">
                <Code2 className="text-[#F97316] mb-2" size={24} />
                <span className="text-xs font-bold text-slate-600 uppercase">Frontend</span>
              </div>
              <div className="flex flex-col items-center p-3 glass rounded-xl w-24">
                <Database className="text-[#F59E0B] mb-2" size={24} />
                <span className="text-xs font-bold text-slate-600 uppercase">Data</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            A passionate student driven by <span className="text-gradient">data and code</span>.
          </h3>
          
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              I am an aspiring MCA student and a recent B.Sc. Computer Science graduate from MGM University. 
              My journey in tech is fueled by a deep curiosity for both how data shapes our world and how code brings ideas to life.
            </p>
            <p>
              {portfolioData.personal.objective}
            </p>
            <p>
              When I'm not studying or coding, I'm constantly looking for opportunities to expand my skill set and take on new challenges in Data Analytics and Frontend Development.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-slate-700 bg-slate-100 px-4 py-2 rounded-lg font-medium">
              <User size={18} className="text-[#F97316]" />
              Available for Hire
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
