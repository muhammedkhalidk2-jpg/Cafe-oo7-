/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OrderSummaryModal from './components/OrderSummaryModal';
import PhoneCallModal from './components/PhoneCallModal';
import { INITIAL_REVIEWS } from './data';
import { MenuItem, Review } from './types';

export default function App() {
  // Global States
  const [selectedItems, setSelectedItems] = useState<{ [id: string]: number }>({});
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);

  // Time Calculators
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [statusMessage, setStatusMessage] = useState('Checking current status...');

  useEffect(() => {
    const updateTimeStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = now.getHours();
      const min = now.getMinutes();
      const time = hour * 60 + min; // minutes from midnight

      // Monday is Day 1 (24 Hours Open)
      if (day === 1) {
        setIsOpenNow(true);
        setStatusMessage("Welcome! CAFE 007 is open 24 Hours on Mondays. Come hang out anytime!");
        return;
      }

      // Sunday is Day 0 (Opens 11:00 AM to 12:00 AM)
      if (day === 0) {
        if (time >= 0 && time < 30) {
          setIsOpenNow(true);
          setStatusMessage("Night Owls! We are currently open late from Saturday night (closing 12:30 AM).");
          return;
        }
        if (time >= 11 * 60) {
          setIsOpenNow(true);
          setStatusMessage("Open now! Relax and enjoy coffee & mocktails (closes at 12:00 AM midnight).");
          return;
        }
        setIsOpenNow(false);
        setStatusMessage("Closed now. We open at 11:00 AM on Sundays. See you soon!");
        return;
      }

      // Tuesday to Saturday (Opens 11:00 AM to 12:30 AM next day)
      // Morning hours 00:00 - 00:30 are open (continuation of yesterday night)
      if (time >= 0 && time < 30) {
        setIsOpenNow(true);
        setStatusMessage("Vibrant Night! Open late from yesterday (closing shortly at 12:30 AM).");
        return;
      }

      if (time >= 11 * 60) {
        setIsOpenNow(true);
        setStatusMessage("We are open! Welcome with family and friends to Burewala's premium cafe (closes at 12:30 AM).");
        return;
      }

      setIsOpenNow(false);
      setStatusMessage("Closed now. Cafe doors open daily at 11:00 AM near THQ Hospital.");
    };

    updateTimeStatus();
    // Refresh status check every 30 seconds
    const interval = setInterval(updateTimeStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  // Handler functions
  const handleAddItemToOrder = (item: MenuItem) => {
    setSelectedItems((prev) => {
      const currentQty = prev[item.id] || 0;
      const updated = { ...prev, [item.id]: currentQty + 1 };
      
      // Auto-open Order planner tray on first item added to make features obvious
      if (Object.keys(prev).length === 0) {
        setIsOrderOpen(true);
      }
      return updated;
    });
  };

  const handleUpdateQuantity = (itemId: string, qty: number) => {
    setSelectedItems((prev) => {
      const updated = { ...prev };
      if (qty <= 0) {
        delete updated[itemId];
      } else {
        updated[itemId] = qty;
      }
      return updated;
    });
  };

  const handleClearOrder = () => {
    setSelectedItems({});
    setIsOrderOpen(false);
  };

  const handleAddReview = (newReview: Omit<Review, 'id' | 'date'>) => {
    const reviewWithId: Review = {
      ...newReview,
      id: `custom-${Date.now()}`,
      date: 'Just now',
    };
    setReviews((prev) => [reviewWithId, ...prev]);
  };

  const totalOrderCount = (Object.values(selectedItems) as number[]).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="bg-charcoal-bg min-h-screen text-white relative">
      
      {/* Sticky/Fixed Navigation Linker */}
      <Navbar
        onCallClick={() => setIsCallOpen(true)}
        onOpenOrderSummary={() => setIsOrderOpen(true)}
        orderCount={totalOrderCount}
      />

      {/* Hero Welcome Panel */}
      <Hero
        onExploreMenu={() => {
          document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onViewLocation={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        isOpenNow={isOpenNow}
      />

      {/* Interactive Digital Menu Tabbed filtering system */}
      <MenuSection
        onAddItemToOrder={handleAddItemToOrder}
        selectedItems={selectedItems}
      />

      {/* About storytelling & Real-time Operational Timings layout */}
      <AboutSection
        isOpenNow={isOpenNow}
        statusMessage={statusMessage}
      />

      {/* Verified Client Reviews & Live Custom Feedback Star grading Form */}
      <ReviewsSection
        reviews={reviews}
        onAddReview={handleAddReview}
      />

      {/* Standard Google Maps Plus Codes Contact & messaging layout */}
      <ContactSection
        onCallClick={() => setIsCallOpen(true)}
      />

      {/* Modular styled copyright sections */}
      <Footer />

      {/* Floating Receipt modal builder */}
      <OrderSummaryModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        selectedItems={selectedItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearOrder={handleClearOrder}
        onCallClick={() => {
          setIsOrderOpen(false);
          setIsCallOpen(true);
        }}
      />

      {/* Direct calling assistant modals */}
      <PhoneCallModal
        isOpen={isCallOpen}
        onClose={() => setIsCallOpen(false)}
      />

    </div>
  );
}
