import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { industries } from '@/data/content';
import { Building2, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Industries() {
  return (
    <PageWrapper>
      <SEO 
        title="Industries" 
        description="BIP Consulting serves a diverse range of sectors including Government, Banking, Healthcare, and Technology across Europe and Africa." 
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
              Industries We Serve
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Deep sectoral knowledge applied to unique structural challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Cross-Sector Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Transformation requires an understanding of industry-specific regulatory landscapes, legacy architectures, and market dynamics. We bring tailored expertise to {industries.length} key sectors.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry}
                variants={fadeUpVariant}
                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">{industry}</h3>
                  <div className="mt-auto pt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Link href="/solutions" className="text-accent font-semibold flex items-center gap-2 text-sm uppercase tracking-wider">
                      View Solutions <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
