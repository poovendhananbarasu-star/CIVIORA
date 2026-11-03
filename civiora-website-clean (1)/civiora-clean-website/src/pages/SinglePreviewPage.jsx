import { useState } from 'react';
import SEO from '../components/SEO';
import InstitutionalLeadForm from '../components/InstitutionalLanding/InstitutionalLeadForm';
import IntroVideoModal from '../components/InstitutionalLanding/IntroVideoModal';
import HowCivioraWorksInfographic from '../components/InstitutionalLanding/HowCivioraWorksInfographic';
import WaveCanvas from '../components/effects/WaveCanvas';
import AmbientShapes from '../components/effects/AmbientShapes';
import SpotlightCard from '../components/effects/SpotlightCard';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';

import About from '../components/About';
import Ecosystem from '../components/Ecosystem';
import HowItWorks from '../components/HowItWorks';
import WhyCiviora from '../components/WhyCiviora';
import Founder from '../components/Founder';
import FinalCTA from '../components/FinalCTA';

import schoolImg from '../assets/selected-client-images/P02-Schools-partnership.png';
import collegeImg from '../assets/selected-client-images/P03-College-partnership.png';
import universityCampusImg from '../assets/selected-client-images/P04-University-partnership.png';
import videoThumbImg from '../assets/selected-client-images/HO1-Civiora-Website-Main-Page-Hero.png';
import schoolsCardImg from '../assets/selected-client-images/H03-Schools-card.png';
import collegesCardImg from '../assets/selected-client-images/H04-Colleges-card-Undergraduate-students.png';
import universitiesCardImg from '../assets/selected-client-images/H05-Universities.png';
import logoWhite from '../assets/civiora-logo-white-lockup.png';

import {
  Sparkles,
  Play,
  ArrowRight,
  GraduationCap,
  Building2,
  Building,
  Landmark,
  BookOpen,
  Target,
  Compass,
  CalendarCheck,
  CheckCircle2,
  Users,
  Workflow,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SECTIONS = [
  { id: 'sec-landing-hero', label: 'Home' },
  { id: 'sec-landing-solutions', label: 'Realities & Solutions' },
  { id: 'sec-about', label: 'About Civiora' },
  { id: 'sec-who-we-are', label: 'Who We Are' },
  { id: 'sec-why-civiora', label: 'Why Civiora' },
  { id: 'sec-founder', label: 'Founder & Leadership' },
  { id: 'sec-faq', label: 'FAQs' },
  { id: 'sec-contact', label: 'Consultation & Contact' },
];

const FAQS = [
  {
    q: 'Are engagements fixed or customizable?',
    a: 'No, engagements are never rigid. Scope, delivery arrangements, session formats, and review expectations are customized around each institution’s unique priorities and academic calendar.',
  },
  {
    q: 'Can Civiora work alongside existing campus guidance initiatives?',
    a: 'Yes. Civiora is designed to complement existing school counsellors, college career guidance cells, and placement teams without disrupting ongoing schedules.',
  },
  {
    q: 'How does an institutional partnership begin?',
    a: 'With a structured consultation to understand leadership priorities, student community context, and agreed implementation requirements.',
  },
  {
    q: 'Who manages student communication and appointments?',
    a: 'The designated institutional coordinator, Civiora advisory team, and external specialists follow an agreed framework to manage communication, appointments, and progress reviews.',
  },
  {
    q: 'How are student confidentiality and data handled?',
    a: 'Student information is handled confidentially with clear limits on collection and usage. Referrals for specialized counselling or external programmes are transparently communicated to parents without pressure.',
  },
  {
    q: 'What is Civiora’s role versus external service providers?',
    a: 'Civiora provides strategic consultation, requirement identification, specialist partner coordination, and progress reviews. Vetted specialist partners deliver the direct training, workshops, and coaching modules.',
  },
];

export default function SinglePreviewPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('sec-landing-hero');

  const scrollTo = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-mist text-ink font-body selection:bg-gold-200 selection:text-navy-900 pb-20">
      <SEO
        title="Institutional Partnerships Landing Page | Civiora"
        description="Civiora coordinates structured student development, Government Career Cells, and career guidance partnerships for schools, colleges, and universities."
      />

      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-40 bg-navy-950/95 backdrop-blur-md border-b border-white/10 py-2.5 px-4 shadow-lg">
        <div className="max-w-content mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <Link to="/" className="flex items-center shrink-0" aria-label="Civiora Home">
            <img src={logoWhite} alt="Civiora" className="h-7 sm:h-8 w-auto object-contain" />
          </Link>

          <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollTo(sec.id)}
                className={`min-h-[36px] sm:min-h-[32px] px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 shrink-0 inline-flex items-center justify-center ${
                  activeTab === sec.id
                    ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                    : 'text-navy-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {sec.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo('sec-contact')}
              className="hidden md:inline-flex btn-primary text-xs py-1.5 px-4 rounded-full whitespace-nowrap shrink-0 ml-1.5 shadow-sm"
            >
              Connect With Us
            </button>
          </div>
        </div>
      </div>

      <main id="main-content" className="space-y-16 sm:space-y-24">

        {/* 1. Institutional Landing: Hero & Consultation Portal */}
        <section id="sec-landing-hero" className="relative scroll-mt-20">

          {/* Hero with WaveCanvas */}
          <div className="relative overflow-hidden bg-gradient-to-b from-white via-mist to-mist py-10 sm:py-14 md:py-20 border-b border-navy-100/60">
            <WaveCanvas opacity={0.45} />
            <AmbientShapes />

            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-navy-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 relative z-10">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
                
                {/* Left Column: Hero Copy */}
                <div className="lg:col-span-7 space-y-6 md:space-y-7">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 text-gold-300 text-xs font-semibold tracking-wider uppercase shadow-sm">
                      <Sparkles size={13} className="text-gold-400" />
                      <span>For School, College &amp; University Leaders</span>
                    </div>

                    <h1 className="font-display text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-navy-900 font-bold leading-[1.18] tracking-tight text-left">
                      Your Students Have Aspirations. <br className="hidden sm:inline" />
                      <span className="text-gold-600">Does Your Campus Have a Clear Next Step?</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-navy-700 leading-relaxed text-left max-w-2xl">
                      Bring structured student development and career guidance to your institution—with suitable education partners and coordinated support from Civiora.
                    </p>
                  </div>

                  {/* Two Highlight Cards with 3D Tilt */}
                  <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
                    <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="w-9 h-9 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-3">
                        <GraduationCap size={20} className="text-gold-600" />
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-bold text-navy-900">
                        For Schools
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-600 mt-1 leading-relaxed">
                        Communication, reasoning, leadership and practical learning.
                      </p>
                    </SpotlightCard>

                    <SpotlightCard className="p-4 sm:p-5 rounded-2xl bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="w-9 h-9 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-3">
                        <Building2 size={20} className="text-gold-600" />
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-bold text-navy-900">
                        For Colleges &amp; Universities
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-600 mt-1 leading-relaxed">
                        Government Career Cells, career counselling and competitive examination pathways.
                      </p>
                    </SpotlightCard>
                  </div>

                  {/* Video Card with 3D Tilt */}
                  <div className="pt-2">
                    <SpotlightCard
                      onClick={() => setIsVideoOpen(true)}
                      className="group relative rounded-2xl overflow-hidden bg-navy-900 border border-navy-800 shadow-md cursor-pointer hover:border-gold-500/50 transition-all duration-300"
                      role="button"
                      tabIndex={0}
                      aria-label="Watch our 30-second introduction video"
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsVideoOpen(true)}
                      spotlightColor="rgba(0, 242, 254, 0.2)"
                    >
                      <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
                        <div className="relative w-full sm:w-44 h-32 sm:h-auto shrink-0 overflow-hidden bg-navy-950">
                          <img
                            src={videoThumbImg}
                            alt="Campus life thumbnail"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                          />
                          <div className="absolute inset-0 bg-navy-950/40 flex items-center justify-center">
                            <div className="w-11 h-11 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                              <Play size={18} className="ml-0.5 fill-current" />
                            </div>
                          </div>
                        </div>

                        <div className="p-4 sm:p-5 flex flex-col justify-center text-left">
                          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-gold-400" />
                            <span>30-Second Introduction</span>
                          </div>
                          <h4 className="font-display text-sm sm:text-base font-bold text-white mt-1 group-hover:text-gold-300 transition-colors">
                            How Civiora Works
                          </h4>
                          <p className="text-xs text-navy-200 mt-0.5 leading-relaxed">
                            Watch our 30-second introduction explaining the institutional partnership model.
                          </p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                </div>

                {/* Right Column: Lead Form */}
                <div className="lg:col-span-5 w-full">
                  <InstitutionalLeadForm selectedType="School" selectedRequirement="School Student Development" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Institutional Landing: Realities & Solutions Matrix */}
        <section id="sec-landing-solutions" className="relative scroll-mt-20">

          {/* Institutional Challenges */}
          <div className="py-14 sm:py-20 bg-white border-b border-navy-100">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="eyebrow">Institutional Realities</span>
                <h2 className="section-heading mt-3">Are These Challenges Familiar?</h2>
                <div className="gold-rule mx-auto mt-4" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                <SpotlightCard className="h-full rounded-3xl bg-mist border border-navy-100 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-navy-900">
                    <img src={schoolImg} alt="School students" loading="lazy" decoding="async" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="px-3 py-1 rounded-full bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider">
                        For Schools
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1.5">
                        Build Skills. Inspire Possibilities.
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-6">
                    <ul className="space-y-4 text-xs sm:text-sm text-navy-700 leading-relaxed">
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold-500 mt-1.5 shrink-0 ring-4 ring-gold-100" />
                        <span className="text-justify [text-justify:inter-word]">Students need more opportunities to build confidence, communication and reasoning alongside academics.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold-500 mt-1.5 shrink-0 ring-4 ring-gold-100" />
                        <span className="text-justify [text-justify:inter-word]">Finding suitable external programme partners takes time.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold-500 mt-1.5 shrink-0 ring-4 ring-gold-100" />
                        <span className="text-justify [text-justify:inter-word]">Workshops create enthusiasm, but continued engagement needs planning.</span>
                      </li>
                    </ul>
                  </div>
                </SpotlightCard>

                <SpotlightCard className="h-full rounded-3xl bg-mist border border-navy-100 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-navy-900">
                    <img src={collegeImg} alt="College students" loading="lazy" decoding="async" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="px-3 py-1 rounded-full bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider">
                        For Colleges &amp; Universities
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1.5">
                        Give Career Aspirations a Clear Direction.
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-6">
                    <ul className="space-y-4 text-xs sm:text-sm text-navy-700 leading-relaxed">
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold-500 mt-1.5 shrink-0 ring-4 ring-gold-100" />
                        <span className="text-justify [text-justify:inter-word]">Students are interested in government careers but lack clarity on where to begin.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold-500 mt-1.5 shrink-0 ring-4 ring-gold-100" />
                        <span className="text-justify [text-justify:inter-word]">Awareness seminars generate interest without a defined counselling or preparation pathway.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold-500 mt-1.5 shrink-0 ring-4 ring-gold-100" />
                        <span className="text-justify [text-justify:inter-word]">Campus teams need support connecting students with relevant specialists and following up.</span>
                      </li>
                    </ul>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>

          {/* Solutions & Feature List - Dark Theme with WaveCanvas & Centered Cards */}
          <div className="relative overflow-hidden py-14 sm:py-20 md:py-24 bg-navy-950 text-white border-b border-navy-900">
            <WaveCanvas opacity={0.35} />
            <AmbientShapes />

            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <span className="eyebrow-dark">Civiora Support &amp; Coordination</span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight mt-3">
                  Civiora Helps Turn Interest into a Plan of Action.
                </h2>
                <div className="gold-rule mx-auto mt-4" />
                <p className="text-sm sm:text-base text-slate-200 mt-4 leading-relaxed">
                  We work with your institution to understand student needs, connect suitable service providers and coordinate the next steps.
                </p>
              </div>

              {/* Centered Glassmorphic Cards (Row 1 has 3, Row 2 has 2 centered horizontally) */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                {/* Solution 1 */}
                <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex">
                  <SpotlightCard
                    className="glass-card glass-card-hover w-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl text-left space-y-4 group"
                    spotlightColor="rgba(0, 242, 254, 0.22)"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-900/80 border border-gold-400/30 text-gold-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                        <BookOpen size={22} className="text-gold-400" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                        Strengthen school student development
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-body">
                        Connect age-appropriate initiatives in communication, reasoning, leadership, curiosity and practical learning.
                      </p>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Solution 2 */}
                <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex">
                  <SpotlightCard
                    className="glass-card glass-card-hover w-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl text-left space-y-4 group"
                    spotlightColor="rgba(79, 172, 254, 0.22)"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-900/80 border border-gold-400/30 text-gold-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                        <Target size={22} className="text-gold-400" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                        Create a government career pathway
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-body">
                        Help establish a Government Career Cell that complements existing campus guidance.
                      </p>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Solution 3 */}
                <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex">
                  <SpotlightCard
                    className="glass-card glass-card-hover w-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl text-left space-y-4 group"
                    spotlightColor="rgba(0, 242, 254, 0.22)"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-900/80 border border-gold-400/30 text-gold-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                        <Compass size={22} className="text-gold-400" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                        Help students choose their next step
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-body">
                        Conduct awareness sessions, map interests and counsel interested students.
                      </p>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Solution 4 */}
                <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex">
                  <SpotlightCard
                    className="glass-card glass-card-hover w-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl text-left space-y-4 group"
                    spotlightColor="rgba(79, 172, 254, 0.22)"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-900/80 border border-gold-400/30 text-gold-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                        <Workflow size={22} className="text-gold-400" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                        Access relevant expertise
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-body">
                        Connect suitable education partners for the agreed development or examination preparation requirement.
                      </p>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Solution 5 */}
                <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex">
                  <SpotlightCard
                    className="glass-card glass-card-hover w-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl text-left space-y-4 group"
                    spotlightColor="rgba(0, 242, 254, 0.22)"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-900/80 border border-gold-400/30 text-gold-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                        <CalendarCheck size={22} className="text-gold-400" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                        Sustain engagement
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-body">
                        Coordinate onboarding, communication and agreed follow-up.
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              </div>

              {/* How Civiora Works 5-Step Flow (Responsive Infographic matching reference design) */}
              <div className="mt-14 pt-12 border-t border-white/10">
                <div className="text-center max-w-xl mx-auto mb-10">
                  <span className="eyebrow-dark">From Awareness to Action</span>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2">
                    How Civiora Works
                  </h3>
                  <div className="gold-rule mx-auto mt-4" />
                </div>

                <HowCivioraWorksInfographic />
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Civiora (Reference Order: About Civiora) */}
        <section id="sec-about" className="scroll-mt-20">
          <About />
        </section>

        {/* 4. Who We Are: Institutional Pathways & How We Work (Combined Module) */}
        <section id="sec-who-we-are" className="scroll-mt-20">

          <div className="py-14 sm:py-20 bg-white">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="eyebrow">Who We Are &amp; Who We Work With</span>
                <h2 className="section-heading mt-3">Tailored Engagement Approaches</h2>
                <div className="gold-rule mx-auto mt-4" />
                <p className="mt-4 text-navy-700 text-base md:text-lg leading-relaxed text-justify [text-justify:inter-word]">
                  Every institution has its own student community, academic commitments and development priorities. Civiora partners with schools, colleges and universities through a structured engagement methodology to strengthen student capability and career direction.
                </p>
              </div>

              {/* 3 Institutional Pathways */}
              <div className="space-y-12 md:space-y-16">
                
                {/* 1. Schools */}
                <div className="bg-mist rounded-3xl p-5 sm:p-8 md:p-12 border border-navy-100 shadow-sm hover:border-gold-400 transition-all duration-300">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-gold-700">
                        School Partnerships
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-navy-900 font-semibold leading-snug">
                        Schools — Build Capabilities Alongside Academic Learning
                      </h3>
                    </div>
                  </div>
                  <div className="gold-rule mt-6" />

                  <div className="mt-6 grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4 text-navy-700 text-base md:text-lg leading-relaxed">
                      <p>
                        Civiora works with schools to identify opportunities that strengthen thinking, communication, participation, collaboration and informed exploration.
                      </p>
                      <p>
                        Engagements are shaped around student age groups, school priorities and the academic calendar, with responsibilities and review expectations agreed before implementation.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-navy-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                          <span>Thinking &amp; reasoning capabilities</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                          <span>Expression &amp; collaboration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                          <span>Age-appropriate exploration</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                      <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-md bg-white">
                        <img
                          src={schoolImg}
                          alt="School students collaborating and participating in learning initiatives."
                          loading="lazy"
                          decoding="async"
                          className="w-full h-48 sm:h-56 object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Colleges */}
                <div className="bg-mist rounded-3xl p-5 sm:p-8 md:p-12 border border-navy-100 shadow-sm hover:border-gold-400 transition-all duration-300">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                      <Landmark size={22} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-gold-700">
                        College Partnerships
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-navy-900 font-semibold leading-snug">
                        Colleges — Connect Career Aspirations with Informed Direction
                      </h3>
                    </div>
                  </div>
                  <div className="gold-rule mt-6" />

                  <div className="mt-6 grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4 text-navy-700 text-base md:text-lg leading-relaxed">
                      <p>
                        Civiora supports colleges understand student interests and coordinate relevant guidance, specialist expertise and sustained engagement.
                      </p>
                      <p>
                        Our approach complements existing career-support activities and reflects student readiness, institutional priorities and academic commitments.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-navy-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                          <span>Aspiration &amp; interest mapping</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                          <span>Specialist mentor alignment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                          <span>Complementary institutional support</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                      <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-md bg-white">
                        <img
                          src={collegeImg}
                          alt="College students in career mentoring session."
                          loading="lazy"
                          decoding="async"
                          className="w-full h-48 sm:h-56 object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Universities */}
                <div className="bg-mist rounded-3xl p-5 sm:p-8 md:p-12 border border-navy-100 shadow-sm hover:border-gold-400 transition-all duration-300">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                      <Building size={22} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-gold-700">
                        University Partnerships
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-navy-900 font-semibold leading-snug">
                        Universities — Coordinate Across Departments and Campuses
                      </h3>
                    </div>
                  </div>
                  <div className="gold-rule mt-6" />

                  <div className="mt-6 grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4 text-navy-700 text-base md:text-lg leading-relaxed">
                      <p>
                        Civiora works with university leadership to connect central priorities with department and campus requirements.
                      </p>
                      <p>
                        An agreed framework can include designated coordinators, shared specialist resources, local implementation and consolidated reviews.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-navy-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                          <span>Cross-campus coordinator framework</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                          <span>Shared specialist resources</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                          <span>Defined pilot to wider adoption</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                      <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-md bg-white">
                        <img
                          src={universityCampusImg}
                          alt="University leadership coordinating student initiatives."
                          loading="lazy"
                          decoding="async"
                          className="w-full h-48 sm:h-56 object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Ecosystem 5-Stakeholder Governance Matrix */}
              <div className="mt-16 md:mt-24 pt-12 border-t border-navy-100">
                <Ecosystem />
              </div>

            </div>
          </div>

          {/* Module 2: How We Work — 5 Engagement Stages & Delivery Framework */}
          <div className="border-t border-navy-100/80 bg-mist/30">
            <HowItWorks />
          </div>
        </section>

        {/* 5. Why Civiora */}
        <section id="sec-why-civiora" className="scroll-mt-20">
          <WhyCiviora />
        </section>

        {/* 6. Founder & Leadership */}
        <section id="sec-founder" className="scroll-mt-20">
          <Founder />
        </section>

        {/* 7. Frequently Asked Questions (FAQ Only - No Blog in Landing Page) */}
        <section id="sec-faq" className="scroll-mt-20">

          <div className="py-16 md:py-24 bg-white border-b border-navy-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
              <div className="text-center mb-10 sm:mb-14">
                <span className="eyebrow">Institutional Clarity</span>
                <h2 className="section-heading mt-3">Frequently Asked Questions</h2>
                <div className="gold-rule mx-auto mt-4" />
                <p className="mt-4 text-navy-700 text-base md:text-lg leading-relaxed">
                  Key details on how Civiora structures partnerships, collaborates with existing campus initiatives, and begins consultations.
                </p>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <SpotlightCard 
                    key={faq.q} 
                    maxTilt={8}
                    spotlightColor="rgba(201, 150, 42, 0.15)"
                    className="bg-mist rounded-2xl p-5 sm:p-7 border border-navy-100 shadow-sm hover:border-gold-400 hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-display text-base sm:text-lg font-semibold text-navy-900">
                      {faq.q}
                    </h4>
                    <p className="mt-2.5 text-navy-700 text-sm sm:text-base leading-relaxed text-justify-prose">
                      {faq.a}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Contact & CTA (Consultation Request & Location) */}
        <section id="sec-contact" className="scroll-mt-20">
          <FinalCTA />
        </section>

      </main>

      <Footer />

      {/* Video Modal */}
      <IntroVideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onScrollToForm={() => {
          setIsVideoOpen(false);
          scrollTo('sec-landing-hero');
        }}
      />
    </div>
  );
}
