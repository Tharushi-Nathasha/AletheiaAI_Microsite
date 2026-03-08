import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export function AboutPage() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2
  });
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 border-y border-slate-800/50 relative overflow-hidden">

      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none"></div>

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

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-teal-400 text-sm font-medium mb-6">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>Our Mission</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              About Aletheia AI
            </h2>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Named after the Greek goddess of truth, Aletheia AI was founded
                with a singular mission: to restore trust in digital media. As
                generative AI becomes more accessible, the line between reality
                and fabrication has blurred.
              </p>
              <p>
                The problem of misinformation and deepfakes is no longer a
                future threat—it is a present reality. From political
                manipulation to personal harassment, synthetic media poses a
                significant risk to society.
              </p>
              <p>
                Our AI deepfake detector is built to empower{' '}
                <strong className="text-white font-medium">
                  journalists, students, and everyday social media users
                </strong>
                . We believe that everyone should have access to
                enterprise-grade AI media verification tools to navigate the
                digital world safely.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={
            isVisible ?
            {
              opacity: 1,
              x: 0
            } :
            {
              opacity: 0,
              x: 30
            }
            }
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative">

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-t-3xl"></div>

            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              AI and Digital Media Safety
            </h3>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Verify Before Sharing
                  </h4>
                  <p className="text-sm text-slate-400">
                    Always use a deepfake detection tool when media seems
                    sensational or out of character.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Look for Artifacts
                  </h4>
                  <p className="text-sm text-slate-400">
                    Our visual heatmap trains your eye to spot unnatural
                    blending and lighting inconsistencies.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Promote Authenticity
                  </h4>
                  <p className="text-sm text-slate-400">
                    Join a community dedicated to fighting misinformation and
                    preserving digital truth.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Backlinks */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/features"
            className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 transition-all">

            View Features
          </Link>
          <Link
            to="/how-it-works"
            className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 transition-all">

            How It Works
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 group">

            Join the Community
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Learn More About Deepfakes */}
<div className="mt-20 max-w-5xl mx-auto">

  <h3 className="text-2xl font-heading font-bold text-white text-center mb-4">
    Learn More About Deepfakes
  </h3>

  <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">
    Deepfake technology is evolving rapidly. To better understand how
    artificial intelligence can manipulate media and how verification
    tools help detect misinformation, explore these trusted sources.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Wikipedia */}
    <a
      href="https://en.wikipedia.org/wiki/Deepfake"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-lg transition-all"
    >
      <h4 className="text-lg font-semibold text-white mb-2">
        Wikipedia – Deepfake
      </h4>
      <p className="text-sm text-slate-400">
        Learn the definition of deepfakes, their history, and how
        synthetic media is created using artificial intelligence.
      </p>
    </a>

    {/* MIT Technology Review */}
    <a
      href="https://www.technologyreview.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-lg transition-all"
    >
      <h4 className="text-lg font-semibold text-white mb-2">
        MIT Technology Review
      </h4>
      <p className="text-sm text-slate-400">
        Explore research insights and expert analysis on artificial
        intelligence, machine learning, and emerging technology trends.
      </p>
    </a>

    {/* BBC Technology */}
    <a
      href="https://www.bbc.com/news/technology"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-lg transition-all"
    >
      <h4 className="text-lg font-semibold text-white mb-2">
        BBC Technology News
      </h4>
      <p className="text-sm text-slate-400">
        Stay informed about the latest news on AI, deepfakes, digital
        security, and global technology developments.
      </p>
    </a>

  </div>

</div>
      </div>
    </section>);

}