import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Target, 
  Users2, 
  Sparkles, 
  Check, 
  Compass, 
  HeartHandshake, 
  ShieldCheck,
  BookMarked
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/academyData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Concept-First Pedagogy',
      desc: 'We strictly ban blind rote-learning. Every formula, theorem, and chemical reaction is introduced through visual demonstrations and foundational logic.',
    },
    {
      icon: Users2,
      title: 'Capped Micro Batches',
      desc: 'Never more than 20–25 students per class. Every student sits in front of the teacher, ensuring active engagement and no silent hesitation.',
    },
    {
      icon: Compass,
      title: 'Sunday Diagnostic Testing',
      desc: 'Weekly examinations that mirror real board exam stress, answer-sheet presentation, and prompt digital scorecards sent directly to parents.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Doubt Clinics',
      desc: 'One-on-one sessions every Friday and Saturday where students sit individually with teachers to resolve specific problem roadblocks.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-3 py-1.5 rounded-md">
            <span>About BrightPath Academy</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nurturing Ludhiana&apos;s Brightest Minds Since 2015
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded with the belief that every student has untapped brilliance when paired with the right mentorship, clarity of concepts, and disciplined practice.
          </p>
        </div>

        {/* Director's Welcome Note Card */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-20 border border-slate-800">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Director Photo & Badge */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="relative inline-block mx-auto lg:mx-0">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-amber-400/40 shadow-2xl mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                    alt="Director Mr. Arjun Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  Founder & Director
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-white font-heading">Mr. Arjun Sharma</h3>
                <p className="text-sm text-blue-200">M.Sc. Mathematics (Gold Medalist), B.Ed.</p>
                <p className="text-xs text-slate-400 mt-1">14+ Years Mentoring Ludhiana Board Toppers</p>
              </div>
            </div>

            {/* Director's Message */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Director&apos;s Message</span>
              </div>
              <blockquote className="text-lg sm:text-xl text-slate-100 font-medium italic leading-relaxed">
                &ldquo;At BrightPath Academy, our mission is simple: replace anxiety with curiosity, and confusion with rock-solid conceptual clarity. We never treat students as roll numbers. Whether preparing for Class 10 Boards, Senior Secondary Physics-Chemistry-Maths, or foundational middle school skills, our faculty stands shoulder-to-shoulder with every student until they succeed.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Personal Attention to Every Student</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Real Board Exam Simulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Transparent Parent Reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Excellence */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
              The 4 Pillars of the BrightPath Method
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Why parents and students in Model Town, Ludhiana choose us year after year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-850 hover:shadow-lg hover:border-blue-200 dark:hover:border-slate-700 transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Campus Facilities Preview */}
        <div className="mt-16 bg-slate-50/80 dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-blue-800 dark:text-blue-400 font-heading">Smart Rooms</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Interactive Projectors & AC</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-blue-800 dark:text-blue-400 font-heading">Science Lab</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Practical Demo Equipment</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-blue-800 dark:text-blue-400 font-heading">Silent Library</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Self-Study & Reference Desks</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-blue-800 dark:text-blue-400 font-heading">Secure Center</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">CCTV & RFID Attendance</div>
          </div>
        </div>
      </div>
    </section>
  );
};
