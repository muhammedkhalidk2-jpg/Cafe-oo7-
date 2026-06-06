/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Navigation, Send, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  onCallClick: () => void;
}

export default function ContactSection({ onCallClick }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    // Simulate sending message
    setIsSent(true);
    setName('');
    setPhone('');
    setMessage('');

    setTimeout(() => {
      setIsSent(false);
    }, 4000);
  };

  const mapEmbedUrl = "https://maps.google.com/maps?q=CAFE%20007%20Burewala%20THQ%20Civil%20Hospital%20Stadium%20Rd&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-24 bg-charcoal-dark text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-white bg-coffee-brown/40 border border-white/20 px-3 py-1 rounded-full inline-block mb-3">
            Location & Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            How To <span className="text-amber-accent">Reach Us</span>
          </h2>
          <div className="w-16 h-1 bg-amber-accent mx-auto mt-4 mb-4 rounded-full" />
          <p className="max-w-2xl mx-auto text-neutral-400 font-sans text-sm sm:text-base">
            Come visit CAFE 007 Burewala! Grab a coffee, hang out, or get in touch for takeaway queries, event bookings, or delivery questions.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Core Contact Details & Form (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Quick Contacts Info Card */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-5 shadow-lg">
              <h3 className="font-display text-lg font-bold">Contact Details</h3>
              
              <div className="space-y-4 font-sans">
                {/* Address Row */}
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-amber-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Address</h4>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                      After THQ (Civil) Hospital, near Stadium Rd, Burewala, 61010
                    </p>
                    <span className="text-[10px] bg-coffee-brown border border-amber-accent/20 text-white font-mono px-2 py-0.5 rounded-md inline-block mt-2">
                       Plus Code: 5M9M+6F Burewala
                    </span>
                  </div>
                </div>

                {/* Phone Link */}
                <button
                  onClick={onCallClick}
                  className="w-full text-left flex items-start gap-4 text-sm font-sans hover:bg-white/[0.04] p-3 rounded-2xl transition-all border border-transparent hover:border-white/5 pointer-events-auto cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-amber-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Phone Reservation</h4>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">+92 300 0070007</p>
                    <p className="text-[10px] text-amber-accent mt-0.5 underline">Tap to call our manager directly</p>
                  </div>
                </button>

                {/* Email (Optional but realistic) */}
                <div className="flex items-start gap-3 text-sm pl-3">
                  <Mail className="w-5 h-5 text-amber-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Email Address</h4>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">cafe007burewala@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiries Form */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl shadow-lg flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold mb-4">Send a Direct Message</h3>
                
                {isSent ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/15 p-6 rounded-2xl text-center py-10">
                    <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base">Inquiry Dispatched!</h4>
                    <p className="text-xs text-neutral-400 mt-2">
                      Thank you! Your message has been routed to CAFE 007 customer service team. We will contact you or update back ASAP.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-4 font-sans text-sm">
                    {/* Name input */}
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Muhammed Khalid"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-accent transition-all"
                      />
                    </div>

                    {/* Phone/Email input */}
                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
                        Phone Number or Email
                      </label>
                      <input
                        id="contact-phone"
                        type="text"
                        required
                        placeholder="0300 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-accent transition-all"
                      />
                    </div>

                    {/* Message body */}
                    <div className="space-y-1">
                      <label htmlFor="contact-msg" className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
                        Message / Query
                      </label>
                      <textarea
                        id="contact-msg"
                        required
                        rows={3}
                        placeholder="e.g. Can I book a table for 10 people for tonight at 9:00 PM?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-accent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-accent hover:bg-neutral-200 pointer-events-auto cursor-pointer text-charcoal-dark font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Right Block: Live Iframe Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-neutral-900 border border-white/10 rounded-3xl p-3 flex-1 flex flex-col overflow-hidden min-h-[350px] lg:min-h-0 relative shadow-2xl">
              
              {/* Embedded Iframe */}
              <iframe
                title="CAFE 007 Burewala Google Map Embed"
                src={mapEmbedUrl}
                className="w-full h-full rounded-2xl border-0 flex-1 bg-charcoal-dark"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Navigation button overlapping map details */}
              <div className="mt-3 p-3 bg-white/[0.02] border-t border-white/5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 font-sans">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-accent flex-shrink-0 animate-pulse" />
                  <span>Located near Civil Hospital, Stadium Road, Burewala.</span>
                </div>
                
                <a
                  href="https://maps.google.com/?q=5M9M+6F+Burewala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-accent hover:bg-opacity-90 text-charcoal-dark font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>Open directly in Maps App</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
