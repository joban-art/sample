import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Check, 
  Clock, 
  Users, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  FileText, 
  X,
  GraduationCap
} from 'lucide-react';
import { COURSES, Course } from '../data/academyData';

interface CoursesSectionProps {
  onSelectCourseForAdmission: (courseName: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourseForAdmission }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'middle', label: 'Class 6–8 (All Subjects)' },
    { id: 'high', label: 'Class 9–10 (Maths, Sci, Eng)' },
    { id: 'senior', label: 'Class 11–12 (PCM)' },
    { id: 'special', label: 'Special Batches & Tests' },
  ];

  const filteredCourses = selectedCategory === 'all'
    ? COURSES
    : COURSES.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="py-20 bg-slate-50/70 dark:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-100/70 dark:bg-blue-950/80 px-3 py-1.5 rounded-md">
            <span>Academic Programs</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tailored Courses Designed for Academic Mastery
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            From middle school foundation to senior secondary board prep and our acclaimed Sunday test series, every course is structured with clear milestones and personal mentoring.
          </p>
        </div>

        {/* Interactive Filter Tabs (Buttons with handlers) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-700 dark:bg-blue-600 text-white shadow-md shadow-blue-700/20 scale-102'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 hover:text-blue-700 dark:hover:text-blue-400'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={course.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Course Thumbnail Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {course.badge && (
                  <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {course.badge}
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    {course.classGrade}
                  </div>
                  <h3 className="text-lg font-extrabold text-white font-heading leading-tight drop-shadow-xs">
                    {course.name}
                  </h3>
                </div>
              </div>

              {/* Course Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  {/* Subjects list as clean unboxed typographic labels */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    <span className="font-bold text-blue-800 dark:text-blue-400">Subjects:</span>
                    {course.subjects.map((subj, idx) => (
                      <React.Fragment key={subj}>
                        <span>{subj}</span>
                        {idx < course.subjects.length - 1 && <span className="text-slate-300 dark:text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Batch Details Grid */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3.5 space-y-2 text-xs text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Batch Size:</span>
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-100">{course.batchSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Timing:</span>
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-100">{course.timings}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Schedule:</span>
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-100">{course.classesPerWeek}</span>
                    </div>
                  </div>

                  {/* Top Features Checklist */}
                  <div className="space-y-1.5 pt-1">
                    {course.features.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Fee & CTA buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Starting from</div>
                    <div className="text-lg font-extrabold text-slate-900 dark:text-white font-heading">
                      ₹{course.monthlyFee.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ mo</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveCourseModal(course)}
                      className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-slate-600 transition-colors text-xs font-semibold cursor-pointer"
                      title="View Details"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onSelectCourseForAdmission(course.name)}
                      className="px-4 py-2.5 rounded-lg bg-blue-700 dark:bg-blue-600 text-white text-xs font-bold hover:bg-blue-800 dark:hover:bg-blue-500 shadow-sm shadow-blue-700/20 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Enroll</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-10">
                <div>
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                    {activeCourseModal.classGrade}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    {activeCourseModal.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCourseModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Program Overview
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeCourseModal.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-blue-50/70 dark:bg-slate-800/80 p-4 rounded-xl text-xs border border-blue-100/50 dark:border-slate-700">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block">Class Timing:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{activeCourseModal.timings}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block">Batch Limit:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{activeCourseModal.batchSize}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block">Duration:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{activeCourseModal.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block">Class Frequency:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{activeCourseModal.classesPerWeek}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Curriculum & Key Highlights
                  </h4>
                  <div className="space-y-2">
                    {activeCourseModal.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-xl p-4 flex items-center justify-between border border-slate-800">
                  <div>
                    <div className="text-xs text-slate-400">Monthly Tuition Fee</div>
                    <div className="text-2xl font-extrabold text-amber-400 font-heading">
                      ₹{activeCourseModal.monthlyFee.toLocaleString('en-IN')}{' '}
                      <span className="text-xs text-slate-300 font-normal">/ month</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const courseName = activeCourseModal.name;
                      setActiveCourseModal(null);
                      onSelectCourseForAdmission(courseName);
                    }}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg shadow-md cursor-pointer"
                  >
                    Apply For This Batch
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
