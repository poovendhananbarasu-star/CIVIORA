import { Link } from 'react-router-dom';
import { 
  Building2, 
  Layers, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Reveal from './Reveal';
import studentEngagementImg from '../assets/selected-client-images/ECO-03-student-engagement.jpeg';

const STAKEHOLDERS = [
  {
    icon: Building2,
    role: 'Institution',
    responsibilities: 'Defines priorities, nominates contacts and supports local implementation.',
    accent: 'bg-navy-900 text-gold-400',
  },
  {
    icon: Layers,
    role: 'Civiora',
    responsibilities: 'Coordinates planning, specialist alignment, communication and agreed reviews.',
    accent: 'bg-gold-500 text-navy-950',
    highlight: true,
  },
  {
    icon: Users,
    role: 'Academic & Specialist Partners',
    responsibilities: 'Contribute expertise and fulfil agreed delivery responsibilities.',
    accent: 'bg-navy-900 text-gold-400',
  },
  {
    icon: GraduationCap,
    role: 'Students',
    responsibilities: 'Participate, engage with guidance and provide feedback.',
    accent: 'bg-navy-900 text-gold-400',
  },
  {
    icon: HeartHandshake,
    role: 'Parents, where relevant',
    responsibilities: 'Receive appropriate communication and development information within the agreed scope.',
    accent: 'bg-navy-900 text-gold-400',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative bg-white py-16 md:py-24 overflow-hidden font-body">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section 1: Introduction */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="section-heading mt-4">
            A Connected Framework with Clear Responsibilities
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mt-5 text-navy-700 text-base md:text-lg leading-relaxed">
            An effective institutional engagement brings together leadership priorities, relevant specialist expertise and student participation. Civiora coordinates these relationships around an agreed requirement and implementation plan.
          </p>
        </Reveal>

        {/* Section 2: Developer-built Stakeholder Diagram */}
        <Reveal delay={100} className="mt-14 md:mt-20">
          <div className="bg-navy-950 text-white rounded-3xl p-4 sm:p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="text-center max-w-2xl mx-auto relative z-10 mb-10 md:mb-14">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                Architecture of Collaboration
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-white mt-2">
                Five-Stakeholder Governance Matrix
              </h3>
              <p className="text-navy-300 text-xs sm:text-sm mt-2">
                How priorities, delivery, and student participation intersect through central coordination.
              </p>
            </div>

            {/* Visual Flow Architecture */}
            <div className="relative z-10 grid md:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              {/* Institution Box (Left/Top) */}
              <div className="md:col-span-4 bg-navy-900/90 rounded-2xl p-4 sm:p-6 border border-white/10 shadow-lg flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center shrink-0">
                    <Building2 size={20} />
                  </div>
                  <h4 className="text-base sm:text-lg font-display font-semibold text-white">Institution</h4>
                </div>
                <p className="text-navy-200 text-xs sm:text-sm mt-3 leading-relaxed">
                  Defines priorities, nominates contacts and supports local implementation.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-gold-300">
                  <CheckCircle2 size={12} />
                  <span>Strategic direction &amp; campus resources</span>
                </div>
              </div>

              {/* Central Hub: Civiora */}
              <div className="md:col-span-4 bg-gradient-to-b from-navy-800 to-navy-900 rounded-2xl p-4 sm:p-7 border-2 border-gold-500/80 shadow-2xl text-center relative">
                <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center mx-auto shadow-md font-bold">
                  <Layers size={24} />
                </div>
                <span className="inline-block mt-3 px-3 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[11px] font-semibold uppercase tracking-wider">
                  Coordinating Partner
                </span>
                <h4 className="text-xl font-display font-bold text-white mt-2">Civiora</h4>
                <p className="text-navy-100 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                  Coordinates planning, specialist alignment, communication and agreed reviews.
                </p>
                <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-gold-300 font-medium">
                  Single Point of Accountability
                </div>
              </div>

              {/* Academic & Specialist Partners Box (Right/Top) */}
              <div className="md:col-span-4 bg-navy-900/90 rounded-2xl p-4 sm:p-6 border border-white/10 shadow-lg flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <h4 className="text-base sm:text-lg font-display font-semibold text-white">Academic &amp; Specialist Partners</h4>
                </div>
                <p className="text-navy-200 text-xs sm:text-sm mt-3 leading-relaxed">
                  Contribute expertise and fulfil agreed delivery responsibilities.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-gold-300">
                  <CheckCircle2 size={12} />
                  <span>Domain curriculum &amp; mentorship delivery</span>
                </div>
              </div>

              {/* Bottom Row: Students & Parents */}
              <div className="md:col-span-6 bg-navy-900/90 rounded-2xl p-4 sm:p-6 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-display font-semibold text-white">Students</h4>
                    <span className="text-[11px] text-gold-400 font-medium">Primary Beneficiaries</span>
                  </div>
                </div>
                <p className="text-navy-200 text-xs sm:text-sm mt-3 leading-relaxed">
                  Participate, engage with guidance and provide feedback.
                </p>
              </div>

              <div className="md:col-span-6 bg-navy-900/90 rounded-2xl p-4 sm:p-6 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center shrink-0">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-display font-semibold text-white">Parents, where relevant</h4>
                    <span className="text-[11px] text-gold-400 font-medium">Informed Stakeholders</span>
                  </div>
                </div>
                <p className="text-navy-200 text-xs sm:text-sm mt-3 leading-relaxed">
                  Receive appropriate communication and development information within the agreed scope.
                </p>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Section 3: Detailed Responsibilities Cards */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-navy-900">
              Defined Stakeholder Roles
            </h3>
            <p className="mt-2 text-navy-600 text-sm md:text-base">
              Clear roles make collaboration easier to implement and review.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {STAKEHOLDERS.map((s, idx) => (
              <Reveal key={s.role} delay={idx * 60} className="flex h-full">
                <div className={`flex flex-col justify-between w-full rounded-2xl p-5 sm:p-7 border transition-all duration-300 ${
                  s.highlight 
                    ? 'bg-navy-900 text-white border-gold-400/50 shadow-xl' 
                    : 'bg-mist text-navy-900 border-navy-100 hover:border-gold-400 hover:shadow-lg'
                }`}>
                  <div>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${s.accent}`}>
                      <s.icon size={22} />
                    </div>
                    <h4 className={`font-display text-xl font-semibold ${s.highlight ? 'text-gold-300' : 'text-navy-900'}`}>
                      {s.role}
                    </h4>
                    <p className={`mt-3 text-sm leading-relaxed ${s.highlight ? 'text-navy-100' : 'text-navy-700'}`}>
                      {s.responsibilities}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Supporting Student Engagement Section */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <Reveal delay={100}>
            <div className="bg-mist rounded-3xl p-4 sm:p-8 md:p-10 border border-navy-100 shadow-sm overflow-hidden grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-2xl shadow-md border border-navy-100/80 bg-white">
                <img
                  src={studentEngagementImg}
                  alt="Poovendhan Anbarasu presenting active student development and career insights during an institutional session."
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 sm:h-80 object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-display text-2xl text-navy-900 font-semibold leading-snug">
                  Active Student Participation &amp; Progress
                </h3>
                <p className="text-navy-700 text-sm sm:text-base leading-relaxed">
                  Students are the core of every institutional engagement. Through structured guidance, collaborative exploration, and constructive feedback, learners are supported in developing key capabilities, discovering career pathways, and building long-term academic confidence.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-navy-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                    <span>Constructive participation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-gold-600 shrink-0" />
                    <span>Feedback &amp; progress review</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 4: Closing Line & CTA */}
        <Reveal delay={150} className="mt-16 md:mt-24 text-center">
          <div className="max-w-2xl mx-auto bg-mist rounded-2xl p-5 sm:p-10 border border-navy-100">
            <ShieldCheck size={28} className="text-gold-600 mx-auto mb-3" />
            <h3 className="font-display text-xl md:text-2xl text-navy-900 leading-snug font-semibold">
              Clear roles make collaboration easier to implement and review.
            </h3>
            <div className="mt-8">
              <Link
                to="/contact"
                className="btn-primary w-full sm:w-auto text-center justify-center"
              >
                <span>Explore an Institutional Partnership</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
