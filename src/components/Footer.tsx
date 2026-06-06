/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Coffee, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-dark border-t border-white/5 text-neutral-400 py-12 relative overflow-hidden font-sans text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.04]">
          {/* Left Brand block */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-accent flex items-center justify-center">
              <Coffee className="w-5 h-5 text-charcoal-dark" />
            </div>
            <div>
              <span className="font-display text-lg font-bold text-white tracking-widest block leading-tight">
                CAFE 007
              </span>
              <span className="text-[9px] uppercase tracking-widest text-amber-accent font-semibold block">
                Burewala
              </span>
            </div>
          </div>

          {/* Social icons / Quick links */}
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-amber-accent transition-colors">Home</a>
            <a href="#menu" className="hover:text-amber-accent transition-colors">Digital Menu</a>
            <a href="#about" className="hover:text-amber-accent transition-colors">Hours</a>
            <a href="#contact" className="hover:text-amber-accent transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 hover:bg-amber-accent hover:text-charcoal-dark pointer-events-auto cursor-pointer text-white rounded-full flex items-center justify-center border border-white/10 hover:border-transparent transition-all"
            title="Scroll to Top"
            id="btn-scroll-top-footer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Sub Footer layout */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-neutral-500">
          <p>© {new Date().getFullYear()} CAFE 007 Burewala. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <p>Designed with ❤️ for premium coffee experiences</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
