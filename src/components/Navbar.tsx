import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheckIcon, MenuIcon, XIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const navLinks = [
{
  name: 'Home',
  href: '/'
},
{
  name: 'How It Works',
  href: '/how-it-works'
},
{
  name: 'Features',
  href: '/features'
},
{
  name: 'About',
  href: '/about'
},
{
  name: 'Contact',
  href: '/contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-3' : 'bg-transparent py-5'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-shadow">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white">
              Aletheia <span className="text-cyan-400">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}>

                {link.name}
              </Link>
            )}
            <Link
              to="/contact"
              className="px-5 py-2 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-colors">

              Try Beta
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden">

            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-medium py-2 border-b border-slate-800/50 ${location.pathname === link.href ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}>

                  {link.name}
                </Link>
            )}
              <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 text-center text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg">

                Try Aletheia AI
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}