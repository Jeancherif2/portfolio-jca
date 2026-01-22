
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 text-white rounded-full shadow-2xl font-mono text-xs uppercase tracking-tighter"
    >
      <Globe size={14} className="text-red-500" />
      <span>{language}</span>
    </motion.button>
  );
};

export default LanguageToggle;
