/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, BusinessHour, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Espresso / Hot Brews
  {
    id: 'e1',
    name: '007 Premium Espresso',
    description: 'Double shot of our signature house blend. Intense aroma, robust body, with a velvety hazelnut-colored crema.',
    price: 320,
    category: 'espresso',
    imageUrl: 'https://images.unsplash.com/photo-151097252790b-af4f902c2197?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    tags: ['Intense', 'Pure'],
    rating: 4.9
  },
  {
    id: 'e2',
    name: 'Latte Macchiato Royale',
    description: 'Creamy steamed milk stained with a rich shot of espresso, infused with custom Bourbon vanilla.',
    price: 480,
    category: 'espresso',
    imageUrl: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=600',
    tags: ['Creamy', 'Mild'],
    rating: 4.8
  },
  {
    id: 'e3',
    name: 'Classic Velvet Cappuccino',
    description: 'Perfect balance of rich espresso, warm steamed milk, and a thick layer of signature microfoam dusted with cocoa.',
    price: 460,
    category: 'espresso',
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    tags: ['Perfect Foam', 'Classic'],
    rating: 5.0
  },
  {
    id: 'e4',
    name: 'Fudge Cafe Mocha',
    description: 'Decadent chocolate fudge combined with freshly pulled espresso, velvety milk, and fresh whipped cream.',
    price: 520,
    category: 'espresso',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600',
    tags: ['Sweet', 'Rich'],
    rating: 4.7
  },

  // Cold Brews
  {
    id: 'c1',
    name: 'Spanish Latte Freddo',
    description: 'Rich espresso poured over sweetened condensed milk, chilled fresh milk, and crystal ice spheres.',
    price: 540,
    category: 'cold-brews',
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    tags: ['Best Seller', 'Sweet'],
    rating: 4.9
  },
  {
    id: 'c2',
    name: 'Caramel Macchiato On Ice',
    description: 'Chilled cream milk layered with intense espresso, finished with a heavy swirl of salted caramel drizzle.',
    price: 560,
    category: 'cold-brews',
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600',
    tags: ['Caramel', 'Sweet'],
    rating: 4.8
  },
  {
    id: 'c3',
    name: 'Hazelnut Cold Brew Fusion',
    description: '14-hour slow-steeped signature cold brew base infused with sweet toasted hazelnut syrup and cold milk froth.',
    price: 490,
    category: 'cold-brews',
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=600',
    tags: ['Smooth', 'Low-Acid'],
    rating: 4.7
  },

  // Mocktails
  {
    id: 'm1',
    name: 'Blue Lagoon Electric Fizz',
    description: 'A striking blend of curacao nectar, refreshing lemon zest, club soda, and ice, garnished with mint.',
    price: 360,
    category: 'mocktails',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    tags: ['Citrus', 'Energizing'],
    rating: 4.6
  },
  {
    id: 'm2',
    name: 'Signature Mint Mojito',
    description: 'Muddled fresh garden mint leaves, pure key lime juice, cane sugar syrup, topped with premium sparkling soda.',
    price: 380,
    category: 'mocktails',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    tags: ['Fresh Mint', 'Refreshing'],
    rating: 4.9
  },
  {
    id: 'm3',
    name: 'Crimson Sunset Cooler',
    description: 'Exotic blend of wild berry syrups, fresh lime, and ginger ale layered beautifully on crushed ice.',
    price: 390,
    category: 'mocktails',
    imageUrl: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=600',
    tags: ['Fruit Blast', 'Sweet'],
    rating: 4.8
  },

  // Fast Food
  {
    id: 'f1',
    name: '007 Premium Double Beef Burger',
    description: 'Two flame-grilled premium beef patties, melted cheddar, caramelized onions, crisp lettuce, and our secret 007 burger sauce on toasted brioche.',
    price: 690,
    category: 'fast-food',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    isPopular: true,
    tags: ['Gourmet', 'Filling'],
    rating: 5.0
  },
  {
    id: 'f2',
    name: 'Crispy Club Chicken Zinger',
    description: 'Deep-fried golden chicken thigh coated in secret spices, fresh iceberg lettuce, and zesty chili mayonnaise.',
    price: 520,
    category: 'fast-food',
    imageUrl: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=600',
    tags: ['Spicy', 'Crunchy'],
    rating: 4.8
  },
  {
    id: 'f3',
    name: 'Supreme Three-Decker Club Sandwich',
    description: 'Toasted white bread stacked with smoked chicken breast, folded egg omelette, premium Swiss cheese, garden tomatoes, and light garlic spread.',
    price: 550,
    category: 'fast-food',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600',
    tags: ['Classic', 'Popular'],
    rating: 4.8
  },
  {
    id: 'f4',
    name: 'Garlic Parmesan Loaded Fries',
    description: 'Golden, crispy, skin-on hand-cut potatoes thoroughly tossed with aromatic minced garlic, high-grade parmesan cheese, and fresh parlor herbs.',
    price: 420,
    category: 'fast-food',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600',
    tags: ['Cheesy', 'To Share'],
    rating: 4.9
  }
];

export const BUSINESS_HOURS: BusinessHour[] = [
  { day: 'Monday', hours: 'Open 24 hours', is24h: true, highlight: true },
  { day: 'Tuesday', hours: '11:00 am – 12:30 am' },
  { day: 'Wednesday', hours: '11:00 am – 12:30 am' },
  { day: 'Thursday', hours: '11:00 am – 12:30 am' },
  { day: 'Friday', hours: '11:00 am – 12:30 am' },
  { day: 'Saturday', hours: '11:00 am – 12:30 am' },
  { day: 'Sunday', hours: '11:00 am – 12:00 am' }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Ali Raza',
    rating: 5,
    comment: 'The best coffee spot in Burewala! The 007 Double Beef Burger is incredibly juicy, and their Velvet Cappuccino has the perfect froth. Extremely clean environment and outstanding design.',
    date: 'Yesterday'
  },
  {
    id: 'r2',
    name: 'Zainab Fatima',
    rating: 5,
    comment: 'Finally a restaurant with authentic taste and premium atmosphere in Burewala! The Spanish Latte Freddo is absolutely mind-blowing. Super friendly staff!',
    date: '3 days ago'
  },
  {
    id: 'r3',
    name: 'Hamza Malik',
    rating: 4,
    comment: 'Amazing experience. Their loaded garlic parmesan fries are a must-try. The location near Stadium Road is super convenient, perfect place to sit back and chill with friends.',
    date: 'Last week'
  }
];
