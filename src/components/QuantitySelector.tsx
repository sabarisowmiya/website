"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export function QuantitySelector({ quantity, setQuantity }: QuantitySelectorProps) {
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={decrement} aria-label="Decrease quantity">
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
        className="w-16 text-center"
        aria-label="Quantity"
      />
      <Button variant="outline" size="icon" onClick={increment} aria-label="Increase quantity">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
