
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Package, User, History, Truck } from "lucide-react";
import { BackButton } from "@/components/BackButton";

// Mock Data
const user = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  initials: "JD",
  avatarUrl: "https://picsum.photos/100/100"
};

const orderHistory = [
  {
    id: "ORD-001",
    date: "2023-10-26",
    total: 32.47,
    status: "Delivered",
    items: [
      { name: "Neem Soap", quantity: 2, image: "/neemsoap.jpg", dataAiHint: "neem soap" },
      { name: "Super Grains Health Mix", quantity: 1, image: "https://picsum.photos/200/200", dataAiHint: "health food" }
    ]
  },
  {
    id: "ORD-002",
    date: "2023-09-15",
    total: 15.98,
    status: "Delivered",
    items: [
      { name: "Citrus Burst Soap", quantity: 2, image: "https://picsum.photos/200/200", dataAiHint: "citrus soap" }
    ]
  }
];

const orderTracking = {
  id: "ORD-003",
  status: "In Transit",
  estimatedDelivery: "2023-11-05",
  updates: [
    { status: "Order Placed", date: "2023-11-01", location: "Warehouse" },
    { status: "Shipped", date: "2023-11-02", location: "Distribution Center" },
    { status: "In Transit", date: "2023-11-03", location: "Regional Hub" }
  ]
};

export default function AccountPage() {
  return (
    <div className="relative pt-16">
      <div className="absolute top-4 left-0 z-10">
        <BackButton />
      </div>
      <div className="flex items-center gap-4 mb-8 pt-8">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person face" />
          <AvatarFallback>{user.initials}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-headline font-bold">Welcome, {user.name}</h1>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile"><User className="mr-2" />Profile</TabsTrigger>
          <TabsTrigger value="history"><History className="mr-2" />Order History</TabsTrigger>
          <TabsTrigger value="tracking"><Truck className="mr-2" />Order Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Your Information</CardTitle>
              <CardDescription>View and manage your personal details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold">Full Name</p>
                <p className="text-muted-foreground">{user.name}</p>
              </div>
              <div>
                <p className="font-semibold">Email Address</p>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Edit Profile</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
           <Card>
             <CardHeader>
                <CardTitle className="font-headline">Your Past Orders</CardTitle>
                <CardDescription>Review your purchase history.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-6">
                {orderHistory.map(order => (
                  <div key={order.id}>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-bold text-lg">Order #{order.id}</p>
                        <p className="text-sm text-muted-foreground">Date: {order.date}</p>
                      </div>
                      <div className="text-right">
                         <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'} className="mb-1">{order.status}</Badge>
                         <p className="font-bold text-lg">₹{order.total.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                       {order.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md" data-ai-hint={item.dataAiHint} />
                            <div>
                              <p>{item.name}</p>
                              <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                            </div>
                          </div>
                       ))}
                    </div>
                    <Separator className="mt-6" />
                  </div>
                ))}
             </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="tracking" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Track Your Shipment</CardTitle>
              <CardDescription>Order #{orderTracking.id}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center mb-6 p-4 bg-secondary rounded-lg">
                    <div>
                        <p className="font-semibold">Status</p>
                        <p className="text-2xl font-bold text-primary">{orderTracking.status}</p>
                    </div>
                     <div>
                        <p className="font-semibold">Estimated Delivery</p>
                        <p className="text-2xl font-bold">{orderTracking.estimatedDelivery}</p>
                    </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-border -translate-x-1/2 ml-3"></div>
                  {orderTracking.updates.map((update, index) => (
                    <div key={index} className="relative flex items-start gap-4 mb-6">
                       <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center ring-8 ring-background">
                         <Package className="h-4 w-4 text-primary-foreground" />
                       </div>
                       <div>
                          <p className="font-semibold">{update.status}</p>
                          <p className="text-sm text-muted-foreground">{update.location}</p>
                          <p className="text-xs text-muted-foreground">{update.date}</p>
                       </div>
                    </div>
                  ))}
                </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
