import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  Calculator, 
  ShieldCheck, 
  CreditCard,
  Percent,
  BadgePercent
} from 'lucide-react';
import { COURSES } from '../data/academyData';

interface FeesSectionProps {
  onOpenAdmissionWithCourse: (courseName: string) => void;
}

export const FeesSection: React.FC<FeesSectionProps> = ({ onOpenAdmissionWithCourse }) => {
  // Calculator state
  const [selectedCourseId, setSelectedCourseId] = useState<string>('class-9-10');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual'>('quarterly');
  const [hasSiblingDiscount, setHasSiblingDiscount] = useState<boolean>(false);
  const [hasScholarship, setHasScholarship] = useState<boolean>(false);

  const selectedCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[1];

  // Calculate pricing
  const baseMonthly = selectedCourse.monthlyFee;
  let monthsCount = 1;
  let cycleDiscountPercent = 0;

  if (billingCycle === 'quarterly') {
    monthsCount = 3;
    cycleDiscountPercent = 0.05; // 5% discount
  } else if (billingCycle === 'annual') {
    monthsCount = 10; // academic year
    cycleDiscountPercent = 0.15; // 15% discount
  }

  const grossTotal = baseMonthly * monthsCount;
  const cycleDiscount = grossTotal * cycleDiscountPercent;
  const siblingDiscount = hasSiblingDiscount ? grossTotal * 0.1 : 0;
  const scholarshipDiscount = hasScholarship ? grossTotal * 0.2 : 0;

  const totalDiscount = cycleDiscount + siblingDiscount + scholarshipDiscount;
  const netPayable = Math.max(0, Math.round(grossTotal - totalDiscount));

  return (
    <section id="fees" className="py-20 bg-white dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-3 py-1.5 rounded-md">
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Fair & Transparent Fee Structure
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Zero hidden charges. All fees include daily study material, question banks, practical demonstration kits, and Sunday test series evaluations.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Class 6–8 */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  Foundation
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                  Class 6 – 8 (All Subjects)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Comprehensive coverage of Maths, Science, English & Social Studies
                </p>
              </div>

              <div className="pt-2">
                <div className="text-3xl font-black font-heading text-slate-900 dark:text-white">
                  ₹2,800 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ month</span>
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">
                  Includes daily DPPs & Vedic Math
                </div>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>6 days a week (1.5 hrs/day)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Max 20 students per batch</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Bi-weekly parent progress reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Free 2-day classroom trial</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenAdmissionWithCourse('Middle School Foundation Program')}
              className="mt-6 w-full py-2.5 rounded-xl border border-blue-700 dark:border-blue-500 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 font-bold text-xs transition-colors cursor-pointer"
            >
              Enroll in Class 6–8
            </button>
          </div>

          {/* Card 2: Class 9–10 (Featured) */}
          <div className="bg-gradient-to-b from-blue-900 to-slate-900 text-white rounded-2xl p-7 shadow-xl relative flex flex-col justify-between border border-blue-800">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              Most Popular
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Secondary Boards
                </span>
                <h3 className="text-xl font-bold font-heading text-white mt-1">
                  Class 9 – 10 (Maths, Sci, Eng)
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Intensive target 95%+ preparation with 10-year PYQ Bank
                </p>
              </div>

              <div className="pt-2">
                <div className="text-3xl font-black font-heading text-amber-400">
                  ₹3,600 <span className="text-xs font-normal text-slate-300">/ month</span>
                </div>
                <div className="text-xs text-emerald-300 font-semibold mt-1">
                  Includes Sunday Mock Tests + Answer Key Checking
                </div>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>6 days a week (2 hrs daily)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Max 22 students per batch</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>10-year board paper marathon</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Personal doubt clinics with Arjun Sir</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenAdmissionWithCourse('Secondary Board Excellence Program')}
              className="mt-6 w-full py-3 rounded-xl bg-amber-400 text-slate-950 hover:bg-amber-300 font-extrabold text-xs transition-colors shadow-md cursor-pointer"
            >
              Enroll in Class 9–10 Board Batch
            </button>
          </div>

          {/* Card 3: Class 11–12 */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  Senior Secondary
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                  Class 11 – 12 (Physics, Chem, Math)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Rigorous board mastery with engineering & CUET foundations
                </p>
              </div>

              <div className="pt-2">
                <div className="text-3xl font-black font-heading text-slate-900 dark:text-white">
                  ₹4,800 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ month</span>
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">
                  Includes Practical Demonstrations & Formulas Book
                </div>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>6 days a week (2.5 hrs daily)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Subject specialist faculties</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Formula revision sheets & reaction charts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Weekly simulation tests on OMR/Subjective</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenAdmissionWithCourse('Senior Secondary Core Science (PCM)')}
              className="mt-6 w-full py-2.5 rounded-xl border border-blue-700 dark:border-blue-500 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 font-bold text-xs transition-colors cursor-pointer"
            >
              Enroll in Class 11–12 PCM
            </button>
          </div>
        </div>

        {/* Interactive Fee Calculator */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Interactive Tuition Fee Estimator</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Calculate Exact Fees with Discounts
              </h3>

              {/* Select Program */}
              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-medium">Select Desired Course:</label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-amber-400"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.classGrade}) — ₹{c.monthlyFee}/mo
                    </option>
                  ))}
                </select>
              </div>

              {/* Payment Frequency Tabs */}
              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-medium">Payment Interval:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      billingCycle === 'monthly'
                        ? 'bg-amber-400 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('quarterly')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      billingCycle === 'quarterly'
                        ? 'bg-amber-400 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    Quarterly (5% Off)
                  </button>
                  <button
                    onClick={() => setBillingCycle('annual')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      billingCycle === 'annual'
                        ? 'bg-amber-400 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    Annual (15% Off)
                  </button>
                </div>
              </div>

              {/* Discount Checkboxes */}
              <div className="pt-2 space-y-2.5">
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasSiblingDiscount}
                    onChange={(e) => setHasSiblingDiscount(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0 cursor-pointer"
                  />
                  <span>Sibling Concession (10% extra discount)</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasScholarship}
                    onChange={(e) => setHasScholarship(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0 cursor-pointer"
                  />
                  <span>BrightPath Talent Scholarship (BTSE) qualification (20% merit waiver)</span>
                </label>
              </div>
            </div>

            {/* Total Display Card */}
            <div className="lg:col-span-5 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Summary Breakdown ({billingCycle})
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-b border-slate-700 pb-4">
                <div className="flex justify-between">
                  <span>Gross Tuition ({monthsCount} {monthsCount === 1 ? 'month' : 'months'}):</span>
                  <span>₹{grossTotal.toLocaleString('en-IN')}</span>
                </div>
                {cycleDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Billing Interval Discount ({billingCycle}):</span>
                    <span>-₹{Math.round(cycleDiscount).toLocaleString('en-IN')}</span>
                  </div>
                )}
                {siblingDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Sibling Concession (10%):</span>
                    <span>-₹{Math.round(siblingDiscount).toLocaleString('en-IN')}</span>
                  </div>
                )}
                {scholarshipDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Merit Scholarship (20%):</span>
                    <span>-₹{Math.round(scholarshipDiscount).toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <div>
                <div className="text-xs text-slate-400">Estimated Total Payable:</div>
                <div className="text-3xl font-extrabold text-amber-400 font-heading">
                  ₹{netPayable.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Includes study material, mock test series & laboratory access.
                </div>
              </div>

              <button
                onClick={() => onOpenAdmissionWithCourse(selectedCourse.name)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                Apply for Admission with this Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
