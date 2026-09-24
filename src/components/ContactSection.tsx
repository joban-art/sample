import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/academyData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    studentClass: 'Class 10',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-3 py-1.5 rounded-md">
            <MapPin className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Visit Our Model Town Campus in Ludhiana
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Have questions about admissions, faculty, or course batches? Reach out directly via phone, WhatsApp, or drop by our campus for a personalized counseling session with Director Arjun Sharma.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Info Card */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Campus Location</div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{INSTITUTE_INFO.name}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                      {INSTITUTE_INFO.fullAddress}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Direct Phone</div>
                    <a
                      href={`tel:${INSTITUTE_INFO.phone}`}
                      className="font-bold text-slate-900 dark:text-white text-base hover:text-blue-700 dark:hover:text-blue-400 transition-colors block mt-0.5"
                    >
                      {INSTITUTE_INFO.phoneDisplay}
                    </a>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Call for immediate counseling assistance</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">WhatsApp Support</div>
                    <a
                      href={`https://wa.me/${INSTITUTE_INFO.whatsapp}?text=Hello%20BrightPath%20Academy,%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20your%20Model%20Town%20branch.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 text-sm mt-0.5"
                    >
                      <span>Chat on {INSTITUTE_INFO.whatsappDisplay}</span>
                    </a>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Instant syllabus PDF & batch timings</div>
                  </div>
                </div>

                {/* Email & Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Inquiry</div>
                    <a
                      href={`mailto:${INSTITUTE_INFO.email}`}
                      className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 text-sm block mt-0.5"
                    >
                      {INSTITUTE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Office & Visiting Hours</div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{INSTITUTE_INFO.hours}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Director counseling available by appointment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Card */}
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsapp}?text=Hello%20BrightPath%20Academy,%20I%20am%20interested%20in%20joining.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md group"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">Instant WhatsApp</div>
                  <div className="text-sm font-extrabold">Message Our Academic Counselor</div>
                </div>
              </div>
              <div className="text-xs font-bold bg-white text-emerald-800 px-3 py-1.5 rounded-lg">
                Chat Now
              </div>
            </a>
          </div>

          {/* Right Column: Google Maps Style Interactive Preview + Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Google Maps Style Location Section */}
            <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <div className="p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Model Town, Ludhiana Campus Map
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Model+Town+Ludhiana+Punjab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Realistic Map Canvas / Visual Embed */}
              <div className="relative h-64 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <iframe
                  title="BrightPath Academy Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13693.454231885876!2d75.83441589999999!3d30.8904576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83b2361f109b%3A0x6a19f2010c2394!2sModel%20Town%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Academy Pin Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200 dark:border-slate-700 text-xs pointer-events-none">
                  <div className="font-extrabold text-slate-900 dark:text-white font-heading">
                    ★ BrightPath Academy
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-300">Plot 42-B, Main Market, Model Town</div>
                  <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold mt-0.5">● Open Now until 8:00 PM</div>
                </div>
              </div>
            </div>

            {/* Quick Contact / Inquiry Form */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-1">
                Send a Quick Message
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-5">
                Leave your details below and our counselor will call you within 30 minutes.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center space-y-2"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    Message Received Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    Thank you, {formState.name || 'Student/Parent'}. Our admissions counselor at Model Town, Ludhiana will contact you shortly at {formState.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', phone: '', email: '', studentClass: 'Class 10', message: '' });
                    }}
                    className="mt-3 text-xs font-bold text-emerald-800 dark:text-emerald-400 underline cursor-pointer"
                  >
                    Send another query
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 dark:text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Gurpreet Singh"
                        className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600 text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 dark:text-slate-300">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 dark:text-slate-300">Student&apos;s Class *</label>
                      <select
                        value={formState.studentClass}
                        onChange={(e) => setFormState({ ...formState, studentClass: e.target.value })}
                        className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600 text-xs"
                      >
                        <option value="Class 6–8">Class 6–8 (All Subjects)</option>
                        <option value="Class 9">Class 9 (Maths, Science, English)</option>
                        <option value="Class 10">Class 10 (Board Exam Preparation)</option>
                        <option value="Class 11">Class 11 (Physics, Chemistry, Maths)</option>
                        <option value="Class 12">Class 12 (Board & Foundation)</option>
                        <option value="Weekly Test Series Only">Weekly Test Series Only</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 dark:text-slate-300">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600 text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Your Query / Message</label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please let us know your child's school, any specific subjects they need help with, or preferred demo class day..."
                      className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600 text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry to BrightPath Academy</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
