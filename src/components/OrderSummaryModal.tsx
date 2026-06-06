/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Trash2, Plus, Minus, MessageSquare, Phone, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface OrderSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: { [id: string]: number };
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onClearOrder: () => void;
  onCallClick: () => void;
}

export default function OrderSummaryModal({
  isOpen,
  onClose,
  selectedItems,
  onUpdateQuantity,
  onClearOrder,
  onCallClick,
}: OrderSummaryModalProps) {
  // Compute list of selected products with quantities
  const orderList = Object.entries(selectedItems)
    .map(([id, qty]) => {
      const item = MENU_ITEMS.find((it) => it.id === id);
      return item ? { item, quantity: qty } : null;
    })
    .filter((entry): entry is { item: MenuItem; quantity: number } => entry !== null && entry.quantity > 0);

  // Compute total pricing
  const subtotal = orderList.reduce((acc, entry) => acc + entry.item.price * entry.quantity, 0);
  const taxRate = 0.05; // 5% GST/Service tax (typical for dynamic cafes)
  const taxAmount = Math.round(subtotal * taxRate);
  const grandTotal = subtotal + taxAmount;

  // Build a clean recipe text for copying or WhatsApp projection
  const generateRecipeText = () => {
    let text = `*CAFE 007 BUREWALA - MY ORDER PLAN*\n`;
    text += `============================\n`;
    orderList.forEach((entry) => {
      text += `• ${entry.item.name} x ${entry.quantity} - Rs. ${entry.item.price * entry.quantity}\n`;
    });
    text += `============================\n`;
    text += `Subtotal: Rs. ${subtotal}\n`;
    text += `Tax (5%): Rs. ${taxAmount}\n`;
    text += `*Grand Total: Rs. ${grandTotal}*\n`;
    return encodeURIComponent(text);
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-charcoal-light border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl z-10 font-sans"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between pb-5">
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-amber-accent" />
                <h3 className="font-display font-bold text-lg text-white">My Order Plan Receipt</h3>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors pointer-events-auto cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content items */}
            {orderList.length > 0 ? (
              <div className="flex flex-col max-h-[70vh]">
                
                {/* Scrollable list */}
                <div className="p-6 overflow-y-auto space-y-4 no-scrollbar flex-1">
                  {orderList.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center justify-between gap-4"
                    >
                      {/* Name and unit price */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white truncate text-sm sm:text-base">{item.name}</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">Rs. {item.price} each</p>
                      </div>

                      {/* Quantum adjustments */}
                      <div className="flex items-center gap-3.5">
                        <div className="flex items-center bg-black/40 border border-white/10 rounded-lg p-1">
                          {/* Decrement quantity */}
                          <button
                            onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                            className="text-neutral-400 hover:text-amber-accent p-1 cursor-pointer pointer-events-auto transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          
                          <span className="text-sm font-semibold px-2.5 text-white font-mono min-w-[20px] text-center">
                            {quantity}
                          </span>
                          
                          {/* Increment quantity */}
                          <button
                            onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                            className="text-neutral-400 hover:text-amber-accent p-1 cursor-pointer pointer-events-auto transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Total price for quantity */}
                        <span className="text-sm font-medium font-mono text-amber-accent min-w-[70px] text-right">
                          Rs. {item.price * quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Calculation breakdown */}
                <div className="p-6 bg-black/40 border-t border-white/5 space-y-3 shrink-0">
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>Subtotal</span>
                    <span className="font-mono">Rs. {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>GST / Service Charge (5%)</span>
                    <span className="font-mono">Rs. {taxAmount}</span>
                  </div>
                  
                  <div className="w-full h-px bg-white/5 my-2" />
                  
                  <div className="flex justify-between text-base font-bold text-white">
                    <span>Grand Total</span>
                    <span className="font-mono text-amber-accent">Rs. {grandTotal}</span>
                  </div>

                  {/* Actions buttons inside drawer */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    {/* Clear Order */}
                    <button
                      onClick={onClearOrder}
                      className="w-full sm:w-auto mt-2 sm:mt-0 font-medium text-xs text-neutral-400 hover:text-rose-400 py-3 px-4 transition-colors flex items-center justify-center gap-2 pointer-events-auto cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Clear All</span>
                    </button>

                    {/* Check out simulation with WhatsApp link */}
                    <a
                      href={`https://wa.me/923000000000?text=${generateRecipeText()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-center text-sm"
                    >
                      <MessageSquare className="w-4 h-4 fill-white text-emerald-500" />
                      <span>Send Order to WhatsApp</span>
                    </a>
                    
                    {/* Direct Call to Cafe desk */}
                    <button
                      onClick={onCallClick}
                      className="bg-amber-accent hover:bg-neutral-200 text-charcoal-dark font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm pointer-events-auto cursor-pointer"
                    >
                      <Phone className="w-4 h-4 fill-charcoal-dark text-charcoal-dark" />
                      <span>Call Order Desk</span>
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              <div className="p-12 text-center">
                <Coffee className="w-12 h-12 mx-auto text-neutral-600 mb-4 animate-pulse" />
                <h4 className="text-base font-bold text-white">Your Order Plan is Empty</h4>
                <p className="text-xs text-neutral-400 mt-2 max-w-xs mx-auto">
                  Browse our digital menu and select items like espresso, burgers, or refreshing coolers to build your food plan receipt!
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 inline-block bg-amber-accent hover:bg-neutral-200 pointer-events-auto cursor-pointer text-charcoal-dark font-semibold text-xs px-5 py-2.5 rounded-xl transition-all"
                >
                  Continue Browsing Menu
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
