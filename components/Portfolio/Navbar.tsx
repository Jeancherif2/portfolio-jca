
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Power, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import ProfileOverlay from './ProfileOverlay';
import { NAV_LINKS } from '../../constants';

interface NavbarProps {
  onDisconnect: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDisconnect }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showDisconnectConfirm, setShowDisconnectConfirm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`max-w-4xl mx-auto rounded-full transition-all duration-300 pointer-events-auto
            ${isScrolled ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] py-2 px-6' : 'bg-white/5 backdrop-blur-md border border-white/10 py-4 px-4'}`}
        >
          <div className="flex items-center justify-between">
            <div 
              onClick={() => setProfileOpen(true)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800 transition-transform group-hover:scale-110">
                <img src="/images/j-c-a.jpg" alt="Me" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-xs font-mono leading-none">JC<span className="text-red-500">.</span>AYANOU</div>
                <div className="text-[9px] text-zinc-500 uppercase tracking-tighter">{t('profileViewIdentity' as any)}</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-colors"
                >
                  {t(link.labelKey as any)}
                </a>
              ))}
              
              <button 
                onClick={() => setShowDisconnectConfirm(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white transition-all group"
                title={t('navDisconnect' as any)}
              >
                <Power size={12} className="group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-mono uppercase font-bold tracking-tighter">{t('navDisconnect' as any)}</span>
              </button>
            </div>

            <button 
              className="md:hidden p-1 text-zinc-400 hover:text-white flex items-center gap-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="md:hidden" onClick={(e) => {
                e.stopPropagation();
                setShowDisconnectConfirm(true);
              }}>
                <Power size={18} className="text-red-500" />
              </div>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden pointer-events-auto shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
          <div className="flex flex-col p-6 gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className="text-lg font-bold uppercase tracking-tight text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(link.labelKey as any)}
              </a>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setShowDisconnectConfirm(true);
              }}
              className="flex items-center gap-3 text-lg font-bold uppercase tracking-tight text-red-500"
            >
              <Power size={20} />
              {t('navDisconnect' as any)}
            </button>
          </div>
        </motion.div>
      </nav>
      <ProfileOverlay isOpen={profileOpen} onClose={() => setProfileOpen(false)} />

      {/* Disconnect Confirmation Popup */}
      <AnimatePresence>
        {showDisconnectConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-500/10 blur-[80px] -z-10" />
              
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-2">
                  <AlertTriangle size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-tighter">{t('disconnectConfirmTitle' as any)}</h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    {t('disconnectConfirmDesc' as any)}
                  </p>
                </div>

                <div className="grid grid-cols-1 w-full gap-3 pt-4">
                  <button
                    onClick={() => {
                      setShowDisconnectConfirm(false);
                      onDisconnect();
                    }}
                    className="w-full py-4 bg-red-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-red-600 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.3)] flex items-center justify-center gap-2"
                  >
                    <Power size={16} />
                    {t('disconnectConfirmBtn' as any)}
                  </button>
                  <button
                    onClick={() => setShowDisconnectConfirm(false)}
                    className="w-full py-4 bg-zinc-900 text-zinc-400 rounded-2xl font-bold text-sm uppercase tracking-widest hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800"
                  >
                    {t('disconnectCancelBtn' as any)}
                  </button>
                </div>
                
                <div className="pt-4 flex items-center gap-2 text-[8px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
                  <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                  System_Status: Awaiting_Confirmation
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
