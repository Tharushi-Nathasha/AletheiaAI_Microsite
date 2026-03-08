import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Aletheia <span className="text-cyan-400">AI</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              Fighting misinformation with AI. The premier deepfake detection
              tool to verify social media videos and detect fake images
              instantly.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter">

                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tharushi-nathasha-walisundara-45b52821b/"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn">

                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Tharushi-Nathasha"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub">

                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">

                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">

                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">

                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">

                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">

                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">

                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">

                  Cookie Policy
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors">

                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Aletheia AI. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built for digital media safety.
          </p>
        </div>
      </div>
    </footer>);

}