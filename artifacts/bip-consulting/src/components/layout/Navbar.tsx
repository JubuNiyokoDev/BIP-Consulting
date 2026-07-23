import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { companyDetails } from '@/data/content';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/industries', label: t('nav.industries') },
    { href: '/solutions', label: t('nav.solutions') },
    { href: '/insights', label: t('nav.insights') },
    { href: '/careers', label: t('nav.careers') },
    { href: '/partners', label: t('nav.partners') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location === '/';
  const transparentMode = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparentMode
            ? 'bg-transparent py-6'
            : 'bg-white shadow-md py-4'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-block relative z-50">
              <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
                transparentMode ? 'text-white' : 'text-primary'
              }`}>
                BIP
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm font-semibold transition-colors hover:text-accent ${
                        transparentMode
                          ? 'text-white/90'
                          : location === link.href
                          ? 'text-accent'
                          : 'text-primary/80'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="h-6 w-[1px] bg-border/50 mx-2" />
              <LanguageSwitcher variant={transparentMode ? 'light' : 'dark'} />
              <Button asChild variant={transparentMode ? "secondary" : "default"} className={transparentMode ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground"}>
                <Link href="/contact">{t('nav.bookConsultation')}</Link>
              </Button>
            </nav>

            {/* Mobile: language + toggle */}
            <div className="xl:hidden flex items-center gap-1 relative z-50">
              <LanguageSwitcher variant={transparentMode && !mobileMenuOpen ? 'light' : 'dark'} />
              <button
                className={`p-2 -mr-2 transition-colors ${
                  transparentMode && !mobileMenuOpen ? 'text-white' : 'text-primary'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={t('nav.toggleMenu')}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-6 overflow-y-auto xl:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-bold py-3 border-b border-border transition-colors hover:text-accent ${
                    location === link.href ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`text-2xl font-bold py-3 border-b border-border transition-colors hover:text-accent ${
                  location === '/contact' ? 'text-accent' : 'text-primary'
                }`}
              >
                {t('nav.contact')}
              </Link>
            </nav>
            <div className="mt-8">
              <Button asChild size="lg" className="w-full">
                <Link href="/contact">{t('nav.bookConsultation')}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
