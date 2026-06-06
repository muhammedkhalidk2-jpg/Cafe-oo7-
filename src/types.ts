/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in PKR
  category: 'espresso' | 'cold-brews' | 'mocktails' | 'fast-food';
  imageUrl: string;
  isPopular?: boolean;
  tags?: string[];
  rating?: number;
}

export interface BusinessHour {
  day: string;
  hours: string;
  is24h?: boolean;
  highlight?: boolean;
}

export interface FeedbackMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
