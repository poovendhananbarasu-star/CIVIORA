import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCampusImg from '../assets/hero-campus-ecosystem.jpg';

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy-900 text-white overflow-hidden pt-24 md:pt-28 pb-16 md:pb-24">
      {/* Background radial gradient decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(201,150,42,0.12),_transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,_rgba(11,42,84,0.4),_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Short headline & supporting text */}
          <div className="lg:col-span-7 text-left">
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-gold-500/30 text-gold-300 text-xs md:text-sm font-medium tracking-wide mb-6">
              <Sparkles size={13} className="text-gold-400" />
              <span>Connecting Institutions. Building Future-Ready Ecosystems.</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.2] tracking-tight">
              Stronger Student Development. Clearer Career Pathways.
            </h1>

            {/* Subtle Gold Pathway Accent Line */}
            <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mt-6" />

            {/* Subtitle / Lead Paragraph */}
            <p className="mt-6 text-navy-100 text-base sm:text-lg md:text-xl leading-relaxed font-body">
              Civiora partners with schools, colleges and universities to understand student needs, design relevant development and career initiatives, and coordinate the expertise required for implementation.
            </p>

            {/* Support Line */}
            <p className="mt-4 text-gold-200/95 text-sm sm:text-base font-medium tracking-wide">
              Your institution’s priorities. Relevant expertise. Coordinated execution.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary group"
              >
                <span>Discuss an Institutional Partnership</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/how-it-works"
                className="btn-ghost group"
              >
                <Compass size={16} className="text-gold-400" />
                <span>Explore How We Work</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Purposeful Human Imagery */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-navy-950/40 bg-navy-950">
              <img
                src={heroCampusImg}
                alt="Institutional leaders discussing student development and career priorities."
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-900/90 backdrop-blur-md border border-white/15 text-white">
                <p className="text-xs sm:text-sm font-medium text-gold-300">
                  Institutional Learning &amp; Career Pathways Partner
                </p>
                <p className="text-[11px] sm:text-xs text-navy-200 mt-1">
                  Tailored planning, specialist expertise and coordinated implementation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
