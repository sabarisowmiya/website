"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  generateProductDescription
} from '@/ai/flows/generate-product-descriptions';
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  productName: z.string().min(2, { message: "Product name is required." }),
  productType: z.string().min(2, { message: "Product type is required." }),
  keyAttributes: z.string().min(5, { message: "Please list some key attributes." }),
  intendedUse: z.string().min(5, { message: "Intended use is required." }),
});

export function DescriptionGeneratorForm() {
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      productType: "",
      keyAttributes: "",
      intendedUse: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError('');
    setGeneratedDescription('');
    try {
      const result = await generateProductDescription(values);
      if (result && result.description) {
        setGeneratedDescription(result.description);
      } else {
        setError('Failed to generate description. The AI returned an unexpected response.');
      }
    } catch (e) {
      setError('An error occurred while generating the description.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Product Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Lavender Dream Soap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Type</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Artisanal Soap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keyAttributes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Attributes (comma-separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., calming, pure lavender oil, moisturizing" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="intendedUse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Intended Use</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., For a relaxing bath before bed, suitable for all skin types." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {generatedDescription && (
              <div className="space-y-2 pt-4">
                  <FormLabel>Generated Description</FormLabel>
                  <Textarea readOnly value={generatedDescription} rows={6} className="bg-secondary" />
              </div>
            )}
            {error && <p className="text-sm text-destructive pt-2">{error}</p>}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate Description
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
