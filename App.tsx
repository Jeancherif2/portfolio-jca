import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from './components/Intro/IntroScreen';
import MainPortfolio from './components/Portfolio/MainPortfolio';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

const App: React.FC = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handleEnter = useCallback(() => {
    setDirection(1);
    setShowPortfolio(true);
  }, []);

  const handleDisconnect = useCallback(() => {
    setDirection(-1);
    setShowPortfolio(false);
  }, []);

  return (
    <LanguageProvider>
      <div className="relative h-screen w-full bg-black overflow-hidden">
        <LanguageToggle />
        <AnimatePresence initial={false} custom={direction}>
          {!showPortfolio ? (
            <motion.div
              key="intro"
              custom={direction}
              initial={{ opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 z-10"
            >
              <IntroScreen onEnter={handleEnter} />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              custom={direction}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 h-full w-full overflow-y-auto scroll-smooth z-20"
            >
              <MainPortfolio onDisconnect={handleDisconnect} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
};

export default App;
