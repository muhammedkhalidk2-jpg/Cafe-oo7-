/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Star, MessageSquare, Plus, Check, StarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

export default function ReviewsSection({ reviews, onAddReview }: ReviewsSectionProps) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    onAddReview({ name, comment, rating });
    setSubmitted(true);
    setName('');
    setComment('');
    setRating(5);

    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 2500);
  };

  return (
    <section id="reviews" className="py-24 bg-charcoal-bg text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-white bg-coffee-brown/40 border border-white/20 px-3 py-1 rounded-full inline-block mb-3">
              Customer Love
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              What Burewala <span className="text-amber-accent">Says About Us</span>
            </h2>
            <div className="w-16 h-1 bg-amber-accent mt-4 mb-4 rounded-full mx-auto md:mx-0" />
            <p className="max-w-xl text-neutral-400 font-sans text-sm">
              We take pride in our coffee, hygiene, and hospitality. Read real-time stories left by our beloved neighborhood visitors.
            </p>
          </div>

          {/* Action button */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-coffee-brown hover:bg-coffee-warm text-white border border-amber-accent/30 pointer-events-auto cursor-pointer font-semibold px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-lg transition-all"
          >
            <MessageSquare className="w-4 h-4 text-amber-accent" />
            <span>{showForm ? 'Close Rating Form' : 'Write a Review'}</span>
          </button>
        </div>

        {/* Dynamic Reviews Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto mb-16 p-6 sm:p-8 bg-charcoal-light/80 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-accent/5 rounded-full filter blur-xl" />
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 scale-110 transition-transform">
                    <Check className="w-6 h-6 animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold">Review Submitted Successfully!</h3>
                  <p className="text-sm text-neutral-400 mt-2">
                    Thank you so much! Your valuable feedback has been listed. You are part of our 007 family.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display font-semibold text-lg text-white">Share Your CAFE 007 Experience</h3>
                  
                  {/* Rating Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs text-neutral-400 uppercase tracking-widest font-semibold font-sans">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="text-2xl transition-colors focus:outline-none pointer-events-auto cursor-pointer"
                        >
                          <StarIcon
                            className={`w-7 h-7 ${
                              star <= (hoverRating ?? rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-neutral-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="reviewer-name" className="block text-xs text-neutral-400 uppercase tracking-widest font-semibold">
                      Your Name
                    </label>
                    <input
                      id="reviewer-name"
                      type="text"
                      required
                      placeholder="e.g. Muhammed Khalid"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-accent focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Comment field */}
                  <div className="space-y-2">
                    <label htmlFor="reviewer-comment" className="block text-xs text-neutral-400 uppercase tracking-widest font-semibold">
                      Your Review Comment
                    </label>
                    <textarea
                      id="reviewer-comment"
                      required
                      rows={4}
                      placeholder="Tell us about the coffee flavor, fast food, vibes, or service..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-accent focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-amber-accent hover:bg-neutral-200 pointer-events-auto cursor-pointer text-charcoal-dark font-semibold py-3.5 rounded-2xl shadow-lg shadow-white/10 transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews List grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="reviews-board">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-charcoal-light/40 border border-white/5 p-6 rounded-3xl flex flex-col justify-between shadow-lg relative overflow-hidden"
              id={`review-card-${rev.id}`}
            >
              <div>
                {/* Visual quote indicator */}
                <div className="text-4xl font-serif text-amber-accent/10 absolute top-2 right-4 select-none pointer-events-none">
                  “
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-neutral-300 text-sm font-sans font-light leading-relaxed italic pr-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">{rev.name}</h4>
                  <span className="text-[10px] text-neutral-500 block uppercase tracking-wider mt-0.5">
                    Verified Customer
                  </span>
                </div>
                <span className="text-xs text-neutral-500 font-mono font-light">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
