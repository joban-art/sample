import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Images, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/academyData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Classrooms', 'Labs', 'Study Sessions', 'Events & Awards'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-50/70 dark:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-100/70 dark:bg-blue-950/80 px-3 py-1.5 rounded-md">
            <Images className="w-3.5 h-3.5" />
            <span>Campus Life & Learning</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Inside BrightPath Academy
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Take a visual tour through our Model Town campus: state-of-the-art air-conditioned smart classrooms, hands-on science laboratories, focused study sessions, and annual awards.
          </p>
        </div>

        {/* Category Filters (Buttons with click handlers) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-700 dark:bg-blue-600 text-white shadow-md shadow-blue-700/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 hover:text-blue-700 dark:hover:text-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 aspect-4/3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Category tag */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                {item.category}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="text-sm sm:text-base font-bold font-heading line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 text-white"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {activePhoto.category}
                </div>
                <h3 className="text-xl font-bold font-heading">{activePhoto.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{activePhoto.caption}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
