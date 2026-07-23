import { Link } from 'wouter';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { companyDetails } from '@/data/content';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">{companyDetails.name}</span>
            </Link>
            <p className="text-primary-foreground/80 font-medium max-w-sm">
              {companyDetails.footerTagline}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="/partners" className="text-primary-foreground/80 hover:text-accent transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">Expertise</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/industries" className="text-primary-foreground/80 hover:text-accent transition-colors">Industries</Link></li>
              <li><Link href="/solutions" className="text-primary-foreground/80 hover:text-accent transition-colors">Solutions</Link></li>
              <li><Link href="/insights" className="text-primary-foreground/80 hover:text-accent transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                <span>{companyDetails.address}</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-accent transition-colors">
                  {companyDetails.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors">
                  {companyDetails.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {companyDetails.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
