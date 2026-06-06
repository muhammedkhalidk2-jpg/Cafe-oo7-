/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, Star, Coffee, Sparkles, Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface MenuSectionProps {
  onAddItemToOrder: (item: MenuItem) => void;
  selectedItems: { [id: string]: number };
}

export default function MenuSection({ onAddItemToOrder, selectedItems }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'all', label: 'All Items' },
    { key: 'espresso', label: 'Espresso (Hot)', icon: '☕' },
    { key: 'cold-brews', label: 'Cold Brews', icon: '🥤' },
    { key: 'mocktails', label: 'Mocktails', icon: '🍹' },
    { key: 'fast-food', label: 'Burger & Grub', icon: '🍔' },
  ];

  // Filtering Logic
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-charcoal-bg text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-white bg-coffee-brown/40 border border-white/20 px-3 py-1 rounded-full inline-block mb-3">
            Pure Indulgence
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Interactive <span className="text-amber-accent">Digital Menu</span>
          </h2>
          <div className="w-16 h-1 bg-amber-accent mx-auto mt-4 mb-4 rounded-full" />
          <p className="max-w-2xl mx-auto text-neutral-400 font-sans text-sm sm:text-base">
            Select and plan your meal! Tap <strong className="text-amber-accent">Add to Order</strong> on any item to calculate your potential bill, customize selections, and share your favorites.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 bg-charcoal-light/60 p-5 rounded-3xl border border-white/5 shadow-xl backdrop-blur-md">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 pointer-events-auto cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-amber-accent text-charcoal-dark font-semibold shadow-md shadow-white/10'
                    : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                }`}
              >
                {cat.icon && <span>{cat.icon}</span>}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search coffee, burger, fries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-accent focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Grid of items */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="menu-items-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const isSelected = (selectedItems[item.id] || 0) > 0;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card rounded-2xl overflow-hidden flex flex-col glass-card-hover group border border-white/10"
                    id={`menu-item-${item.id}`}
                  >
                    {/* Item Image */}
                    <div className="relative h-44 overflow-hidden bg-neutral-900 flex-shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                      
                      {/* Popular Indicator */}
                      {item.isPopular && (
                        <div className="absolute top-3 left-3 bg-amber-accent/95 text-charcoal-dark text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
                          <Sparkles className="w-3 h-3 fill-charcoal-dark" />
                          <span>007 Best</span>
                        </div>
                      )}

                      {/* Item rating tag */}
                      {item.rating && (
                        <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-md text-yellow-400 text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{item.rating}</span>
                        </div>
                      )}

                      {/* Price Tag overlays bottom right of image */}
                      <div className="absolute bottom-3 right-3 bg-charcoal-dark/90 backdrop-blur-md text-amber-accent border border-amber-accent/35 font-mono text-sm font-bold px-3 py-1 rounded-xl">
                        Rs. {item.price}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Tags */}
                        {item.tags && (
                          <div className="flex flex-wrap gap-1.5 mb-2.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] font-medium uppercase tracking-widest text-[#FFFFFF] bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="font-display text-base font-bold text-white tracking-wide group-hover:text-amber-accent transition-colors">
                          {item.name}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-xs text-neutral-400 font-light leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Interactive Bottom action bar */}
                      <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                        <span className="text-[10px] text-neutral-500 font-mono">
                          ID: {item.id.toUpperCase()}
                        </span>
                        
                        <button
                          onClick={() => onAddItemToOrder(item)}
                          className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all pointer-events-auto cursor-pointer duration-300 ${
                            isSelected
                              ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/10'
                              : 'bg-coffee-brown hover:bg-coffee-warm text-white border border-amber-accent/15'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added ({selectedItems[item.id]})</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Order</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16 bg-charcoal-light/30 rounded-3xl border border-white/5 max-w-xl mx-auto">
            <Coffee className="w-12 h-12 mx-auto text-neutral-600 mb-4 animate-pulse" />
            <h3 className="text-lg font-bold">No items found</h3>
            <p className="text-sm text-neutral-400 mt-2">
              We couldn't find anything matching "{searchQuery}". Please try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 text-xs font-bold text-amber-accent hover:underline"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
