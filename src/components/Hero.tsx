import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Users, 
  Star, 
  Sparkles,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/academyData';

interface HeroProps {
  onJoinNow: () => void;
  onViewCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinNow, onViewCourses }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-200/60 dark:border-slate-800 transition-colors">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 dark:opacity-25 blur-3xl overflow-hidden">
        <div className="absolute -top-12 left-1/4 w-96 h-96 bg-blue-300/40 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber-200/40 dark:bg-amber-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Institute Identity & Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping" />
              <span>{INSTITUTE_INFO.tagline}</span>
              <span className="text-blue-400">·</span>
              <span className="text-blue-700 dark:text-blue-300">Model Town, Ludhiana</span>
            </div>

            {/* Main Required Hero Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Build Your Future With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-200">
                BrightPath Academy
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Ludhiana&apos;s premier coaching and tuition destination for Class 6–12, Board Exam
              Preparation, and Weekly Test Series. Guided by Director Arjun Sharma and senior specialist
              faculties, we transform subject fear into academic mastery with micro batches and personal mentorship.
            </p>

            {/* Action Buttons: Join Now and View Courses */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onJoinNow}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-700 dark:bg-blue-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-700/30 hover:bg-blue-800 dark:hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-700/40 transition-all cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/40 dark:hover:bg-slate-800 shadow-xs transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View Courses</span>
              </motion.button>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Micro Batches (Max 25)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Weekly Sunday Tests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Free 2-Day Trial Class</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Image Showcase with Floating Micro-Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-4/3 sm:aspect-5/4">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop"
                  alt="BrightPath Academy students in classroom study session"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ludhiana Excellence Center</span>
                  </div>
                  <div className="text-sm font-bold text-white drop-shadow-xs">
                    Air-Conditioned Smart Classrooms · Model Town
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Director Arjun Sharma Highlight */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-3 sm:p-3.5 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  AS
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Mr. Arjun Sharma</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Director & Math Faculty · 14+ Yrs</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Board Results Metric */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-slate-900/95 dark:bg-slate-900/95 text-white backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-slate-800 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-extrabold text-amber-400 font-heading">98.6%</span>
                    <span className="text-[11px] text-slate-300">City Rank 2</span>
                  </div>
                  <div className="text-[11px] text-slate-400">CBSE Class 10 & 12 Toppers</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Key Stat Counters */}
        <div className="mt-14 pt-8 border-t border-slate-200/70 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTITUTE_INFO.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-800 dark:text-blue-400 font-heading tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
