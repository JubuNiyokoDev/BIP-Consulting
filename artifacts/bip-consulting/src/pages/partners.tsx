import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import { partners } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';

export default function Partners() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <SEO
        title={t('partners.seoTitle')}
        description={t('partners.seoDesc')}
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
              {t('partners.heroTitle')}
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              {t('partners.heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('partners.ourEcosystem')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('partners.ourEcosystemDesc')}
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner}
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-secondary text-primary mx-auto flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">
                  {t(`partners.${partner}` as any, partner)}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Become a Partner CTA */}
      <Section className="bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold text-primary mb-6"
          >
            {t('partners.becomePartner')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            {t('partners.becomePartnerSub')}
          </motion.p>
          <Button size="lg" asChild>
            <Link href="/contact">{t('common.getInTouch')}</Link>
          </Button>
        </div>
      </Section>
    </PageWrapper>
  );
}
