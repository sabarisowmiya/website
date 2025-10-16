
import type { Product } from './types';

export const products: Product[] = [
  // Soaps (5 varieties)
  {
    id: 'soap-1',
    name: 'Kuppaimeni Soap',
    category: 'soaps',
    description: 'A natural soap infused with kuppaimeni extracts, known for its antibacterial and anti-inflammatory properties. Excellent for treating skin problems and keeping it clear and healthy.',
    price: 45,
    image: '/neemsoap.jpg',
    dataAiHint: 'kuppaimeni soap'
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
    description: 'Multani Mitti soap deeply cleanses the skin by removing excess oil, dirt, and impurities, thus preventing acne and pimples. Its natural absorbent properties help to even out skin tone and impart a healthy, radiant glow.',
    price: 45,
    image: '/Multanisoap.jpg',
    dataAiHint: 'multani mitti soap'
  },
  {
    id: 'soap-5',
    name: 'Charcoal Soap',
    category: 'soaps',
    description: 'Charcoal soap acts like a magnet to draw out deep-seated impurities, dirt, and excess oil, leaving your skin thoroughly cleansed and detoxified. Its purifying properties help to minimize pores and reduce acne breakouts, promoting a clearer and more balanced complexion.',
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
    description: 'Rich in iron and folate, beetroot malt is a natural health drink that helps increase hemoglobin levels, making it effective in combating anemia and fatigue. Its natural nitrates boost stamina and improve blood circulation, contributing to better heart health and a radiant complexion.',
    price: 240,
    image: '/Blood +.jpg',
    dataAiHint: 'health drink'
  },
  {
    id: 'hm-3',
    name: 'ABC Malt',
    category: 'health-mixes',
    description: 'ABC malt is a nutrient-dense health drink made from a blend of Apple, Beetroot, and Carrot, which boosts overall immunity and energy levels. It is packed with antioxidants, vitamins, and minerals that promote radiant skin, improve vision, and support cardiovascular health.',
    price: 280,
    image: '/ABC Malt.jpg',
    dataAiHint: 'malt drink'
  },
];
