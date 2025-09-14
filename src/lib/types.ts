export interface Product {
  id: string;
  name: string;
  category: 'soaps' | 'health-mixes';
  description: string;
  price: number;
  image: string;
  varieties?: string[];
  dataAiHint: string;
}

export interface CartItem extends Product {
  quantity: number;
}
