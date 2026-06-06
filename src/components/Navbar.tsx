/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onCallClick: () => void;
  onOpenOrderSummary: () => void;
  orderCount: number;
}

export default function Navbar({ onCallClick, onOpenOrderSummary, orderCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About & Hours', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group" id="nav-logo">
            <div className="w-10 h-10 rounded-full bg-amber-accent flex items-center justify-center shadow-lg shadow-amber-accent/20 group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 text-charcoal-dark" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-wider text-white group-hover:text-amber-accent transition-colors">
                CAFE 007
              </span>
              <span className="text-[10px] font-sans tracking-widest text-[#FFFFFF] uppercase -mt-1 font-semibold">
                Burewala
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-amber-accent text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-amber-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {orderCount > 0 && (
              <button
                onClick={onOpenOrderSummary}
                className="relative bg-coffee-brown hover:bg-coffee-warm text-white px-4 py-2 rounded-full border border-amber-accent/30 text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                <span>My Order</span>
                <span className="w-5 h-5 bg-amber-accent text-charcoal-dark text-xs font-bold rounded-full flex items-center justify-center">
                  {orderCount}
                </span>
              </button>
            )}
            
            <button
              id="btn-call-navbar"
              onClick={onCallClick}
              className="bg-amber-accent hover:bg-neutral-200 text-charcoal-dark font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 fill-charcoal-dark" />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {orderCount > 0 && (
              <button
                onClick={onOpenOrderSummary}
                className="relative bg-coffee-brown text-white p-2 rounded-full border border-amber-accent/30 transition-all flex items-center"
              >
                <Coffee className="w-5 h-5 text-amber-accent" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-charcoal-dark text-[10px] font-bold rounded-full flex items-center justify-center border border-coffee-brown">
                  {orderCount}
                </span>
              </button>
            )}

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-accent p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism border-t border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-white hover:bg-coffee-brown hover:text-amber-accent text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                {orderCount > 0 && (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenOrderSummary();
                    }}
                    className="w-full bg-coffee-brown text-white py-3 rounded-xl border border-amber-accent/20 font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Coffee className="w-5 h-5 text-amber-accent" />
                    <span>View Selected Order ({orderCount} items)</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCallClick();
                  }}
                  className="w-full bg-amber-accent hover:bg-neutral-200 text-charcoal-dark font-semibold py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 fill-charcoal-dark" />
                  <span>Call CAFE 007</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
