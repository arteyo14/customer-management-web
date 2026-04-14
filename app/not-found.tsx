"use client";

import Link from "next/link";
import { FileQuestion, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7FCF8] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150" />
          <div className="relative bg-white p-8 rounded-4xl shadow-xl shadow-primary/5 border border-gray-100">
            <FileQuestion
              size={80}
              className="text-primary animate-bounce-slow"
            />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-8xl font-black text-primary/20 tabular-nums">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 italic">
            Oops! Page not found.
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            The page you are looking for does not exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            className="rounded-xl px-8 h-12 font-bold bg-primary shadow-lg shadow-primary/20"
          >
            <Link href="/customer">
              <Home size={18} className="mr-2" />
              BACK TO LIST
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
