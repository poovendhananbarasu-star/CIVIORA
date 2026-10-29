import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Landmark, 
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Workflow,
  Award
} from 'lucide-react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const AUDIENCES = [
  {
    id: 'schools',
    icon: GraduationCap,
    title: 'Schools',
    summary: 'Build capabilities alongside academics.',
    description: 'Work with schools to identify opportunities that strengthen thinking, communication, participation, collaboration and informed exploration around student age groups and the academic calendar.',
    link: '/pathways#schools',
    linkLabel: 'Explore School Partnerships',
  },
  {
    id: 'colleges',
    icon: Landmark,
    title: 'Colleges',
    summary: 'Connect aspirations with informed career direction.',
    description: 'Help colleges understand student interests and coordinate relevant guidance, specialist expertise and sustained engagement that complements existing career-support activities.',
    link: '/pathways#colleges',
    linkLabel: 'Explore College Partnerships',
  },
  {
    id: 'universities',
    icon: Building,
    title: 'Universities',
    summary: 'Coordinate student development across departments and campuses.',
    description: 'Connect central institutional priorities with department and campus requirements through designated coordinators, shared specialist resources, and consolidated progress reviews.',
    link: '/pathways#universities',
    linkLabel: 'Explore University Partnerships',
  },
];

const RELATIONSHIP_PILLARS = [
  {
    step: '01',
    title: 'Consultation & Discovery',
    desc: 'Understand leadership priorities, student readiness, existing initiatives, and the institutional operating context.',
  },
  {
    step: '02',
    title: 'Engagement Planning',
    desc: 'Define scopes, schedules, session formats, operational requirements, and agreed review indicators.',
  },
  {
    step: '03',
    title: 'Specialist Alignment',
    desc: 'Select suitable educators, mentors, and specialist partners whose domain experience matches the requirement.',
  },
  {
    step: '04',
    title: 'Stakeholder Communication',
    desc: 'Establish designated institutional contacts, orientation, participant schedules, and escalation channels.',
  },
  {
    step: '05',
    title: 'Progress Review',
    desc: 'Evaluate student participation, engagement feedback, and qualitative indicators with institutional leaders.',
  },
];

export default function HomePage() {
  return (
    <div>
      <SEO
        title="Civiora | Institutional Learning & Career Partnerships"
        description="Civiora partners with schools, colleges and universities to plan student development and career initiatives, coordinate expertise and review progress."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Civiora Education & Institutional Services",
          "url": "https://www.civiora.in",
          "logo": "https://www.civiora.in/civiora-logo-full-lockup-transparent.png",
          "email": "connect@civiora.co.in",
          "telephone": "+918150003610",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No. 134, 57, 13th Cross, Baldwins Road, Koramangala",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560030",
            "addressCountry": "IN"
          }
        }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Section 1: Better student outcomes begin with better direction */}
      <section id="outcomes" className="relative bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Direction &amp; Guidance
            </span>
            <h2 className="section-heading mt-4">
              Better student outcomes begin with better direction
            </h2>
            <div className="gold-rule mx-auto mt-5" />
            <p className="mt-5 text-navy-700 text-base md:text-lg leading-relaxed">
              Students benefit from opportunities to develop capabilities, explore possibilities and make informed choices. Civiora helps institutions connect these needs with relevant expertise, organised implementation and continued engagement.
            </p>
          </Reveal>

          {/* Who we work with: 3 Distinct Segment Cards */}
          <div className="mt-14 md:mt-20">
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-navy-900">
                Who We Work With
              </h3>
              <p className="mt-2 text-navy-600 text-sm md:text-base">
                Distinct student communities require context-specific engagement approaches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {AUDIENCES.map((item, index) => (
                <Reveal key={item.id} delay={index * 100} className="flex h-full">
                  <div className="flex flex-col justify-between w-full bg-mist rounded-2xl p-7 sm:p-8 border border-navy-100 hover:border-gold-400 hover:shadow-lg hover:shadow-navy-950/5 transition-all duration-300">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-sm mb-6">
                        <item.icon size={24} />
                      </div>
                      <h4 className="font-display text-xl sm:text-2xl text-navy-900 font-semibold leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm font-semibold text-gold-700">
                        {item.summary}
                      </p>
                      <p className="mt-4 text-navy-700 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-navy-100/70">
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-700 transition-colors group"
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowRight size={15} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: One coordinated institutional relationship */}
      <section className="bg-navy-900 py-16 md:py-24 text-white border-y border-white/10">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="eyebrow-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Unified Partnership
            </span>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-tight">
              One coordinated institutional relationship
            </h2>
            <div className="gold-rule mx-auto mt-5" />
            <p className="mt-5 text-navy-200 text-base md:text-lg leading-relaxed">
              Bring consultation, engagement planning, specialist alignment, stakeholder communication and progress review into a clearly defined partnership.
            </p>
          </Reveal>

          {/* Relationship Process Strip */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {RELATIONSHIP_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.step} delay={idx * 80} className="flex h-full">
                <div className="w-full bg-navy-800/80 rounded-xl p-6 border border-white/10 hover:border-gold-400/40 transition-colors duration-200 flex flex-col justify-between">
                  <div>
                    <span className="font-display text-gold-400 font-semibold text-sm tracking-wider">
                      {pillar.step}
                    </span>
                    <h4 className="mt-2 text-base font-semibold text-white font-display">
                      {pillar.title}
                    </h4>
                    <p className="mt-2.5 text-xs sm:text-sm text-navy-200 leading-relaxed font-body">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-gold-300">
                    <CheckCircle2 size={12} />
                    <span>Agreed milestone</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="btn-ghost group inline-flex items-center gap-2"
            >
              <Workflow size={16} className="text-gold-400" />
              <span>Explore How We Work</span>
              <ArrowRight size={14} className="text-gold-400 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Confidence through clarity */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Transparency &amp; Governance
            </span>
            <h2 className="section-heading mt-4">
              Confidence through clarity
            </h2>
            <div className="gold-rule mx-auto mt-5" />
            <p className="mt-5 text-navy-700 text-base md:text-lg leading-relaxed">
              Understand who will coordinate the engagement, how responsibilities are agreed and what your institution will review. Explore our founder’s background, delivery methodology and collaborative ecosystem.
            </p>
          </Reveal>

          {/* 3 Navigational Pathway Cards */}
          <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            <Reveal delay={100} className="flex h-full">
              <div className="flex flex-col justify-between w-full bg-mist rounded-2xl p-7 sm:p-8 border border-navy-100 hover:border-gold-400 hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5">
                    <Award size={20} />
                  </div>
                  <h4 className="font-display text-xl text-navy-900 font-semibold">
                    Founder &amp; Leadership
                  </h4>
                  <p className="mt-3 text-navy-700 text-sm leading-relaxed">
                    Led by Poovendhan Anbarasu, bringing competitive-examination insight, student mentoring, and institutional perspectives into purposeful learning design.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy-100/70">
                  <Link
                    to="/founder"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-700 transition-colors group"
                  >
                    <span>View Founder Profile</span>
                    <ArrowRight size={14} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} className="flex h-full">
              <div className="flex flex-col justify-between w-full bg-mist rounded-2xl p-7 sm:p-8 border border-navy-100 hover:border-gold-400 hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5">
                    <Workflow size={20} />
                  </div>
                  <h4 className="font-display text-xl text-navy-900 font-semibold">
                    5-Stage Methodology
                  </h4>
                  <p className="mt-3 text-navy-700 text-sm leading-relaxed">
                    Discover → Design → Connect → Govern → Measure. A disciplined process providing clarity from the first discussion to the progress review.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy-100/70">
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-700 transition-colors group"
                  >
                    <span>View Delivery Method</span>
                    <ArrowRight size={14} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300} className="flex h-full">
              <div className="flex flex-col justify-between w-full bg-mist rounded-2xl p-7 sm:p-8 border border-navy-100 hover:border-gold-400 hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5">
                    <Layers size={20} />
                  </div>
                  <h4 className="font-display text-xl text-navy-900 font-semibold">
                    Partnership Ecosystem
                  </h4>
                  <p className="mt-3 text-navy-700 text-sm leading-relaxed">
                    A connected framework with transparent responsibilities for institutions, Civiora, academic specialists, students, and parents.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy-100/70">
                  <Link
                    to="/ecosystem"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-700 transition-colors group"
                  >
                    <span>Explore Ecosystem</span>
                    <ArrowRight size={14} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing Invitation Section */}
      <section className="bg-navy-950 py-16 md:py-20 text-white border-t border-white/10">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <span className="eyebrow-dark">
              <Sparkles size={12} className="text-gold-400" />
              <span>Next Steps</span>
            </span>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl text-white max-w-3xl mx-auto leading-snug font-semibold">
              What would your institution like to strengthen?
            </h2>
            <p className="mt-4 text-navy-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Share your priorities and explore an appropriate approach with Civiora.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="btn-primary"
              >
                <span>Discuss an Institutional Partnership</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
