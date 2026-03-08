import React from 'react';
import { motion } from 'framer-motion';
import {
  UploadIcon,
  BrainCircuitIcon,
  CheckCircleIcon,
  ArrowRightIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const steps = [
{
  icon: UploadIcon,
  title: 'Upload Media',
  description:
  'Upload any image or short video from social media directly into our secure platform.'
},
{
  icon: BrainCircuitIcon,
  title: 'AI Analysis',
  description:
  'Our proprietary neural networks analyze the media for facial inconsistencies, blending artifacts, and unnatural movements.'
},
{
  icon: CheckCircleIcon,
  title: 'Get Results',
  description:
  'Receive an instant confidence score and a visual heatmap highlighting manipulated regions.'
}];

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2
  });
  return (
    <section
      id="how-it-works"
      className="py-24 bg-slate-900 relative border-t border-slate-800/50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            How Aletheia AI Works
          </h2>
          <p className="text-lg text-slate-400">
            Our deepfake detection tool simplifies complex AI media verification
            into three easy steps, delivering results in seconds.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800 z-0">
            <motion.div
              initial={{
                width: 0
              }}
              animate={
              isVisible ?
              {
                width: '100%'
              } :
              {
                width: 0
              }
              }
              transition={{
                duration: 1.5,
                ease: 'easeInOut'
              }}
              className="h-full bg-gradient-to-r from-cyan-500 to-teal-500" />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) =>
            <motion.div
              key={step.title}
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
                delay: index * 0.3
              }}
              className="flex flex-col items-center text-center">

                <div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <step.icon className="w-10 h-10 text-cyan-400 relative z-10" />

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold flex items-center justify-center border-4 border-slate-900">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-400">{step.description}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Explanation Box */}
        <motion.div
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
            duration: 0.6,
            delay: 1
          }}
          className="mt-20 bg-slate-800/50 border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Understanding the Confidence Score
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                The AI confidence score is a percentage that represents the
                likelihood of manipulation. A score above 80% strongly indicates
                a deepfake, while scores below 20% suggest authentic media.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                Reading the Visual Heatmap
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                The heatmap overlays the original media, highlighting specific
                areas (like facial boundaries or unnatural lighting) where the
                AI deepfake detector found anomalies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Backlinks */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/features"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 group">

            Explore All Features
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 transition-all">

            Try Aletheia AI
          </Link>
        </div>
      </div>
    </section>);

}