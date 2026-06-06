/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Clock, Coffee, Heart, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_HOURS } from '../data';

interface AboutSectionProps {
  isOpenNow: boolean;
  statusMessage: string;
}

export default function AboutSection({ isOpenNow, statusMessage }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-charcoal-dark/95 text-white relative overflow-hidden">
      {/* Dynamic blurred amber orb in background */}
      <div className="absolute top-1/2 right-[-20%] w-96 h-96 bg-amber-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-20%] w-80 h-80 bg-coffee-brown/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-white bg-coffee-brown/40 border border-white/20 px-3 py-1 rounded-full inline-block mb-3">
            Our Story & Timings
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-amber-accent">CAFE 007</span> Burewala
          </h2>
          <div className="w-16 h-1 bg-amber-accent mx-auto mt-4 mb-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Bio and Features (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-wide">
                Burewala's Premium Late-Night Cafe Sanctuary
              </h3>
              <p className="text-neutral-300 font-sans font-light leading-relaxed text-sm sm:text-base">
                Established with a vision to deliver world-class coffee house vibes directly to the heart of Burewala, <strong>CAFE 007</strong> has quickly become the ultimate lifestyle hub. Beautifully situated just after the <strong>THQ (Civil) Hospital near Stadium Road</strong>, our doors welcomingly open to a sanctuary of cozy dark aesthetics, ambient acoustic soundtracks, and friendly faces.
              </p>
              <p className="text-neutral-300 font-sans font-light leading-relaxed text-sm sm:text-base">
                Whether you’re seeking a double shot of classic Italian espresso early in the morning, a sweet frozen caramel mocktail during hot afternoons, or a gourmet double beef burger with friends late at night, CAFE 007 Burewala serves pure happiness in every cup and platter.
              </p>
            </div>

            {/* Micro Feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex items-start gap-3">
                <Coffee className="w-5 h-5 text-amber-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold">100% Arabica</h4>
                  <p className="text-[11px] text-neutral-400 mt-1">Premium double-roasted mountain coffee beans.</p>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold">Hygiene Best</h4>
                  <p className="text-[11px] text-neutral-400 mt-1">Clean kitchen with imported high-grade equipment.</p>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex items-start gap-3">
                <Users className="w-5 h-5 text-amber-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold">Family Friendly</h4>
                  <p className="text-[11px] text-neutral-400 mt-1">Classy warm interior and spacious dining setups.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Time Cards and Live Open indicator (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-accent/5 rounded-full filter blur-xl" />
              
              {/* Card Title block */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-amber-accent" />
                  <h3 className="font-display font-bold text-lg text-white">Operating Hours</h3>
                </div>
                
                {/* Real-time Indicator Widget */}
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  isOpenNow 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                  <span>{isOpenNow ? 'OPEN NOW' : 'CLOSED POUR'}</span>
                </div>
              </div>

              {/* Live Status Message description helper */}
              <p className="text-xs text-neutral-300 font-sans mb-6 bg-white/[0.02] border border-white/5 p-3 rounded-xl italic">
                ✨ {statusMessage}
              </p>

              {/* Hours List */}
              <div className="space-y-3.5 font-sans" id="operating-hours-list">
                {BUSINESS_HOURS.map((hour) => (
                  <div
                    key={hour.day}
                    className={`flex items-center justify-between py-2 border-b border-white/[0.04] last:border-none ${
                      hour.highlight ? 'text-amber-accent font-bold bg-white/5 px-3 py-2 rounded-xl border-dashed border-white/20' : 'text-neutral-300'
                    }`}
                  >
                    <span className="text-sm flex items-center gap-1.5">
                      {hour.highlight && <Sparkles className="w-3.5 h-3.5 fill-amber-accent text-amber-accent flex-shrink-0" />}
                      {hour.day}
                    </span>
                    <span className={`text-xs ${hour.highlight ? 'text-amber-accent font-mono' : 'text-neutral-400 font-mono text-right'}`}>
                      {hour.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Extra info tagline */}
              <p className="text-[10px] text-neutral-500 text-center font-sans mt-6 uppercase tracking-wider">
                * Timings may vary slightly on public holidays.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
