import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Globe2, Building2, Lightbulb, ShieldCheck, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyDetails, partners } from '@/data/content';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// CountUp hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  return count;
}

function StatCard({ end, label, prefix = '', suffix = '' }: { end: number; label: string; prefix?: string; suffix?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <motion.div
      variants={fadeUpVariant}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, margin: '-100px' }}
      className="text-center p-8 bg-white shadow-xl rounded-2xl border border-border/50"
    >
      <div className="font-serif text-5xl md:text-6xl font-bold text-primary mb-2">
        {prefix}{isVisible ? <CountUpNumber end={end} /> : '0'}{suffix}
      </div>
      <p className="text-muted-foreground font-medium text-lg">{label}</p>
    </motion.div>
  );
}

function CountUpNumber({ end }: { end: number }) {
  const count = useCountUp(end);
  return <span>{count}</span>;
}

export default function Home() {
  const { t } = useTranslation();

  const services = [
    { key: 'service1', icon: Target },
    { key: 'service2', icon: Globe2 },
    { key: 'service3', icon: Lightbulb },
    { key: 'service4', icon: Users },
    { key: 'service5', icon: Building2 },
    { key: 'service6', icon: ShieldCheck },
  ] as const;

  const differentiators = [
    'differentiator1',
    'differentiator2',
    'differentiator3',
    'differentiator4',
  ] as const;

  // Translated article data for home page preview
  const ARTICLES_HOME = [
    { id: '1', key: 'article1', catKey: 'cat_digital', date: '2024-10-12', readTime: 6 },
    { id: '2', key: 'article2', catKey: 'cat_ai', date: '2024-09-28', readTime: 8 },
    { id: '3', key: 'article3', catKey: 'cat_talent', date: '2024-08-15', readTime: 5 },
  ];

  return (
    <PageWrapper className="pt-0">
      <SEO
        title={t('home.seoTitle')}
        description={t('home.seoDesc')}
      />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-accent blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600 blur-[150px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeUpVariant}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
            >
              {t('home.heroHeading')} <span className="text-accent italic">{t('home.heroHeadingAccent')}</span>{t('home.heroHeadingEnd')}
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mb-12 leading-relaxed"
            >
              {t('home.heroSubtitle')}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 text-lg px-10 h-14 rounded-full">
                <Link href="/contact">{t('home.heroCta')}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 text-lg px-10 h-14 rounded-full">
                <Link href="/services">{t('home.heroSecondary')}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeUpVariant} className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('home.whatWeDo')}
              </motion.h2>
              <motion.div variants={fadeUpVariant} className="space-y-6 text-lg text-muted-foreground">
                <p>{t('home.whatWeDoSub')}</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="mt-8">
                <Button variant="link" asChild className="text-accent hover:text-primary text-lg p-0 font-semibold h-auto">
                  <Link href="/about" className="flex items-center gap-2">
                    {t('common.learnMore')} <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div variants={fadeUpVariant} className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative bg-secondary shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/20" />
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 C 20 0 50 0 100 100 Z" fill="hsl(var(--primary))" />
                  <path d="M0 50 C 40 80 80 20 100 50 L 100 100 L 0 100 Z" fill="hsl(var(--accent))" opacity="0.5" />
                </svg>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-border/50">
                <div className="flex items-center gap-4 mb-2">
                  <Globe2 className="w-8 h-8 text-accent" />
                  <span className="font-bold text-xl text-primary">{t('common.region')}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Services grid */}
      <Section className="bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ key, icon: Icon }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    {t(`home.${key}Title` as any)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`home.${key}Desc` as any)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-primary relative overflow-hidden text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <StatCard end={20}  suffix="+"  label={t('home.stat1Label')} />
            <StatCard end={50}  suffix="+"  label={t('home.stat2Label')} />
            <StatCard end={50}  suffix="+"  label={t('home.stat3Label')} />
            <StatCard end={2}         label={t('home.stat4Label')} />
          </motion.div>
        </div>
      </Section>

      {/* Why BIP */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUpVariant} className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('home.whyBipTitle')}
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.whyBipSub')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {differentiators.map((key) => (
              <motion.div
                key={key}
                variants={fadeUpVariant}
                className="flex gap-6 p-8 bg-white rounded-2xl border border-border shadow-sm hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    {t(`home.${key}Title` as any)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`home.${key}Desc` as any)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Latest Insights */}
      <Section className="bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-3">{t('home.latestInsights')}</h2>
              <p className="text-muted-foreground text-lg">{t('home.latestInsightsSub')}</p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/insights">{t('common.readMore')} <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {ARTICLES_HOME.map((article) => (
              <motion.div
                key={article.id}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-4 tracking-wider uppercase">
                    <span>{t(`insights.${article.catKey}` as any)}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4 line-clamp-3 group-hover:text-accent transition-colors">
                    {t(`insights.${article.key}_title` as any)}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2 flex-grow text-sm">
                    {t(`insights.${article.key}_excerpt` as any)}
                  </p>
                  <Link href="/insights" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors mt-auto text-sm">
                    {t('common.readMore')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 md:hidden text-center">
            <Button variant="outline" asChild>
              <Link href="/insights">{t('common.readMore')}</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Trusted By (partners marquee) */}
      <section className="py-16 border-y border-border bg-white overflow-hidden">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
          {t('home.trustedBy')}
        </p>
        <div className="relative flex overflow-hidden">
          <div className="group flex">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8 group-hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, i) => (
                <span key={i} className="font-serif text-2xl text-primary/40 font-bold tracking-tight select-none">
                  {t(`partners.${partner}` as any, partner)}
                </span>
              ))}
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8 group-hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, i) => (
                <span key={i} className="font-serif text-2xl text-primary/40 font-bold tracking-tight select-none">
                  {t(`partners.${partner}` as any, partner)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Section className="bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 opacity-50" />
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl font-bold mb-8"
          >
            {t('home.ctaHeading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mb-10"
          >
            {t('home.ctaSubtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 text-lg px-10 h-14 rounded-full">
              <Link href="/contact">{t('common.contactTeam')}</Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
