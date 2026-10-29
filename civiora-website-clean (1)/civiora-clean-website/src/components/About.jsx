import { Link } from 'react-router-dom';
import { Compass, Target, ShieldCheck, ArrowRight, Lightbulb, Users, Award } from 'lucide-react';
import Reveal from './Reveal';
import whyWeExistImg from '../assets/selected-client-images/A02-Who-we-are.png';
import missionImg from '../assets/selected-client-images/A03-Mission.png';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section 1: Introduction & Why Civiora exists */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal className="flex flex-col justify-between">
            <div>
              <h2 className="section-heading">
                An Institutional Partner for Student Development and Career Direction
              </h2>
              <div className="gold-rule mt-5" />
              <p className="mt-6 text-navy-700 text-base md:text-lg leading-relaxed">
                Civiora Education &amp; Institutional Services is a Bengaluru-based partnership firm working with schools, colleges, universities and specialist education partners.
              </p>
              <p className="mt-4 text-navy-700 text-base md:text-lg leading-relaxed">
                We support institutions to identify student-development priorities, establish appropriate engagement frameworks and coordinate implementation. Our role brings together consultation, planning, specialist alignment, student engagement, stakeholder communication and progress review.
              </p>
              <p className="mt-4 text-navy-700 text-base md:text-lg leading-relaxed">
                Each partnership reflects the institution’s objectives, student community and academic environment.
              </p>
            </div>
          </Reveal>

          {/* Section 2: Why Civiora exists */}
          <Reveal delay={120} className="flex h-full">
            <div className="flex flex-col justify-between w-full bg-mist rounded-2xl p-4 sm:p-9 border border-navy-100 shadow-[0_2px_8px_rgba(11,42,84,0.03)]">
              <div>
                <div className="overflow-hidden rounded-xl mb-6 aspect-[16/10] border border-navy-100 bg-white shadow-sm">
                  <img
                    src={whyWeExistImg}
                    alt="Civiora team and students in purposeful discussion on career pathways."
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
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
                  Civiora supports institutions to create that continuity through relevant expertise, clear responsibilities and organised execution.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-100/70 flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs sm:text-sm">
                <Link
                  to="/ecosystem"
                  className="inline-flex items-center gap-1.5 font-semibold text-navy-900 hover:text-gold-700 transition-colors group"
                >
                  <span>Partnership Framework</span>
                  <ArrowRight size={13} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-navy-300 hidden sm:inline">•</span>
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-1.5 font-semibold text-navy-900 hover:text-gold-700 transition-colors group"
                >
                  <span>Founder &amp; Leadership</span>
                  <ArrowRight size={13} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-navy-300 hidden sm:inline">•</span>
                <Link
                  to="/network"
                  className="inline-flex items-center gap-1.5 font-semibold text-navy-900 hover:text-gold-700 transition-colors group"
                >
                  <span>Academic &amp; Specialist Partners</span>
                  <ArrowRight size={13} className="text-gold-600 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 3: Vision & Mission */}
        <div className="mt-16 md:mt-24">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="section-heading">
              Vision &amp; Mission
            </h2>
            <div className="gold-rule mx-auto mt-5" />
          </Reveal>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <Reveal delay={100} className="flex h-full">
              <div className="flex flex-col justify-between w-full bg-navy-900 text-white rounded-2xl p-5 sm:p-9 border border-white/10 shadow-lg">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 mb-6">
                    <Compass size={22} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-gold-400 font-semibold">
                    Vision
                  </h3>
                  <p className="mt-4 text-navy-100 text-base leading-relaxed">
                    To support educational institutions to develop capable, confident and responsible students who can make informed choices and pursue meaningful careers.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180} className="flex h-full">
              <div className="flex flex-col justify-between w-full bg-navy-900 text-white rounded-2xl p-5 sm:p-9 border border-white/10 shadow-lg">
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

          <Reveal delay={200} className="mt-8 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-sm bg-white">
              <img
                src={missionImg}
                alt="Civiora mission and student capability development engagement."
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </Reveal>
        </div>

        {/* Section 4: Pathways into Leadership & Framework */}
        <Reveal delay={150} className="mt-16 md:mt-24">
          <div className="bg-mist rounded-2xl p-5 sm:p-10 border border-navy-100 text-center max-w-3xl mx-auto shadow-[0_2px_8px_rgba(11,42,84,0.03)]">
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
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/ecosystem"
                className="btn-primary w-full sm:w-auto text-center justify-center group"
              >
                <span>Partnership Framework</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/founder"
                className="btn-primary w-full sm:w-auto text-center justify-center group"
              >
                <span>Founder &amp; Leadership</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/network"
                className="btn-primary w-full sm:w-auto text-center justify-center group"
              >
                <span>Academic &amp; Specialist Partners</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
