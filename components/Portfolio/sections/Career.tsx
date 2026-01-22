import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { ExternalLink, Quote } from 'lucide-react';

const Career: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Nurova inc",
      role: t('expNurova'),
      period: "Juin 2025 - Present",
      desc: t('expNurovaDesc'),
    },
    {
      company: "3 Brasseurs Qc",
      role: t('expBrasseurs'),
      period: "Mars 2022 - Déc 2025",
      desc: t('expBrasseursDesc'),
    }
  ];

  return (
    <section id="career" className="py-20 md:py-40 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
        <div className="lg:col-span-5 flex flex-col h-full">
          <h2 className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4">{t('careerSubtitle')}</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">{t('careerTitle')}</h3>
          
          <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-3xl space-y-6 flex-grow flex flex-col overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">{t('careerReferenceLabel')}</div>
              <Quote size={20} className="text-red-500 opacity-50" />
            </div>
            
            <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar max-h-[400px]">
              <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base whitespace-pre-line">
                {t('aboutFullRecommendation' as any)}
              </p>
            </div>
            
            <div className="pt-6 border-t border-zinc-900 mt-auto">
              <div className="font-bold text-sm text-white">{t('careerRefTitle' as any)}</div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-tight">{t('careerRefSubTitle' as any)}</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 border-l border-zinc-900"
            >
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h4 className="text-2xl font-bold">{exp.company}</h4>
                <span className="text-xs font-mono text-zinc-600 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">{exp.period}</span>
              </div>
              <div className="text-red-500 font-mono text-xs uppercase tracking-tighter mb-4">{exp.role}</div>
              <p className="text-zinc-500 font-light leading-relaxed max-w-2xl">
                {exp.desc}
              </p>
            </motion.div>
          ))}
          
          <div className="pt-12 border-t border-zinc-900">
             <div className="flex items-center justify-between p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 hover:bg-zinc-900/50 transition-colors group cursor-pointer">
                <div>
                   <div className="text-[10px] font-mono text-zinc-600 uppercase mb-1">{t('careerEducationLabel')}</div>
                   <div className="font-bold">{t('eduDec')}</div>
                   <div className="text-xs text-zinc-500">{t('eduSchool')} — 2022/2025</div>
                </div>
                <ExternalLink className="text-zinc-700 group-hover:text-white transition-colors" size={20} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
