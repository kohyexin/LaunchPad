import React from 'react';
import dynamic from 'next/dynamic';

interface DynamicZoneComponent {
  __component: string;
  id: number;
  [key: string]: any;
}

interface Props {
  dynamicZone: DynamicZoneComponent[];
  locale: string;
}

const componentMapping: { [key: string]: any } = {
  'dynamic-zone.hero': dynamic(() => import('./hero').then(mod => mod.Hero), { ssr: false }),
  'dynamic-zone.features': dynamic(() => import('./features').then(mod => mod.Features), { ssr: false }),
  'dynamic-zone.testimonials': dynamic(() => import('./testimonials').then(mod => mod.Testimonials), { ssr: false }),
  'dynamic-zone.how-it-works': dynamic(() => import('./how-it-works').then(mod => mod.HowItWorks), { ssr: false }),
  'dynamic-zone.brands': dynamic(() => import('./brands').then(mod => mod.Brands), { ssr: false }),
  'dynamic-zone.pricing': dynamic(() => import('./pricing').then(mod => mod.Pricing), { ssr: false }),
  'dynamic-zone.launches': dynamic(() => import('./launches').then(mod => mod.Launches), { ssr: false }),
  'dynamic-zone.hover-effects': dynamic(() => import('./hover-effects').then(mod => mod.FeaturesSectionDemo), { ssr: false }),
  'dynamic-zone.stats': dynamic(() => import('./stats').then(mod => mod.StatsWithNumberTicker), { ssr: false }),
  'dynamic-zone.marquee': dynamic(() => import('./marquee').then(mod => mod.ImagesGrid), { ssr: false }),
  'dynamic-zone.hero-image': dynamic(() => import('./heroimage').then(mod => mod.HeroWithCenteredImage), { ssr: false }),
  'dynamic-zone.side-faq': dynamic(() => import('./side-faq').then(mod => mod.FrequentlyAskedQuestionsAccordion), { ssr: false }),
  'dynamic-zone.playful-hero': dynamic(() => import('./playful-hero').then(mod => mod.PlayfulHeroSection), { ssr: false }),
  'dynamic-zone.flip': dynamic(() => import('./flip').then(mod => mod.LogosWithBlurFlip), { ssr: false }),
  'dynamic-zone.expandable': dynamic(() => import('./expandable').then(mod => mod.ExpandableCardOnClick), { ssr: false }),
  'dynamic-zone.cta': dynamic(() => import('./cta').then(mod => mod.CTA), { ssr: false }),
  'dynamic-zone.form-next-to-section': dynamic(() => import('./form-next-to-section').then(mod => mod.FormNextToSection), { ssr: false }),
  'dynamic-zone.faq': dynamic(() => import('./faq').then(mod => mod.FAQ), { ssr: false }),
  'dynamic-zone.related-products': dynamic(() => import('./related-products').then(mod => mod.RelatedProducts), { ssr: false }),
  'dynamic-zone.related-articles': dynamic(() => import('./related-articles').then(mod => mod.RelatedArticles), { ssr: false })
}

const DynamicZoneManager: React.FC<Props> = ({ dynamicZone, locale }) => {
  return (
    <div>
      {
        dynamicZone.map((componentData) => {
          const Component = componentMapping[componentData.__component];
          if (!Component) {
            console.warn(`No component found for: ${componentData.__component}`);
            return null;
          }
          return <Component key={componentData.id} {...componentData} locale={locale} />;
        })}
    </div>
  );
};

export default DynamicZoneManager;
