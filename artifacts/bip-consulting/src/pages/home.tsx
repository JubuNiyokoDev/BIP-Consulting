import { SEO } from '@/components/SEO';
import { PageWrapper, Section, fadeUpVariant, staggerContainer } from '@/components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Globe2, Building2, Lightbulb, ShieldCheck, Users, Target, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyDetails, insights, partners } from '@/data/content';
import { useEffect, useState } from 'react';

// CountUp hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

function StatCard({ end, label, prefix = "", suffix = "" }: { end: number, label: string, prefix?: string, suffix?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <motion.div 
      variants={fadeUpVariant}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center p-8 bg-white shadow-xl rounded-2xl border border-border/50"
    >
      <div className="font-serif text-5xl md:text-6xl font-bold text-primary mb-2">
        {prefix}{isVisible ? <CountUpNumber end={end} /> : "0"}{suffix}
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
  return (
    <PageWrapper className="pt-0">
      <SEO 
        title="Home" 
        description="BIP Consulting: Building the Future Through Innovation, Technology & Talent. Strategic consulting across Europe and Africa." 
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-primary text-white">
        {/* Abstract Background */}
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
              Building the Future Through <span className="text-accent italic">Innovation</span>, Technology & Talent
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariant}
              className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mb-12 leading-relaxed"
            >
              Bridging Europe and Africa to accelerate digital transformation, empower decision-makers, and shape thriving digital economies.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 h-14 rounded-full">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full">
                <Link href="/contact">Book a Consultation</Link>
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
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeUpVariant} className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                Your Strategic Partner for Innovation and Growth
              </motion.h2>
              <motion.div variants={fadeUpVariant} className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At BIP Consulting, we stand where boardrooms meet vibrant emerging markets. We are an international advisory firm dedicated to helping governments, development organizations, investors, and high-growth startups navigate the complexities of the digital age.
                </p>
                <p>
                  Our unique positioning between Europe and Africa allows us to cross-pollinate ideas, secure strategic investments, and deploy world-class talent to solve structural challenges. We don't just advise; we build the technological foundations for future economies.
                </p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="mt-8">
                <Button variant="link" asChild className="text-accent hover:text-primary text-lg p-0 font-semibold h-auto">
                  <Link href="/about" className="flex items-center gap-2">
                    Learn more about our mission <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div variants={fadeUpVariant} className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative bg-secondary shadow-2xl">
                 {/* Abstract visual representing two continents / connection */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/20" />
                 <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="hsl(var(--primary))" />
                    <path d="M0 50 C 40 80 80 20 100 50 L 100 100 L 0 100 Z" fill="hsl(var(--accent))" opacity="0.5" />
                 </svg>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-border/50">
                <div className="flex items-center gap-4 mb-2">
                  <Globe2 className="w-8 h-8 text-accent" />
                  <span className="font-bold text-xl text-primary">Global Reach</span>
                </div>
                <p className="text-sm text-muted-foreground">Bridging ecosystems across Europe and Africa.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Why Choose BIP Features */}
      <Section className="bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Pillars of Transformation</h2>
            <p className="text-lg text-muted-foreground">The foundational elements we leverage to drive sustainable impact for our clients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Strategy", desc: "Rigorous analytical frameworks tailored to complex emerging markets." },
              { icon: Building2, title: "Technology", desc: "Scalable digital infrastructure designed for resilience and growth." },
              { icon: Users, title: "Talent", desc: "Accessing and developing elite professionals across continents." },
              { icon: Lightbulb, title: "Innovation", desc: "Fostering ecosystems where disruptive ideas become market leaders." },
              { icon: Globe2, title: "Global Partnerships", desc: "Facilitating high-value alliances between public and private sectors." },
              { icon: ShieldCheck, title: "Sustainable Impact", desc: "Ensuring long-term viability and inclusive economic progress." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-primary relative overflow-hidden text-white py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_100%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <StatCard end={20} label="Countries Reached" suffix="+" />
            <StatCard end={150} label="Global Clients" suffix="+" />
            <StatCard end={300} label="Projects Delivered" suffix="+" />
            <StatCard end={12} label="Years of Excellence" suffix="+" />
          </motion.div>
        </div>
      </Section>

      {/* Our Approach Timeline */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Approach</h2>
            <p className="text-lg text-muted-foreground">A proven methodology designed to move seamlessly from abstract challenges to concrete outcomes.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-[40px] md:top-1/2 left-4 md:left-0 right-0 h-[2px] bg-border md:-translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-12 md:gap-6">
              {[
                { step: "01", title: "Discover", desc: "Deep analytical immersion into your structural challenges and market context." },
                { step: "02", title: "Design", desc: "Architecting bespoke strategies and technology frameworks." },
                { step: "03", title: "Deliver", desc: "Rigorous execution with elite global talent and agile methodologies." },
                { step: "04", title: "Measure", desc: "Ensuring sustainable impact and institutional capacity building." }
              ].map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative flex flex-col md:items-center md:text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-primary text-primary font-bold text-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {phase.step}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Insights Preview */}
      <Section className="bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">Latest Insights</h2>
              <p className="text-lg text-muted-foreground">Perspectives on digital transformation, global investment, and policy from our experts.</p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex rounded-full">
              <Link href="/insights">View All Articles</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.slice(0, 3).map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 text-xs font-semibold text-accent mb-4 tracking-wider uppercase">
                    <span>{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4 line-clamp-2 hover:text-accent transition-colors">
                    <Link href="/insights">{article.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-8 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <Link href="/insights" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <Button variant="outline" asChild className="md:hidden mt-8 w-full rounded-full">
            <Link href="/insights">View All Articles</Link>
          </Button>
        </div>
      </Section>

      {/* Partner Marquee */}
      <section className="py-16 border-y border-border bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-bold text-muted-foreground tracking-widest uppercase">Trusted By Organizations Worldwide</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8 group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, i) => (
              <span key={i} className="font-serif text-2xl text-primary/40 font-bold tracking-tight select-none">
                {partner}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8 group-hover:[animation-play-state:paused]">
             {[...partners, ...partners].map((partner, i) => (
              <span key={i} className="font-serif text-2xl text-primary/40 font-bold tracking-tight select-none">
                {partner}
              </span>
            ))}
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
            Ready to Build the Future?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mb-10"
          >
            Partner with BIP Consulting to transform your organization, scale your technology, and access elite global talent.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 text-lg px-10 h-14 rounded-full">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
}
