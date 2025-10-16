
"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/BackButton";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  address: string;
  landmark: string;
  anotherPhone: string;
};

export default function CheckoutPage() {
  const { cartItems, subtotal, isLoading } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const shippingCost = 50;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, phone, address, landmark, anotherPhone } = data;
    
    const orderDetails = cartItems.map(item => 
      `${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const totalAmount = (subtotal ?? 0) + shippingCost;

    const message = `
      New Order Received!\n\n      *Customer Details:*\n\n      Name: ${name}\n\n      Phone: ${phone}\n\n      Address: ${address}\n\n      Landmark: ${landmark || 'N/A'}\n\n      Alternate Phone: ${anotherPhone || 'N/A'}\n\n      \n\n      *Order Summary:*\n\n      ${orderDetails}\n\n      Subtotal: ₹${subtotal?.toFixed(2)}\n      Shipping: ₹${shippingCost.toFixed(2)}\n      *Total Amount:* ₹${totalAmount.toFixed(2)}\n\n    `;

    const whatsappNumber = "919943645836"; // Replace with the target WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    alert("Order placed successfully!");
  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const total = (subtotal ?? 0) + shippingCost;

  return (
    <div className="relative pt-16">
      <div className="absolute top-4 left-0 z-10">
        <BackButton />
      </div>
      <h1 className="text-4xl font-headline font-bold mb-8 pt-8">Checkout</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} id="checkout-form" className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register("name", { required: "Name is required" })} />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" {...register("phone", { required: "Phone number is required" })} />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" {...register("address", { required: "Address is required" })} />
                  {errors.address && <p className="text-destructive text-sm mt-1">{errors.address.message}</p>}
                </div>
                <div>
                  <Label htmlFor="landmark">Landmark</Label>
                  <Input id="landmark" {...register("landmark")} />
                </div>
                <div>
                  <Label htmlFor="anotherPhone">Another Phone Number</Label>
                  <Input id="anotherPhone" {...register("anotherPhone")} />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">₹{subtotal !== undefined ? subtotal.toFixed(2) : '0.00'}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">₹{shippingCost.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" type="submit" form="checkout-form">
                Place Order
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
