import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function PageHeader({ 
  h1,
  title, 
  highlight, 
  openingHeadline,
  subtitle, 
  eyebrow, 
  image, 
  imageAlt,
  breadcrumbText,
  badgeText = "Institutional Solutions"
}) {
  const displayTitle = h1 || (highlight ? `${title} ${highlight}` : title);
  const breadcrumb = breadcrumbText || title || h1;

  return (
    <div className="relative w-full pt-16 bg-navy-900 overflow-hidden">
      {/* 1. Full-Width Background Image Area with Vignette */}
      <div className="relative w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[440px] overflow-hidden flex items-end">
        {image && (
          <img
            src={image}
            alt={imageAlt || displayTitle}
            className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          />
        )}

        {/* Ambient Dark Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/75 to-navy-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,150,42,0.12),_transparent_65%)]" />

        {/* Header Content Container */}
        <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 py-10 md:py-14 w-full">
          <Reveal>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-navy-200 mb-4 font-body">
              <Link 
                to="/" 
                className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors focus:outline-none focus-visible:underline"
              >
                <Home size={14} className="text-gold-400" />
                <span>Home</span>
              </Link>
              <ChevronRight size={13} className="text-white/40" />
              <span className="text-gold-300 font-medium">{breadcrumb}</span>
            </nav>

            {/* Eyebrow Badge */}
            {eyebrow && (
              <div className="eyebrow-dark mb-4">
                <Sparkles size={12} className="text-gold-400" />
                <span>{eyebrow}</span>
              </div>
            )}

            {/* Page H1 */}
            <h1 className="font-display text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.2] tracking-tight max-w-4xl">
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

            {/* Opening Headline / Display Subtitle */}
            {openingHeadline && (
              <p className="mt-4 font-display italic text-gold-300 text-lg sm:text-xl md:text-2xl max-w-3xl leading-snug">
                {openingHeadline}
              </p>
            )}

            {/* Page Subtitle / Description */}
            {subtitle && (
              <p className="mt-3 text-navy-100 text-sm md:text-base max-w-3xl leading-relaxed font-body">
                {subtitle}
              </p>
            )}
          </Reveal>
        </div>

        {/* Floating Tag in Image */}
        {badgeText && (
          <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950/85 border border-white/10 text-white/90 text-xs shadow-lg backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="font-medium tracking-wide">{badgeText}</span>
          </div>
        )}
      </div>
    </div>
  );
}
