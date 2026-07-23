import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { careers, companyDetails } from '@/data/content';
import { ArrowRight, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Careers() {
  return (
    <PageWrapper>
      <SEO 
        title="Careers" 
        description="Join BIP Consulting. We are looking for elite consultants, engineers, and strategists to shape the future of innovation." 
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
              Join the Team
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Build a career shaping the future of innovation, technology, and economic transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">Who We Hire</h2>
                <div className="space-y-6 text-lg text-muted-foreground mb-8">
                  <p>
                    BIP Consulting solves hard problems. We look for individuals with exceptional analytical rigor, deep domain expertise, and a global mindset.
                  </p>
                  <p>
                    Whether you are an experienced management consultant, a highly specialized AI engineer, or a recent graduate with outstanding potential, we offer an environment where you will be challenged, valued, and given immediate responsibility.
                  </p>
                </div>
                <div className="bg-secondary/50 p-8 rounded-2xl border border-border">
                  <h3 className="font-bold text-primary mb-4 text-xl">How to Apply</h3>
                  <p className="text-muted-foreground mb-6">
                    Send your CV and a brief cover letter outlining the specific area you are interested in.
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <a href={`mailto:${companyDetails.email}?subject=Career Application`}>
                      Email Application
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-serif text-2xl font-bold text-primary mb-8">Areas of Opportunity</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {careers.map((role, i) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-white border border-border rounded-xl hover:border-accent hover:shadow-md transition-all group flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                      <Briefcase className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <span className="font-semibold text-primary">{role}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
