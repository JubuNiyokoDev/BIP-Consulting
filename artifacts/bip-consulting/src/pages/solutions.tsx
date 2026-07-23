import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    id: "gov-tech",
    title: "GovTech & Citizen Services Platforms",
    industry: "Government",
    service: "Digital Transformation",
    desc: "Modernizing state infrastructure by digitizing core citizen services, implementing secure digital identity frameworks, and establishing interoperable data exchanges."
  },
  {
    id: "health-ai",
    title: "Predictive Analytics for Public Health",
    industry: "Healthcare",
    service: "Artificial Intelligence",
    desc: "Deploying machine learning models to optimize resource allocation, predict outbreak vectors, and improve supply chain logistics for medical supplies."
  },
  {
    id: "fintech-scale",
    title: "Cross-Border Fintech Architecture",
    industry: "Financial Services",
    service: "Software & Technology",
    desc: "Designing highly resilient, scalable payment architectures compliant with complex multi-jurisdictional financial regulations."
  },
  {
    id: "edu-talent",
    title: "National Digital Skills Frameworks",
    industry: "Education",
    service: "Talent Solutions",
    desc: "Partnering with ministries of education to design curricula and training pipelines that address critical shortages in software engineering and AI."
  },
  {
    id: "ngo-impact",
    title: "Impact Tracking & M&E Systems",
    industry: "NGOs",
    service: "Strategy & Management Consulting",
    desc: "Developing robust data frameworks and automated reporting tools to transparently demonstrate ROI to international development partners."
  },
  {
    id: "startup-venture",
    title: "Corporate Venture Building",
    industry: "Startups",
    service: "Entrepreneurship & Innovation",
    desc: "Creating isolated, agile venture arms within legacy corporations to rapidly prototype, test, and scale disruptive business models."
  }
];

export default function Solutions() {
  return (
    <PageWrapper>
      <SEO 
        title="Solutions" 
        description="Discover how BIP Consulting combines industry expertise with service capabilities to deliver integrated solutions." 
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
              Integrated Solutions
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Where deep industry knowledge meets functional expertise. Real-world applications of our consulting framework.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex flex-col h-full relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Box className="w-24 h-24" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    <span className="px-3 py-1 bg-secondary text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                      {solution.industry}
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
                      {solution.service}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4 relative z-10">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 flex-grow relative z-10">
                    {solution.desc}
                  </p>
                  
                  <Button variant="outline" className="w-full mt-auto relative z-10" asChild>
                    <Link href="/contact">Discuss this Solution</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
