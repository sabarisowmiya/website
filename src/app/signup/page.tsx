
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import Link from "next/link";
import { BackButton } from "@/components/BackButton";

export default function SignupPage() {
  return (
    <div className="relative flex items-center justify-center py-12">
      <div className="absolute top-4 left-0 z-10">
        <BackButton />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Create an Account</CardTitle>
          <CardDescription>Join Azhagu to start shopping</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="Your Name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">
            <UserPlus className="mr-2 h-4 w-4"/>
            Sign Up
          </Button>
           <p className="text-center text-sm text-muted-foreground pt-4">
             Already have an account?{' '}
            <Link href="/login" className="underline hover:text-primary font-semibold">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
