import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { insights } from '@/data/content';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

export default function Insights() {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(insights.map(i => i.category)))];
  
  const filteredInsights = filter === "All" 
    ? insights 
    : insights.filter(i => i.category === filter);

  return (
    <PageWrapper>
      <SEO 
        title="Insights" 
        description="Read the latest thought leadership, research reports, and perspectives from BIP Consulting." 
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
              Insights & Perspectives
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Thought leadership from our experts on the front lines of global digital transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex gap-2 w-max">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    filter === category 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white text-primary border border-border hover:border-primary/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredInsights.map((article) => (
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
                    <span>{article.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4 line-clamp-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:text-accent transition-colors group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
