import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { partners } from '@/data/content';
import { Handshake } from 'lucide-react';

export default function Partners() {
  return (
    <PageWrapper>
      <SEO 
        title="Partners" 
        description="BIP Consulting collaborates with governments, universities, investors, and tech hubs to drive systemic change." 
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
              Our Network
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              We collaborate with premier institutions worldwide to catalyze innovation and execute at scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-3xl text-center mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">A Ecosystem of Excellence</h2>
            <p className="text-lg text-muted-foreground">
              Complex transformations cannot happen in isolation. We actively build and maintain strategic alliances across the public and private sectors to ensure our clients have access to the best technology, funding, and regulatory support.
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
                <h3 className="font-serif text-xl font-bold text-primary">{partner}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
