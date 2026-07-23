import { Link } from 'wouter';
import { MapPin, Mail, Phone } from 'lucide-react';
import { companyDetails } from '@/data/content';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand / Logo */}
          <div className="lg:col-span-1">
            <Link href="/">
              {/* White rounded container so the logo reads on the dark footer */}
              <span className="inline-block bg-white rounded-xl px-3 py-2 shadow-md">
                <img
                  src="/logo.png"
                  alt="BIP Consulting"
                  className="h-14 w-auto object-contain"
                />
              </span>
            </Link>
            <p className="mt-5 text-primary-foreground/70 leading-relaxed max-w-xs text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">{t('footer.companyCol')}</h3>
            <ul className="space-y-4">
              <li><Link href="/about"    className="text-primary-foreground/80 hover:text-accent transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/careers"  className="text-primary-foreground/80 hover:text-accent transition-colors">{t('nav.careers')}</Link></li>
              <li><Link href="/partners" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('nav.partners')}</Link></li>
              <li><Link href="/contact"  className="text-primary-foreground/80 hover:text-accent transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">{t('footer.expertiseCol')}</h3>
            <ul className="space-y-4">
              <li><Link href="/services"   className="text-primary-foreground/80 hover:text-accent transition-colors">{t('nav.services')}</Link></li>
              <li><Link href="/industries" className="text-primary-foreground/80 hover:text-accent transition-colors">{t('nav.industries')}</Link></li>
              <li><Link href="/solutions"  className="text-primary-foreground/80 hover:text-accent transition-colors">{t('nav.solutions')}</Link></li>
              <li><Link href="/insights"   className="text-primary-foreground/80 hover:text-accent transition-colors">{t('nav.insights')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">{t('footer.contactCol')}</h3>
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
          <p>© {new Date().getFullYear()} {companyDetails.name}. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
