import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import Reveal from './Reveal';

export default function PageHeader({ 
  h1,
  title, 
  highlight, 
  openingHeadline,
  subtitle, 
  image, 
  imageAlt,
  breadcrumbText,
  imagePosition = "object-[center_20%] sm:object-top md:object-[center_top]",
  imageClassName = "",
}) {
  const displayTitle = h1 || (highlight ? `${title} ${highlight}` : title);
  const breadcrumb = breadcrumbText || title || h1;

  return (
    <div className="relative w-full pt-16 bg-navy-950 overflow-hidden">
      {/* 1. Full-Width Background Image Area with Refined Vignette */}
      <div className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[470px] lg:min-h-[520px] overflow-hidden flex items-end">
        {image && (
          <img
            src={image}
            alt={imageAlt || (typeof displayTitle === 'string' ? displayTitle : 'Civiora')}
            loading="eager"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${imagePosition} ${imageClassName}`}
          />
        )}

        {/* Ambient Dark Gradient Overlays for High Legibility & Depth */}
        {/* Vertical gradient: Grounds bottom text with solid contrast, softens at top on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/20 sm:to-navy-950/40" />
        {/* Horizontal gradient: rich dark on left behind text on larger screens, fading cleanly to preserve subject visibility */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-transparent max-w-4xl" />
        {/* Warm golden ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,150,42,0.16),_transparent_65%)]" />

        {/* Header Content Container */}
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 w-full">
          <Reveal>
            {/* Breadcrumb Navigation - Wrapped gracefully on narrow mobile screens */}
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm text-navy-200 mb-3 sm:mb-4 font-body leading-normal">
              <Link 
                to="/" 
                className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors focus:outline-none focus-visible:underline"
              >
                <Home size={14} className="text-gold-400 shrink-0" />
                <span>Home</span>
              </Link>
              <ChevronRight size={13} className="text-white/40 shrink-0" />
              <span className="text-gold-300 font-medium">{breadcrumb}</span>
            </nav>

            {/* Page H1 */}
            <h1 className="font-display text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.22] sm:leading-[1.2] tracking-tight max-w-4xl drop-shadow-sm">
              {h1 ? (
                h1
              ) : (
                <>
                  {title}{' '}
                  {highlight && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500">
                      {highlight}
                    </span>
                  )}
                </>
              )}
            </h1>

            {/* Gold Pathway Line */}
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mt-3 sm:mt-4" />

            {/* Opening Headline / Display Subtitle */}
            {openingHeadline && (
              <p className="mt-3 sm:mt-4 font-display italic text-gold-300 text-base sm:text-xl md:text-2xl max-w-3xl leading-snug drop-shadow-xs">
                {openingHeadline}
              </p>
            )}

            {/* Page Subtitle / Description */}
            {subtitle && (
              <p className="mt-2.5 sm:mt-3 text-navy-100 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed font-body">
                {subtitle}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
