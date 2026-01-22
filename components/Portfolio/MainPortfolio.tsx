
import React from 'react';
import Navbar from './Navbar';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Career from './sections/Career';
import Hobbies from './sections/Hobbies';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

interface MainPortfolioProps {
  onDisconnect: () => void;
}

const MainPortfolio: React.FC<MainPortfolioProps> = ({ onDisconnect }) => {
  const { t, language } = useLanguage();
  const langData = translations[language];

  return (
    <div className="bg-black text-white min-h-screen selection:bg-red-500/40 selection:text-white">
      <Navbar onDisconnect={onDisconnect} />
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <Hero />
        <Work />
        <Career />
        <Hobbies />
        
        <footer className="mt-40 pt-20 border-t border-zinc-900/50 text-center pb-20">
          <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-6">
            {t('footerCopyright' as any)}
          </div>
          <div className="flex justify-center gap-10">
            <a href={langData.links.gitLab} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-tighter text-zinc-500 hover:text-white transition-colors">
              {t('footerGitLab' as any)}
            </a>
            <a href={langData.links.linkedIn} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-tighter text-zinc-500 hover:text-white transition-colors">
              {t('footerLinkedIn' as any)}
            </a>
            <a href={langData.links.mail} className="text-xs font-mono uppercase tracking-tighter text-zinc-500 hover:text-white transition-colors">
              {t('footerMail' as any)}
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MainPortfolio;
