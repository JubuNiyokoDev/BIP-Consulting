import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Target, Shield, Lightbulb, Users, Globe, Zap, Heart, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '@/data/content';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Target,       key: 'value_excellence' },
    { icon: Shield,       key: 'value_integrity' },
    { icon: Lightbulb,    key: 'value_innovation' },
    { icon: Users,        key: 'value_collaboration' },
    { icon: Globe,        key: 'value_impact' },
    { icon: Heart,        key: 'value_sustainability' },
    { icon: Users,        key: 'value_inclusion' },
    { icon: CheckCircle2, key: 'value_accountability' },
  ] as const;

  return (
    <PageWrapper>
      <SEO
        title={t('about.seoTitle')}
        description={t('about.seoDesc')}
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeUpVariant} className="font-serif text-5xl md:text-7xl font-bold mb-6">
              {t('about.heroTitle')}
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              {t('about.heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-bold text-primary mb-8">{t('about.whoWeAre')}</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t('about.whoP1')}</p>
                <p>{t('about.whoP2')}</p>
                <p>{t('about.whoP3')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Mission */}
              <div className="bg-primary text-white p-8 rounded-2xl">
                <h3 className="font-serif text-2xl font-bold mb-4">{t('about.mission')}</h3>
                <p className="text-white/80 leading-relaxed">{t('about.missionText')}</p>
              </div>
              {/* Vision */}
              <div className="bg-secondary p-8 rounded-2xl">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">{t('about.vision')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('about.visionText')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUpVariant} className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('about.ourValues')}
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.ourValuesSub')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map(({ icon: Icon, key }) => (
              <motion.div
                key={key}
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {t(`about.${key}` as any)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`about.${key}_desc` as any)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Presence */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">{t('about.ourPresence')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('about.ourPresenceSub')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { label: t('about.hqLabel'), value: companyDetails.address },
              { label: t('about.foundedLabel'), value: t('about.foundedValue') },
              { label: t('about.teamLabel'), value: t('about.teamValue') },
              { label: t('about.reachLabel'), value: t('about.reachValue') },
            ].map(({ label, value }) => (
              <div key={label} className="bg-secondary/50 p-8 rounded-2xl">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">{label}</p>
                <p className="font-serif text-xl font-bold text-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl font-bold mb-8"
          >
            {t('about.ctaTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mb-10"
          >
            {t('about.ctaText')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 text-lg px-10 h-14 rounded-full">
              <Link href="/contact">{t('common.getInTouch')}</Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
