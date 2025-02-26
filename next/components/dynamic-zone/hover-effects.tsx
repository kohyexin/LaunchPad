import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Designed for developers",
      description:
        "Intuitive APIs that reduce integration time and effort.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Optimise Connectors",
      description:
        "Payment Orchestrations at its best.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Connectors Integration",
      description:
        "Build world of payment methods for you.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "100% Uptime guarantee",
      description: "Because Downtime Isn’t an Option",
      icon: <IconCloud />,
    },
    {
      title: "Payment Optimisations",
      description: "Our optimisation includes payment process, conversion rate, cost, fraud, and reconciliation",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. At least our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Customised Branding",
      description:
        "Your Brand intact with us, go live as soon as 1-3 working days.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Risk Management",
      description: "Beat fraud, grow your revenue with our flexible AI-assisted rules",
      icon: <IconHeart />,
    },
  ];
  return (
    <div id="hovereffect">
      <h2 className="text-center text-xl font-bold text-neutral-700 dark:text-neutral-100 md:text-3xl">
        Discover Our Key Features
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-neutral-800 dark:text-neutral-200 md:text-base">
        We built a payment system so you can focus on your business
      </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 pt-5 pb-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div></div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
