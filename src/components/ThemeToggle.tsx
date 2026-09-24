import React from 'react';
import { motion } from 'motion/react';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
  variant?: 'compact' | 'pill' | 'expanded';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  showLabel = false, 
  className = '',
  variant = 'compact'
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === 'pill' || showLabel) {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Late-Night Study Mode'}
        className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
          isDark
            ? 'bg-slate-800 text-amber-300 border border-slate-700 hover:bg-slate-700/80 shadow-xs'
            : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200/80 hover:text-slate-900 shadow-xs'
        } ${className}`}
      >
        <div className="relative w-4 h-4 flex items-center justify-center">
          <motion.div
            key={theme}
            initial={{ rotate: -45, scale: 0.6, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 45, scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? (
              <Moon className="w-4 h-4 text-amber-300 fill-amber-300/20" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500 fill-amber-500/20" />
            )}
          </motion.div>
        </div>

        <span>
          {isDark ? 'Night Study Mode' : 'Late-Night Mode'}
        </span>

        {isDark && (
          <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] bg-amber-400/20 text-amber-300 font-bold uppercase">
            ON
          </span>
        )}
      </button>
    );
  }

  return (
    <div className="relative group">
      <motion.button
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        onClick={toggleTheme}
        type="button"
        aria-label={isDark ? 'Switch to Light Theme' : 'Enable Late-Night Study Mode (Dark Theme)'}
        className={`relative p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
          isDark
            ? 'bg-slate-800/90 border-slate-700 text-amber-300 hover:bg-slate-750 hover:border-slate-600 hover:text-amber-200 shadow-sm'
            : 'bg-slate-100/90 border-slate-200/80 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 shadow-2xs'
        } ${className}`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative"
        >
          {isDark ? (
            <div className="relative">
              <Moon className="w-4 h-4 fill-amber-300/25 text-amber-300" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping opacity-75" />
            </div>
          ) : (
            <Sun className="w-4 h-4 text-amber-600 hover:text-amber-500 transition-colors" />
          )}
        </motion.div>
      </motion.button>

      {/* Hover tooltip for students */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 whitespace-nowrap">
        <div className="px-2.5 py-1 text-[11px] font-medium bg-slate-900 text-white rounded-md shadow-lg border border-slate-700 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
          <span>{isDark ? 'Switch to Light Theme' : 'Late-Night Study Mode'}</span>
        </div>
      </div>
    </div>
  );
};
