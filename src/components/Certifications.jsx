import SectionWrapper from './SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Award, Calendar, FileText } from 'lucide-react';
import klicCertImg from '../assets/klic-cert.jpg';
import genaiCertImg from '../assets/genai-cert.png';
import hopeFoundationImg from '../assets/hope-foundation-training.jpg';

const certImages = {
  'klic-cert.jpg': klicCertImg,
  'genai-cert.png': genaiCertImg,
  'hope-foundation-training.jpg': hopeFoundationImg
};

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications" subtitle="PROFESSIONAL ACHIEVEMENTS">
      <div className="max-w-5xl mx-auto space-y-8 mt-8">
        {portfolioData.certifications.map((cert, idx) => (
          <div key={idx} className="glass overflow-hidden rounded-2xl border-l-4 border-l-[#F59E0B] hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg group flex flex-col md:flex-row">
            
            {/* Content Section */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-[#171717] mb-2">{cert.title}</h4>
              <div className="text-[#F59E0B] font-medium mb-6 text-lg">{cert.issuer}</div>
              
              {cert.date && (
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-white w-fit px-4 py-2 rounded-md mb-4 shadow-sm border border-slate-100">
                  <Calendar size={16} className="text-[#F59E0B]" />
                  {cert.date}
                </div>
              )}
              
              {cert.description && (
                <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-6 mt-2">
                  {cert.description}
                </p>
              )}
            </div>
            
            {/* Image Section */}
            {cert.image && certImages[cert.image] ? (
              <div className="md:w-1/2 bg-white/40 p-6 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-200/50">
                <div className="overflow-hidden rounded-xl shadow-md border border-slate-200 bg-white w-full">
                  <img 
                    src={certImages[cert.image]} 
                    alt={`${cert.title} certificate issued by ${cert.issuer} - Professional certification for Ananya Deshpande`} 
                    className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500 max-h-48 md:max-h-64"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-48 flex flex-col items-center justify-center text-slate-400 bg-slate-50 rounded-xl">
                          <FileText size={48} class="mb-2" />
                          <p class="text-sm">Certificate image not available</p>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            ) : cert.image ? (
              <div className="md:w-1/2 bg-white/40 p-6 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-200/50">
                <div className="w-full h-48 flex flex-col items-center justify-center text-slate-400 bg-slate-50 rounded-xl">
                  <FileText size={48} className="mb-2" />
                  <p class="text-sm">Certificate image not available</p>
                </div>
              </div>
            ) : null}
            
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
