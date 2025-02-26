"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Subheading } from "../elements/subheading";

export function LogosWithBlurFlip() {
  const [logos, setLogos] = useState([
    [
      {
        name: "Shopify",
        src: "http://localhost:1337/uploads/shopify_aa2b660041.png",
      },
      {
        name: "Magento",
        src: "http://localhost:1337/uploads/magento_bfacd52fca.png",
      },
      {
        name: "Woocommerce",
        src: "http://localhost:1337/uploads/woocommerce_06bf2bcb9f.png",
      },
      {
        name: "Opencart",
        src: "http://localhost:1337/uploads/opencart_fadd9cb4c8.png",
      },
      {
        name: "Shopline",
        src: "http://localhost:1337/uploads/shopline_57352cafac.png",
      },
      {
        name: "Shoplazza",
        src: "http://localhost:1337/uploads/shoplazza_ef998b92dc.png",
      },
      {
        name: "Shopyy",
        src: "http://localhost:1337/uploads/shopyy_ad0740daa2.png",
      },
    ],
    [
      {
        name: "Shopify 2",
        src: "http://localhost:1337/uploads/shopify_aa2b660041.png",
      },
      {
        name: "Magento 2",
        src: "http://localhost:1337/uploads/magento_bfacd52fca.png",
      },
      {
        name: "Woocommerce 2",
        src: "http://localhost:1337/uploads/woocommerce_06bf2bcb9f.png",
      },
      {
        name: "Opencart 2",
        src: "http://localhost:1337/uploads/opencart_fadd9cb4c8.png",
      },
      {
        name: "Shopline 2",
        src: "http://localhost:1337/uploads/shopline_57352cafac.png",
      },
      {
        name: "Shoplazza 2",
        src: "http://localhost:1337/uploads/shoplazza_ef998b92dc.png",
      },
      {
        name: "Shopyy 2",
        src: "http://localhost:1337/uploads/shopyy_ad0740daa2.png",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative z-20 py-10 md:py-40 px-4 md:px-8">
      {/*
      <h2 className="text-center text-2xl md:text-5xl font-bold font-sans  bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-600">
        Effortless Integration
      </h2>
      <p className="text-center text-base text-neutral-700 font-sans dark:text-neutral-300 mt-4">
        <Subheading>Platforms we have integrated with for effortless payment processing setup.</Subheading>
      </p>
      */}
      <h2 className="text-center text-xl font-bold text-neutral-700 dark:text-neutral-100 md:text-3xl">
        Effortless Integration
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-neutral-800 dark:text-neutral-200 md:text-base">
        We’ve seamlessly integrated with these platforms, allowing you to effortlessly offer payment processing to your customers with minimal setup.
      </p>


      <div className="flex gap-10 flex-wrap justify-center md:gap-10 relative h-full w-full mt-20">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.name}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width="100"
                height="100"
                className="md:h-20 md:w-40 h-10 w-20 object-contain filter dark:invert"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
