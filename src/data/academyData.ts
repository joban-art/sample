export interface Course {
  id: string;
  category: 'middle' | 'high' | 'senior' | 'special';
  name: string;
  classGrade: string;
  subjects: string[];
  tagline: string;
  description: string;
  batchSize: string;
  duration: string;
  classesPerWeek: string;
  timings: string;
  features: string[];
  monthlyFee: number;
  badge?: string;
  image: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  role: string;
  qualification: string;
  experience: string;
  studentsMentored: string;
  bio: string;
  quote: string;
  achievements: string[];
  specialties: string[];
  image: string;
}

export interface StudentReview {
  id: string;
  name: string;
  classGrade: string;
  score: string;
  subjectHighlight: string;
  avatar: string;
  rating: number;
  review: string;
  year: string;
  parentNote?: string;
}

export interface Topper {
  id: string;
  name: string;
  classGrade: string;
  score: string;
  school: string;
  achievement: string;
  subjects: { name: string; marks: number }[];
  image: string;
  year: string;
}

export interface TimetableSlot {
  id: string;
  grade: string;
  day: string;
  time: string;
  subject: string;
  teacher: string;
  room: string;
  type: 'Regular Class' | 'Doubt Session' | 'Practical / Lab' | 'Weekly Test';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classrooms' | 'Labs' | 'Events & Awards' | 'Study Sessions';
  caption: string;
  image: string;
}

export const INSTITUTE_INFO = {
  name: 'BrightPath Academy',
  tagline: 'Learn Today, Lead Tomorrow',
  location: 'Model Town, Ludhiana, Punjab, India',
  fullAddress: 'Plot 42-B, Main Market Road, Near Krishna Temple, Model Town, Ludhiana - 141002, Punjab',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '+919876543210',
  whatsappDisplay: '+91 98765 43210',
  email: 'hello@brightpathacademy.in',
  director: 'Mr. Arjun Sharma',
  establishedYear: '2015',
  hours: 'Monday – Saturday: 8:00 AM – 8:00 PM | Sunday: 9:00 AM – 2:00 PM',
  stats: [
    { label: 'Students Mentored', value: '4,500+' },
    { label: '90%+ Board Scorers', value: '98.4%' },
    { label: 'Expert Faculty', value: '15+' },
    { label: 'Max Batch Size', value: '25 Students' },
  ],
};

export const COURSES: Course[] = [
  {
    id: 'class-6-8',
    category: 'middle',
    name: 'Middle School Foundation Program',
    classGrade: 'Class 6 – 8',
    subjects: ['All Subjects', 'Mathematics', 'Science', 'English', 'Social Studies'],
    tagline: 'Strong Conceptual Foundation & Analytical Thinking',
    description:
      'A holistic foundation program designed to transition students from memorization to genuine conceptual understanding, mental math agility, scientific curiosity, and articulate English communication.',
    batchSize: '20 Students / Batch',
    duration: 'Full Academic Year (April – March)',
    classesPerWeek: '6 Days / Week (1.5 hrs daily)',
    timings: '3:30 PM – 5:00 PM',
    features: [
      'Comprehensive coverage of NCERT & School Syllabi',
      'Daily Practice Papers (DPP) & Vedic Math tricks',
      'Interactive Science experiments & visual learning kits',
      'Grammar mastery, reading comprehension & vocabulary drills',
      'Bi-weekly progress reports sent directly to parents',
    ],
    monthlyFee: 2800,
    badge: 'Best for Foundation',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'class-9-10',
    category: 'high',
    name: 'Secondary Board Excellence Program',
    classGrade: 'Class 9 – 10',
    subjects: ['Mathematics', 'Science', 'English'],
    tagline: 'High-Impact Board Preparation & Conceptual Depth',
    description:
      'Rigorous preparation targeting 95%+ in CBSE and Punjab State Board examinations. Focuses on deep problem solving in Mathematics, laboratory-backed Science concepts, and high-scoring English writing formats.',
    batchSize: '22 Students / Batch',
    duration: 'Full Academic Year with Board Revision Marathon',
    classesPerWeek: '6 Days / Week (2 hrs daily)',
    timings: '5:15 PM – 7:15 PM',
    features: [
      'Full CBSE / ICSE / PSEB syllabus coverage 3 months before exams',
      'Exclusive 10-Year Previous Years Question (PYQ) Bank',
      'Answer writing presentation coaching for maximum marks',
      'Specialized NCERT Exemplar & Advanced problem sets',
      'Regular one-on-one doubt resolution clinics',
    ],
    monthlyFee: 3600,
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'class-11-12',
    category: 'senior',
    name: 'Senior Secondary Core Science (PCM)',
    classGrade: 'Class 11 – 12',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    tagline: 'Mastering Board Exams & Competitive Foundation',
    description:
      'Intensive mastery of Physics, Chemistry, and Mathematics led by subject specialists. Designed to conquer the Class 12 Boards while building robust problem-solving fundamentals for JEE and CUET.',
    batchSize: '24 Students / Batch',
    duration: 'Academic Year + Board Sprint Revision',
    classesPerWeek: '6 Days / Week (2.5 hrs daily)',
    timings: '4:00 PM – 6:30 PM & 6:30 PM – 9:00 PM',
    features: [
      'Chapter-wise deep dive with concept derivations & proofs',
      'Formula booklets, reaction charts & mind maps provided',
      'Extensive numerical solving sessions with speed shortcuts',
      'Practical experiment demonstrations & viva preparation',
      'Dedicated Board Answer-Writing workshops',
    ],
    monthlyFee: 4800,
    badge: 'High Results',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'special-board-prep',
    category: 'special',
    name: 'Target 95+ Board Exam Preparation',
    classGrade: 'Class 10 & Class 12 Boards',
    subjects: ['Board Exam Revision', 'PYQ Solving', 'Sample Papers'],
    tagline: 'Sprint Revision, Sample Papers & Mark Maximizer',
    description:
      'Specialized booster batch operating between November and March. We conduct 15 full-length mock examinations with board-standard checking, timed drills, and personalized feedback.',
    batchSize: '20 Students / Batch',
    duration: '4 Months Intensive Sprint',
    classesPerWeek: 'Daily Intensive Sessions',
    timings: 'Flexible Morning / Evening Slots',
    features: [
      '15 Proctored Full-Length Pre-Board Mock Exams',
      'Word-by-word marking scheme alignment as per CBSE standards',
      'Time-management strategies to avoid leaving exam questions',
      'Top 200 most-frequently repeated board questions with solutions',
      'Stress management and peak-performance coaching',
    ],
    monthlyFee: 3200,
    badge: 'Special Program',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'special-weekly-test-series',
    category: 'special',
    name: 'BrightPath Weekly Test Series (BWTS)',
    classGrade: 'Class 6 to 12',
    subjects: ['All Core Subjects', 'Weekly Diagnostics', 'Performance Analytics'],
    tagline: 'Continuous Testing, Error Analysis & Performance Tracking',
    description:
      'Our acclaimed Sunday test series that builds exam temperament, eliminates silly errors, and provides parents with transparent graphical progress metrics every week.',
    batchSize: 'Open to All Enrolled & External Students',
    duration: 'Round-the-year on every Sunday',
    classesPerWeek: 'Every Sunday (10:00 AM – 1:00 PM)',
    timings: 'Sunday: 10:00 AM – 1:00 PM',
    features: [
      'Objective (MCQ) & Subjective alternating test format',
      'Same-day digital scorecard sent via WhatsApp SMS',
      'Comprehensive Error Analysis Sheet (EAS) for every student',
      'Ranking across Ludhiana center batches',
      'Post-test doubt clearing session with lead faculties',
    ],
    monthlyFee: 1500,
    badge: 'Essential',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop',
  },
];

export const TEACHERS: Teacher[] = [
  {
    id: 'arjun-sharma',
    name: 'Mr. Arjun Sharma',
    subject: 'Mathematics',
    role: 'Director & Lead Mathematics Faculty',
    qualification: 'M.Sc. Mathematics (Gold Medalist), B.Ed.',
    experience: '14+ Years Experience',
    studentsMentored: '3,200+ Students',
    bio: 'Founder and Director of BrightPath Academy. Renowned across Ludhiana for demystifying complex algebra, calculus, and geometry. His proprietary visual method makes students fall in love with mathematical logic.',
    quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    achievements: [
      'Guided 140+ students to a perfect 100/100 in Class 10 & 12 Boards',
      'Former HOD Mathematics at leading Ludhiana Senior Secondary School',
      'Author of BrightPath Vedic Speed Math handbook',
    ],
    specialties: ['Calculus & Vectors', 'Class 10 Trigonometry', 'Algebraic Proofs', 'Vedic Math Shortcuts'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'neha-verma',
    name: 'Mrs. Neha Verma',
    subject: 'Science',
    role: 'Senior Science Faculty (Class 6–10)',
    qualification: 'M.Sc. Physics, B.Ed., CTET Qualified',
    experience: '9+ Years Experience',
    studentsMentored: '2,400+ Students',
    bio: 'An impassioned science educator who believes the classroom should be as active as a research lab. She connects textbook diagrams with everyday phenomena, making physics and biology unforgettable.',
    quote: 'When students see a concept happen in front of their eyes, they never need to rote memorize it again.',
    achievements: [
      'Produced District 1st Rank in Science (Class 10 CBSE 2024)',
      'Designer of BrightPath Hands-on Science Kits',
      'Recipient of Ludhiana Best Educator Award 2022',
    ],
    specialties: ['Light & Electricity', 'Periodic Table Basics', 'Biology Life Processes', 'NCERT Exemplar'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'rohit-kapoor',
    name: 'Mr. Rohit Kapoor',
    subject: 'Physics',
    role: 'Lead Physics Specialist (Class 11–12)',
    qualification: 'B.Tech (IIT Roorkee Alumnus)',
    experience: '11+ Years Experience',
    studentsMentored: '2,800+ Students',
    bio: 'Known for turning dreaded physics numericals into straightforward step-by-step logic. Rohit Kapoor brings engineering precision and real-world clarity to electrostatics, optics, and thermodynamics.',
    quote: 'Physics is the language of the universe. Understand the law, and the equations solve themselves.',
    achievements: [
      'Mentored 85+ students scoring 95+ in CBSE Class 12 Physics',
      'Pioneered the "Visual Vector" methodology for mechanics',
      'Regular guest speaker at Punjab Science Congress',
    ],
    specialties: ['Electromagnetism', 'Wave & Ray Optics', 'Rotational Mechanics', 'Board Derivations'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'simran-kaur',
    name: 'Ms. Simran Kaur',
    subject: 'Chemistry',
    role: 'Lead Chemistry Specialist (Class 11–12)',
    qualification: 'M.Sc. Organic Chemistry (Panjab University)',
    experience: '8+ Years Experience',
    studentsMentored: '1,900+ Students',
    bio: 'Simran makes organic reactions and physical chemistry formulas second nature. Her reaction roadmaps and memory triggers have helped hundreds of students conquer their chemistry fear.',
    quote: 'Chemistry is magical once you understand the dance of electrons rather than cramming reactions.',
    achievements: [
      'Over 92% of her students scored 90+ in Class 12 Chemistry in 2024',
      'Created "Simran\'s Reaction Roadmaps" used by 2,000+ students',
      'State-level distinction holder in Chemical Sciences',
    ],
    specialties: ['Organic Reaction Mechanisms', 'Chemical Equilibrium', 'Coordination Compounds', 'Electrochemistry'],
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'priya-mehta',
    name: 'Mrs. Priya Mehta',
    subject: 'English',
    role: 'Senior English Faculty (Class 6–10)',
    qualification: 'M.A. English Literature, Cambridge CELTA',
    experience: '10+ Years Experience',
    studentsMentored: '2,600+ Students',
    bio: 'A language enthusiast dedicated to building confident speakers and top-scoring writers. Priya transforms student essays, letters, and literature interpretations into polished, high-scoring answers.',
    quote: 'Expressing your thoughts with precision and eloquence is the greatest superpower a student can develop.',
    achievements: [
      'Trained 200+ students with 96+ marks in CBSE Class 10 English',
      'Curator of BrightPath Creative Writing and Debate Club',
      'Former National Debater and certified phonetics trainer',
    ],
    specialties: ['Board Writing Formats', 'Poetry Analysis', 'Grammar & Syntax', 'Debating & Speech'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
];

export const STUDENT_REVIEWS: StudentReview[] = [
  {
    id: 'rev-1',
    name: 'Aman Singh',
    classGrade: 'Class 10 (CBSE)',
    score: '97.8% in Boards',
    subjectHighlight: 'Mathematics: 99/100',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review:
      'Arjun Sir\'s mathematics lectures completely transformed my approach. I used to be terrified of geometry proofs and trigonometry formulas. His shortcuts and weekly test series made me walk into the board exam center with total confidence. Scoring 99/100 in Maths was a dream come true!',
    year: 'Batch 2024',
    parentNote: 'Father: "The personalized attention and regular updates gave us complete peace of mind."',
  },
  {
    id: 'rev-2',
    name: 'Harpreet Kaur',
    classGrade: 'Class 12 (CBSE Science)',
    score: '96.4% in Boards',
    subjectHighlight: 'Physics & Chemistry: 96 & 98',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review:
      'BrightPath Academy is unmatched in Ludhiana for Physics and Chemistry. Rohit Sir breaks down electrostatics so logically that you never forget it, and Simran Ma\'am\'s organic reaction roadmaps saved hundreds of study hours. The Sunday test series is the secret weapon for anyone targeting 95%+!',
    year: 'Batch 2024',
    parentNote: 'Mother: "Harpreet\'s confidence soared within two months of joining BrightPath."',
  },
  {
    id: 'rev-3',
    name: 'Riya Sharma',
    classGrade: 'Class 10 (CBSE)',
    score: '98.2% in Boards',
    subjectHighlight: 'Science: 100/100 Perfect Score',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review:
      'Scoring a 100/100 in Science would never have happened without Neha Ma\'am. She conducted live experiments, clarified every single NCERT line, and Priya Ma\'am refined my English answer sheets so I didn\'t lose even half a mark in presentation. The teachers here genuinely care for you.',
    year: 'Batch 2024',
    parentNote: 'Mother: "BrightPath is like a second family for students. The faculty is so approachable."',
  },
  {
    id: 'rev-4',
    name: 'Manpreet Singh',
    classGrade: 'Class 12 (CBSE Science)',
    score: '95.6% in Boards',
    subjectHighlight: 'Mathematics: 98/100',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review:
      'Balancing school, practicals, and entrance tests was overwhelming until I joined the PCM batch at BrightPath Academy. The batch size is strictly limited to 24 students, so every doubt was cleared right away. The library and doubt room in Model Town were my second home during board prep.',
    year: 'Batch 2023',
    parentNote: 'Father: "Disciplined atmosphere with positive encouragement. Highly recommended."',
  },
  {
    id: 'rev-5',
    name: 'Ananya Gupta',
    classGrade: 'Class 8 (Middle School)',
    score: 'Rank 1 in School',
    subjectHighlight: 'All Subjects: 98.4%',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review:
      'I joined BrightPath Academy in Class 7 for All Subjects. Learning Science and Maths here is so much fun because of real experiments and Vedic math quizzes. Priya Ma\'am also helped me win the inter-school debate championship in Ludhiana! My foundation is rock solid now.',
    year: 'Batch 2024',
    parentNote: 'Father: "Her curiosity and self-study habits improved dramatically after enrolling."',
  },
  {
    id: 'rev-6',
    name: 'Karan Verma',
    classGrade: 'Class 10 (Board Exam Batch)',
    score: '96.2% in Boards',
    subjectHighlight: 'English & Maths: 97 & 96',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review:
      'Before BrightPath, I was stuck at 74% in pre-boards and panicking about English and Science. The Sprint Revision program and the 15 mock tests showed me exactly where I was losing marks. The teachers worked with me on my handwriting, speed, and time allocation. Got 96.2% in the finals!',
    year: 'Batch 2024',
    parentNote: 'Mother: "From stressed to confident — BrightPath brought about a miraculous transformation."',
  },
];

export const TOPPERS: Topper[] = [
  {
    id: 'top-1',
    name: 'Riya Sharma',
    classGrade: 'Class 10 CBSE 2024',
    score: '98.6%',
    school: 'Sacred Heart Convent, Ludhiana',
    achievement: 'Ludhiana City Rank 2 & 100/100 in Science',
    subjects: [
      { name: 'Science', marks: 100 },
      { name: 'Mathematics', marks: 99 },
      { name: 'English', marks: 98 },
      { name: 'Social Science', marks: 98 },
    ],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: 'top-2',
    name: 'Aman Singh',
    classGrade: 'Class 10 CBSE 2024',
    score: '97.8%',
    school: 'DAV Public School, Ludhiana',
    achievement: 'District Merit Holder & 99/100 in Mathematics',
    subjects: [
      { name: 'Mathematics', marks: 99 },
      { name: 'Science', marks: 98 },
      { name: 'English', marks: 97 },
      { name: 'Social Science', marks: 97 },
    ],
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: 'top-3',
    name: 'Harpreet Kaur',
    classGrade: 'Class 12 CBSE 2024 (PCM)',
    score: '96.8%',
    school: 'BVM Senior Secondary, Ludhiana',
    achievement: 'School Topper in Science Stream',
    subjects: [
      { name: 'Chemistry', marks: 98 },
      { name: 'Physics', marks: 97 },
      { name: 'Mathematics', marks: 96 },
      { name: 'English', marks: 96 },
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: 'top-4',
    name: 'Gurpreet Chawla',
    classGrade: 'Class 12 CBSE 2024 (PCM)',
    score: '96.4%',
    school: 'KVM Ludhiana',
    achievement: '100/100 in Mathematics & JEE Mains 99.1%ile',
    subjects: [
      { name: 'Mathematics', marks: 100 },
      { name: 'Physics', marks: 96 },
      { name: 'Chemistry', marks: 95 },
      { name: 'English', marks: 94 },
    ],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    year: '2024',
  },
];

export const TIMETABLE_DATA: TimetableSlot[] = [
  // Class 6-8
  { id: 't-1', grade: 'Class 6–8', day: 'Monday', time: '3:30 PM – 4:15 PM', subject: 'Mathematics', teacher: 'Mr. Arjun Sharma', room: 'Hall A (Ground Fl.)', type: 'Regular Class' },
  { id: 't-2', grade: 'Class 6–8', day: 'Monday', time: '4:20 PM – 5:05 PM', subject: 'Science', teacher: 'Mrs. Neha Verma', room: 'Hall A (Ground Fl.)', type: 'Regular Class' },
  { id: 't-3', grade: 'Class 6–8', day: 'Tuesday', time: '3:30 PM – 4:15 PM', subject: 'English Grammar', teacher: 'Mrs. Priya Mehta', room: 'Hall A (Ground Fl.)', type: 'Regular Class' },
  { id: 't-4', grade: 'Class 6–8', day: 'Tuesday', time: '4:20 PM – 5:05 PM', subject: 'Mathematics (Problem Lab)', teacher: 'Mr. Arjun Sharma', room: 'Hall A (Ground Fl.)', type: 'Regular Class' },
  { id: 't-5', grade: 'Class 6–8', day: 'Wednesday', time: '3:30 PM – 5:00 PM', subject: 'Science Demonstration Lab', teacher: 'Mrs. Neha Verma', room: 'Discovery Lab (1st Fl.)', type: 'Practical / Lab' },
  { id: 't-6', grade: 'Class 6–8', day: 'Thursday', time: '3:30 PM – 4:15 PM', subject: 'Social Studies & GK', teacher: 'Senior Faculty', room: 'Hall A', type: 'Regular Class' },
  { id: 't-7', grade: 'Class 6–8', day: 'Thursday', time: '4:20 PM – 5:05 PM', subject: 'English Creative Writing', teacher: 'Mrs. Priya Mehta', room: 'Hall A', type: 'Regular Class' },
  { id: 't-8', grade: 'Class 6–8', day: 'Friday', time: '3:30 PM – 5:00 PM', subject: 'Weekly Doubt Clinic & Quiz', teacher: 'All Subject Faculty', room: 'Hall A & Library', type: 'Doubt Session' },
  { id: 't-9', grade: 'Class 6–8', day: 'Sunday', time: '10:00 AM – 11:30 AM', subject: 'BrightPath Weekly Assessment', teacher: 'Evaluation Team', room: 'Exam Center', type: 'Weekly Test' },

  // Class 9-10
  { id: 't-10', grade: 'Class 9–10', day: 'Monday', time: '5:15 PM – 6:15 PM', subject: 'Mathematics (Algebra & Trig)', teacher: 'Mr. Arjun Sharma', room: 'Newton Hall (2nd Fl.)', type: 'Regular Class' },
  { id: 't-11', grade: 'Class 9–10', day: 'Monday', time: '6:20 PM – 7:15 PM', subject: 'Science (Physics & Chem)', teacher: 'Mrs. Neha Verma', room: 'Newton Hall (2nd Fl.)', type: 'Regular Class' },
  { id: 't-12', grade: 'Class 9–10', day: 'Tuesday', time: '5:15 PM – 6:15 PM', subject: 'Science (Biology & Lab Work)', teacher: 'Mrs. Neha Verma', room: 'Discovery Lab', type: 'Practical / Lab' },
  { id: 't-13', grade: 'Class 9–10', day: 'Tuesday', time: '6:20 PM – 7:15 PM', subject: 'English (Literature & Formats)', teacher: 'Mrs. Priya Mehta', room: 'Newton Hall', type: 'Regular Class' },
  { id: 't-14', grade: 'Class 9–10', day: 'Wednesday', time: '5:15 PM – 6:15 PM', subject: 'Mathematics (NCERT Exemplar)', teacher: 'Mr. Arjun Sharma', room: 'Newton Hall', type: 'Regular Class' },
  { id: 't-15', grade: 'Class 9–10', day: 'Wednesday', time: '6:20 PM – 7:15 PM', subject: 'Science (Numerical Workshop)', teacher: 'Mrs. Neha Verma', room: 'Newton Hall', type: 'Regular Class' },
  { id: 't-16', grade: 'Class 9–10', day: 'Thursday', time: '5:15 PM – 6:30 PM', subject: '10-Year PYQ Solving Sprint', teacher: 'Mr. Arjun Sharma', room: 'Newton Hall', type: 'Regular Class' },
  { id: 't-17', grade: 'Class 9–10', day: 'Friday', time: '5:15 PM – 7:15 PM', subject: 'Open Doubt Clearing & Personal Guidance', teacher: 'Arjun Sir & Neha Ma\'am', room: 'Discussion Suites', type: 'Doubt Session' },
  { id: 't-18', grade: 'Class 9–10', day: 'Sunday', time: '10:00 AM – 1:00 PM', subject: 'Full Length Board Mock / BWTS', teacher: 'Senior Invigilator', room: 'Auditorium Hall', type: 'Weekly Test' },

  // Class 11-12
  { id: 't-19', grade: 'Class 11–12', day: 'Monday', time: '4:00 PM – 5:15 PM', subject: 'Physics (Mechanics / Electrodynamics)', teacher: 'Mr. Rohit Kapoor', room: 'Tesla Amphitheater', type: 'Regular Class' },
  { id: 't-20', grade: 'Class 11–12', day: 'Monday', time: '5:20 PM – 6:30 PM', subject: 'Chemistry (Physical & Inorganic)', teacher: 'Ms. Simran Kaur', room: 'Curie Lecture Hall', type: 'Regular Class' },
  { id: 't-21', grade: 'Class 11–12', day: 'Tuesday', time: '4:00 PM – 5:15 PM', subject: 'Mathematics (Calculus & Vectors)', teacher: 'Mr. Arjun Sharma', room: 'Euler Hall', type: 'Regular Class' },
  { id: 't-22', grade: 'Class 11–12', day: 'Tuesday', time: '5:20 PM – 6:30 PM', subject: 'Physics (Derivations & Numericals)', teacher: 'Mr. Rohit Kapoor', room: 'Tesla Amphitheater', type: 'Regular Class' },
  { id: 't-23', grade: 'Class 11–12', day: 'Wednesday', time: '4:00 PM – 5:30 PM', subject: 'Chemistry (Organic Reaction Roadmaps)', teacher: 'Ms. Simran Kaur', room: 'Curie Lecture Hall', type: 'Regular Class' },
  { id: 't-24', grade: 'Class 11–12', day: 'Wednesday', time: '5:35 PM – 7:00 PM', subject: 'Mathematics (Board & JEE Foundation)', teacher: 'Mr. Arjun Sharma', room: 'Euler Hall', type: 'Regular Class' },
  { id: 't-25', grade: 'Class 11–12', day: 'Thursday', time: '4:00 PM – 6:30 PM', subject: 'Physics & Chemistry Practical Lab Demos', teacher: 'Kapoor Sir & Simran Ma\'am', room: 'Senior Science Labs', type: 'Practical / Lab' },
  { id: 't-26', grade: 'Class 11–12', day: 'Friday', time: '4:00 PM – 6:30 PM', subject: 'One-on-One Formula & Derivation Clinic', teacher: 'All PCM Faculties', room: 'Conference Wing', type: 'Doubt Session' },
  { id: 't-27', grade: 'Class 11–12', day: 'Sunday', time: '10:00 AM – 1:00 PM', subject: 'Sunday Board Simulation Test (PCM)', teacher: 'Examination Wing', room: 'Test Center Floor', type: 'Weekly Test' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Modern Smart Classroom with Audio-Visual Aids',
    category: 'Classrooms',
    caption: 'Air-conditioned smart lecture rooms equipped with interactive boards and ergonomic student seating.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'g-2',
    title: 'Practical Science & Physics Experiments',
    category: 'Labs',
    caption: 'Hands-on optics, electricity and chemistry demonstration kits to make theories tangible and memorable.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'g-3',
    title: 'Dedicated Doubt-Clearing Hub & Study Hall',
    category: 'Study Sessions',
    caption: 'Quiet, well-lit study rooms where students can work on practice papers and sit with teachers individually.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'g-4',
    title: 'Annual Board Toppers Felicitation Ceremony',
    category: 'Events & Awards',
    caption: 'Director Arjun Sharma honoring our 98%+ scoring students with trophies, certificates, and scholarships.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'g-5',
    title: 'Focused Sunday Board Simulation Exam',
    category: 'Study Sessions',
    caption: 'Real board-exam environment simulation with timed writing, official omr sheets, and invigilation.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'g-6',
    title: 'Interactive Chemistry Experiment Demos',
    category: 'Labs',
    caption: 'Simran Ma\'am demonstrating titration and chemical reactions for Class 11 & 12 board practicals.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=900&auto=format&fit=crop',
  },
];

export const FAQS = [
  {
    question: 'How do I take admission at BrightPath Academy?',
    answer:
      'You can register online using our Admission Form on this website or visit our Model Town branch. We offer a free 2-day demo class and an optional Diagnostic Assessment to understand your current strengths before final enrollment.',
  },
  {
    question: 'What is the maximum batch size in each class?',
    answer:
      'We strictly maintain a low teacher-to-student ratio: Class 6–8 has a maximum of 20 students, Class 9–10 has 22 students, and Class 11–12 has 24 students. This guarantees personalized attention and zero hesitation during doubts.',
  },
  {
    question: 'Are there separate batches for CBSE and Punjab State Board (PSEB)?',
    answer:
      'Yes, we maintain separate focused batches aligned with specific board syllabi, question papers, and textbook patterns (NCERT vs State Board) to ensure targeted exam preparation.',
  },
  {
    question: 'How do parents stay updated about their child\'s progress?',
    answer:
      'Parents receive weekly attendance alerts, Sunday test scorecards with comparative rank sheets via WhatsApp SMS, and are invited to our monthly Parent-Teacher Meets (PTMs) with Director Arjun Sharma.',
  },
  {
    question: 'Do you offer sibling discounts or merit-based scholarships?',
    answer:
      'Yes! We offer a 10% sibling discount on the second child\'s tuition fees, and up to 40% fee waiver for students scoring 90%+ in their previous school examinations through the BrightPath Talent Scholarship Exam (BTSE).',
  },
  {
    question: 'Can I join in the middle of an academic session?',
    answer:
      'Yes. For mid-session admissions, our faculty conducts dedicated back-up classes to cover prior chapters so the student seamlessly catches up with the ongoing batch syllabus.',
  },
];
