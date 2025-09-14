
"use client";

import React from 'react';
import { products } from '@/lib/products';
import { notFound, useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { QuantitySelector } from '@/components/QuantitySelector';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, CheckCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { BackButton } from '@/components/BackButton';

export default function ProductDetailPage() {
  const params = useParams() as { category: string; productId: string; };
  const { category, productId } = params;
  const product = products.find(p => p.category === category && p.id === productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const { toast } = useToast();
  const router = useRouter();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: (
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <span>Added to cart!</span>
        </div>
      ),
      description: `${quantity} x ${product.name} has been added to your cart.`,
      action: <Button variant="outline" size="sm" onClick={() => router.push('/cart')}>View Cart</Button>,
    });
  };
  
  const categoryTitle = category === 'soaps' ? 'Soaps' : 'Health Mixes';

  return (
    <div className="relative pt-16">
       <div className="absolute top-4 left-0 z-10">
        <BackButton />
      </div>
       <div className="mb-6 flex items-center justify-center gap-2 text-sm text-muted-foreground pt-8">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/products/${category}`} className="hover:text-foreground">{categoryTitle}</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={product.dataAiHint}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-6 text-primary">₹{product.price.toFixed(2)}</p>
          <p className="text-muted-foreground mb-8 text-lg">{product.description}</p>
          <div className="flex items-center gap-4 mb-8">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
          <Button size="lg" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
