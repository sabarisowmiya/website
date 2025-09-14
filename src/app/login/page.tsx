
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { BackButton } from "@/components/BackButton";

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16a8 8 0 1 1 8-8 .752.752 0 0 1-.222.545l-2.353 2.353c-.22.22-.215.602 0 .822l2.2 2.2c.22.22.604.22.823 0l2.148-2.148A12.02 12.02 0 0 0 18 10c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8c2.25 0 4.28-.93 5.75-2.435l-2.09-2.09a4.5 4.5 0 0 0-5.656-5.657Z"/></svg>
  );
}

export default function LoginPage() {
  return (
    <div className="relative flex items-center justify-center py-12">
       <div className="absolute top-4 left-0 z-10">
        <BackButton />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Welcome Back</CardTitle>
          <CardDescription>Log in to your Azhagu account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
            <LogIn className="mr-2 h-4 w-4"/>
            Log In
          </Button>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
             <GoogleIcon className="mr-2 h-4 w-4" />
             Google
          </Button>
           <p className="text-center text-sm text-muted-foreground pt-4">
             Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline hover:text-primary font-semibold">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
