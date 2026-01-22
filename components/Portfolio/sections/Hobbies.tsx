import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { Bike, Snowflake, Dribbble, Dumbbell, Gamepad2, Music, Activity, Compass, Wind } from 'lucide-react';

const Hobbies: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hobbies" className="py-20 md:py-40 scroll-mt-24">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-red-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            {t('hobbiesSubtitle' as any)}
          </h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            {t('hobbiesTitle' as any)}
          </h3>
        </div>
        <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest border-l border-zinc-900 pl-6 hidden md:block">
          System Alias: The Real-Cooker<br/>
          Location: 46.8139° N, 71.2080° W
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 group relative p-8 bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-800 group-hover:border-red-500 transition-colors" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-800 group-hover:border-red-500 transition-colors" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-zinc-800 group-hover:border-red-500 transition-colors" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-800 group-hover:border-red-500 transition-colors" />
          
          <div className="flex justify-between items-start mb-12">
            <div>
              <div className="text-[10px] font-mono text-zinc-600 mb-1 uppercase tracking-tighter">Module // 01</div>
              <h4 className="text-3xl font-black uppercase italic">{t('hobbyMoto' as any)}</h4>
            </div>
            <Bike size={40} className="text-zinc-800 group-hover:text-red-500 transition-colors" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
            <p className="text-zinc-500 max-w-sm font-light text-sm leading-relaxed uppercase italic">
              {t('hobbyMotoDesc' as any)}
            </p>
            <div className="font-mono text-[9px] text-zinc-700 flex flex-col gap-1 text-right">
              <span className="group-hover:text-red-500 transition-colors">THROTTLE_POSITION: 100%</span>
              <span>GEAR_RATIO: OPTIMAL</span>
              <span>ENGINE_TEMP: 92°C</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 group relative p-8 bg-zinc-950 border border-zinc-900 rounded-sm flex flex-col justify-between"
        >
          <div className="absolute top-4 right-4"><Snowflake size={24} className="text-zinc-800 group-hover:text-blue-500 transition-colors" /></div>
          <div>
            <div className="text-[10px] font-mono text-zinc-600 mb-1 uppercase tracking-tighter">Module // 02</div>
            <h4 className="text-2xl font-black uppercase mb-4">{t('hobbySnow' as any)}</h4>
            <div className="w-full h-[1px] bg-zinc-900 group-hover:bg-blue-500/20 mb-4" />
            <p className="text-zinc-500 text-xs uppercase italic">{t('hobbySnowDesc' as any)}</p>
          </div>
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-2">
              <Wind size={12} className="text-zinc-700" />
              <div className="h-1 flex-grow bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  className="h-full bg-blue-500" 
                />
              </div>
            </div>
            <div className="text-[9px] font-mono text-zinc-700 text-right uppercase">Altitude: 2400m</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 group relative p-8 bg-zinc-950 border border-zinc-900 rounded-sm"
        >
          <div className="text-[10px] font-mono text-zinc-600 mb-6 uppercase tracking-tighter">Module // 03</div>
          <Dribbble size={32} className="text-zinc-800 group-hover:text-orange-500 transition-colors mb-4" />
          <h4 className="text-2xl font-black uppercase mb-2">{t('hobbyBasket' as any)}</h4>
          <p className="text-zinc-500 text-xs uppercase mb-6">{t('hobbyBasketDesc' as any)}</p>
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-4 bg-zinc-900 group-hover:bg-orange-500/20" />)}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 group relative p-8 bg-zinc-950 border border-zinc-900 rounded-sm flex flex-col justify-between"
        >
           <div className="flex justify-between items-start">
            <h4 className="text-2xl font-black uppercase">{t('hobbyGym' as any)}</h4>
            <Dumbbell size={24} className="text-zinc-800 group-hover:text-red-500 transition-colors" />
          </div>
          <div className="flex items-center gap-4 mt-8">
            <Activity size={32} className="text-red-500/20 group-hover:text-red-500 transition-colors" />
            <div className="flex-grow">
               <div className="text-[9px] font-mono text-zinc-600 mb-1 uppercase">Output_Efficiency</div>
               <div className="h-1 bg-zinc-900 relative">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} className="absolute inset-0 bg-red-500" />
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 group relative p-8 bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.03),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex gap-4 mb-8">
               <Gamepad2 size={24} className="text-zinc-800 group-hover:text-purple-500 transition-colors" />
               <Music size={24} className="text-zinc-800 group-hover:text-green-500 transition-colors" />
            </div>
            <div>
               <h4 className="text-xl font-black uppercase leading-tight mb-2">
                 {t('hobbyGame' as any)} <span className="text-zinc-800 mx-2">&</span> {t('hobbyMusic' as any)}
               </h4>
               <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                 System: Multitasking_Mode_ON
               </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:col-span-12 group relative p-8 bg-zinc-900/20 border border-zinc-900 rounded-sm overflow-hidden"
        >
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-grow">
              <div className="text-[10px] font-mono text-zinc-600 mb-4 uppercase tracking-tighter">Module // 06 // Attributes</div>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500/50 group-hover:bg-red-500 transition-colors" />
                    <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors uppercase tracking-tight">
                      {t(`profileQuality${i}` as any)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-64 p-4 bg-black border border-red-500/20 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 text-[8px] font-mono text-red-500/50 uppercase">Critical_Status</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-white uppercase">{t('profileQuality7' as any)}</span>
                </div>
                <p className="text-[9px] font-mono text-zinc-500 uppercase leading-tight italic">
                  {t('profileQuality7Desc' as any)}
                </p>
                <div className="pt-2">
                  <div className="h-0.5 w-full bg-zinc-900 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-red-500/40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 flex justify-center">
         <div className="flex items-center gap-4 px-6 py-2 border border-zinc-900 rounded-full font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
            <Compass size={12} className="animate-spin-slow" />
            Exploring New Terrains daily
            <div className="w-1 h-1 rounded-full bg-red-500" />
            Operational Capacity: 100%
         </div>
      </div>
    </section>
  );
};

export default Hobbies;