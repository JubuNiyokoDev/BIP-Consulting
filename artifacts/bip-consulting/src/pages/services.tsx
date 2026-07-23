import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';

const SERVICE_KEYS = [
  { id: 'strategy-management', prefix: 's1' },
  { id: 'artificial-intelligence', prefix: 's2' },
  { id: 'digital-transformation', prefix: 's3' },
  { id: 'software-technology', prefix: 's4' },
  { id: 'talent-solutions', prefix: 's5' },
  { id: 'entrepreneurship-innovation', prefix: 's6' },
  { id: 'international-development', prefix: 's7' },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <SEO
        title={t('services.seoTitle')}
        description={t('services.seoDesc')}
      />

      <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeUpVariant} className="font-serif text-5xl md:text-7xl font-bold mb-6">
              {t('services.heroTitle')}
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              {t('services.heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('services.expertiseTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t('services.expertiseDesc')}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="strategy-management">
            {SERVICE_KEYS.map(({ id, prefix }, index) => (
              <AccordionItem
                key={id}
                value={id}
                className="bg-white border border-border rounded-2xl px-6 py-2 shadow-sm overflow-hidden data-[state=open]:border-accent transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center text-left">
                    <span className="text-accent font-mono text-sm font-bold mr-6">0{index + 1}</span>
                    <span className="font-serif text-2xl md:text-3xl font-bold text-primary">
                      {t(`services.${prefix}_title` as any)}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2">
                  <div className="pl-11 md:pl-12">
                    <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                      {t(`services.${prefix}_desc` as any)}
                    </p>

                    <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-4">
                      {t('services.coreCapabilities')}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-start gap-3 bg-secondary/50 p-4 rounded-xl">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-primary font-medium">
                            {t(`services.${prefix}_sub${i}` as any)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </PageWrapper>
  );
}
