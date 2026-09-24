import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  User, 
  Phone, 
  School, 
  BookOpen, 
  Download,
  Share2,
  Printer,
  ArrowRight
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/academyData';

interface AdmissionFormProps {
  initialCourse?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const AdmissionFormSection: React.FC<AdmissionFormProps> = ({ 
  initialCourse = '',
  isModal = false,
  onClose 
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [selectedCourse, setSelectedCourse] = useState(initialCourse || 'Secondary Board Excellence Program');
  const [preferredSlot, setPreferredSlot] = useState('Evening (5:15 PM – 7:15 PM)');
  const [wantFreeTrial, setWantFreeTrial] = useState(true);
  const [wantScholarshipTest, setWantScholarshipTest] = useState(true);
  const [previousMarks, setPreviousMarks] = useState('88%');
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (initialCourse) {
      setSelectedCourse(initialCourse);
    }
  }, [initialCourse]);

  const handleSameAsPhoneToggle = (checked: boolean) => {
    setSameAsPhone(checked);
    if (checked) {
      setWhatsapp(phone);
    }
  };

  const handlePhoneChange = (val: string) => {
    setPhone(val);
    if (sameAsPhone) {
      setWhatsapp(val);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      const generatedId = `BPA-2025-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedId);
      setIsSuccess(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#f59e0b', '#10b981', '#6366f1'],
        });
      } catch {
        // Safe fallback if canvas-confetti fails
      }
    }, 900);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setStep(1);
    setStudentName('');
    setParentName('');
    setPhone('');
    setWhatsapp('');
    setEmail('');
    setSchool('');
  };

  return (
    <section id="admission" className={`relative ${isModal ? 'p-6 sm:p-8' : 'py-20 bg-slate-900 text-white'}`}>
      {/* Background decor when in full section mode */}
      {!isModal && (
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>
      )}

      <div className={`relative ${isModal ? 'w-full' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {!isModal && (
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open for 2025–26</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              BrightPath Academy Admission & Free Trial Form
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Reserve your seat in our micro batches (strictly capped at 20–25 students). Experience 2 days of real classroom teaching with zero obligation.
            </p>
          </div>
        )}

        <div className={`${isModal ? 'bg-transparent' : 'bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md'}`}>
          {isSuccess ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Application Received & Seat Reserved
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Welcome to BrightPath Academy, {studentName}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Your admission enquiry for <span className="text-amber-300 font-bold">{selectedCourse}</span> ({selectedClass}) has been logged in our Model Town center.
                </p>
              </div>

              {/* Reference ID Card */}
              <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 max-w-md mx-auto space-y-3 text-left">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400">Application Reference ID:</span>
                  <span className="text-sm font-mono font-bold text-amber-400">{referenceId}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-500 block">Student:</span>
                    <span className="font-semibold text-white">{studentName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Class:</span>
                    <span className="font-semibold text-white">{selectedClass}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Contact Phone:</span>
                    <span className="font-semibold text-white">{phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Free 2-Day Trial:</span>
                    <span className="font-semibold text-emerald-400">Active</span>
                  </div>
                </div>
                <div className="pt-2 text-[11px] text-slate-400">
                  📍 Model Town, Ludhiana center staff will call {phone} within 2 business hours with batch schedule.
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsapp}?text=Hello%20BrightPath%20Academy,%20I%20just%20submitted%20admission%20form%20for%20${encodeURIComponent(
                    studentName
                  )}%20(Ref:%20${referenceId}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-md"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Notify via WhatsApp</span>
                </a>
                <button
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold"
                >
                  Submit Another Application
                </button>
              </div>
            </motion.div>
          ) : (
            /* Form Input State */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step === 1 ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'}`}>
                    1
                  </div>
                  <span className="text-xs font-bold text-slate-200">Student & Contact Info</span>
                </div>
                <div className="h-0.5 w-12 bg-slate-700" />
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step === 2 ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    2
                  </div>
                  <span className="text-xs font-bold text-slate-200">Class & Course Preferences</span>
                </div>
              </div>

              {step === 1 ? (
                /* Step 1 Fields */
                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-blue-400" />
                        <span>Student Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Navjot Singh"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="e.g. Mr. Harjit Singh"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Calling Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="+91 98765 00000"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="font-bold text-slate-300">WhatsApp Number *</label>
                        <label className="text-[10px] text-slate-400 flex items-center gap-1 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={sameAsPhone}
                            onChange={(e) => handleSameAsPhoneToggle(e.target.checked)}
                            className="w-3 h-3 text-emerald-500"
                          />
                          <span>Same as phone</span>
                        </label>
                      </div>
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        disabled={sameAsPhone}
                        placeholder="+91 98765 00000"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 text-xs disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300 flex items-center gap-1.5">
                        <School className="w-3.5 h-3.5 text-amber-400" />
                        <span>Current School in Ludhiana</span>
                      </label>
                      <input
                        type="text"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        placeholder="e.g. Sacred Heart, DAV, BVM, KVM..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 text-xs"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={!studentName || !parentName || !phone}
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Proceed to Course Selection</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Step 2 Fields */
                <div className="space-y-5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Target Class / Grade *</label>
                      <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-hidden focus:border-blue-500 text-xs"
                      >
                        <option value="Class 6">Class 6 (Middle School Foundation)</option>
                        <option value="Class 7">Class 7 (Middle School Foundation)</option>
                        <option value="Class 8">Class 8 (Middle School Foundation)</option>
                        <option value="Class 9">Class 9 (Maths, Science, English)</option>
                        <option value="Class 10">Class 10 (Board Exam Preparation)</option>
                        <option value="Class 11">Class 11 (Physics, Chemistry, Maths)</option>
                        <option value="Class 12">Class 12 (Board & JEE/CUET Foundation)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Program Package *</label>
                      <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-hidden focus:border-blue-500 text-xs"
                      >
                        <option value="Middle School Foundation Program">Middle School Foundation Program (Class 6–8)</option>
                        <option value="Secondary Board Excellence Program">Secondary Board Excellence Program (Class 9–10)</option>
                        <option value="Senior Secondary Core Science (PCM)">Senior Secondary Core Science (Class 11–12 PCM)</option>
                        <option value="Target 95+ Board Exam Preparation">Target 95+ Board Exam Preparation (Special Batch)</option>
                        <option value="BrightPath Weekly Test Series (BWTS)">BrightPath Weekly Test Series Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Preferred Batch Timing</label>
                      <select
                        value={preferredSlot}
                        onChange={(e) => setPreferredSlot(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-hidden focus:border-blue-500 text-xs"
                      >
                        <option value="Afternoon Slot (3:30 PM – 5:00 PM)">Afternoon Slot (3:30 PM – 5:00 PM)</option>
                        <option value="Evening Slot (5:15 PM – 7:15 PM)">Evening Slot (5:15 PM – 7:15 PM)</option>
                        <option value="Late Evening Slot (6:30 PM – 9:00 PM)">Late Evening Slot (6:30 PM – 9:00 PM)</option>
                        <option value="Sunday Test Series Batch Only (10:00 AM – 1:00 PM)">Sunday Test Series Batch (10:00 AM – 1:00 PM)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Last Academic Year Percentage (Optional)</label>
                      <input
                        type="text"
                        value={previousMarks}
                        onChange={(e) => setPreviousMarks(e.target.value)}
                        placeholder="e.g. 88% or Grade A1"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500 text-xs"
                      />
                    </div>
                  </div>

                  {/* Benefit Checkboxes */}
                  <div className="p-4 bg-slate-900/80 border border-slate-700 rounded-xl space-y-2.5">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={wantFreeTrial}
                        onChange={(e) => setWantFreeTrial(e.target.checked)}
                        className="w-4 h-4 rounded text-blue-500"
                      />
                      <span className="text-slate-200">
                        Claim <strong>Free 2-Day Classroom Trial Pass</strong> (No fees or commitment)
                      </span>
                    </label>

                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={wantScholarshipTest}
                        onChange={(e) => setWantScholarshipTest(e.target.checked)}
                        className="w-4 h-4 rounded text-amber-500"
                      />
                      <span className="text-slate-200">
                        Enroll in <strong>BrightPath Talent Scholarship (BTSE)</strong> for up to 40% fee waiver
                      </span>
                    </label>
                  </div>

                  <div className="pt-3 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-7 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-400/20 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Submit Admission Application</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
