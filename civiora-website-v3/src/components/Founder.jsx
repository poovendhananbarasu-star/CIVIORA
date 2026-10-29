import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Compass, Quote, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import mark from '../assets/civiora-mark-icon.png';

const STATS = [
  { value: '9+', label: 'Years of academic experience' },
  { value: '4,000+', label: 'Students mentored' },
  { value: '60,000+', label: 'Learners reached' },
  { value: '70+', label: 'Institutions of exposure' },
];

export default function Founder() {
  return (
    <section id="founder" className="relative bg-navy-900 py-16 md:py-24 overflow-hidden font-body text-white">
      {/* Background brand mark accent */}
      <img 
        src={mark} 
        alt="" 
        className="absolute -left-20 -top-20 w-72 opacity-[0.05] pointer-events-none" 
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,150,42,0.08),_transparent_60%)]" />

      <div className="relative max-w-content mx-auto px-6 md:px-10">
        
        {/* Leadership Intro */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Founder &amp; Leadership
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight">
            Poovendhan Anbarasu — Founder &amp; CEO
          </h2>
          <p className="mt-3 text-gold-300 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Bringing teaching experience, mentoring insight and institutional perspective to student development.
          </p>
          <div className="gold-rule mx-auto mt-5" />
        </Reveal>

        {/* Section 1: Professional Profile */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <Reveal className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-11 shadow-2xl relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-400/30 text-gold-400 flex items-center justify-center shrink-0">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="font-display text-2xl text-white font-semibold leading-snug">
                  Professional Profile
                </h3>
                <span className="text-xs text-gold-400 uppercase tracking-wider font-semibold">
                  Founder &amp; Chief Executive Officer
                </span>
              </div>
            </div>

            <div className="space-y-4 text-navy-100 text-base md:text-lg leading-relaxed">
              <p>
                Poovendhan Anbarasu’s professional journey spans competitive-examination preparation, teaching, student mentoring, academic leadership and institutional engagement.
              </p>
              <p>
                His teaching areas include Indian Polity and Indian &amp; World History. His mentoring approach helps learners understand preparation demands, develop study direction and make informed career choices.
              </p>
              <p>
                Through Civiora, he brings this perspective into institutional partnerships that connect student aspirations with relevant expertise, organised implementation and continued engagement.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs sm:text-sm text-gold-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold-400" />
                <span>Pedagogical Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold-400" />
                <span>Career Pathway Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-gold-400" />
                <span>Institutional Consultation</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 2: Founder Statement Quote */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <Reveal delay={100}>
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-500/30 text-center relative shadow-xl">
              <Quote size={32} className="text-gold-400/40 mx-auto mb-4" />
              <blockquote className="font-display text-lg sm:text-2xl text-gold-100 italic leading-relaxed">
                “Institutions can support student aspirations more effectively when direction, relevant expertise and continued engagement work together.”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-gold-400 tracking-wider uppercase">
                — Poovendhan Anbarasu
              </p>
            </div>
          </Reveal>
        </div>

        {/* Cumulative Experience Statistics */}
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
          <Reveal delay={150}>
            <div className="border-t border-white/15 pt-10">
              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Founder’s cumulative professional experience
                </span>
                <p className="text-xs text-navy-300 mt-1 italic">
                  Cumulative career statistics across academic teaching, mentoring and institutional advisory.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-500/30 transition-colors">
                    <p className="font-display text-3xl sm:text-4xl text-gold-400 font-semibold">{s.value}</p>
                    <p className="mt-2 text-navy-200 text-xs sm:text-sm leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Required Caption */}
              <p className="mt-6 text-center text-xs text-navy-300 italic max-w-2xl mx-auto">
                These figures reflect Poovendhan Anbarasu’s cumulative professional experience across his academic career.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Closing CTA */}
        <Reveal delay={200} className="mt-12 md:mt-16 text-center">
          <Link
            to="/contact"
            className="btn-primary"
          >
            <span>Discuss an Institutional Partnership</span>
            <ArrowRight size={16} />
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
