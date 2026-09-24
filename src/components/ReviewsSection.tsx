import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Heart, 
  MessageSquare,
  ThumbsUp
} from 'lucide-react';
import { STUDENT_REVIEWS } from '../data/academyData';

export const ReviewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'class10' | 'class12' | 'middle'>('all');

  const filteredReviews = STUDENT_REVIEWS.filter((rev) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'class10') return rev.classGrade.includes('Class 10');
    if (activeTab === 'class12') return rev.classGrade.includes('Class 12');
    if (activeTab === 'middle') return rev.classGrade.includes('Class 8');
    return true;
  });

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-3 py-1.5 rounded-md">
            <span>Student & Parent Voice</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Students, Trusted by Parents
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Read authentic stories of student transformation, board exam triumph, and foundational growth from our Ludhiana center batches.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-750">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Testimonials ({STUDENT_REVIEWS.length})
            </button>
            <button
              onClick={() => setActiveTab('class10')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'class10'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Class 10 Boards
            </button>
            <button
              onClick={() => setActiveTab('class12')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'class12'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Class 12 Boards (PCM)
            </button>
            <button
              onClick={() => setActiveTab('middle')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'middle'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Middle School (6–8)
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-slate-50/80 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-blue-200 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header with avatar, student name, verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-xs"
                    />
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base leading-tight">
                        {item.name}
                      </h3>
                      <div className="text-xs text-blue-700 dark:text-blue-400 font-medium flex items-center gap-1.5">
                        <span>{item.classGrade}</span>
                        <span className="text-slate-300 dark:text-slate-600">·</span>
                        <span className="text-slate-500 dark:text-slate-400">{item.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Score badge / highlight */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700 px-3 py-1.5 rounded-lg">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">Score:</span>
                  <span>{item.score}</span>
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  <span className="text-emerald-700 dark:text-emerald-400">{item.subjectHighlight}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Parent Endorsement Note */}
              {item.parentNote && (
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {item.parentNote}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Trust Banner */}
        <div className="mt-12 bg-blue-50/70 dark:bg-slate-900 border border-blue-200/70 dark:border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              ★
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                4.9 out of 5.0 Star Rating
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Based on 280+ verified student and parent reviews across Ludhiana
              </div>
            </div>
          </div>
          <div className="text-xs font-semibold text-blue-800 dark:text-blue-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg border border-blue-200 dark:border-slate-700">
            100% Recommended by Local Parents
          </div>
        </div>
      </div>
    </section>
  );
};
