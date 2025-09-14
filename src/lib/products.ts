
import type { Product } from './types';

export const products: Product[] = [
  // Soaps (5 varieties)
  {
    id: 'soap-1',
    name: 'Neem Soap',
    category: 'soaps',
    description: 'A natural soap infused with neem extracts, known for its antibacterial and purifying properties. Excellent for keeping skin clear and healthy.',
    price: 45,
    image: '/neemsoap.jpg',
    dataAiHint: 'neem soap'
  },
  {
    id: 'soap-2',
    name: 'Alovera Soap',
    category: 'soaps',
    description: 'Soothe and moisturize your skin with the gentle touch of pure Aloe Vera. Perfect for daily hydration and calming irritation.',
    price: 45,
    image: '/alovera.jpg',
    dataAiHint: 'aloe vera soap'
  },
  {
    id: 'soap-3',
    name: 'papaya Soap',
    category: 'soaps',
    description: 'Gently exfoliates, brightens skin, reduces blemishes, and nourishes with natural vitamins for glow',
    price: 45,
    image: '/papaya.jpg',
    dataAiHint: 'papaya soap'
  },
  {
    id: 'soap-4',
    name: 'Multani Mitti Soap',
    category: 'soaps',
    description: 'Activated charcoal works to draw out impurities, leaving your skin feeling clean and purified.',
    price: 45,
    image: '/Multanisoap.jpg',
    dataAiHint: 'multani mitti soap'
  },
  {
    id: 'soap-5',
    name: 'Charcoal Soap',
    category: 'soaps',
    description: 'A cool and invigorating soap with peppermint and tea tree oil. Provides a tingly clean feeling.',
    price: 86,
    image: '/charcoalsoap.jpg',
    dataAiHint: 'charcoal soap'
  },
  // Health Mix (2 types)
  {
    id: 'hm-1',
    name: 'Health Plus',
    category: 'health-mixes',
    description: 'A powerful blend of 15 different grains, nuts, and seeds. A wholesome addition to your daily diet.',
    price: 240,
    image: '/sathumavvu1.jpg',
    dataAiHint: 'health food'
  },
  {
    id: 'hm-2',
    name: 'Blood +',
    category: 'health-mixes',
    description: 'A specially formulated health mix designed to support and enhance vitality, packed with essential nutrients.',
    price: 240,
    image: '/Blood +.jpg',
    dataAiHint: 'health drink'
  },
  {
    id: 'hm-3',
    name: 'ABC Malt',
    category: 'health-mixes',
    description: 'Energy-boosting health drink packed with essential nutrients, delivering rich taste, strength, and daily wellness support.',
    price: 280,
    image: '/ABC Malt.jpg',
    dataAiHint: 'malt drink'
  },
];
