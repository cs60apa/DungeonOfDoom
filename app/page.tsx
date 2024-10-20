"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-black to-black text-white flex flex-col">
        <Hero />
        <Features />

      </div>
    </div>
  );
}
