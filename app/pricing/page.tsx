"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Simple",
      price: "Free",
      description: "Free plan for all users.",
      color: "bg-pink-400",
      features: [
        "Store up to 20 businesses",
        "2 collaborators",
        "Unlimited collaboration",
        "End to end encryption",
        "Mac, PC, Android, iOS, and Browser",
      ],
      button: "Get Started Free",
    },
    {
      name: "Efficient",
      price: isYearly ? "$12" : "$15",
      description: "Ideal for individual creators.",
      color: "bg-teal-400",
      features: [
        "Everything in Simple",
        "5/20B of business storage",
        "Unlimited management",
        "Unlimited collaborators",
        "Links with password protection",
      ],
      button: "Get Efficient Plan",
    },
    {
      name: "Team",
      price: isYearly ? "$20" : "$25",
      description: "Small teams with up to 10 users.",
      color: "bg-yellow-400",
      features: [
        "Everything in Efficient",
        "Unlimited team members",
        "Custom storage plans",
        "White label branding",
      ],
      button: "Get Team Plan",
    },
  ];

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes storage for up to 20 businesses, 2 collaborators, unlimited collaboration, end-to-end encryption, and access across Mac, PC, Android, iOS, and Browser platforms.",
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a limit to how many team members I can add?",
      answer:
        "With the Team plan, you can add unlimited team members. The Efficient plan also allows for unlimited collaborators.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use end-to-end encryption to ensure your data is always secure and private.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing</h1>
      <div className="flex items-center justify-center mb-8">
        <span className={`mr-2 ${isYearly ? "opacity-50" : ""}`}>Monthly</span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} />
        <span className={`ml-2 ${isYearly ? "" : "opacity-50"}`}>Yearly</span>
        <span className="ml-2 text-sm text-green-400">(Save 20%)</span>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.color} rounded-lg p-6 text-black`}
          >
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-4xl font-bold mb-2">
              {plan.price}
              {plan.price !== "Free" && (
                <span className="text-base font-normal">/month</span>
              )}
            </p>
            <p className="mb-4 text-sm">{plan.description}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="mr-2 h-5 w-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              {plan.button}
            </Button>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#27272A] rounded-lg"
            >
              <AccordionTrigger className="px-6 py-4 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

       {/* Call to Action Section */}
       <section className="py-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Email reimagined.</h2>
          <p className="text-5xl font-bold mb-8">Available today.</p>
          <div className="flex justify-center space-x-4 mb-16">
            <Button
              variant="default"
              size="lg"
              className="rounded-full bg-white hover:bg-white text-black"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              className="rounded-full hover:rounded-full text-white bg-black hover:bg-[#1F2225]"
            >
              Contact Us
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
            <Image
              src="/lupleg.svg"
              height="200"
              width="600"
              alt="Lupleg"
              className="mx-auto"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.2))",
              }}
            />
          </div>
        </section>
    </div>
  );
}
