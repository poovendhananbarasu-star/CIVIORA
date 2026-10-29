import { ArrowRight, Compass, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroEngagementImg from '../assets/selected-client-images/HO1-Civiora-Website-Main-Page-Hero.png';

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy-950 text-white overflow-hidden pt-16">
      
      {/* 1. Full-Width Background Image Area with Rich Ambient Overlays */}
      <div className="relative w-full min-h-[400px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[580px] overflow-hidden flex items-end">
        {/* Background Image - Framed to keep educators/leaders visible on mobile */}
        <img
          src={heroEngagementImg}
          alt="Civiora institutional leaders and educators discussing student development priorities."
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] sm:object-center scale-100 sm:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Ambient Dark Gradient Overlays for High Legibility & Depth */}
        {/* Vertical gradient: Deep navy at bottom to guarantee AAA text contrast, smooth fade to top so faces remain visible and vibrant */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/25 sm:to-navy-950/45" />
        {/* Horizontal gradient: richer on left behind headline text on desktop */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-transparent max-w-4xl" />
        {/* Warm golden ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,150,42,0.18),_transparent_65%)]" />

        {/* Hero Header Overlay Container */}
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-16 w-full">

          {/* Primary H1 Heading */}
          <h1 className="font-display text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.22] sm:leading-[1.2] tracking-tight max-w-3xl drop-shadow-sm">
            Connecting Institutions. Building Future-Ready Ecosystems.
          </h1>

          {/* Gold Pathway Divider Rule */}
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mt-3 sm:mt-4" />

          {/* Opening Headline / Italic Subtitle in Gold */}
          <p className="mt-3 sm:mt-4 font-display italic text-gold-300 text-base sm:text-xl md:text-2xl max-w-2xl leading-snug drop-shadow-xs">
            Stronger Student Development. Clearer Career Pathways.
          </p>
        </div>
      </div>

      {/* 2. Text & Actions Area */}
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 text-center">

        {/* Subtitle / Lead Paragraph */}
        <p className="text-navy-100 text-sm sm:text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-body">
          Civiora partners with schools, colleges and universities to understand student needs, design relevant development and career initiatives, and coordinate the expertise required for implementation.
        </p>

        {/* Supporting Line */}
        <p className="mt-3 sm:mt-4 text-gold-300 text-xs sm:text-sm md:text-base font-medium tracking-wide max-w-2xl mx-auto">
          Your institution’s priorities. Relevant expertise. Coordinated execution.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <Link
            to="/contact"
            className="btn-primary w-full sm:w-auto text-center justify-center group"
          >
            <span>Discuss an Institutional Partnership</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
          </Link>

          <Link
            to="/how-it-works"
            className="btn-ghost w-full sm:w-auto text-center justify-center group"
          >
            <Compass size={16} className="text-gold-400 shrink-0" />
            <span>Explore How We Work</span>
          </Link>
        </div>

        {/* Down Chevron Indicator */}
        <div className="mt-8 sm:mt-12 md:mt-14 flex justify-center">
          <a
            href="#outcomes"
            aria-label="Scroll to student outcomes section"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white/40 hover:text-gold-400 transition-colors animate-bounce p-2 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-full"
          >
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
