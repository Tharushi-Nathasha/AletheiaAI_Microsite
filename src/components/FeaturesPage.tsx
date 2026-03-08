import React from 'react';
import { motion } from 'framer-motion';
import {
  ImageIcon,
  VideoIcon,
  BarChart3Icon,
  EyeIcon,
  ZapIcon,
  UsersIcon,
  ArrowRightIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const features = [
{
  icon: ImageIcon,
  title: 'Image Deepfake Detection',
  description:
  'Analyze still images for generative AI artifacts, face-swapping, and digital manipulation.'
},
{
  icon: VideoIcon,
  title: 'Video Deepfake Detection',
  description:
  'Frame-by-frame analysis to detect fake video content, audio-visual sync issues, and temporal inconsistencies.'
},
{
  icon: BarChart3Icon,
  title: 'AI Confidence Score',
  description:
  'Clear, actionable metrics that quantify the probability of media manipulation.'
},
{
  icon: EyeIcon,
  title: 'Visual Heatmap Explanation',
  description:
  'Transparent AI that shows its work by highlighting the exact pixels that triggered the detection.'
},
{
  icon: ZapIcon,
  title: 'Fast Analysis',
  description:
  'Optimized cloud infrastructure delivers verification results in seconds, not minutes.'
},
{
  icon: UsersIcon,
  title: 'Easy to Use Interface',
  description:
  'Designed for everyone. No technical expertise required to verify social media videos and images.'
}];

export function FeaturesPage() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1
  });
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Powerful Features for Media Verification
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to combat misinformation. Our comprehensive
            deepfake detection tool is built for accuracy and transparency.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={
            isVisible ?
            {
              opacity: 1,
              y: 0
            } :
            {
              opacity: 0,
              y: 20
            }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/80 hover:border-slate-700 transition-all cursor-pointer hover:-translate-y-1">

              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 text-slate-400 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Backlinks */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/how-it-works"
            className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 transition-all">

            See How It Works
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 transition-all">

            Learn About Us
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 group">

            Get Early Access
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>);

}