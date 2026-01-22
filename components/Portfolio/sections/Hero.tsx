
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../translations';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const langData = translations[language];

  return (
    <section id="home" className="pt-40 pb-20 md:pt-60 md:pb-40 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <h2 className="text-zinc-500 font-mono text-xs md:text-sm flex items-center gap-3">
            <span className="w-8 md:w-12 h-[1px] bg-zinc-800"></span>
            {t('heroRole' as any)}
          </h2>
          <div className="flex items-center gap-2 px-3 py-1 bg-red-500/5 border border-red-500/10 rounded-full">
            <span className="text-[10px] font-mono text-red-500/50 uppercase tracking-widest">{t('heroAliasLabel' as any)}:</span>
            <motion.span 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-tighter"
            >
              {t('heroAliasValue' as any)}
            </motion.span>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
          {t('heroTitle' as any).split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}<br />
            </React.Fragment>
          ))}
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
          {t('heroDesc' as any)}
        </p>
        
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#work" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all font-mono text-sm uppercase inline-block">
            {t('heroWorkBtn' as any)}
          </a>
          <a href={langData.links.mail} className="px-10 py-4 bg-transparent text-white font-bold rounded-full border border-zinc-800 hover:bg-zinc-900 transition-all font-mono text-sm uppercase inline-block text-center">
            {t('heroContactBtn' as any)}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
