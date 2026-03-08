import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export function ContactPage() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2
  });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, this would send to an API
    }
  };
  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
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
            duration: 0.6
          }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">

          {/* Decorative glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Join the Aletheia AI Community
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Be the first to know about updates, new features, and get early
            access to our advanced deepfake detection tool.
          </p>

          <a
            href="https://forms.gle/iJgYBBshRokgYufg7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all group">

            <MailIcon className="w-5 h-5" />
            Join Now
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-8 space-y-4">
            <p className="text-sm text-slate-500">
              Fill out our quick form to join updates and get early access.{' '}
              <a
                href="https://forms.gle/iJgYBBshRokgYufg7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors">

                Partner with Aletheia AI
              </a>
            </p>
            <p className="text-xs text-slate-600">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

        {/* Backlinks */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/how-it-works"
            className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-all">

            How It Works
          </Link>
          <Link
            to="/features"
            className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-all">

            Features
          </Link>
          <Link
            to="/about"
            className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-all">

            About Us
          </Link>
          <Link
            to="/"
            className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-all">

            Back to Home
          </Link>
        </div>
      </div>
    </section>);

}