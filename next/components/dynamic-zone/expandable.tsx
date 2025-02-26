"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export function ExpandableCardOnClick() {
  const items = [
    {
      title: "Paygate - Card Acquiring",
      description: "Seamless card acquiring services",
      src: "http://localhost:1337/uploads/paygate_6087e44ef5.png",
      content: (
        <div>
          <p>Seamless integration for secure payments</p>
          <p>Accept payments globally with reliable processing</p>
          <p>Get paid quickly with seamless transactions</p>
          <p>Connect easily with leading platforms</p>
        </div>
      ),
    },
    {
        title: "PCI DSS Certification",
        description: "Audit and certify against PCI DSS Compliance",
        src: "http://localhost:1337/uploads/pciaudit_348ddd769e.png",
        content: (
          <div>
            <p>Evaluates how card data is stored, processed, and transmitted</p>
            <p>Detects vulnerabilities and gaps in security controls</p>
            <p>Confirms adherence to PCI DSS standards through audits</p>
            <p>Enhances data protection to reduce risks of breaches and fraud</p>
          </div>
        ),
      },
    {
      title: "Risk Management System",
      description: "Safeguards payment processing by mitigating fraud and attacks",
      src: "http://localhost:1337/uploads/fraud_700f709440.png",
      content: (
        <div>
          <p>Detects and blocks suspicious transactions</p>
          <p>Identifies and reduces potential security risks</p>
          <p>Ensures adherence to industry standards</p>
          <p>Continuously tracks and analyzes payment activities</p>
        </div>
      ),
    },
    {
        title: "VCCHub - Card Issuing",
        description: "Unlock Spending with On-Demand Cards",
        src: "http://localhost:1337/uploads/vcchub_2ab7183be5.png",
        content: (
          <div>
            <p>Issue branded cards for seamless transactions</p>
            <p>Enable spending anywhere with flexible controls</p>
            <p>Generate cards in real-time for immediate use</p>
            <p>Your Cards, Your Brand, Your Rules</p>
          </div>
        ),
      },
  ];
  const [active, setActive] = useState<null | (typeof items)[number]>(null);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    setActive(null);
  });

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="relative  w-full h-full">
      <div className="pt-5 pb-10 md:pt-10 md:pb-20 max-w-4xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"
            ></motion.div>
          )}
        </AnimatePresence>
        {active && (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}`}
              ref={ref}
              key={active.title}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md max-w-xl"
            >
              <motion.div layoutId={`image-${active.title}`}>
                <Image
                  src={active.src}
                  alt={active.title}
                  width={580}
                  height={580}
                  className="h-60 rounded-2xl object-cover"
                />
              </motion.div>
              <div className="p-6 flex flex-col items-start">
                <motion.p
                  layoutId={`title-${active.title}`}
                  className="text-lg font-bold text-neutral-800 dark:text-neutral-100"
                >
                  {active.title}
                </motion.p>
                <motion.p
                  layoutId={`description-${active.title}`}
                  className="text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {active.description}
                </motion.p>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-neutral-600 dark:text-neutral-400"
                >
                  {active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
        {items.map((item) => (
          <motion.div
            layoutId={`card-${item.title}`}
            onClick={() => setActive(item)}
            key={item.title}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md cursor-pointer"
          >
            <motion.div layoutId={`image-${item.title}`}>
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
                className="h-60 rounded-2xl object-cover"
              />
            </motion.div>
            <div className="p-6 flex flex-col items-start">
              <motion.p
                layoutId={`title-${item.title}`}
                className="text-lg font-bold text-neutral-800 dark:text-neutral-100"
              >
                {item.title}
              </motion.p>
              <motion.p
                layoutId={`description-${item.title}`}
                className="text-sm text-neutral-500 dark:text-neutral-300"
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
