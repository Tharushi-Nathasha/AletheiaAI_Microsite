import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, BarChart3Icon, EyeIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const highlights = [
{
  icon: ShieldCheckIcon,
  title: 'AI-Powered Detection',
  description:
  'Our deepfake detection tool analyzes pixel-level inconsistencies invisible to the human eye.'
},
{
  icon: BarChart3Icon,
  title: 'Confidence Score',
  description:
  'Get a clear, percentage-based probability score indicating if the media has been manipulated.'
},
{
  icon: EyeIcon,
  title: 'Visual Heatmap',
  description:
  'See exactly where the AI media verification detected alterations with our intuitive heatmap overlay.'
}];

export function FeaturesHighlight() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-12 bg-slate-950 relative z-20 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) =>
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            isVisible ?
            {
              opacity: 1,
              y: 0
            } :
            {
              opacity: 0,
              y: 30
            }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm">

              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}