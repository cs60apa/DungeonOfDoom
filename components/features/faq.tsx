"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = useMemo(() => [
    {
      question: "What is the pricing for Lupleg Mentorship?",
      answer:
        "Our mentorship varies with range of pricing plans to fit your needs. The basic plan starts at $20 per month, with additional features and support available in our higher-tier plans. You can view all of our pricing options on the Premium page.",
    },
    {
      question: "What features are included in Lupleg mentorship?",
      answer:
        "Our mentorship includes a wide range of features to help you improve your coding skills and advance your career. Some of the key features include access to all coding challenges, video tutorials, project-based roadmaps, and live call mentorship. We also offer job search support and 24/7 customer support to help you succeed.",
    },
    {
      question: "How do I get started with the program?",
      answer:
        "To get started with our program, simply sign up for a free account on our website. Once you have created an account, you can choose a pricing plan that fits your needs and budget. You can then access all of our features and resources, and start improving your coding skills right away.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer a range of support options to help you succeed with our program. Our customer support team is available 24/7 to answer any questions you may have and help you resolve any issues you encounter. We also offer job search support to help you find your dream job, and live call mentorship to provide personalized guidance and feedback.",
    },
    {
      question: "Do you offer any training or resources for free?",
      answer:
        "Yes, we offer a range of free resources to help you improve your coding skills and advance your career. Some of our free resources include coding challenges, video tutorials, and project-based roadmaps. We also offer a 3-day free trial of our premium program, so you can try out all of our features and resources before committing to a subscription.",
    },
    {
      question: "How are programs offered?",
      answer:
        "Our programs are offered online, so you can access all of our features and resources from anywhere in the world. You can complete coding challenges, watch video tutorials, and work on project-based roadmaps at your own pace, and receive personalized feedback and guidance through live call mentorship. Our programs are designed to be flexible and convenient, so you can learn on your own schedule and from the comfort of your own home.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel within the first 15 days of signing up, you will receive a full refund. After the first 30 days, you can cancel your subscription at any time, and you will not be charged for the following month. You can cancel your subscription through deactivating or deleting your account, and you will not be charged for the following month.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team at any time by emailing  ",
    },
    {
      question: "Where can i make payment from?",
      answer:
        "To make your payment you can simply reachout to us via payment@lupleg.website and you will be provided with relevants details for belling",
    },
  ], []);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredFaqs = useMemo(() => {
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, faqs]);
  return (
    <section className="bg-black dark:bg-gray-950 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white tracking-tight mb-8 md:mb-10">
            Frequently Asked Questions
          </h2>
          <div className="mb-8 md:mb-10">
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-[#18181B] text-white dark:bg-[#18181B] dark:text-white"
            />
          </div>
          <Accordion type="single" collapsible>
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-white dark:text-white">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
