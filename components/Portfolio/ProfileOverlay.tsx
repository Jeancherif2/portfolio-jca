
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Linkedin, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

interface ProfileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileOverlay: React.FC<ProfileOverlayProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const langData = translations[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-5xl h-full max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-y-auto relative p-8 md:p-16 custom-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-zinc-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1 space-y-8">
                <div className="space-y-4">
                  <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-red-500/20 relative group">
                    <img src="/images/j-c-a.jpg" alt="Jean-Chérif" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black tracking-tighter">Jean-Chérif<br/>Ayanou Hafez</h2>
                    <p className="font-mono text-[10px] text-red-500 uppercase tracking-widest mt-1">{t('heroRole' as any)}</p>
                  </div>
                </div>

                <div className="p-4 bg-zinc-900/50 border border-red-500/10 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield size={12} className="text-red-500" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{t('profileAlias' as any)}</span>
                  </div>
                  <div className="text-sm font-mono text-red-500 font-bold uppercase tracking-tight">
                    the real-cooker<br/>the master-chief
                  </div>
                </div>

                <div className="space-y-4 text-sm font-mono text-zinc-400">
                  <a href={langData.links.mail} className="flex items-center gap-3 hover:text-white transition-colors"><Mail size={14} className="text-zinc-600" /> noayanou@gmail.com</a>
                  <div className="flex items-center gap-3"><Phone size={14} className="text-zinc-600" /> +1 581-748-9583</div>
                  <div className="flex items-center gap-3"><MapPin size={14} className="text-zinc-600" /> {t('profileLocation' as any)}</div>
                  <a href={langData.links.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors"><Linkedin size={14} className="text-zinc-600" /> jean-cherif-ayanou</a>
                </div>

                <div className="pt-8 border-t border-zinc-900">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6">{t('profileLanguages' as any)}</h3>
                  <div className="space-y-2 text-sm text-zinc-300">
                    <div className="flex justify-between"><span>Français</span> <span className="text-zinc-600">{t('profileLangNative' as any)}</span></div>
                    <div className="flex justify-between"><span>English</span> <span className="text-zinc-600">{t('profileLangProfessional' as any)}</span></div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6">{t('profileEducation' as any)}</h3>
                  <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <h4 className="text-xl font-bold">{t('eduDec' as any)}</h4>
                    <p className="text-zinc-400">{t('eduSchool' as any)}</p>
                    <p className="text-xs font-mono text-zinc-600 mt-2">2022 - 2025</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6">{t('profileSkills' as any)}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["HTML/CSS/SCSS", "JS/TS", "Python", "Node.js", "MongoDB", "C# / .NET", "Kotlin", "React / Vue", "Django", "Flask", "AWS", "Expo-Go"].map(skill => (
                      <div key={skill} className="px-4 py-3 bg-zinc-900 rounded-xl border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2 hover:bg-zinc-800 transition-colors">
                        <div className="w-1 h-1 bg-red-500 rounded-full" /> {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6">{t('profileTools' as any)}</h3>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                    {["JetBrains", "Cursor", "Jira", "Git", "Trello", "Excalidraw", "Linux", "VSCode", "Rider", "Electron", "Docker",].map(tool => (
                      <span key={tool} className="px-3 py-1 border border-zinc-900 rounded-full hover:border-zinc-700 transition-colors cursor-default">{tool}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6">{t('profileQualities' as any)}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-2xl space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">{t('profileQuality1' as any)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">{t('profileQuality2' as any)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">{t('profileQuality3' as any)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">{t('profileQuality4' as any)}</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-2xl space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">{t('profileQuality5' as any)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">{t('profileQuality6' as any)}</span>
                      </div>
                      <div className="group relative">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                          <span className="text-[10px] font-mono text-white uppercase font-bold">{t('profileQuality7' as any)}</span>
                        </div>
                        <p className="text-[9px] font-mono text-zinc-600 mt-1 ml-4 italic">{t('profileQuality7Desc' as any)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileOverlay;
