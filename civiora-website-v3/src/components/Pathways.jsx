import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Landmark, 
  Building,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Reveal from './Reveal';

const FAQS = [
  {
    q: 'Are engagements fixed?',
    a: 'No. Scope, delivery arrangements and review expectations are developed around institutional requirements.',
  },
  {
    q: 'Can Civiora work alongside existing initiatives?',
    a: 'Yes. The engagement is planned with the institution’s existing support and academic commitments in mind.',
  },
  {
    q: 'How does a partnership begin?',
    a: 'With a discussion of priorities, student context and implementation requirements.',
  },
];

export default function Pathways() {
  return (
    <section id="pathways" className="relative bg-white py-16 md:py-24 overflow-hidden font-body">
      <div className="max-w-content mx-auto px-6 md:px-10">
        
        {/* Intro Section */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            Institutional Context
          </span>
          <h2 className="section-heading mt-4">
            Different Institutions. Distinct Priorities. A Tailored Approach.
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mt-5 text-navy-700 text-base md:text-lg leading-relaxed">
            Every institution has its own student community, academic commitments and development priorities. Civiora begins by understanding that context and works with institutional leadership to develop an appropriate engagement approach.
          </p>

          {/* Quick Anchor Jumps */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a 
              href="#schools" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-mist text-navy-800 border border-navy-100 hover:border-gold-500 hover:text-gold-700 transition-colors"
            >
              Schools
            </a>
            <a 
              href="#colleges" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-mist text-navy-800 border border-navy-100 hover:border-gold-500 hover:text-gold-700 transition-colors"
            >
              Colleges
            </a>
            <a 
              href="#universities" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-mist text-navy-800 border border-navy-100 hover:border-gold-500 hover:text-gold-700 transition-colors"
            >
              Universities
            </a>
          </div>
        </Reveal>

        {/* 3 Main Sections: Schools, Colleges, Universities */}
        <div className="mt-16 md:mt-24 space-y-12 md:space-y-16">
          
          {/* 1. Schools */}
          <div id="schools" className="scroll-mt-28">
            <Reveal>
              <div className="bg-mist rounded-3xl p-8 sm:p-10 md:p-12 border border-navy-100 shadow-sm hover:border-gold-400 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-gold-700">
                        School Partnerships
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl text-navy-900 font-semibold leading-snug">
                        Schools — Build Capabilities Alongside Academic Learning
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="gold-rule mt-6" />

                <div className="mt-6 grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4 text-navy-700 text-base md:text-lg leading-relaxed">
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

                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <div className="p-6 bg-white rounded-2xl border border-navy-100/80 shadow-sm text-center">
                      <p className="text-xs text-navy-500 uppercase tracking-wider font-medium">Next Step</p>
                      <h4 className="font-display text-lg text-navy-900 font-semibold mt-1">Explore School Initiatives</h4>
                      <p className="text-xs text-navy-600 mt-2">Tailored consultation suited to your academic calendar.</p>
                      <div className="mt-5">
                        <Link
                          to="/contact?type=School"
                          className="btn-primary w-full text-center justify-center text-xs sm:text-sm py-2.5"
                        >
                          <span>Discuss a School Partnership</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 2. Colleges */}
          <div id="colleges" className="scroll-mt-28">
            <Reveal>
              <div className="bg-mist rounded-3xl p-8 sm:p-10 md:p-12 border border-navy-100 shadow-sm hover:border-gold-400 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                      <Landmark size={24} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-gold-700">
                        College Partnerships
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl text-navy-900 font-semibold leading-snug">
                        Colleges — Connect Career Aspirations with Informed Direction
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="gold-rule mt-6" />

                <div className="mt-6 grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4 text-navy-700 text-base md:text-lg leading-relaxed">
                    <p>
                      Civiora helps colleges understand student interests and coordinate relevant guidance, specialist expertise and sustained engagement.
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

                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <div className="p-6 bg-white rounded-2xl border border-navy-100/80 shadow-sm text-center">
                      <p className="text-xs text-navy-500 uppercase tracking-wider font-medium">Next Step</p>
                      <h4 className="font-display text-lg text-navy-900 font-semibold mt-1">Strengthen College Direction</h4>
                      <p className="text-xs text-navy-600 mt-2">Connect student ambitions with purposeful guidance.</p>
                      <div className="mt-5">
                        <Link
                          to="/contact?type=College"
                          className="btn-primary w-full text-center justify-center text-xs sm:text-sm py-2.5"
                        >
                          <span>Discuss a College Partnership</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3. Universities */}
          <div id="universities" className="scroll-mt-28">
            <Reveal>
              <div className="bg-mist rounded-3xl p-8 sm:p-10 md:p-12 border border-navy-100 shadow-sm hover:border-gold-400 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                      <Building size={24} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-gold-700">
                        University Partnerships
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl text-navy-900 font-semibold leading-snug">
                        Universities — Coordinate Student Development Across Departments and Campuses
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="gold-rule mt-6" />

                <div className="mt-6 grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4 text-navy-700 text-base md:text-lg leading-relaxed">
                    <p>
                      Civiora works with university leadership to connect central priorities with department and campus requirements.
                    </p>
                    <p>
                      An agreed framework can include designated coordinators, shared specialist resources, local implementation and consolidated reviews. A defined pilot supports informed decisions about wider adoption.
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

                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <div className="p-6 bg-white rounded-2xl border border-navy-100/80 shadow-sm text-center">
                      <p className="text-xs text-navy-500 uppercase tracking-wider font-medium">Next Step</p>
                      <h4 className="font-display text-lg text-navy-900 font-semibold mt-1">Multi-Campus Coordination</h4>
                      <p className="text-xs text-navy-600 mt-2">Pilot framework and unified progress reviews.</p>
                      <div className="mt-5">
                        <Link
                          to="/contact?type=University"
                          className="btn-primary w-full text-center justify-center text-xs sm:text-sm py-2.5"
                        >
                          <span>Discuss a University Partnership</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Section 4: Frequently Asked Questions */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <span className="eyebrow">
              <HelpCircle size={14} className="text-gold-600" />
              <span>Questions &amp; Clarity</span>
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-navy-900 font-semibold mt-3">
              Frequently Asked Questions
            </h3>
            <div className="gold-rule mx-auto mt-4" />
          </Reveal>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <Reveal key={faq.q} delay={idx * 60}>
                <div className="bg-mist rounded-2xl p-6 sm:p-7 border border-navy-100">
                  <h4 className="font-display text-base sm:text-lg font-semibold text-navy-900">
                    {faq.q}
                  </h4>
                  <p className="mt-2.5 text-navy-700 text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <Reveal delay={150} className="mt-16 md:mt-24 text-center">
          <div className="max-w-2xl mx-auto bg-navy-900 text-white rounded-3xl p-8 sm:p-11 border border-white/10 shadow-xl">
            <Sparkles size={24} className="text-gold-400 mx-auto mb-3" />
            <h3 className="font-display text-xl sm:text-2xl text-white font-semibold">
              Begin with Your Institution’s Priorities
            </h3>
            <p className="mt-3 text-navy-200 text-sm sm:text-base leading-relaxed">
              Explore how Civiora can tailor student development and career initiatives to your school, college or university.
            </p>
            <div className="mt-7">
              <Link
                to="/contact"
                className="btn-primary"
              >
                <span>Discuss an Institutional Partnership</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
