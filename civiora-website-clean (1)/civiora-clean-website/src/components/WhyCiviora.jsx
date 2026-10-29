import { Link } from 'react-router-dom';
import { 
  Target, 
  Users, 
  Layers, 
  Calendar, 
  Compass, 
  LineChart, 
  ArrowRight,
  FileSpreadsheet,
  CheckCircle2,
  Clock
} from 'lucide-react';
import Reveal from './Reveal';
import studentOutcomesImg from '../assets/selected-client-images/W04-Outcomes-Indian.png';

const PILLARS = [
  {
    icon: Target,
    title: 'Institution-specific planning',
    desc: 'An approach shaped around your objectives, student profile and implementation environment.',
  },
  {
    icon: Users,
    title: 'Relevant expertise',
    desc: 'Specialists considered against the requirement, learner group and delivery capacity.',
  },
  {
    icon: Layers,
    title: 'Clear coordination',
    desc: 'Designated contacts and agreed communication responsibilities.',
  },
  {
    icon: Calendar,
    title: 'Academic alignment',
    desc: 'Implementation planned with existing institutional commitments.',
  },
  {
    icon: Compass,
    title: 'Continued engagement',
    desc: 'Follow-up and support within the agreed scope.',
  },
  {
    icon: LineChart,
    title: 'Progress visibility',
    desc: 'Participation, feedback and relevant indicators reviewed with your team.',
  },
];

export default function WhyCiviora() {
  return (
    <section id="why-civiora" className="relative bg-white py-16 md:py-24 font-body">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Intro */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="section-heading mt-4">
            Your Institution’s Priorities Shape the Partnership
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mt-5 text-navy-700 text-base md:text-lg leading-relaxed">
            Civiora brings planning, specialist coordination and student engagement into one institutional relationship.
          </p>
        </Reveal>

        {/* 6 Pillars Grid */}
        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 items-stretch">
          {PILLARS.map((item, idx) => (
            <Reveal
              key={item.title}
              delay={idx * 60}
              className="flex h-full"
            >
              <div className="bg-mist rounded-2xl p-4 sm:p-7 border border-navy-100 hover:border-gold-400 hover:shadow-lg hover:shadow-navy-950/5 transition-all duration-300 flex flex-col justify-between w-full">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-sm mb-6">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-navy-900 font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-navy-700 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Student Outcomes Showcase */}
        <Reveal delay={120} className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-mist rounded-3xl p-4 sm:p-8 md:p-10 border border-navy-100 shadow-sm">
            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-md">
              <img
                src={studentOutcomesImg}
                alt="Students actively engaging in capability development and career outcomes."
                loading="lazy"
                decoding="async"
                className="w-full h-64 sm:h-72 object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl text-navy-900 font-semibold leading-snug">
                Student-Centred Development &amp; Clear Outcomes
              </h3>
              <p className="text-navy-700 text-sm sm:text-base leading-relaxed">
                By aligning planning with institutional priorities, students receive purposeful capability enhancement and structured career exposure that complements academic learning.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Illustrative Evidence Section */}
        <Reveal delay={150} className="mt-16 md:mt-24">
          <div className="bg-navy-950 text-white rounded-3xl p-4 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold-500/15 text-gold-300 border border-gold-400/30">
                  <FileSpreadsheet size={13} /> Illustrative Reporting Format
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mt-2">
                  Transparent Review &amp; Implementation Cadence
                </h3>
              </div>
              <span className="text-xs text-navy-300 italic">
                *Illustrative framework format — customised per institutional agreement
              </span>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <div className="p-4 sm:p-5 rounded-xl bg-navy-900/90 border border-white/10">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Clock size={14} /> Phase 1: Planning
                </div>
                <h4 className="text-sm font-semibold text-white">Baseline Assessment &amp; Scope</h4>
                <p className="text-xs text-navy-300 mt-2 leading-relaxed">
                  Agreed delivery calendar aligned to institutional exams and holiday schedule.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-gold-300">
                  <CheckCircle2 size={12} /> Milestone sign-off
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-navy-900/90 border border-white/10">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Clock size={14} /> Phase 2: Active Delivery
                </div>
                <h4 className="text-sm font-semibold text-white">Cohort Engagement Logs</h4>
                <p className="text-xs text-navy-300 mt-2 leading-relaxed">
                  Regular attendance reporting, student question logs and mentor coordination.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-gold-300">
                  <CheckCircle2 size={12} /> Bi-weekly status check
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-navy-900/90 border border-white/10">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Clock size={14} /> Phase 3: Review
                </div>
                <h4 className="text-sm font-semibold text-white">Consolidated Progress Dossier</h4>
                <p className="text-xs text-navy-300 mt-2 leading-relaxed">
                  Aggregated learner feedback, participation insights and institutional recommendations.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-gold-300">
                  <CheckCircle2 size={12} /> Final governance review
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Closing CTA */}
        <Reveal delay={200} className="mt-16 md:mt-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-xl sm:text-2xl text-navy-900 leading-snug font-semibold">
              Discuss Your Institutional Requirements
            </h3>
            <p className="mt-3 text-navy-600 text-sm sm:text-base">
              Share your student community’s priorities and explore how Civiora can coordinate an impactful engagement.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="btn-primary w-full sm:w-auto text-center justify-center"
              >
                <span>Discuss Your Institutional Requirements</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
