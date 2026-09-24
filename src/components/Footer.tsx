import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/academyData';

interface FooterProps {
  onOpenAdmission: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmission }) => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-sm">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  BrightPath <span className="text-blue-500">Academy</span>
                </span>
                <p className="text-[11px] text-amber-400 font-semibold tracking-wide">
                  {INSTITUTE_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Model Town, Ludhiana&apos;s leading coaching institute for Class 6–12, Board Exam
              Preparation, and Weekly Test Series. Led by Founder-Director Mr. Arjun Sharma with a legacy of producing district and state toppers.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Micro Batches (strictly 20–25 students)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Specialized faculty for every subject</span>
              </div>
            </div>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Courses & Batches
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#courses');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Class 6–8: All Subjects
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#courses');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Class 9–10: Maths, Science, English
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#courses');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Class 11–12: Physics, Chem, Maths
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#courses');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Target 95+ Board Preparation
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#courses');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Weekly Sunday Test Series (BWTS)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Institute Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#about');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  About Director Arjun Sharma
                </a>
              </li>
              <li>
                <a
                  href="#teachers"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#teachers');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Our Specialist Teachers
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#results');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Results & Board Toppers
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#reviews');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Student Reviews & Feedback
                </a>
              </li>
              <li>
                <a
                  href="#timetable"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#timetable');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Weekly Batch Timetable
                </a>
              </li>
              <li>
                <a
                  href="#fees"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#fees');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Fee Structure & Calculator
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#gallery');
                  }}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Campus Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ludhiana Campus
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{INSTITUTE_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${INSTITUTE_INFO.phone}`} className="hover:text-white">
                  {INSTITUTE_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: {INSTITUTE_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${INSTITUTE_INFO.email}`} className="hover:text-white">
                  {INSTITUTE_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmission}
                className="w-full py-2.5 px-3 bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Online Admission Form
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {INSTITUTE_INFO.name}. All rights reserved. | Model Town, Ludhiana, Punjab
          </div>
          <div className="flex items-center gap-4">
            <span>Director: {INSTITUTE_INFO.director}</span>
            <span>·</span>
            <span>Affiliation: CBSE & Punjab Board Coaching</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
