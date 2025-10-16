
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <div className="bg-green-100/50 rounded-3xl p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4">
            Purely Natural, Simply Good.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our handcrafted soaps and wholesome health mixes, made with the finest natural ingredients for a healthier you.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#categories">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="scroll-mt-20">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/products/soaps" className="block group">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                    <Image
                      src="/azhagu-soaps-collection.jpg"
                      alt="Handmade soaps"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="soap collection"
                    />
                  <div className="absolute inset-0 bg-green-900/0 flex items-center justify-center">
                    <h3 className="text-4xl font-headline text-white font-bold">Soaps</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/products/health-mixes" className="block group">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src="/3product.jpg"
                    alt="Healthy food mix ingredients like beetroot, apple, and carrot"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="beetroot apple"
                  />
                  <div className="absolute inset-0 bg-red-900/0 flex items-center justify-center">
                    <h3 className="text-4xl font-headline text-white font-bold">Health Mixes</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
