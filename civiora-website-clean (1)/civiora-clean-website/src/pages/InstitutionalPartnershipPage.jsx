import { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  BookOpen, 
  Compass, 
  Target, 
  Network, 
  CalendarCheck, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  Lightbulb 
} from 'lucide-react';
import InstitutionalHeader from '../components/InstitutionalLanding/InstitutionalHeader';
import InstitutionalLeadForm from '../components/InstitutionalLanding/InstitutionalLeadForm';
import IntroVideoModal from '../components/InstitutionalLanding/IntroVideoModal';
import HowCivioraWorksInfographic from '../components/InstitutionalLanding/HowCivioraWorksInfographic';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import WaveCanvas from '../components/effects/WaveCanvas';
import AmbientShapes from '../components/effects/AmbientShapes';
import SpotlightCard from '../components/effects/SpotlightCard';

import schoolImg from '../assets/selected-client-images/P02-Schools-partnership.png';
import collegeImg from '../assets/selected-client-images/P03-College-partnership.png';
import videoThumbImg from '../assets/selected-client-images/HO1-Civiora-Website-Main-Page-Hero.png';

export default function InstitutionalPartnershipPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('School');
  const [selectedRequirement, setSelectedRequirement] = useState('School Student Development');

  const scrollToForm = (type, requirement) => {
    if (type) setSelectedType(type);
    if (requirement) setSelectedRequirement(requirement);

    const formElement = document.getElementById('lead-form');
    if (formElement) {
      const headerOffset = 80;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Highlight effect and focus
      const nameInput = document.getElementById('fullName');
      if (nameInput) {
        setTimeout(() => {
          nameInput.focus();
        }, 600);
      }
    }
  };

  return (
    <div className="min-h-screen bg-mist text-ink font-body flex flex-col justify-between selection:bg-gold-200 selection:text-navy-900">
      <SEO
        title="Institutional Partnerships | Civiora"
        description="Partner with Civiora to bring structured student development, Government Career Cells, and career guidance pathways to your school, college, or university."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Civiora Institutional Partnerships",
          "description": "Civiora coordinates student development and career guidance partnerships for schools, colleges and universities.",
          "provider": {
            "@type": "Organization",
            "name": "Civiora Education & Institutional Services",
            "url": "https://civiora.co.in"
          }
        }}
      />

      {/* 1. Compact Sticky Header */}
      <InstitutionalHeader onScrollToForm={() => scrollToForm()} />

      <main id="main-content" className="flex-grow pt-16 sm:pt-20">
        
        {/* 2. Hero Section: Side-by-side on desktop; copy, mobile CTA, form on mobile */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-mist to-mist py-10 sm:py-14 md:py-20 border-b border-navy-100/60">
          
          {/* Dynamic Animated Wave Background */}
          <WaveCanvas opacity={0.45} />

          {/* Glowing Ambient Shapes (Background) */}
          <AmbientShapes />

          {/* Subtle gold accent aura */}
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

                {/* Two Highlight Cards (Schools & Colleges) */}
                <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
                  
                  {/* For Schools Card */}
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

                  {/* For Colleges and Universities Card */}
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

                {/* Mobile Hero CTA Button (Shown before form on mobile) */}
                <div className="block lg:hidden pt-2 space-y-2">
                  <button
                    type="button"
                    onClick={() => scrollToForm()}
                    className="w-full btn-primary text-xs sm:text-sm py-3 px-6 shadow-md"
                  >
                    <span>Request a Partnership Discussion</span>
                    <ArrowRight size={15} />
                  </button>
                  <p className="text-xs text-navy-500 text-center">
                    Tell us your institution’s needs. Explore a suitable approach with our team.
                  </p>
                </div>

                {/* Desktop Supporting Copy */}
                <p className="hidden lg:block text-xs sm:text-sm text-navy-600 italic">
                  Tell us your institution’s needs. Explore a suitable approach with our team.
                </p>

                {/* Video Card: Click to play 30s introduction */}
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
                      
                      {/* Thumbnail with bright campus image */}
                      <div className="relative w-full sm:w-44 h-32 sm:h-auto shrink-0 overflow-hidden bg-navy-950">
                        <img 
                          src={videoThumbImg} 
                          alt="Campus life and student aspirations thumbnail" 
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

                      {/* Video card text */}
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

              {/* Right Column: Lead Signup Form (Side-by-side on desktop, follows copy on mobile) */}
              <div className="lg:col-span-5 w-full">
                <InstitutionalLeadForm
                  selectedType={selectedType}
                  selectedRequirement={selectedRequirement}
                />
              </div>

            </div>
          </div>
        </section>

        {/* 3. Challenges for Schools and Colleges/Universities */}
        <section id="challenges" className="py-14 sm:py-20 md:py-24 bg-white border-b border-navy-100 scroll-mt-20">
          <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
            
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="eyebrow">Institutional Realities</span>
                <h2 className="section-heading mt-3">
                  Are These Challenges Familiar?
                </h2>
                <div className="gold-rule mx-auto mt-4" />
                <p className="text-sm sm:text-base text-navy-600 mt-4 leading-relaxed">
                  Institutional leadership across India face distinct challenges when bridging classroom academics with holistic development and career readiness.
                </p>
              </div>
            </Reveal>

            {/* Two Side-by-Side Cards (Equal visual importance) */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              
              {/* Card 1: For Schools */}
              <div id="school-partnerships" className="h-full scroll-mt-24">
                <Reveal delay={100} className="h-full">
                  <SpotlightCard className="h-full rounded-3xl bg-mist border border-navy-100 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 group">
                    
                    {/* Photo Banner */}
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-navy-900">
                      <img 
                        src={schoolImg} 
                        alt="Indian school students engaged in practical learning" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
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

                    {/* Body Points */}
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

                      <div className="pt-2 border-t border-navy-200/60">
                        <button
                          type="button"
                          onClick={() => scrollToForm('School', 'School Student Development')}
                          className="btn-secondary w-full text-xs sm:text-sm py-2.5 justify-center"
                        >
                          Request a Partnership Discussion
                        </button>
                      </div>
                    </div>

                  </SpotlightCard>
                </Reveal>
              </div>

              {/* Card 2: For Colleges & Universities */}
              <div id="campus-partnerships" className="h-full scroll-mt-24">
                <Reveal delay={200} className="h-full">
                  <SpotlightCard className="h-full rounded-3xl bg-mist border border-navy-100 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 group">
                    
                    {/* Photo Banner */}
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-navy-900">
                      <img 
                        src={collegeImg} 
                        alt="College and university students in career discussion" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
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

                    {/* Body Points */}
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

                      <div className="pt-2 border-t border-navy-200/60">
                        <button
                          type="button"
                          onClick={() => scrollToForm('College', 'Government Career Cell')}
                          className="btn-secondary w-full text-xs sm:text-sm py-2.5 justify-center"
                        >
                          Request a Partnership Discussion
                        </button>
                      </div>
                    </div>

                  </SpotlightCard>
                </Reveal>
              </div>

            </div>

          </div>
        </section>

        {/* 4. Civiora Solutions - Dark Theme with WaveCanvas, Floating Ambient Shapes & Responsive Glassmorphic Cards */}
        <section id="solutions" className="relative overflow-hidden py-14 sm:py-20 md:py-24 bg-navy-950 text-white border-b border-navy-900 scroll-mt-20">
          
          {/* Dynamic Animated Wave Background */}
          <WaveCanvas opacity={0.35} />

          {/* Glowing Ambient Shapes (Background) */}
          <AmbientShapes />

          <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 relative z-10">
            
            <Reveal>
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
            </Reveal>

            {/* Centered Responsive Glassmorphic Cards (Row 1 has 3, Row 2 has 2 centered horizontally) */}
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
                      <Network size={22} className="text-gold-400" />
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

            {/* How Civiora Works Sequence (5 Steps) */}
            <div id="how-we-work" className="mt-14 pt-12 border-t border-white/10 scroll-mt-20">
              <Reveal>
                <div className="text-center max-w-xl mx-auto mb-10">
                  <span className="eyebrow-dark">From Awareness to Action</span>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2">
                    How Civiora Works
                  </h3>
                  <div className="gold-rule mx-auto mt-4" />
                </div>

                <HowCivioraWorksInfographic />
              </Reveal>
            </div>

            {/* Prominent Business Model Role Clarification */}
            <Reveal delay={350}>
              <SpotlightCard 
                className="mt-10 p-5 sm:p-6 rounded-2xl bg-navy-900 text-white border border-gold-500/30 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-lg"
                spotlightColor="rgba(201, 150, 42, 0.2)"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                    Institutional Governance &amp; Delivery Model
                  </p>
                  <p className="text-xs sm:text-sm text-navy-100 leading-relaxed">
                    Civiora provides consulting and coordination. Specialist service providers deliver the agreed programmes and academic support.
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>

          </div>
        </section>

        {/* 5. Partnership Invitation */}
        <section id="invitation" className="py-14 sm:py-20 md:py-24 bg-white border-b border-navy-100 scroll-mt-20">
          <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
            
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <Reveal>
                  <span className="eyebrow">Partnership Invitation</span>
                  <h2 className="section-heading mt-3">
                    Start with Your Institution’s Most Pressing Need.
                  </h2>
                  <div className="gold-rule mt-4" />
                  <p className="text-sm sm:text-base text-navy-700 mt-4 leading-relaxed">
                    Whether you want to introduce a school development initiative, establish a Government Career Cell or strengthen career guidance, the first step is a focused discussion.
                  </p>
                </Reveal>

                <Reveal delay={100}>
                  <div className="space-y-3 pt-2">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-navy-900">
                      Share your requirement to explore:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-navy-700">
                      {[
                        'A suitable initiative for your students.',
                        'Relevant service provider options.',
                        'Delivery arrangements and institutional responsibilities.',
                        'A practical starting point and proposed next steps.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-gold-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={150}>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => scrollToForm()}
                      className="btn-primary text-xs sm:text-sm py-3 px-6 shadow-md"
                    >
                      <span>Request a Partnership Discussion</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </Reveal>
              </div>

              {/* Service Provider Partner Callout (Designer brief item 6) */}
              <div className="lg:col-span-5">
                <Reveal delay={200}>
                  <SpotlightCard 
                    className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-5 text-left"
                    spotlightColor="rgba(0, 242, 254, 0.22)"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-gold-400 flex items-center justify-center">
                      <Users size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400">
                        For Education &amp; Training Providers
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1">
                        Bring Your Expertise to More Campuses.
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-200 mt-2 leading-relaxed">
                        Partner with Civiora to connect your education and training services with institutional requirements across schools, colleges and universities.
                      </p>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => scrollToForm('Education Service Provider', 'Programme Partnership')}
                        className="btn-ghost w-full justify-center text-xs py-2.5"
                      >
                        Request a Partnership Discussion
                      </button>
                    </div>
                  </SpotlightCard>
                </Reveal>
              </div>

            </div>

          </div>
        </section>

        {/* 6. Final CTA and Form Section */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-mist to-white">
          <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 text-center">
            
            <Reveal>
              <div className="max-w-2xl mx-auto space-y-4">
                <span className="eyebrow">Ready to Collaborate?</span>
                <h2 className="section-heading">
                  Let’s Build the Right Opportunity for Your Students.
                </h2>
                <div className="gold-rule mx-auto" />
                <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                  Share your requirement to discuss a school initiative, Government Career Cell or education partnership. Complete the form above or click below to begin.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => scrollToForm()}
                    className="btn-primary text-xs sm:text-sm py-3.5 px-8 shadow-lg hover:shadow-xl transition-all"
                  >
                    <span>Request a Partnership Discussion</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

      </main>

      {/* 7. Existing Footer with verified contact, policy and social links */}
      <Footer />

      {/* 30-Second Intro Video Modal */}
      <IntroVideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onScrollToForm={() => scrollToForm()}
      />

    </div>
  );
}

