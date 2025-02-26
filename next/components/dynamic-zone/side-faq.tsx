"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const FAQs = [
  {
    question: "What is your platform, and how does it work?",
    answer:
      "We provide a cloud-based Payment SaaS solution that enables businesses to process payments (card acquiring) and issue virtual or physical cards (card issuing) through a seamless, secure, and scalable platform.",
  },
  {
    question: "What types of businesses do you support?",
    answer:
      "We support e-commerce, SaaS platforms, marketplaces, fintech companies, travel businesses, and enterprises that require payment processing or custom card issuing solutions.",
  },
  {
    question: "Do you support international payments?",
    answer:
      "Yes, we support cross-border transactions in multiple currencies, allowing businesses to accept and send payments worldwide.",
  },
  {
    question: "How do you handle compliance and regulations?",
    answer:
      "We comply with PCI DSS, KYC, and AML regulations, ensuring secure and legal payment processing and card issuance.",
  },
];
export function FrequentlyAskedQuestionsAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40">
      <h2 className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-left md:text-6xl">
        Helpful Insights
      </h2>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
     
      </div>
      <div className="flex sm:flex-row flex-col gap-4 items-center [perspective:800px] col-span-2">
        <button className="px-4 py-2 rounded-lg bg-yellow-400 w-full sm:w-auto font-bold text-black text-base hover:[transform:rotateX(10deg)] transition duration-200 origin-left hover:shadow-lg">
          <a href = "/contact" target="_blank">Find out more</a>
        </button>
      </div>

    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconPlus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-90 scale-0",
            )}
          />
          <IconMinus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-0 scale-100",
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
