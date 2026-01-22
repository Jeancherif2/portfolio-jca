
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridBackground from './GridBackground';
import TypewriterText from './TypewriterText';
import { ArrowRight, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const { t, language } = useLanguage();
  const [isBooting, setIsBooting] = useState(false);
  const [bootLogs, setBootLogs] = useState<string[]>([]);

  const logs = [
    "> INITIALIZING_SYSTEM_CORE...",
    "> LOADING_KERNEL_MODULES...",
    "> MOUNTING_FILESYSTEMS...",
    "> ESTABLISHING_SECURE_CONNECTION...",
    "> BYPASSING_FIREWALL...",
    "> ACCESS_GRANTED",
    "> REDIRECTING_TO_IDENTITY_MODULE..."
  ];

  const handleStartBoot = () => {
    setIsBooting(true);
    let currentLog = 0;
    
    const interval = setInterval(() => {
      if (currentLog < logs.length) {
        const nextLog = logs[currentLog];
        if (nextLog) {
          setBootLogs(prev => [...prev, nextLog]);
        }
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onEnter();
        }, 500);
      }
    }, 400);

    return () => clearInterval(interval);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      <GridBackground />
      
      <AnimatePresence mode="wait">
        {!isBooting ? (
          <motion.div 
            key="intro-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center"
          >
            <div className="z-10 text-center select-none pointer-events-none">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
                <TypewriterText 
                  key={language}
                  text={t('introText')}
                  speed={50}
                />
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="z-10 mt-12"
            >
              <button
                onClick={handleStartBoot}
                className="group relative px-10 py-4 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3 font-mono text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span>{t('enterBtn' as any)}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="booting-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="z-50 flex flex-col items-center justify-center w-full max-w-md"
          >
            <div className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3 }}
                  className="h-full bg-red-500"
                />
              </div>

              <div className="flex items-center gap-3 mb-6 text-zinc-500 border-b border-zinc-900 pb-4">
                <Terminal size={18} className="text-red-500" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em]">System_Boot_Protocol_v4.0</span>
              </div>

              <div className="space-y-2 h-40 font-mono text-[10px] md:text-xs">
                {bootLogs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`${log?.includes('GRANTED') ? 'text-green-500 font-bold' : 'text-zinc-500'}`}
                  >
                    {log}
                  </motion.div>
                ))}
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-red-500 align-middle ml-1"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroScreen;
