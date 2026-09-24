import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Calendar,
  MessageSquare
} from 'lucide-react';
import { TEACHERS, Teacher } from '../data/academyData';

interface TeachersSectionProps {
  onRequestDoubtSession: (teacherName: string) => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ onRequestDoubtSession }) => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  return (
    <section id="teachers" className="py-20 bg-white dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-3 py-1.5 rounded-md">
            <span>Expert Faculty</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learn From Ludhiana&apos;s Most Renowned Educators
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Our educators are subject specialists, author-mentors, and university medalists who combine profound academic depth with compassionate personal care.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher, idx) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col group"
            >
              {/* Photo & Role Banner */}
              <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                
                {/* Subject Badge */}
                <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  {teacher.subject}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-extrabold text-white font-heading">
                    {teacher.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold mt-0.5">
                    {teacher.role}
                  </p>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{teacher.qualification}</span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <span>{teacher.experience}</span>
                      <span>·</span>
                      <span className="text-blue-700 dark:text-blue-400 font-semibold">{teacher.studentsMentored}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 italic">
                    &ldquo;{teacher.quote}&rdquo;
                  </p>

                  {/* Key Specialties Chips */}
                  <div className="pt-1">
                    <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
                      Focus Areas
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {teacher.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-[11px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedTeacher(teacher)}
                    className="flex-1 py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    View Full Profile
                  </button>
                  <button
                    onClick={() => onRequestDoubtSession(teacher.name)}
                    className="py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                    title="Book Doubt Session with Teacher"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Meet</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Teacher Bio Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <div className="relative h-48 bg-slate-900">
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="w-full h-full object-cover opacity-60"
                />
                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {selectedTeacher.subject}
                  </span>
                  <h3 className="text-2xl font-bold font-heading">{selectedTeacher.name}</h3>
                  <p className="text-xs text-slate-200">{selectedTeacher.role}</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Academic Background & Experience
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-xl text-xs space-y-1 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                    <div>
                      <strong className="text-slate-900 dark:text-white">Qualifications:</strong>{' '}
                      {selectedTeacher.qualification}
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Teaching Experience:</strong>{' '}
                      {selectedTeacher.experience}
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Students Taught:</strong>{' '}
                      {selectedTeacher.studentsMentored}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Teaching Philosophy & Biography
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedTeacher.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Achievements & Track Record
                  </h4>
                  <div className="space-y-2">
                    {selectedTeacher.achievements.map((ach) => (
                      <div key={ach} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const tName = selectedTeacher.name;
                      setSelectedTeacher(null);
                      onRequestDoubtSession(tName);
                    }}
                    className="w-full py-3 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-colors"
                  >
                    Request Trial Class with {selectedTeacher.name}
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
