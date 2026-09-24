import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, GraduationCap } from 'lucide-react';
import { AdmissionFormSection } from './AdmissionFormSection';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ 
  isOpen, 
  onClose, 
  selectedCourse 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-8"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                    BrightPath Academy Admission & Trial Pass
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Model Town, Ludhiana · Batch Session 2025–26
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Admission Form */}
            <div className="max-h-[80vh] overflow-y-auto">
              <AdmissionFormSection
                isModal={true}
                initialCourse={selectedCourse}
                onClose={onClose}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
