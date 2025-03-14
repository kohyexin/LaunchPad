import React from "react";
import { LogoFooter } from "@/components/logo";
import { Link } from "next-view-transitions";

export const Footer = async ({ data, locale }: { data: any, locale: string }) => {
  return (
    <div className="relative">
      <div className="border-t border-neutral-900 px-8 pt-20 pb-32 relative bg-primary">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start ">
          <div>
            <div className="mr-4  md:flex mb-4">
              {data?.logo?.image && (
                <LogoFooter image={data?.logo?.image} />
              )}
            </div>
            <div className="max-w-xs">{data?.description}</div>
            <div className="mt-4">{data?.copyright}</div>
            <div className="mt-10">
            </div>
            <div className="mt-2">
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            <LinkSection links={data?.internal_links} locale={locale} />
            <LinkSection links={data?.policy_links} locale={locale} />
            <LinkSection links={data?.social_media_links} locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkSection = ({ links, locale }: { links: { text: string; URL: never | string }[], locale: string }) => (
  <div className="flex justify-center space-y-4 flex-col mt-4">
    {links.map((link) => (
      <Link
        key={link.text}
        className="transition-colors hover:text-neutral-400 text-muted text-xs sm:text-sm"
        href={`${link.URL.startsWith('http') ? '' : `/${locale}`}${link.URL}`}
      >
        {link.text}
      </Link>
    ))}
  </div>
);