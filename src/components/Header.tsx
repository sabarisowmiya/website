"use client";

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Leaf, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export function Header() {
  const { itemCount } = useCart();
  const [isAnimating, setIsAnimating] = React.useState(false);

  const prevItemCount = React.useRef(itemCount);

  React.useEffect(() => {
    if (itemCount > prevItemCount.current) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300); // Animation duration
      return () => clearTimeout(timer);
    }
    prevItemCount.current = itemCount;
  }, [itemCount]);

  // Mock logged in state
  const isLoggedIn = true;

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary">
          <Leaf className="w-7 h-7" />
          Azhagu
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link href="/products/soaps" className="hover:text-primary transition-colors">Soaps</Link>
          <Link href="/products/health-mixes" className="hover:text-primary transition-colors">Health Mixes</Link>
        </nav>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
             <Button variant="ghost" asChild>
               <Link href="/account">
                 <User className="mr-2 h-4 w-4" />
                 Account
               </Link>
             </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="default" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
          <Link href="/cart" className="relative p-2" aria-label={`Shopping cart with ${itemCount} items`}>
            <ShoppingCart className="w-6 h-6 text-foreground" />
            {itemCount > 0 && (
              <span className={cn(
                "absolute top-0 right-0 block h-5 w-5 rounded-full bg-accent text-xs font-bold flex items-center justify-center text-primary-foreground transform-gpu",
                isAnimating && 'animate-cart-ping'
              )}>
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
