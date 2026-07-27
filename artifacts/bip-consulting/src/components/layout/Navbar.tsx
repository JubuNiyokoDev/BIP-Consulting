import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/about',      label: t('nav.about') },
    { href: '/services',   label: t('nav.services') },
    { href: '/industries', label: t('nav.industries') },
    { href: '/solutions',  label: t('nav.solutions') },
    { href: '/insights',   label: t('nav.insights') },
    { href: '/careers',    label: t('nav.careers') },
    { href: '/partners',   label: t('nav.partners') },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  const isHome = location === '/';
  const transparentMode = isHome && !scrolled;

  const headerClass = transparentMode
    ? 'bg-slate-950/20 text-white backdrop-blur-xl border-b border-white/10 shadow-slate-950/10'
    : 'bg-white/95 text-slate-900 shadow-lg shadow-slate-900/10 border-b border-slate-200/70';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass} ${transparentMode ? 'py-4' : 'py-3'}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 relative z-50">
              <img
                src="/logo.png"
                alt="BIP Consulting"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {links.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                          transparentMode
                            ? isActive
                              ? 'bg-white/10 text-white'
                              : 'text-white/90 hover:text-white hover:bg-white/10'
                            : isActive
                            ? 'bg-accent/10 text-accent'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="h-7 w-px bg-slate-300/30" />
              <LanguageSwitcher variant={transparentMode ? 'light' : 'dark'} />
              <Button
                asChild
                variant={transparentMode ? 'secondary' : 'default'}
                className={transparentMode ? 'rounded-full px-6 py-3 bg-white text-primary hover:bg-white/90' : 'rounded-full px-6 py-3 bg-primary text-primary-foreground'}
              >
                <Link href="/contact">{t('nav.bookConsultation')}</Link>
              </Button>
            </nav>

            {/* Mobile: language + hamburger */}
            <div className="xl:hidden flex items-center gap-3 relative z-50">
              <LanguageSwitcher variant={transparentMode && !mobileMenuOpen ? 'light' : 'dark'} />
              <button
                className={`inline-flex items-center justify-center rounded-full p-2 transition-colors duration-200 ${
                  transparentMode && !mobileMenuOpen ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-slate-950/95 text-white pt-24 pb-8 px-6 overflow-y-auto xl:hidden flex flex-col"
          >
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" className="inline-flex items-center gap-3">
                <img src="/logo.png" alt="BIP Consulting" className="h-14 w-auto object-contain" />
              </Link>
              <button
                className="inline-flex items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
                aria-label={t('nav.closeMenu')}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-4 text-2xl font-semibold transition-all duration-200 ${
                    location === link.href ? 'bg-white/10 text-white' : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`rounded-2xl px-4 py-4 text-2xl font-semibold transition-all duration-200 ${
                  location === '/contact' ? 'bg-white/10 text-white' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {t('nav.contact')}
              </Link>
            </nav>
            <div className="mt-8">
              <Button asChild size="lg" className="w-full rounded-full py-3">
                <Link href="/contact">{t('nav.bookConsultation')}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
