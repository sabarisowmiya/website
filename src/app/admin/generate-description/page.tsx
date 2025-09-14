
import { DescriptionGeneratorForm } from '@/components/DescriptionGeneratorForm';
import { Sparkles } from 'lucide-react';
import { BackButton } from '@/components/BackButton';

export default function GenerateDescriptionPage() {
  return (
    <div className="relative max-w-2xl mx-auto pt-16">
      <div className="absolute top-4 left-0 z-10">
        <BackButton />
      </div>
      <div className="text-center mb-8 pt-8">
        <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-headline font-bold">AI Product Description Generator</h1>
        <p className="text-muted-foreground mt-2">
          Fill in the product details below to generate a compelling e-commerce description.
        </p>
      </div>
      <DescriptionGeneratorForm />
    </div>
  );
}
