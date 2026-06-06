/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, Phone, Copy, Check, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PhoneCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhoneCallModal({ isOpen, onClose }: PhoneCallModalProps) {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '+92 300 0070007';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const dialNumber = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s+/g, '')}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer pointer-events-auto"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-charcoal-light border border-white/10 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl z-10 p-6 sm:p-8 font-sans"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors pointer-events-auto cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon Banner */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-amber-accent/10 text-amber-accent rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-accent/20 shadow-lg select-none">
                <Phone className="w-6 h-6 fill-amber-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Contact Order Desk</h3>
              <p className="text-xs text-neutral-400 mt-2 max-w-xs mx-auto">
                Call CAFE 007 Burewala directly to reserve a table, place a takeaway order, or discuss home deliveries.
              </p>
            </div>

            {/* Dynamic Phone Block */}
            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 select-all mb-6">
              <span className="text-neutral-500 text-[10px] uppercase font-semibold block tracking-widest">
                Main Line / Hotline
              </span>
              <span className="text-white font-mono font-bold text-xl sm:text-2xl tracking-wide">
                {phoneNumber}
              </span>
              <span className="text-amber-accent text-[11px] font-sans flex items-center gap-1.5 font-light">
                <Clock className="w-3.5 h-3.5" />
                <span>Available 24/7 on Mondays & late until 12:30 AM</span>
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              {/* Copy action */}
              <button
                onClick={copyToClipboard}
                className="w-full bg-white/5 hover:bg-white/10 text-white font-medium py-3.5 rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2 pointer-events-auto cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-accent" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>

              {/* Tel dialer action */}
              <button
                onClick={dialNumber}
                className="w-full bg-amber-accent hover:bg-neutral-200 text-charcoal-dark font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 pointer-events-auto cursor-pointer shadow-lg shadow-white/10"
              >
                <Phone className="w-4 h-4 fill-charcoal-dark" />
                <span>Call Directly Now</span>
              </button>
            </div>

            {/* Support guarantee badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-neutral-500 uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-accent/50" />
              <span>Official Business Line</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
