import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Laptop,
  Building2,
  Megaphone,
  Truck,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Users,
  Compass,
  ShieldCheck,
  BookOpen,
  Sparkles,
  X,
  Target,
  GraduationCap,
  CalendarCheck,
  Workflow,
  Camera,
  Image as ImageIcon,
  Clock,
  Send,
  AlertCircle
} from 'lucide-react';

import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/effects/SpotlightCard';
import WaveCanvas from '../components/effects/WaveCanvas';
import AmbientShapes from '../components/effects/AmbientShapes';
import { submitAppointmentRequest, isFirebaseConfigured } from '../firebase';
import { trackMetaLead } from '../utils/metaPixel';

// Section Featured Images (Supplied Client Assets)
const h1BannerDesktop = '/images/training-desktop.webp';
const h1BannerMobile = '/images/training-mobile.webp';
import sec2Img from '../assets/training-development/IMG 02.webp';
import sec4Img03 from '../assets/training-development/IMA 03.webp';
import sec4Img04 from '../assets/training-development/IMG 04.webp';
import sec5Img from '../assets/training-development/H3.webp';

// Engagement Gallery Authentic Images (Supplied IMG 01 to IMG 24)
import gallImg01 from '../assets/training-development/IMG 01.webp';
import gallImg02 from '../assets/training-development/IMG 02.webp';
import gallImg03 from '../assets/training-development/IMA 03.webp';
import gallImg04 from '../assets/training-development/IMG 04.webp';
import gallImg05 from '../assets/training-development/IMG 05.webp';
import gallImg06 from '../assets/training-development/IMG 06.webp';
import gallImg07 from '../assets/training-development/IMG 07.webp';
import gallImg08 from '../assets/training-development/IMG 08.webp';
import gallImg09 from '../assets/training-development/IMG 09.webp';
import gallImg10 from '../assets/training-development/IMG 10.webp';
import gallImg11 from '../assets/training-development/IMG 11.webp';
import gallImg12 from '../assets/training-development/IMG 12.webp';
import gallImg13 from '../assets/training-development/IMG 13.webp';
import gallImg14 from '../assets/training-development/IMG 14.webp';
import gallImg15 from '../assets/training-development/IMG 15.webp';
import gallImg16 from '../assets/training-development/IMG 16.webp';
import gallImg17 from '../assets/training-development/IMG 17.webp';
import gallImg18 from '../assets/training-development/IMG 18.webp';
import gallImg19 from '../assets/training-development/IMG 19.webp';
import gallImg20 from '../assets/training-development/IMG 20.webp';
import gallImg21 from '../assets/training-development/IMG 21.webp';
import gallImg22 from '../assets/training-development/IMG 22.webp';
import gallImg23 from '../assets/training-development/IMG 23.webp';
import gallImg24 from '../assets/training-development/IMG 24.webp';

// Full 20+ Photograph Schedule from the implementation brief
const GALLERY_PHOTOS = [
  {
    id: 'IMG-01',
    src: gallImg01,
    alt: 'Poovendhan Anbarasu, Founder & CEO of Civiora, addressing students and faculty during an institutional career and skill awareness session.',
    caption: 'Career-awareness session | Institutional Auditorium | Karnataka',
    tag: 'Auditorium Session',
    requiredPhoto: 'Wide view of Poovendhan addressing students',
    isDummy: false,
  },
  {
    id: 'IMG-02',
    src: gallImg02,
    alt: 'Poovendhan Anbarasu interacting directly with students to discuss skill development and career readiness.',
    caption: 'Student interactive mentoring | Campus Career Session | Bengaluru',
    tag: 'Direct Interaction',
    requiredPhoto: 'Poovendhan interacting with students',
    isDummy: false,
  },
  {
    id: 'IMG-03',
    src: gallImg03,
    alt: 'Speaker presenting career pathways and skills on presentation screen to students.',
    caption: 'Career-awareness session | Presentation and Orientation | Karnataka',
    tag: 'Presentation',
    requiredPhoto: 'Speaker with presentation screen visible',
    isDummy: false,
  },
  {
    id: 'IMG-04',
    src: gallImg04,
    alt: 'Students actively participating, asking questions, and engaging during a guidance session.',
    caption: 'Interactive Q&A discussion | Student Capability Workshop | Bengaluru',
    tag: 'Student Q&A',
    requiredPhoto: 'Student asking a question',
    isDummy: false,
  },
  {
    id: 'IMG-05',
    src: gallImg05,
    alt: 'Discussion and planning with institutional leaders and department coordinators.',
    caption: 'Institutional leadership consultation | Programme Planning | Karnataka',
    tag: 'Institutional Discussion',
    requiredPhoto: 'Discussion with institutional representatives',
    isDummy: false,
  },
  {
    id: 'IMG-06',
    src: gallImg06,
    alt: 'Students listening attentively and reviewing development options in a seminar.',
    caption: 'Active student engagement | Career guidance programme | Bengaluru',
    tag: 'Campus Engagement',
    requiredPhoto: 'Students listening during a session',
    isDummy: false,
  },
  {
    id: 'IMG-07',
    src: gallImg07,
    alt: 'College students engaged in a small-group capability and career orientation session.',
    caption: 'Undergraduate mentoring session | Degree College Engagement | Karnataka',
    tag: 'Career Pathway',
    requiredPhoto: 'Poovendhan explaining a career pathway',
    isDummy: false,
  },
  {
    id: 'IMG-08',
    src: gallImg08,
    alt: 'University students participating in a career guidance and higher studies workshop.',
    caption: 'Campus-wide career session | University Seminar Hall | Bengaluru',
    tag: 'Student Activity',
    requiredPhoto: 'Interactive student activity',
    isDummy: false,
  },
  {
    id: 'IMG-09',
    src: gallImg09,
    alt: 'Opening address on career opportunities and student capability building.',
    caption: 'Seminar opening address | Institutional Collaboration | Karnataka',
    tag: 'Speaker Address',
    requiredPhoto: 'Wide auditorium or classroom view',
    isDummy: false,
  },
  {
    id: 'IMG-10',
    src: gallImg10,
    alt: 'Post-session student discussion exploring academic and vocational pathways.',
    caption: 'Career-awareness session | Campus Discussion | Karnataka',
    tag: 'Student Discussion',
    requiredPhoto: 'Student discussion after the session',
    isDummy: false,
  },
  {
    id: 'IMG-11',
    src: gallImg11,
    alt: 'Speaker introduction and opening notes for an institutional capability workshop.',
    caption: 'Career-awareness session | Inaugural Address | Bengaluru',
    tag: 'Speaker Introduction',
    requiredPhoto: 'Seminar opening or speaker introduction',
    isDummy: false,
  },
  {
    id: 'IMG-12',
    src: gallImg12,
    alt: 'Department-focused student interaction aligning curriculum with industry skills.',
    caption: 'Career-awareness session | Departmental Engagement | Karnataka',
    tag: 'Department Session',
    requiredPhoto: 'Department-specific student engagement',
    isDummy: false,
  },
  {
    id: 'IMG-13',
    src: gallImg13,
    alt: 'Faculty coordinators and institutional leadership participating in a guidance session.',
    caption: 'Career-awareness session | Faculty & Coordinator Interaction | Bengaluru',
    tag: 'Faculty Interaction',
    requiredPhoto: 'Faculty participating in a session',
    isDummy: false,
  },
  {
    id: 'IMG-14',
    src: gallImg14,
    alt: 'Small-group counselling session focusing on student aspirations and goal setting.',
    caption: 'Career-awareness session | Focused Group Counselling | Karnataka',
    tag: 'Small-Group Guidance',
    requiredPhoto: 'Counselling or small-group guidance',
    isDummy: false,
  },
  {
    id: 'IMG-15',
    src: gallImg15,
    alt: 'Audience response and student participation during a career presentation.',
    caption: 'Career-awareness session | Student Interaction | Bengaluru',
    tag: 'Audience Response',
    requiredPhoto: 'Student response or audience participation',
    isDummy: false,
  },
  {
    id: 'IMG-16',
    src: gallImg16,
    alt: 'Photograph of career-awareness session conducted at partner institution.',
    caption: 'Career-awareness session | Partner Institution Engagement | Karnataka',
    tag: 'Institutional Session',
    requiredPhoto: 'Session at another institution',
    isDummy: false,
  },
  {
    id: 'IMG-17',
    src: gallImg17,
    alt: 'Webinar delivery photograph connecting remote campuses with expert speakers.',
    caption: 'Interactive Webinar Session | Online Delivery | Bengaluru',
    tag: 'Webinar Delivery',
    requiredPhoto: 'Webinar delivery photograph',
    isDummy: false,
  },
  {
    id: 'IMG-18',
    src: gallImg18,
    alt: 'Discussion with college career and placement cell leadership regarding skill readiness.',
    caption: 'Placement Cell Interaction | Career Readiness Review | Karnataka',
    tag: 'Placement Cell',
    requiredPhoto: 'Career or placement-cell interaction',
    isDummy: false,
  },
  {
    id: 'IMG-19',
    src: gallImg19,
    alt: 'Group photograph with participating students, faculty coordinators and speaker.',
    caption: 'Campus Engagement Commemoration | Group Photograph | Bengaluru',
    tag: 'Group Commemoration',
    requiredPhoto: 'Group photograph with students and faculty',
    isDummy: false,
  },
  {
    id: 'IMG-20',
    src: gallImg20,
    alt: 'Closing moments and vote of thanks for institutional career guidance programme.',
    caption: 'Closing Campus Session | Programme Conclusion | Karnataka',
    tag: 'Closing Session',
    requiredPhoto: 'Closing campus engagement photograph',
    isDummy: false,
  },
  {
    id: 'IMG-21',
    src: gallImg21,
    alt: 'Student cohort interaction and interactive career mapping session.',
    caption: 'Student Cohort Interaction | Campus Capability Session | Bengaluru',
    tag: 'Cohort Interaction',
    requiredPhoto: 'Interactive cohort discussion',
    isDummy: false,
  },
  {
    id: 'IMG-22',
    src: gallImg22,
    alt: 'Active student Q&A discussing course selection and industry expectations.',
    caption: 'Interactive Career Q&A | Student Engagement | Karnataka',
    tag: 'Student Discussion',
    requiredPhoto: 'Active career Q&A',
    isDummy: false,
  },
  {
    id: 'IMG-23',
    src: gallImg23,
    alt: 'Institutional planning meeting with college management and career coordinators.',
    caption: 'Institutional Planning | College Leadership Session | Bengaluru',
    tag: 'Leadership Meeting',
    requiredPhoto: 'Institutional management planning',
    isDummy: false,
  },
  {
    id: 'IMG-24',
    src: gallImg24,
    alt: 'Auditorium guidance assembly on career opportunities and skill readiness.',
    caption: 'Campus Guidance Assembly | Career Orientation | Karnataka',
    tag: 'Auditorium Assembly',
    requiredPhoto: 'Campus guidance assembly',
    isDummy: false,
  },
];

const FOCUS_AREAS = [
  {
    id: 'technology',
    title: 'Technology and Digital Skills',
    icon: Laptop,
    accent: 'bg-navy-900 text-gold-400',
    desc: 'Build capabilities in emerging technologies, software development and digital applications through focused programmes that connect technical concepts with workplace use.',
    buttonText: 'Enquire About These Programmes',
    courses: [
      'Generative Artificial Intelligence (Gen AI)',
      'Artificial Intelligence',
      'Cloud Computing',
      'Data Analytics',
      'Robotic Process Automation (RPA)',
      'Java Software Developer',
      'Python Web Developer',
      'Software Test Engineer',
      'UI Developer',
    ],
  },
  {
    id: 'banking',
    title: 'Banking and Business Accounting',
    icon: Building2,
    accent: 'bg-navy-900 text-gold-400',
    desc: 'Develop an understanding of banking services and business accounting processes, with learning pathways relevant to financial services and business support roles.',
    buttonText: 'Enquire About These Programmes',
    courses: [
      'Premier Banker',
      'Business Accounting Process Executive',
    ],
  },
  {
    id: 'marketing',
    title: 'Entrepreneurship, Digital Marketing and Commerce',
    icon: Megaphone,
    accent: 'bg-navy-900 text-gold-400',
    desc: 'Explore business creation, digital outreach and commerce operations through programmes focused on entrepreneurial thinking, customer engagement and team leadership.',
    buttonText: 'Enquire About These Programmes',
    courses: [
      'Entrepreneurship Development Training',
      'Digital Marketing',
      'E-Commerce Team Leader',
      'Retail Team Leader',
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics and Warehouse Operations',
    icon: Truck,
    accent: 'bg-navy-900 text-gold-400',
    desc: 'Build an understanding of logistics coordination, warehouse workflows and supervisory responsibilities relevant to day-to-day operational efficiency.',
    buttonText: 'Enquire About This Programme',
    courses: [
      'Logistics Warehouse Supervisor',
    ],
  },
];

const INSTITUTIONAL_NEEDS_STEPS = [
  'Identification of relevant training areas',
  'Career-awareness and programme-orientation sessions',
  'Student interest mapping and counselling',
  'Coordination of programme proposals and onboarding',
  'Scheduling and stakeholder communication',
  'Participation updates and agreed progress reviews',
];

export default function TrainingDevelopmentPage() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(null);
  const lastActiveElementRef = useRef(null);

  // Initial visible photos count
  const visiblePhotos = showAllPhotos ? GALLERY_PHOTOS : GALLERY_PHOTOS.slice(0, 6);

  // Lightbox keyboard navigation (Escape, Left, Right)
  useEffect(() => {
    if (selectedPhotoIdx === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIdx((prev) => (prev + 1) % GALLERY_PHOTOS.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIdx((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIdx]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (selectedPhotoIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhotoIdx]);

  const openLightbox = (index) => {
    lastActiveElementRef.current = document.activeElement;
    setSelectedPhotoIdx(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIdx(null);
    if (lastActiveElementRef.current && lastActiveElementRef.current.focus) {
      lastActiveElementRef.current.focus();
    }
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIdx((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIdx((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  // State for Course Enquiry Form (from developer brief)
  const [enquiryData, setEnquiryData] = useState({
    institutionName: '',
    contactPerson: '',
    designation: '',
    email: '',
    mobile: '',
    categoryCourse: '',
    requirements: '',
    consent: true,
    website: '', // honeypot
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    documentId: null,
  });

  const [lastSubmissionAt, setLastSubmissionAt] = useState(0);
  const SUBMISSION_COOLDOWN_MS = 10000;

  const handleEnquireCategory = (categoryTitle) => {
    setEnquiryData((prev) => ({
      ...prev,
      categoryCourse: `${categoryTitle} (All / General)`,
    }));
    const el = document.getElementById('enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEnquiryData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formStatus.submitting) return;

    if (enquiryData.website.trim()) {
      setFormStatus({ submitting: false, submitted: true, error: null, documentId: null });
      return;
    }

    if (Date.now() - lastSubmissionAt < SUBMISSION_COOLDOWN_MS) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Please wait a moment before submitting another enquiry.',
        documentId: null,
      });
      return;
    }

    if (!enquiryData.consent) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Please accept the consent checkbox to submit your requirements.',
        documentId: null,
      });
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null, documentId: null });

    try {
      if (!isFirebaseConfigured) {
        throw new Error(
          'Database service is currently unconfigured. Please ensure environment variables are present in .env.'
        );
      }

      const requirementDetails = enquiryData.requirements.trim()
        ? `[Domain: ${enquiryData.categoryCourse || 'General'}] ${enquiryData.requirements.trim()}`
        : `[Domain: ${enquiryData.categoryCourse || 'General'}] Training & Development Consultation Request`;

      const result = await submitAppointmentRequest({
        institutionName: enquiryData.institutionName.trim(),
        representativeName: enquiryData.contactPerson.trim(),
        designation: enquiryData.designation.trim(),
        officialEmail: enquiryData.email.trim().toLowerCase(),
        telephone: enquiryData.mobile.trim(),
        location: 'Campus / Academic Centre',
        primaryRequirement: enquiryData.categoryCourse || 'Training & Development Enquiry',
        requirement: requirementDetails,
        consent: Boolean(enquiryData.consent),
        institutionType: 'College',
        discussionFormat: 'Training & Development Programme Consultation',
      });

      trackMetaLead();
      setLastSubmissionAt(Date.now());

      setFormStatus({
        submitting: false,
        submitted: true,
        error: null,
        documentId: result?.id || null,
      });
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error('Training requirements submission error:', err);
      }

      let errorMessage = 'Unable to submit your requirements at this time. Please try again or contact us directly at connect@civiora.co.in.';
      if (err?.code === 'permission-denied') {
        errorMessage = 'Submission was rejected due to permission constraints. Please verify all required fields and try again.';
      } else if (err?.code === 'unavailable') {
        errorMessage = 'Database service is temporarily unavailable. Please check your network connection and try again.';
      }

      setFormStatus({
        submitting: false,
        submitted: false,
        error: errorMessage,
        documentId: null,
      });
    }
  };

  // Structured Data (JSON-LD) for SEO Rich Snippets
  const trainingStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Civiora Education & Institutional Services',
    url: 'https://civiora.co.in/training-development',
    description: 'Civiora connects colleges, universities and organisations with specialist training partners to support student skill development, career awareness and institutional capability building.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Training & Development Learning Domains',
      itemListElement: FOCUS_AREAS.map((cat, idx) => ({
        '@type': 'OfferCatalog',
        name: cat.title,
        position: idx + 1,
        itemListElement: cat.courses.map((course, cIdx) => ({
          '@type': 'Course',
          name: course,
          position: cIdx + 1,
          description: `${course} curated through specialist training partners via Civiora institutional collaboration.`,
          provider: {
            '@type': 'Organization',
            name: 'Civiora Specialist Training Partners',
          },
        })),
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white text-ink font-body selection:bg-gold-200 selection:text-navy-900">
      <SEO
        title="Training & Development | Civiora"
        description="Civiora connects institutions with specialist training partners for skill development, career awareness and coordinated student learning pathways."
        preloadImage={h1BannerDesktop}
        preloadMobileImage={h1BannerMobile}
        structuredData={trainingStructuredData}
      />

      {/* -------------------------------------------------------------------------
          1. HERO HEADER (Matching Screenshot 3 PageHeader Component Reference)
          ------------------------------------------------------------------------- */}
      <PageHeader
        h1="Training and Development"
        openingHeadline="Connecting Academic Learning with Workplace Skills"
        subtitle="Civiora's Training & Development vertical connects colleges, universities and organisations with specialist training partners to support skill development and career readiness."
        breadcrumbText="Training & Development"
        image={h1BannerDesktop}
        mobileImage={h1BannerMobile}
        imageAlt="Poovendhan Anbarasu, Founder & CEO of Civiora, addressing students and faculty during an institutional career and skill awareness session."
        imagePosition="object-[85%_50%] sm:object-[85%_52%] md:object-[85%_55%] lg:object-[85%_55%]"
      />

      {/* -------------------------------------------------------------------------
          2. INSTITUTIONAL TRAINING
          Desktop: IMG-02 beside copy | Mobile: IMG-02 below copy
          ------------------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-navy-100/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="eyebrow">Institutional Engagement</span>
                <h2 className="section-heading mt-2">Institutional Training</h2>
                <div className="gold-rule mt-4" />
              </div>

              <div className="space-y-4 text-navy-700 text-base md:text-lg leading-relaxed text-justify-prose">
                <p>
                  Every campus brings together students with different strengths, interests and career goals. Relevant training begins with understanding these differences.
                </p>
                <p>
                  Civiora works with institutional management, departments and career or placement cells to identify suitable skill development opportunities. Through awareness sessions, interest mapping and counselling, we help students understand available pathways before choosing a programme.
                </p>
                <p className="font-medium text-navy-900">
                  Our institutional engagements connect academic learning with practical workplace requirements through programmes delivered by specialist training partners.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-navy-800 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                  <span>Aligned with campus calendar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                  <span>Student aspiration mapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                  <span>Specialist training providers</span>
                </div>
              </div>
            </div>

            {/* IMG-02: Beside copy on desktop, below on mobile */}
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <SpotlightCard className="rounded-3xl overflow-hidden bg-mist border border-navy-100 shadow-lg group">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-navy-900">
                    <img
                      src={sec2Img}
                      alt="Poovendhan Anbarasu interacting directly with students to discuss skill development and career readiness."
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-4 sm:p-5 bg-white border-t border-navy-100">
                    <p className="text-xs sm:text-sm text-navy-700 leading-snug font-medium">
                      Student interactive mentoring • Discussing pathways and readiness
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          3. EXPLORE OUR TRAINING PROGRAMMES (LEARNING DOMAINS)
          Category-wise course information from developer brief
          ------------------------------------------------------------------------- */}
      <section id="training-programmes" className="py-16 sm:py-20 md:py-24 bg-mist/60 border-b border-navy-100/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="eyebrow">Learning Domains</span>
            <h2 className="section-heading mt-2">Programmes That Connect Learning with Opportunity</h2>
            <div className="gold-rule mx-auto mt-4" />
            <p className="mt-4 text-navy-700 text-base sm:text-lg leading-relaxed text-center">
              Help students explore emerging technologies, develop business capabilities and prepare for workplace responsibilities. Civiora connects institutions with specialist training partners to coordinate programmes aligned with learner needs and institutional priorities.
            </p>
          </div>

          {/* 4 Category Cards in 2-Column Desktop Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {FOCUS_AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={idx * 80} className="flex h-full">
                  <SpotlightCard className="flex flex-col justify-between w-full rounded-2xl p-6 sm:p-8 bg-white border border-navy-100 shadow-sm hover:border-gold-400 hover:shadow-lg transition-all duration-300 group">
                    <div>
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${area.accent} shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0`}>
                          <Icon size={24} />
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                          {area.title}
                        </h3>
                      </div>

                      <p className="text-navy-700 text-sm sm:text-base leading-relaxed text-justify-prose">
                        {area.desc}
                      </p>

                      {/* Complete Course List as readable bullet points */}
                      <div className="mt-5 pt-4 border-t border-navy-100/80">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-navy-500 block mb-3">
                          {area.courses.length === 1 ? 'Programme — 1 Course' : `Programmes — ${area.courses.length} Courses`}
                        </span>
                        <ul className="space-y-2.5">
                          {area.courses.map((course) => (
                            <li key={course} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-900">
                              <CheckCircle2 size={15} className="text-gold-600 shrink-0 mt-0.5" />
                              <span className="font-medium leading-snug">{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action: Enquire button (NO arrow mark) */}
                    <div className="mt-6 pt-5 border-t border-navy-100/80">
                      <button
                        type="button"
                        onClick={() => handleEnquireCategory(area.title)}
                        className="w-full py-2.5 px-4 rounded-xl text-center text-xs sm:text-sm font-semibold text-navy-900 bg-gold-50/80 hover:bg-gold-500 hover:text-navy-950 border border-gold-300/70 transition-all duration-200 shadow-sm active:scale-98"
                      >
                        {area.buttonText || (area.courses.length === 1 ? 'Enquire About This Programme' : 'Enquire About These Programmes')}
                      </button>
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>

          {/* Details Note & Supporting Details below category cards */}
          <div className="mt-10 sm:mt-12 max-w-2xl mx-auto text-center space-y-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide border border-navy-800 shadow-sm">
              <Clock size={15} className="text-gold-400" />
              <span>Programme Details Available on Enquiry</span>
            </div>
            <p className="text-xs text-navy-600 leading-relaxed italic">
              Programme availability, eligibility, duration, delivery mode and schedules will be confirmed in consultation with the institution and the respective training partner.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          4. CAREER AWARENESS AND STUDENT DEVELOPMENT
          Paired image row (IMG-03 and IMG-04) below copy, stacked on mobile
          ------------------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-navy-100/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
          <div className="w-full space-y-5 mb-10 sm:mb-14">
            <span className="eyebrow">Student Mentorship</span>
            <h2 className="section-heading mt-2">Career Awareness and Student Development</h2>
            <div className="gold-rule mt-4" />

            <div className="space-y-4 text-navy-700 text-base md:text-lg leading-relaxed text-justify-prose">
              <p className="font-medium text-navy-900">
                An informed choice is the first step towards meaningful skill development.
              </p>
              <p>
                Civiora facilitates seminars, webinars and interactive campus sessions that introduce students to career opportunities and the skills associated with different professional pathways. These engagements encourage students to assess their interests, ask questions and make purposeful decisions about further learning.
              </p>
              <p>
                Sessions led by Poovendhan Anbarasu, Founder &amp; CEO, Civiora, bring career guidance and student interaction into the institutional engagement process.
              </p>
            </div>
          </div>

          {/* Paired Image Row: IMG-03 and IMG-04 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Reveal delay={100}>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-mist border border-navy-100 shadow-md group">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                  <img
                    src={sec4Img03}
                    alt="Speaker presenting career pathways and skills on presentation screen to students."
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-4 sm:p-5 bg-white border-t border-navy-100">
                  <p className="text-xs sm:text-sm text-navy-800 font-medium leading-snug">
                    Speaker presentation • Introducing career pathways and professional opportunities
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-mist border border-navy-100 shadow-md group">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                  <img
                    src={sec4Img04}
                    alt="Students actively participating, asking questions, and engaging during a guidance session."
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-4 sm:p-5 bg-white border-t border-navy-100">
                  <p className="text-xs sm:text-sm text-navy-800 font-medium leading-snug">
                    Student Q&amp;A • Active questions, interest exploration and constructive interaction
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          5. TRAINING PLANNED AROUND INSTITUTIONAL NEEDS
          Beside section: IMG-05 (Discussion with institutional representatives)
          ------------------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 md:py-24 bg-mist/50 border-b border-navy-100/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Copy & Process List */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="eyebrow">Structured Delivery</span>
                <h2 className="section-heading mt-2">Training Planned Around Institutional Needs</h2>
                <div className="gold-rule mt-4" />
              </div>

              <div className="space-y-4 text-navy-700 text-base md:text-lg leading-relaxed text-justify-prose">
                <p>
                  Training requirements differ across departments, student groups and institutions. Civiora begins each engagement with a discussion of the intended audience, learning priorities and practical delivery requirements.
                </p>
                <p className="font-semibold text-navy-900">
                  In coordination with the institution and training partner, the engagement may include:
                </p>
              </div>

              {/* Step Checklist with Glare Hover Effect */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {INSTITUTIONAL_NEEDS_STEPS.map((step, idx) => (
                  <div
                    key={step}
                    className="glare-card group flex items-start gap-3 p-3.5 rounded-xl bg-white border border-navy-100 shadow-sm cursor-pointer select-none"
                  >
                    <span className="relative z-10 w-6 h-6 rounded-full bg-gold-500/15 text-gold-700 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold transition-colors duration-300 shadow-xs">
                      {idx + 1}
                    </span>
                    <span className="relative z-10 text-xs sm:text-sm text-navy-800 group-hover:text-navy-950 font-medium leading-relaxed transition-colors duration-200">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="glare-card pt-2 text-xs sm:text-sm text-navy-600 bg-white/70 hover:bg-white p-4 rounded-xl border border-navy-100/80 leading-relaxed italic cursor-pointer transition-all duration-300">
                <span className="relative z-10">
                  Programme duration, delivery mode, assessments and certification arrangements are specified in the relevant programme proposal.
                </span>
              </div>
            </div>

            {/* Right Column: IMG-05 (Institutional representatives discussion) */}
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <SpotlightCard className="rounded-3xl overflow-hidden bg-white border border-navy-100 shadow-lg group">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-navy-900">
                    <img
                      src={sec5Img}
                      alt="Discussion and planning with institutional leaders and department coordinators."
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-4 sm:p-5 bg-white border-t border-navy-100">
                    <p className="text-xs sm:text-sm text-navy-800 font-medium leading-snug">
                      Institutional collaboration • Discussion with college and university leadership
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          6. INDUSTRY AND ORGANISATIONAL ENGAGEMENTS
          7. CIVIORA'S ROLE (Two-column layout side-by-side)
          ------------------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-navy-100/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* 6. Industry & Organisational Engagements */}
            <Reveal delay={60} className="flex h-full">
              <SpotlightCard className="flex flex-col justify-between w-full rounded-3xl p-7 sm:p-10 bg-mist/60 border border-navy-100 shadow-sm hover:border-gold-400 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-md">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span className="eyebrow">Enterprise &amp; Industry</span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
                      Industry and Organisational Engagements
                    </h2>
                    <div className="gold-rule mt-3" />
                  </div>
                  <div className="space-y-3.5 text-navy-700 text-sm sm:text-base leading-relaxed text-justify-prose">
                    <p>
                      The vertical also provides a route for organisations to discuss role-specific training requirements across the technology and business areas outlined above.
                    </p>
                    <p>
                      Civiora facilitates requirement discussions and connections with relevant training specialists, with the scope of each engagement established around the organisation’s needs.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* 7. Civiora's Role */}
            <Reveal delay={120} className="flex h-full">
              <SpotlightCard className="flex flex-col justify-between w-full rounded-3xl p-7 sm:p-10 bg-navy-950 text-white border border-gold-400/30 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center shadow-md">
                    <Workflow size={24} />
                  </div>
                  <div>
                    <span className="eyebrow-dark">Interface &amp; Governance</span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                      Civiora’s Role
                    </h2>
                    <div className="gold-rule mt-3" />
                  </div>
                  <div className="space-y-3.5 text-navy-100 text-sm sm:text-base leading-relaxed text-justify-prose">
                    <p>
                      Civiora serves as the institutional interface throughout the engagement—bringing together campus requirements, student aspirations and relevant training expertise.
                    </p>
                    <p>
                      We facilitate institutional discussions, awareness activities, counselling, programme onboarding and coordination. Specialist training partners undertake programme delivery, assessment and certification as agreed for the selected programme.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gold-300 font-semibold tracking-wider uppercase flex items-center gap-2">
                  <ShieldCheck size={16} />
                  <span>Single Interface for Governance &amp; Coordination</span>
                </div>
              </SpotlightCard>
            </Reveal>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          8. CAMPUS SEMINARS AND STUDENT ENGAGEMENT (GALLERY)
          3 cols desktop, 2 cols tablet, 1-2 cols mobile
          Lightbox with previous/next controls, close button, escape key, focus management
          ------------------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 md:py-24 bg-mist/40 border-b border-navy-100/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="eyebrow">Engagement Gallery</span>
            <h2 className="section-heading mt-2">Campus Seminars and Student Engagement</h2>
            <div className="gold-rule mx-auto mt-4" />
            <p className="mt-4 text-navy-700 text-base md:text-lg leading-relaxed">
              Explore moments from career-awareness sessions, institutional interactions and student discussions led by Poovendhan Anbarasu.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {visiblePhotos.map((photo, idx) => (
              <Reveal key={photo.id} delay={idx * 50} className="flex h-full">
                <button
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className={`w-full text-left rounded-2xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                    photo.isDummy
                      ? 'border-gold-400/40 hover:border-gold-400 hover:shadow-xl bg-gradient-to-b from-white to-mist'
                      : 'border-navy-100 shadow-sm hover:shadow-xl hover:border-gold-400'
                  }`}
                  aria-label={`View photo ${photo.id}: ${photo.caption}`}
                >
                  {/* Photo Thumbnail or Fallback */}
                  {photo.isDummy ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 flex flex-col items-center justify-center p-6 text-center border-b border-navy-800 group-hover:from-navy-900 group-hover:to-navy-950 transition-colors">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-gold-400/30 text-gold-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-gold-400 transition-all duration-300">
                        <Camera size={22} />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-gold-300 tracking-wider uppercase mb-1">
                        {photo.id}
                      </span>
                      <p className="text-xs text-white/90 font-semibold line-clamp-2 px-2">
                        {photo.requiredPhoto}
                      </p>
                      <span className="text-[10px] text-white/60 mt-2.5 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10 font-medium">
                        Session Archive Preview
                      </span>

                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-semibold bg-gold-500/20 text-gold-300 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-gold-400/30">
                          {photo.tag}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-300" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-mono font-bold bg-navy-950/80 text-gold-300 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                          {photo.id}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="text-[11px] font-semibold bg-navy-950/80 text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          {photo.tag}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                    <div>
                      {photo.isDummy && (
                        <p className="text-[11px] text-gold-700 font-semibold uppercase tracking-wider mb-1">
                          Engagement Focus: {photo.requiredPhoto}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm font-medium text-navy-800 leading-snug group-hover:text-navy-950 transition-colors">
                        {photo.caption}
                      </p>
                    </div>

                    <div className="mt-3 text-[11px] text-gold-700 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Click to enlarge</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* "View More Photos" Toggle Button */}
          {GALLERY_PHOTOS.length > 6 && (
            <div className="text-center mt-10 sm:mt-12">
              <button
                type="button"
                onClick={() => setShowAllPhotos(!showAllPhotos)}
                className="btn-secondary px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase inline-flex items-center gap-2 shadow-sm"
              >
                <span>{showAllPhotos ? 'Show Fewer Photos' : `View More Photos (${GALLERY_PHOTOS.length - 6} more)`}</span>
                <ChevronRight size={16} className={`transition-transform duration-300 ${showAllPhotos ? '-rotate-90' : 'rotate-90'}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          9. ENQUIRY & CONSULTATION SECTION
          Closing copy and enquiry form from developer brief
          ------------------------------------------------------------------------- */}
      <section id="enquiry-section" className="py-16 sm:py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
        <WaveCanvas opacity={0.25} />
        <AmbientShapes />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="eyebrow-dark">Programme Consultation</span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Identify the Right Programmes for Your Institution
            </h2>

            <div className="gold-rule mx-auto" />

            <p className="text-navy-100 text-base sm:text-lg leading-relaxed text-center">
              Connect with Civiora to discuss your students’ learning needs and explore suitable training programmes through our specialist education partners.
            </p>
          </div>

          {/* Interactive Enquiry Card */}
          <div className="bg-white text-navy-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/20">
            {formStatus.submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-950">
                  Enquiry Received
                </h3>
                <p className="text-navy-700 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Thank you for connecting with Civiora. Our institutional coordination team will review your training requirements and follow up with you promptly.
                </p>
                {formStatus.documentId && (
                  <p className="text-xs text-navy-600 font-mono pt-1">
                    Reference ID: {formStatus.documentId}
                  </p>
                )}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setEnquiryData({
                        institutionName: '',
                        contactPerson: '',
                        designation: '',
                        email: '',
                        mobile: '',
                        categoryCourse: '',
                        requirements: '',
                        consent: true,
                        website: '',
                      });
                      setFormStatus({ submitting: false, submitted: false, error: null, documentId: null });
                    }}
                    className="btn-secondary text-xs sm:text-sm px-6 py-2.5 rounded-full"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Honeypot field (hidden from legitimate users) */}
                <input
                  type="text"
                  id="training-honeypot"
                  name="website"
                  aria-label="Do not fill this field"
                  value={enquiryData.website}
                  onChange={handleFormChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {formStatus.error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm">
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
                    <span>{formStatus.error}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Institution Name */}
                  <div>
                    <label htmlFor="institutionName" className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
                      Institution Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="institutionName"
                      name="institutionName"
                      required
                      value={enquiryData.institutionName}
                      onChange={handleFormChange}
                      placeholder="e.g. Government Degree College"
                      className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 text-navy-950"
                    />
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label htmlFor="contactPerson" className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      required
                      value={enquiryData.contactPerson}
                      onChange={handleFormChange}
                      placeholder="e.g. Prof. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 text-navy-950"
                    />
                  </div>

                  {/* Designation */}
                  <div>
                    <label htmlFor="designation" className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      required
                      value={enquiryData.designation}
                      onChange={handleFormChange}
                      placeholder="e.g. Head of Placements / Principal"
                      className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 text-navy-950"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
                      Official Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={enquiryData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. placements@college.edu.in"
                      className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 text-navy-950"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label htmlFor="mobile" className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      value={enquiryData.mobile}
                      onChange={handleFormChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 text-navy-950"
                    />
                  </div>

                  {/* Category / Course of Interest */}
                  <div>
                    <label htmlFor="categoryCourse" className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
                      Category / Course of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="categoryCourse"
                      name="categoryCourse"
                      required
                      value={enquiryData.categoryCourse}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 text-navy-950 bg-white"
                    >
                      <option value="">Select Category or Course</option>
                      <option value="General Institutional Consultation (All Categories)">General Institutional Consultation (All Domains)</option>
                      
                      <optgroup label="Technology and Digital Skills">
                        <option value="Technology and Digital Skills (All / General)">Technology and Digital Skills (General Domain)</option>
                        <option value="Generative Artificial Intelligence (Gen AI)">Generative Artificial Intelligence (Gen AI)</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Robotic Process Automation (RPA)">Robotic Process Automation (RPA)</option>
                        <option value="Java Software Developer">Java Software Developer</option>
                        <option value="Python Web Developer">Python Web Developer</option>
                        <option value="Software Test Engineer">Software Test Engineer</option>
                        <option value="UI Developer">UI Developer</option>
                      </optgroup>

                      <optgroup label="Banking and Business Accounting">
                        <option value="Banking and Business Accounting (All / General)">Banking and Business Accounting (General Domain)</option>
                        <option value="Premier Banker">Premier Banker</option>
                        <option value="Business Accounting Process Executive">Business Accounting Process Executive</option>
                      </optgroup>

                      <optgroup label="Entrepreneurship, Digital Marketing and Commerce">
                        <option value="Entrepreneurship, Digital Marketing and Commerce (All / General)">Entrepreneurship, Digital Marketing and Commerce (General Domain)</option>
                        <option value="Entrepreneurship Development Training">Entrepreneurship Development Training</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="E-Commerce Team Leader">E-Commerce Team Leader</option>
                        <option value="Retail Team Leader">Retail Team Leader</option>
                      </optgroup>

                      <optgroup label="Logistics and Warehouse Operations">
                        <option value="Logistics and Warehouse Operations (All / General)">Logistics and Warehouse Operations (General Domain)</option>
                        <option value="Logistics Warehouse Supervisor">Logistics Warehouse Supervisor</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Requirements Textarea */}
                <div>
                  <label htmlFor="requirements" className="block text-xs font-semibold uppercase tracking-wider text-navy-800 mb-1.5">
                    Specific Training Requirements &amp; Batch Context
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    value={enquiryData.requirements}
                    onChange={handleFormChange}
                    placeholder="Describe your student cohort, preferred semester/timings, or learning priorities..."
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 text-navy-950 resize-y"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={enquiryData.consent}
                    onChange={handleFormChange}
                    className="mt-1 w-4 h-4 text-gold-600 rounded border-navy-300 focus:ring-gold-500"
                    required
                  />
                  <label htmlFor="consent" className="text-xs text-navy-700 leading-relaxed">
                    I authorise Civiora to contact me regarding institutional training partnerships, course curriculum specifications and collaboration scheduling.
                  </label>
                </div>

                {/* Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-full shadow-lg inline-flex items-center justify-center gap-2 font-semibold text-sm disabled:opacity-60"
                  >
                    <span>{formStatus.submitting ? 'Submitting Requirements...' : 'Discuss Training Requirements'}</span>
                    <Send size={15} />
                  </button>

                  <p className="text-xs text-navy-500 font-medium">
                    Civiora connects institutions with verified specialist training partners.
                  </p>
                </div>

                {/* Mandatory Supporting Note from Brief */}
                <p className="text-xs text-navy-600 pt-3 border-t border-navy-100 italic leading-relaxed">
                  Programme availability, eligibility, duration, delivery mode and schedules will be confirmed in consultation with the institution and the respective training partner.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          LIGHTBOX MODAL (Enlarged Photo Viewer)
          ------------------------------------------------------------------------- */}
      {selectedPhotoIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photograph viewer"
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 select-none animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            <X size={24} aria-hidden="true" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={prevPhoto}
            aria-label="Previous photograph"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextPhoto}
            aria-label="Next photograph"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>

          {/* Central Modal Content */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {GALLERY_PHOTOS[selectedPhotoIdx].isDummy ? (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-400/40 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-8 sm:p-12 text-center max-w-lg flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-3xl bg-gold-500/10 border border-gold-400/40 text-gold-400 flex items-center justify-center mb-4 shadow-inner">
                  <Camera size={32} />
                </div>
                <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-widest bg-gold-500/15 px-3 py-1 rounded-full border border-gold-400/30 mb-3">
                  {GALLERY_PHOTOS[selectedPhotoIdx].id} • Session Archive
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  {GALLERY_PHOTOS[selectedPhotoIdx].requiredPhoto}
                </h3>
                <p className="text-sm text-navy-200 max-w-md mb-4 leading-relaxed">
                  {GALLERY_PHOTOS[selectedPhotoIdx].alt}
                </p>
                <div className="text-xs text-navy-300 bg-white/5 p-3 rounded-xl border border-white/10 font-mono">
                  {GALLERY_PHOTOS[selectedPhotoIdx].caption}
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-navy-900 max-h-[70vh] flex items-center justify-center">
                <img
                  src={GALLERY_PHOTOS[selectedPhotoIdx].src}
                  alt={GALLERY_PHOTOS[selectedPhotoIdx].alt}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>
            )}

            {/* Caption & Counter Bar */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <p className="text-sm sm:text-base text-white font-medium">
                {GALLERY_PHOTOS[selectedPhotoIdx].caption}
              </p>
              <p className="text-xs text-gold-400 mt-1 font-mono">
                Photo {selectedPhotoIdx + 1} of {GALLERY_PHOTOS.length} • {GALLERY_PHOTOS[selectedPhotoIdx].id} ({GALLERY_PHOTOS[selectedPhotoIdx].tag})
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

