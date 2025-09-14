import React from 'react';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-2">
           <Leaf className="w-5 h-5 text-primary" />
           <p className="font-headline text-lg text-foreground">Azhagu</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Azhagu. All rights reserved.</p>
        <p className="text-sm mt-2">Natural Soaps and Health Mixes, made with care.</p>
      </div>
    </footer>
  );
}
