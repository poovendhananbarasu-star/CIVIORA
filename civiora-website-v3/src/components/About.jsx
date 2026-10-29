import { Link } from 'react-router-dom';
import { Compass, Target, ShieldCheck, ArrowRight, Lightbulb, Users, Award } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10">
        
        {/* Section 1: Introduction & Why Civiora exists */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal className="flex flex-col justify-between">
            <div>
              <span className="eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                Institutional Overview
              </span>
              <h2 className="section-heading mt-4">
                An Institutional Partner for Student Development and Career Direction
              </h2>
              <div className="gold-rule mt-5" />
              <p className="mt-6 text-navy-700 text-base md:text-lg leading-relaxed">
                Civiora Education &amp; Institutional Services is a Bengaluru-based partnership firm working with schools, colleges, universities and specialist education partners.
              </p>
              <p className="mt-4 text-navy-700 text-base md:text-lg leading-relaxed">
                We help institutions identify student-development priorities, establish appropriate engagement frameworks and coordinate implementation. Our role brings together consultation, planning, specialist alignment, student engagement, stakeholder communication and progress review.
              </p>
              <p className="mt-4 text-navy-700 text-base md:text-lg leading-relaxed">
                Each partnership reflects the institution’s objectives, student community and academic environment.
              </p>
            </div>
          </Reveal>

          {/* Section 2: Why Civiora exists */}
          <Reveal delay={120} className="flex h-full">
            <div className="flex flex-col justify-between w-full bg-mist rounded-2xl p-7 sm:p-9 border border-navy-100 shadow-[0_2px_8px_rgba(11,42,84,0.03)]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Lightbulb size={20} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-navy-900 font-semibold leading-snug">
                    Why Civiora exists
                  </h3>
                </div>
                <div className="gold-rule mt-4" />
                <p className="mt-5 text-navy-700 text-base sm:text-lg leading-relaxed">
                  Meaningful student development requires continuity between awareness, participation, guidance and follow-up.
                </p>
                <p className="mt-4 text-navy-900 text-base sm:text-lg leading-relaxed font-semibold">
                  Civiora helps institutions create that continuity through relevant expertise, clear responsibilities and organised execution.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-100/70 flex flex-wrap gap-4">
                <Link
                  to="/ecosystem"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-700 transition-colors group"
                >
                  <span>Partnership Framework</span>
                  <ArrowRight size={14} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-navy-300">•</span>
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-700 transition-colors group"
                >
                  <span>Founder &amp; Leadership</span>
                  <ArrowRight size={14} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 3: Vision & Mission */}
        <div className="mt-16 md:mt-24">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Guiding Principles
            </span>
            <h2 className="section-heading mt-4">
              Vision &amp; Mission
            </h2>
            <div className="gold-rule mx-auto mt-5" />
          </Reveal>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <Reveal delay={100} className="flex h-full">
              <div className="flex flex-col justify-between w-full bg-navy-900 text-white rounded-2xl p-7 sm:p-9 border border-white/10 shadow-lg">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 mb-6">
                    <Compass size={22} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-gold-400 font-semibold">
                    Vision
                  </h3>
                  <p className="mt-4 text-navy-100 text-base leading-relaxed">
                    To help educational institutions develop capable, confident and responsible students who can make informed choices and pursue meaningful careers.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180} className="flex h-full">
              <div className="flex flex-col justify-between w-full bg-navy-900 text-white rounded-2xl p-7 sm:p-9 border border-white/10 shadow-lg">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 mb-6">
                    <Target size={22} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-gold-400 font-semibold">
                    Mission
                  </h3>
                  <p className="mt-4 text-navy-100 text-base leading-relaxed">
                    To strengthen student capabilities and career direction through institution-specific planning, specialist expertise, coordinated implementation and agreed progress reviews.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Section 4: Pathways into Leadership & Framework */}
        <Reveal delay={150} className="mt-16 md:mt-24">
          <div className="bg-mist rounded-2xl p-8 sm:p-10 border border-navy-100 text-center max-w-3xl mx-auto shadow-[0_2px_8px_rgba(11,42,84,0.03)]">
            <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mx-auto mb-5 shadow-sm">
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-navy-900 font-semibold">
              Explore Our Institutional Architecture
            </h3>
            <div className="gold-rule mx-auto mt-4" />
            <p className="mt-5 text-navy-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Learn how our connected framework establishes clear responsibilities, and meet our founder to understand the pedagogical experience behind Civiora.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/ecosystem"
                className="btn-primary group"
              >
                <span>Partnership Framework</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/founder"
                className="btn-ghost text-navy-900 bg-white border border-navy-200 hover:border-gold-500 group"
              >
                <span>Founder &amp; Leadership</span>
                <ArrowRight size={15} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
