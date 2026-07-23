import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Article keys with their category keys for filtering
const ARTICLES = [
  { id: '1', key: 'article1', catKey: 'cat_digital', date: '2024-10-12', readTime: 6 },
  { id: '2', key: 'article2', catKey: 'cat_ai',      date: '2024-09-28', readTime: 8 },
  { id: '3', key: 'article3', catKey: 'cat_talent',  date: '2024-08-15', readTime: 5 },
  { id: '4', key: 'article4', catKey: 'cat_entrepreneurship', date: '2024-07-02', readTime: 7 },
  { id: '5', key: 'article5', catKey: 'cat_tech',    date: '2024-06-18', readTime: 4 },
  { id: '6', key: 'article6', catKey: 'cat_investment', date: '2024-05-30', readTime: 9 },
];

const CATEGORY_KEYS = ['cat_digital', 'cat_ai', 'cat_talent', 'cat_entrepreneurship', 'cat_tech', 'cat_investment'];

export default function Insights() {
  const { t } = useTranslation();
  const [filterKey, setFilterKey] = useState<string | null>(null);

  const filtered = filterKey ? ARTICLES.filter((a) => a.catKey === filterKey) : ARTICLES;

  return (
    <PageWrapper>
      <SEO
        title={t('insights.seoTitle')}
        description={t('insights.seoDesc')}
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
              {t('insights.heroTitle')}
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              {t('insights.heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex gap-2 w-max">
              <button
                onClick={() => setFilterKey(null)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filterKey === null
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-primary border border-border hover:border-primary/30'
                }`}
              >
                {t('insights.filterAll')}
              </button>
              {CATEGORY_KEYS.map((catKey) => (
                <button
                  key={catKey}
                  onClick={() => setFilterKey(catKey)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    filterKey === catKey
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-primary border border-border hover:border-primary/30'
                  }`}
                >
                  {t(`insights.${catKey}` as any)}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">{t('insights.noResults')}</p>
          ) : (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-xs font-semibold text-accent mb-4 tracking-wider uppercase">
                      <span>{t(`insights.${article.catKey}` as any)}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4 line-clamp-3 group-hover:text-accent transition-colors">
                      {t(`insights.${article.key}_title` as any)}
                    </h3>
                    <p className="text-muted-foreground mb-8 line-clamp-3 flex-grow">
                      {t(`insights.${article.key}_excerpt` as any)}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime} {t('common.minRead')}
                        </span>
                      </div>
                      <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t('insights.readArticle')} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </Section>
    </PageWrapper>
  );
}
