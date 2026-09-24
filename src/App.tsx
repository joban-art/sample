/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { TeachersSection } from './components/TeachersSection';
import { ResultsSection } from './components/ResultsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { TimetableSection } from './components/TimetableSection';
import { FeesSection } from './components/FeesSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { AdmissionFormSection } from './components/AdmissionFormSection';
import { FaqSection } from './components/FaqSection';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';

function AcademyAppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string>('');

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'courses',
        'teachers',
        'results',
        'reviews',
        'timetable',
        'fees',
        'gallery',
        'contact',
        'admission',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAdmissionModal = (courseName?: string) => {
    if (courseName) {
      setSelectedCourseForModal(courseName);
    } else {
      setSelectedCourseForModal('');
    }
    setIsAdmissionModalOpen(true);
  };

  const handleJoinNow = () => {
    const el = document.getElementById('admission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenAdmissionModal();
    }
  };

  const handleViewCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-500 selection:text-white transition-colors duration-300">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenAdmission={() => handleOpenAdmissionModal()}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Section 1: Home / Hero */}
        <Hero
          onJoinNow={handleJoinNow}
          onViewCourses={handleViewCourses}
        />

        {/* Section 2: About Us */}
        <AboutSection />

        {/* Section 3: Courses */}
        <CoursesSection
          onSelectCourseForAdmission={(courseName) => handleOpenAdmissionModal(courseName)}
        />

        {/* Section 4: Our Teachers */}
        <TeachersSection
          onRequestDoubtSession={(teacherName) => {
            handleOpenAdmissionModal(`Trial Session with ${teacherName}`);
          }}
        />

        {/* Section 5: Results & Achievements */}
        <ResultsSection />

        {/* Section 6: Student Reviews */}
        <ReviewsSection />

        {/* Section 7: Timetable */}
        <TimetableSection />

        {/* Section 8: Fees */}
        <FeesSection
          onOpenAdmissionWithCourse={(courseName) => handleOpenAdmissionModal(courseName)}
        />

        {/* Section 9: Gallery */}
        <GallerySection />

        {/* Section 10: Contact Us */}
        <ContactSection />

        {/* Section 11: Admission Form (Full In-Page Experience) */}
        <AdmissionFormSection
          initialCourse={selectedCourseForModal}
          isModal={false}
        />

        {/* Common Parent/Student FAQ Section */}
        <FaqSection />
      </main>

      {/* WhatsApp Floating Contact Widget */}
      <WhatsAppFloatingButton />

      {/* Quick Admission & Trial Pass Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
        selectedCourse={selectedCourseForModal}
      />

      {/* Professional Footer */}
      <Footer onOpenAdmission={() => handleOpenAdmissionModal()} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AcademyAppContent />
    </ThemeProvider>
  );
}

