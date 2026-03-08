import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full h-96 bg-slate-900/50 rounded-[100%] blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">

          <ShieldCheckIcon className="w-4 h-4" />
          <span>Advanced AI Deepfake Detector</span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.1
          }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">

          Detect Fake Media <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
            Before It Spreads
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">

          Protect yourself and your audience from misinformation. Aletheia AI
          uses state-of-the-art machine learning to verify social media videos
          and perform fake image detection in seconds.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 group">

            Try Aletheia AI
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800/50 border border-slate-700 text-white font-semibold text-lg hover:bg-slate-800 transition-all backdrop-blur-sm">

            Learn How It Works
          </Link>
        </motion.div>
      </div>
    </section>);

}