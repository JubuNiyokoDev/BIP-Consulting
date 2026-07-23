import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyDetails } from '@/data/content';
import { useTranslation } from 'react-i18next';

const ROLE_KEYS = [
  'role_consultants',
  'role_engineers',
  'role_ai',
  'role_pm',
  'role_researchers',
  'role_bd',
  'role_trainers',
  'role_graduate',
] as const;

const ICONS = [Users, Briefcase, GraduationCap, Briefcase, Users, Briefcase, GraduationCap, GraduationCap];

export default function Careers() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <SEO
        title={t('careers.seoTitle')}
        description={t('careers.seoDesc')}
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
              {t('careers.heroTitle')}
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              {t('careers.heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Hire */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">{t('careers.whoWeHire')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('careers.whoWeHireDesc')}
              </p>
              <div className="p-6 bg-secondary/50 rounded-2xl">
                <p className="font-semibold text-primary mb-1">{t('careers.howToApply')}</p>
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="text-accent font-bold hover:underline"
                >
                  {companyDetails.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">{t('careers.roles')}</h3>
              <p className="text-muted-foreground mb-6">{t('careers.rolesSub')}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {ROLE_KEYS.map((key, i) => {
                  const Icon = ICONS[i];
                  return (
                    <div key={key} className="flex items-center gap-3 bg-white border border-border p-4 rounded-xl hover:border-accent transition-colors">
                      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-primary">{t(`careers.${key}` as any)}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Join CTA */}
      <Section className="bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl font-bold mb-8"
          >
            {t('careers.joinTeam')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mb-10"
          >
            {t('careers.joinTeamSub')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              asChild
              className="bg-accent text-primary hover:bg-accent/90 text-lg px-10 h-14 rounded-full gap-2"
            >
              <a href={`mailto:${companyDetails.email}`}>
                <Send className="w-5 h-5" />
                {t('careers.applyNow')}
              </a>
            </Button>
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
