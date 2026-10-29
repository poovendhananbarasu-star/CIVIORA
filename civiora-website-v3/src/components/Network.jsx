import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Users2,
  FileCheck2,
  Compass,
  GraduationCap
} from 'lucide-react';
import Reveal from './Reveal';

const CONSIDERATIONS = [
  {
    icon: Compass,
    title: 'Relevant Experience',
    desc: 'Demonstrated domain expertise and pedagogical track record in the subject area.',
  },
  {
    icon: GraduationCap,
    title: 'Learner Group Suitability',
    desc: 'Pedagogical maturity and engagement approach suited to the specific age group and cohort.',
  },
  {
    icon: FileCheck2,
    title: 'Delivery Capacity & References',
    desc: 'Consistent availability, verified delivery credentials and professional references where available.',
  },
];

export default function Network() {
  return (
    <section id="network" className="relative bg-white py-16 md:py-24 font-body">
      <div className="max-w-content mx-auto px-6 md:px-10">
        
        {/* Intro */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            Specialist Alignment
          </span>
          <h2 className="section-heading mt-4">
            Relevant Expertise. Clear Expectations. Coordinated Delivery.
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mt-5 text-navy-700 text-base md:text-lg leading-relaxed">
            Civiora works with educators, mentors and specialist organisations whose expertise matches institutional requirements.
          </p>
          <p className="mt-3 text-navy-600 text-sm md:text-base leading-relaxed">
            Partner consideration includes relevant experience, suitability for the student group, delivery capacity and professional references where available. Responsibilities and communication arrangements are agreed before implementation.
          </p>
        </Reveal>

        {/* Section 1: Partner Consideration Criteria */}
        <div className="mt-14 md:mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-navy-900">
              Partner Consideration Standards
            </h3>
            <p className="mt-2 text-navy-600 text-sm">
              How specialist educators and academic partners are evaluated for institutional engagements.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {CONSIDERATIONS.map((c, idx) => (
              <Reveal key={c.title} delay={idx * 70} className="flex h-full">
                <div className="bg-mist rounded-2xl p-6 border border-navy-100 hover:border-gold-400 transition-all duration-200 flex flex-col justify-between w-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-4 shadow-sm">
                      <c.icon size={18} />
                    </div>
                    <h4 className="font-display text-base font-semibold text-navy-900">
                      {c.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-navy-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Section 2: For Institutions and Prospective Partners */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* For institutions */}
          <Reveal className="flex h-full">
            <div className="flex flex-col justify-between w-full bg-white rounded-2xl p-7 sm:p-9 border border-navy-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-sm">
                  <Building2 size={20} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-navy-900 font-semibold leading-snug">
                  For Institutions
                </h3>
                <p className="mt-3.5 text-navy-700 text-sm sm:text-base leading-relaxed">
                  Discuss the specialised expertise your students need and how Civiora can coordinate delivery within your institutional calendar.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-navy-100">
                <Link
                  to="/contact"
                  className="btn-secondary w-full sm:w-auto"
                >
                  <span>Discuss Institutional Needs</span>
                  <ArrowRight size={15} className="text-gold-400" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* For prospective partners */}
          <Reveal delay={120} className="flex h-full">
            <div className="flex flex-col justify-between w-full bg-navy-900 text-white rounded-2xl p-7 sm:p-9 border border-white/10 shadow-sm hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-11 h-11 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center mb-6 shadow-sm">
                  <Users2 size={20} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-white font-semibold leading-snug">
                  For Prospective Partners
                </h3>
                <p className="mt-3.5 text-navy-200 text-sm sm:text-base leading-relaxed">
                  Share your specialisation, professional profiles, delivery approach and examples of relevant work.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-white/10">
                <Link
                  to="/contact?type=Academic%2FSpecialist%20Partner"
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>Discuss an Academic Partnership</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
