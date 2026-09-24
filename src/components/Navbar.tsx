import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles,
  Clock
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/academyData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenAdmission: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Our Teachers', href: '#teachers' },
    { label: 'Results', href: '#results' },
    { label: 'Student Reviews', href: '#reviews' },
    { label: 'Timetable', href: '#timetable' },
    { label: 'Fees', href: '#fees' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* Top Notice & Quick Contact Bar */}
      <div className="bg-slate-900 dark:bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 dark:border-slate-850">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Admissions Open for Session 2025–26 (Free 2-Day Trial)
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {INSTITUTE_INFO.location}
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              8:00 AM – 8:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${INSTITUTE_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-slate-200">{INSTITUTE_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsapp}?text=Hello%20BrightPath%20Academy,%20I%20want%20to%20inquire%20about%20admissions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${INSTITUTE_INFO.email}`}
              className="hidden xl:flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{INSTITUTE_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80 dark:border-slate-800'
            : 'bg-white dark:bg-slate-900 shadow-xs py-4 border-b border-slate-100 dark:border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 flex items-center justify-center text-white shadow-md shadow-blue-700/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                BrightPath <span className="text-blue-700 dark:text-blue-400 font-bold">Academy</span>
              </div>
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>Model Town, Ludhiana</span>
                <span>·</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Est. 2015</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors relative ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Admission Form CTA Button */}
            <button
              onClick={onOpenAdmission}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-600 dark:to-indigo-600 text-white text-xs font-bold shadow-md shadow-blue-700/25 dark:shadow-blue-900/40 hover:from-blue-800 hover:to-indigo-800 hover:shadow-lg hover:shadow-blue-700/30 transition-all active:scale-95 cursor-pointer"
            >
              <span>Admission Form</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions: Dark Mode Toggle + Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <ThemeToggle />

            <button
              onClick={onOpenAdmission}
              className="text-xs font-bold px-3 py-2 bg-blue-700 text-white rounded-lg shadow-sm sm:hidden cursor-pointer"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {/* Study Mode Notice / Switch inside mobile menu */}
              <div className="pb-3 mb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  Late-Night Study Mode
                </span>
                <ThemeToggle variant="pill" />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmission();
                  }}
                  className="w-full py-3 px-4 rounded-lg bg-blue-700 dark:bg-blue-600 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:bg-blue-800 dark:hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  <span>Open Admission Form</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href={`tel:${INSTITUTE_INFO.phone}`}
                    className="flex items-center justify-center gap-2 py-2 px-3 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Call Academy</span>
                  </a>
                  <a
                    href={`https://wa.me/${INSTITUTE_INFO.whatsapp}?text=Hello%20BrightPath%20Academy,%20I%20want%20to%20inquire%20about%20admissions.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-3 border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg text-xs font-semibold text-emerald-800 dark:text-emerald-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
