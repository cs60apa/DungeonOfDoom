"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, LucideIcon } from "lucide-react";
import Link from "next/link";

function IconButton({
  icon: Icon,
  children,
  className,
}: {
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      className={`w-full justify-start gap-2 bg-background ${className}`}
      variant="outline"
    >
      {typeof Icon === "function" ? <Icon className="h-5 w-5" /> : Icon}
      {children}
    </Button>
  );
}

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Log in to Lupleg</h1>
            <p className="mt-2 text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-blue-500 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                placeholder="alan.turing@example.com"
                type="email"
                className="bg-[#16171D]"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-blue-500 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" className="bg-[#16171D]" />
            </div>
            <Button className="w-full bg-gray-200 text-black hover:bg-gray-300">
              Continue
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-gray-400">or</span>
            </div>
          </div>
          <div className="space-y-2">
            <IconButton
              icon={FaGithub}
              className="bg-white text-black hover:bg-gray-100"
            >
              Sign up with GitHub
            </IconButton>
            <IconButton
              icon={FcGoogle}
              className="bg-white text-black hover:bg-gray-100"
            >
              Sign up with Google
            </IconButton>
            <Button
              variant="outline"
              className="w-full justify-center bg-[#16171D] hover:bg-[#16171D] text-white hover:text-white"
            >
              Login with SSO
            </Button>
          </div>
          <p className="text-center text-xs text-gray-400">
            By signing in, you agree to our{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
