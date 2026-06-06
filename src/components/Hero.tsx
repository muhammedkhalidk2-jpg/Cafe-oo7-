/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Coffee, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreMenu: () => void;
  onViewLocation: () => void;
  isOpenNow: boolean;
}

export default function Hero({ onExploreMenu, onViewLocation, isOpenNow }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-charcoal-dark"
    >
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Café Background"
          className="w-full h-full object-cover filter brightness-[0.25] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-coffee-brown/15 rounded-full filter blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12 md:py-24">
        {/* Open badge with real-time state */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6"
        >
          <span className={`relative flex h-2.5 w-2.5`}>
            {isOpenNow ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            )}
          </span>
          <span className="text-xs font-medium tracking-wider uppercase font-sans">
            {isOpenNow ? 'Open Now • Late Night Spot' : 'Currently Closed • Open Daily'}
          </span>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3"
        >
          <h2 className="font-display text-2xl md:text-3xl text-amber-accent font-medium tracking-widest uppercase">
            CAFE 007
          </h2>
          <div className="w-16 h-1 bg-amber-accent mx-auto my-3 rounded-full" />
        </motion.div>

        {/* Catchy Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight md:leading-none"
        >
          Brewed to <span className="text-amber-accent">Perfection</span>,<br />
          Served with <span className="text-amber-accent">Passion</span>
        </motion.h1>

        {/* Short, precise descriptions strictly adhering to business details */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 font-sans text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Discover Burewala’s premium hangout spot. Conveniently located near{' '}
          <span className="text-amber-accent font-medium">THQ Civil Hospital</span> on Stadium Road,
          serving masterfully crafted espsresso, specialty ice drinks, mocktails, and juicy gourmet zinger burgers.
        </motion.p>

        {/* Quick Location + Monday indicator bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-neutral-300 bg-black/35 backdrop-blur-sm p-4 rounded-2xl max-w-2xl mx-auto border border-white/5"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-accent flex-shrink-0" />
            <span>Near Stadium Rd, Burewala</span>
          </div>
          <div className="hidden sm:block text-neutral-600">|</div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-accent flex-shrink-0" />
            <span>Mondays open <strong className="text-amber-accent">24 Hours</strong></span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto bg-amber-accent hover:bg-neutral-200 text-charcoal-dark font-semibold px-8 py-4 rounded-full shadow-lg shadow-white/10 hover:shadow-white/25 transition-all duration-300 flex items-center justify-center gap-2 text-base"
          >
            <Coffee className="w-5 h-5" />
            <span>Explore Digital Menu</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={onViewLocation}
            className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white font-medium border border-white/20 hover:border-white/40 px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-base"
          >
            <span>Find on Google Map</span>
          </button>
        </motion.div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest text-white font-sans font-medium mb-1">
          Scroll Down
        </span>
        <div className="w-1.5 h-10 bg-gradient-to-b from-amber-accent to-transparent rounded-full" />
      </div>
    </section>
  );
}
