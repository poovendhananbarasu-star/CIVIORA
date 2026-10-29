import { Link } from 'react-router-dom';
import { Search, PenSquare, Link2, ShieldCheck, BarChart3, ArrowRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const STAGES = [
  {
    step: '01',
    name: 'Discover',
    icon: Search,
    desc: 'Understand institutional priorities, student needs, existing support and practical constraints.',
  },
  {
    step: '02',
    name: 'Design',
    icon: PenSquare,
    desc: 'Agree the engagement scope, schedule, responsibilities and review indicators.',
  },
  {
    step: '03',
    name: 'Connect',
    icon: Link2,
    desc: 'Align suitable educators, mentors and specialist partners with the requirement.',
  },
  {
    step: '04',
    name: 'Govern',
    icon: ShieldCheck,
    desc: 'Coordinate implementation, communication, designated contacts and issue escalation.',
  },
  {
    step: '05',
    name: 'Measure',
    icon: BarChart3,
    desc: 'Review participation, feedback and relevant progress indicators to inform subsequent decisions.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-white py-16 md:py-24 font-body">
      <div className="max-w-content mx-auto px-6 md:px-10">
        
        {/* Intro */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            Disciplined Methodology
          </span>
          <h2 className="section-heading mt-4">
            Clarity from the First Discussion to the Progress Review
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mt-5 text-navy-700 text-base md:text-lg leading-relaxed">
            Our five-stage engagement framework provides structure, clarity and accountability throughout the institutional partnership.
          </p>
        </Reveal>

        {/* 5 Stages Grid */}
        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
          {STAGES.map((s, i) => (
            <Reveal key={s.name} delay={i * 70} className="flex h-full">
              <div className="flex flex-col justify-between w-full bg-mist rounded-2xl p-6 border border-navy-100 hover:border-gold-400 hover:shadow-lg hover:shadow-navy-950/5 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-xs font-semibold text-navy-900 bg-white px-2.5 py-1 rounded-md border border-navy-100/70">
                      Stage {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-sm">
                      <s.icon size={18} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-navy-900 font-semibold leading-snug">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-navy-700 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What your institution can expect */}
        <Reveal delay={200} className="mt-16 md:mt-24">
          <div className="max-w-3xl mx-auto bg-navy-900 text-white rounded-3xl p-8 sm:p-11 border border-white/10 text-center shadow-xl">
            <Sparkles size={24} className="text-gold-400 mx-auto mb-3" />
            <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold">
              What your institution can expect
            </h3>
            <div className="gold-rule mx-auto mt-4" />
            <p className="mt-5 text-navy-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              A documented scope, agreed implementation arrangements, designated contacts and a review process suited to the engagement.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="btn-primary"
              >
                <span>Start an Institutional Discussion</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
