"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import ShootingStars from "../decorations/shooting-star";
import StarBackground from "../decorations/star-background";

import { Heading } from "../elements/heading";
import { Subheading } from "../elements/subheading";
import { Button } from "../elements/button";
import { Cover } from "../decorations/cover";
import { HiArrowRight } from "react-icons/hi2";

import { motion } from "framer-motion";
import Image from "next/image";


export const Hero = ({ heading, sub_heading, CTAs, locale }: { heading: string; sub_heading: string; CTAs: any[], locale: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden max-w-7xl mx-auto justify-center">
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex justify-center"
      >
        <Badge
          onClick={() => {
            console.log("clicked");
          }}
        >
          04 years and growing - thanks for being part of the journey
        </Badge>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <StarBackground />
        <ShootingStars />
      </motion.div>
      <Heading
        as="h1"
        className="text-4xl md:text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center relative z-10  py-6"
      >
        {heading.substring(0, heading.lastIndexOf(" "))} <Cover>{heading.split(" ").pop()}</Cover>
      </Heading>
      <Subheading className="text-center mt-2 md:mt-6 text-base md:text-xl text-muted  max-w-3xl mx-auto relative z-10">
        {sub_heading}
      </Subheading>
      <div className="flex space-x-2 items-center mt-4 justify-center">
        {CTAs && CTAs.map((cta) => (
          <Button
            key={cta?.id}
            as={Link}
            href={`/${locale}${cta.URL}`}
            {...(cta.variant && { variant: cta.variant })}
          >
            {cta.text}
          </Button>
        ))}
      </div>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <Image
            src="http://localhost:1337/uploads/dashboard_f554d7ff5a.png"
            alt="header"
            width={1920}
            height={1080}
            className="rounded-[20px]"
          />
        </div>
      </div>



      <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gradient-to-t from-charcoal to-transparent" />
    </div>
  );
};

export const Badge: React.FC<
  { children: React.ReactNode } & React.ComponentPropsWithoutRef<"button">
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-neutral-50 dark:bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6  text-neutral-700 dark:text-neutral-300 inline-block w-fit mx-auto"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 py-1.5 px-4 ring-1 ring-white/10 ">
        <span>{children}</span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};