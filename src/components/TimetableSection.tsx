import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Download, 
  CheckCircle2, 
  Sparkles,
  Printer
} from 'lucide-react';
import { TIMETABLE_DATA, TimetableSlot } from '../data/academyData';

export const TimetableSection: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<'Class 6–8' | 'Class 9–10' | 'Class 11–12'>('Class 9–10');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];

  const slotsForGrade = TIMETABLE_DATA.filter((s) => s.grade === selectedGrade);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  const getTypeStyle = (type: TimetableSlot['type']) => {
    switch (type) {
      case 'Regular Class':
        return 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Practical / Lab':
        return 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Doubt Session':
        return 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Weekly Test':
        return 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <section id="timetable" className="py-20 bg-slate-50/70 dark:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-100/70 dark:bg-blue-950/80 px-3 py-1.5 rounded-md">
            <span>Structured Schedule</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Batch Timetable & Weekly Routines
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Consistent learning routines designed around school timings. Balanced with daily subject practice, hands-on lab sessions, and Sunday testing.
          </p>
        </div>

        {/* Grade Selector & Download CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          {/* Grade Selector Tabs */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            {(['Class 6–8', 'Class 9–10', 'Class 11–12'] as const).map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  selectedGrade === grade
                    ? 'bg-blue-700 dark:bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {grade}
              </button>
            ))}
          </div>

          {/* Download Timetable Button */}
          <div className="w-full sm:w-auto flex items-center justify-end">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer border border-slate-300 dark:border-slate-700"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400">Timetable PDF Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                  <span>Download {selectedGrade} Schedule</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Schedule Grid by Day */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {daysOrder.map((day) => {
            const daySlots = slotsForGrade.filter((s) => s.day === day);
            if (daySlots.length === 0) return null;

            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white dark:bg-slate-900 rounded-2xl border shadow-xs overflow-hidden ${
                  day === 'Sunday'
                    ? 'border-amber-300 dark:border-amber-700/80 bg-amber-50/20 dark:bg-amber-950/20'
                    : 'border-slate-200/90 dark:border-slate-800'
                }`}
              >
                {/* Day Header */}
                <div
                  className={`px-5 py-3.5 border-b flex items-center justify-between ${
                    day === 'Sunday'
                      ? 'bg-amber-100/70 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800'
                      : 'bg-slate-50 dark:bg-slate-800/80 border-slate-100 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Calendar
                      className={`w-4 h-4 ${
                        day === 'Sunday' ? 'text-amber-700 dark:text-amber-400' : 'text-blue-700 dark:text-blue-400'
                      }`}
                    />
                    <h3 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">
                      {day}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {daySlots.length} {daySlots.length === 1 ? 'Slot' : 'Slots'}
                  </span>
                </div>

                {/* Day Slots List */}
                <div className="p-4 space-y-3">
                  {daySlots.map((slot) => (
                    <div
                      key={slot.id}
                      className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/90 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs font-bold text-blue-900 dark:text-blue-300 font-heading">
                          {slot.subject}
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getTypeStyle(
                            slot.type
                          )}`}
                        >
                          {slot.type}
                        </span>
                      </div>

                      <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{slot.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                          <span>{slot.teacher}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px]">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                          <span>{slot.room}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Attendance & Doubt Rooms */}
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          <span>* Note: All regular classes are held at the Model Town branch. Digital biometric attendance is recorded upon arrival and exit.</span>
        </div>
      </div>
    </section>
  );
};
