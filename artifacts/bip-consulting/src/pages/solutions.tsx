import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const SOLUTION_KEYS = ['sol1', 'sol2', 'sol3', 'sol4', 'sol5', 'sol6'];

export default function Solutions() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <SEO
        title={t('solutions.seoTitle')}
        description={t('solutions.seoDesc')}
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
              {t('solutions.heroTitle')}
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              {t('solutions.heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SOLUTION_KEYS.map((key) => (
              <motion.div
                key={key}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex flex-col h-full relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Box className="w-24 h-24" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    <span className="px-3 py-1 bg-secondary text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                      {t(`solutions.${key}_industry` as any)}
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
                      {t(`solutions.${key}_service` as any)}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-primary mb-4 relative z-10">
                    {t(`solutions.${key}_title` as any)}
                  </h3>

                  <p className="text-muted-foreground mb-8 flex-grow relative z-10">
                    {t(`solutions.${key}_desc` as any)}
                  </p>

                  <Button variant="outline" className="w-full mt-auto relative z-10" asChild>
                    <Link href="/contact">{t('common.discussSolution')}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
