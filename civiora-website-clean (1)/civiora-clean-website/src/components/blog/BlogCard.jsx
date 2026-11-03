import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import SpotlightCard from '../effects/SpotlightCard';

export default function BlogCard({ post, featured = false, dark = true }) {
  if (!post) return null;

  return (
    <SpotlightCard
      className={`h-full rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl text-left group transition-all duration-300 ${
        dark
          ? 'bg-navy-900/95 border border-white/15 hover:border-gold-400/60 backdrop-blur-md'
          : 'bg-white border border-navy-100 hover:border-gold-400/80 hover:shadow-2xl'
      } ${featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
      spotlightColor={dark ? 'rgba(0, 242, 254, 0.22)' : 'rgba(201, 150, 42, 0.15)'}
    >
      <div>
        {/* Cover Image Container */}
        {post.coverImage && (
          <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
            <img
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
            
            {/* Category Badge overlay */}
            <div className="absolute top-4 left-4 z-10">
              <span className="eyebrow-dark text-[11px] py-0.5 px-3 bg-navy-950/90 border-gold-400/40 shadow-sm text-gold-300">
                <BookOpen size={11} className="text-gold-400" />
                <span>{post.category}</span>
              </span>
            </div>

            {/* Regulatory badge if present */}
            {post.officialReference && (
              <div className="absolute top-4 right-4 z-10 hidden sm:block">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-400/50 text-emerald-300 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>Official Circular</span>
                </span>
              </div>
            )}
          </div>
        )}

        {/* Card Body */}
        <div className="p-6 sm:p-7 space-y-4">
          {/* Metadata Row: Date & Reading Time */}
          <div className={`flex items-center gap-4 text-xs font-medium ${dark ? 'text-slate-300' : 'text-navy-500'}`}>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} className="text-gold-500" />
              <span>{post.formattedDate}</span>
            </span>
            <span className={`w-1 h-1 rounded-full ${dark ? 'bg-white/40' : 'bg-navy-300'}`} />
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} className="text-gold-500" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Heading */}
          <h3 className={`font-display text-lg sm:text-xl font-bold leading-snug transition-colors ${
            dark 
              ? 'text-white group-hover:text-gold-300' 
              : 'text-navy-900 group-hover:text-gold-700'
          }`}>
            <Link to={`/blog/${post.slug}`} className="focus:outline-none">
              {post.heading || post.title}
            </Link>
          </h3>

          {/* Excerpt - HIGH CONTRAST */}
          <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${
            dark 
              ? 'text-slate-100 font-normal' 
              : 'text-navy-700 font-normal'
          }`}>
            {post.excerpt}
          </p>

          {/* Secondary Keyword Tags - HIGH CONTRAST */}
          {post.secondaryKeywords && (
            <div className="pt-2 flex flex-wrap gap-1.5">
              {post.secondaryKeywords.slice(0, 3).map((kw) => (
                <span
                  key={kw}
                  className={`text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md font-mono font-semibold transition-colors ${
                    dark
                      ? 'bg-navy-800/90 border border-gold-400/40 text-gold-300 shadow-sm'
                      : 'bg-navy-50 border border-navy-200/80 text-navy-800'
                  }`}
                >
                  #{kw}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Author and Read Action */}
      <div className={`p-6 sm:p-7 pt-0 border-t mt-4 flex items-center justify-between ${
        dark ? 'border-white/10' : 'border-navy-100'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold-500 to-gold-300 text-navy-950 font-bold text-xs flex items-center justify-center shadow-sm">
            {post.author.initials || 'CI'}
          </div>
          <div className="text-left">
            <p className={`text-xs font-semibold leading-tight ${dark ? 'text-white' : 'text-navy-900'}`}>
              {post.author.name}
            </p>
            <p className={`text-[11px] leading-tight mt-0.5 ${dark ? 'text-slate-300 font-medium' : 'text-navy-600'}`}>
              {post.author.role}
            </p>
          </div>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors group/link shrink-0 py-1 ${
            dark ? 'text-gold-400 hover:text-white' : 'text-gold-700 hover:text-navy-950'
          }`}
          aria-label={`Read full article: ${post.title}`}
        >
          <span>Read Article</span>
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </SpotlightCard>
  );
}
