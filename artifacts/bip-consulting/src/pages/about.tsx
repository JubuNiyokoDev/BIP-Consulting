import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Target, Shield, Lightbulb, Users, Globe, Zap, Heart, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '@/data/content';

const values = [
  { icon: Target, name: "Excellence", desc: "We deliver uncompromising quality and strategic rigor in every engagement." },
  { icon: Shield, name: "Integrity", desc: "We operate with absolute transparency and ethical standards." },
  { icon: Lightbulb, name: "Innovation", desc: "We constantly seek novel solutions to structural challenges." },
  { icon: Users, name: "Collaboration", desc: "We work as true partners with our clients, not just advisors." },
  { icon: Globe, name: "Impact", desc: "We focus on outcomes that transform organizations and economies." },
  { icon: Heart, name: "Sustainability", desc: "We build systems designed for long-term viability." },
  { icon: Users, name: "Inclusion", desc: "We leverage diverse perspectives across continents." },
  { icon: CheckCircle2, name: "Accountability", desc: "We take ownership of our recommendations and results." }
];

export default function About() {
  return (
    <PageWrapper>
      <SEO 
        title="About Us" 
        description="Learn about BIP Consulting's mission, vision, and the core values that drive our international consulting practice." 
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
              About BIP Consulting
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Bridging two continents through innovation, advisory, and talent to accelerate digital transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-bold text-primary mb-8">Who We Are</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded on the belief that the future of global growth lies at the intersection of European technological maturity and African market dynamism, BIP Consulting is an international advisory and technology firm.
                </p>
                <p>
                  Based in Sweden, we serve governments, development organizations, financial institutions, and ambitious enterprises across Europe and Africa. We do not offer generic advice; we provide institutional gravitas, deep structural understanding, and elite talent to execute complex transformations.
                </p>
                <p>
                  Our consultants are strategists, engineers, and former policymakers. This multidisciplinary approach ensures that our digital transformation strategies are not only visionary but practically executable within complex regulatory and emerging market environments.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary/50 p-10 rounded-3xl border border-border"
            >
              <div className="mb-12">
                <h3 className="font-serif text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Target className="text-accent" /> Our Vision
                </h3>
                <p className="text-lg text-muted-foreground">
                  To be the premier catalyst for digital and economic transformation, fostering a globally integrated ecosystem where technology and talent flow seamlessly to solve the world's most pressing challenges.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Globe className="text-accent" /> Our Mission
                </h3>
                <p className="text-lg text-muted-foreground">
                  To empower organizations with elite strategic advisory, innovative technological architecture, and access to world-class talent, enabling them to navigate complexity and achieve sustainable, outsized impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles form the bedrock of our firm. They dictate who we hire, how we engage with clients, and the quality of work we deliver.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.name}
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{value.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
