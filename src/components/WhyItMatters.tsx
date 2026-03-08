import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export function WhyItMatters() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2
  });
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={
            isVisible ?
            {
              opacity: 1,
              x: 0
            } :
            {
              opacity: 0,
              x: -30
            }
            }
            transition={{
              duration: 0.6
            }}>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Why Deepfake Detection Matters
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              In an era where seeing is no longer believing, misinformation
              spreads faster than ever. Synthetic media can manipulate public
              opinion, damage reputations, and commit fraud.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Aletheia AI provides the essential layer of trust needed for the
              modern internet. By utilizing advanced AI media verification, we
              empower users to detect fake video and image content before it
              causes harm.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-cyan-500 pl-4">
                <div className="text-3xl font-heading font-bold text-white mb-1">
                  900%
                </div>
                <div className="text-sm text-slate-400">
                  Increase in deepfakes online since 2020
                </div>
              </div>
              <div className="border-l-2 border-teal-500 pl-4">
                <div className="text-3xl font-heading font-bold text-white mb-1">
                  99.8%
                </div>
                <div className="text-sm text-slate-400">
                  Detection accuracy with Aletheia AI
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={
            isVisible ?
            {
              opacity: 1,
              scale: 1
            } :
            {
              opacity: 0,
              scale: 0.95
            }
            }
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="relative">

            <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden relative shadow-2xl">
              {/* Abstract representation of scanning an image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>

              {/* Scanning line animation */}
              <motion.div
                animate={{
                  top: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 4,
                  ease: 'linear',
                  repeat: Infinity
                }}
                className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20">
              </motion.div>

              {/* Heatmap overlay simulation */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/40 blur-xl rounded-full mix-blend-screen"></div>
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-orange-500/40 blur-xl rounded-full mix-blend-screen"></div>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400 mb-1">
                    Analysis Result
                  </div>
                  <div className="font-heading font-bold text-red-400">
                    Manipulation Detected
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400 mb-1">Confidence</div>
                  <div className="font-heading font-bold text-white">98.4%</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>);

}