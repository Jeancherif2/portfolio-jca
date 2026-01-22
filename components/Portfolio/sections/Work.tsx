
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../../constants';
import { ArrowUpRight, X, ExternalLink, Monitor } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

const ProjectCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.2)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(0, h * 0.5 + Math.sin(time + i) * 30);
        ctx.bezierCurveTo(
          w * 0.3, h * 0.5 + Math.sin(time + i + 1) * 80,
          w * 0.7, h * 0.5 + Math.cos(time + i + 2) * 80,
          w, h * 0.5 + Math.sin(time + i + 3) * 30
        );
        ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" width={400} height={250} />;
};

const Work: React.FC = () => {
  const { t } = useLanguage();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <section id="work" className="py-20 scroll-mt-24">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4">// {t('workSubtitle' as any)}</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter">{t('workTitle' as any)}</h3>
        </div>
        <div className="text-zinc-600 font-mono text-[10px] hidden md:block">
          {t('workExplore' as any)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, idx) => {
          const hasLivePreview = project.id.includes('3skimos') || 
                               project.id.includes('noletandrews') || 
                               project.id.includes('streamsbuddy');
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer block"
              onClick={() => {
                if (hasLivePreview) {
                  setPreviewUrl(project.link);
                } else {
                  window.open(project.link, '_blank');
                }
              }}
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 mb-8 border border-zinc-900 transition-all group-hover:border-red-500/20">
                
                {project.mediaType === 'video' ? (
                  <video 
                    src={project.mediaUrl} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                  />
                ) : project.mediaType === 'canvas' ? (
                  <div className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity">
                    <ProjectCanvas />
                  </div>
                ) : (
                  <img 
                    src={project.mediaUrl} 
                    alt={t(project.titleKey as any)}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100">
                  <div className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm flex items-center gap-2 shadow-2xl">
                    {hasLivePreview ? (
                      <>
                        <Monitor size={16} />
                        Live Preview
                      </>
                    ) : (
                      <>
                        <ExternalLink size={16} />
                        View Project
                      </>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 p-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="text-white" size={32} />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-tighter px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-red-500 transition-colors">{t(project.titleKey as any)}</h4>
              <p className="text-zinc-500 font-light leading-relaxed max-w-sm">{t(project.descKey as any)}</p>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setPreviewUrl(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-6xl h-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-zinc-900 flex items-center justify-between bg-zinc-950">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-zinc-800" />
                    <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    {previewUrl.replace('https://', '')}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={previewUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-500 hover:text-white transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <button 
                    onClick={() => setPreviewUrl(null)}
                    className="p-2 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Iframe content */}
              <div className="flex-grow bg-white relative">
                <iframe 
                  src={previewUrl} 
                  className="w-full h-full border-none"
                  title="Project Preview"
                />
                {/* Loader or fallback could go here if needed */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
