import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  TrendingUp, 
  CheckCircle, 
  Star,
  GraduationCap
} from 'lucide-react';
import { TOPPERS } from '../data/academyData';

export const ResultsSection: React.FC = () => {
  const resultHighlights = [
    { label: 'Overall Batch Pass Rate', value: '100%', sub: 'Class 10 & 12 Board Exams' },
    { label: 'Students Scoring 90%+', value: '86.4%', sub: 'Across CBSE & PSEB Streams' },
    { label: 'Perfect 100/100 Scores', value: '140+', sub: 'In Maths, Science & Physics' },
    { label: 'City & District Merits', value: '28', sub: 'Honored in Ludhiana District' },
  ];

  const subjectStars = [
    { subject: 'Class 10 Science', topper: 'Riya Sharma', score: '100 / 100', teacher: 'Mrs. Neha Verma' },
    { subject: 'Class 12 Mathematics', topper: 'Gurpreet Chawla', score: '100 / 100', teacher: 'Mr. Arjun Sharma' },
    { subject: 'Class 10 Mathematics', topper: 'Aman Singh', score: '99 / 100', teacher: 'Mr. Arjun Sharma' },
    { subject: 'Class 12 Chemistry', topper: 'Harpreet Kaur', score: '98 / 100', teacher: 'Ms. Simran Kaur' },
  ];

  return (
    <section id="results" className="py-20 bg-slate-50/70 dark:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-950/60 px-3 py-1.5 rounded-md border border-amber-200/50 dark:border-amber-800/60">
            <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Results & Board Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Consistent academic excellence year after year. Meet our standout achievers who conquered the board exams through disciplined learning and exam-focused revision.
          </p>
        </div>

        {/* Results Stat Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {resultHighlights.map((res, i) => (
            <motion.div
              key={res.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center relative overflow-hidden"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-blue-400 font-heading">
                {res.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                {res.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {res.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Board Toppers Showcase Cards */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Hall of Fame: Board Exam Champions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Ludhiana city rankers from Sacred Heart, DAV, BVM & KVM schools
              </p>
            </div>
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-3 py-1 rounded-md border border-blue-200/60 dark:border-blue-800/60">
              Session 2023–2024
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOPPERS.map((topper, idx) => (
              <motion.div
                key={topper.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative h-48 bg-slate-200 dark:bg-slate-800">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Score pill */}
                  <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-black text-sm px-2.5 py-1 rounded-md shadow-sm font-heading">
                    {topper.score}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-base font-bold font-heading">{topper.name}</div>
                    <div className="text-xs text-blue-200">{topper.classGrade}</div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 line-clamp-1">
                      {topper.school}
                    </div>
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mt-1 line-clamp-1">
                      ★ {topper.achievement}
                    </div>
                  </div>

                  {/* Subject Breakdown */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Subject Marks
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-xs">
                      {topper.subjects.map((s) => (
                        <div key={s.name} className="bg-slate-50 dark:bg-slate-800 rounded px-2 py-1 flex items-center justify-between">
                          <span className="text-slate-600 dark:text-slate-400 text-[11px] truncate">{s.name}</span>
                          <span className="font-bold text-slate-900 dark:text-slate-100">{s.marks}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 100/100 Perfect Scorers Wall */}
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-3xl p-8 text-white shadow-xl border border-slate-800">
          <div className="max-w-2xl mb-6">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Perfect Score Hall of Honor</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mt-1">
              Century Scorers: 100 / 100 Marks
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Mastering the art of zero-error board examination answer writing with our specialized faculty guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjectStars.map((item) => (
              <div
                key={item.subject}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="text-xs text-blue-200 font-semibold">{item.subject}</div>
                <div className="text-2xl font-extrabold text-amber-400 font-heading my-1">
                  {item.score}
                </div>
                <div className="text-sm font-bold text-white">{item.topper}</div>
                <div className="text-[11px] text-slate-300 mt-1">Mentor: {item.teacher}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
