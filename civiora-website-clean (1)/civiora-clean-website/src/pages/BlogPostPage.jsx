import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  CheckCircle2,
  FileText,
  ExternalLink,
  ShieldCheck,
  Users,
  GraduationCap,
  Sparkles,
  BookOpen,
  Compass,
  ArrowRight,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/effects/SpotlightCard';
import WaveCanvas from '../components/effects/WaveCanvas';
import AmbientShapes from '../components/effects/AmbientShapes';
import BlogCard from '../components/blog/BlogCard';
import { getBlogPostBySlug, getRecentBlogPosts } from '../data/blogPosts';
import logo from '../assets/civiora-logo-full-lockup-transparent.png';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = getBlogPostBySlug(slug);
  const relatedPosts = getRecentBlogPosts(2, slug);

  // Scroll Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-mist text-ink flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-navy-100 text-center shadow-lg space-y-4">
          <AlertCircle size={48} className="mx-auto text-gold-600" />
          <h1 className="font-display text-2xl font-bold text-navy-900">
            Article Not Found
          </h1>
          <p className="text-sm text-navy-600 leading-relaxed">
            The article you are searching for might have been moved, updated, or does not exist.
          </p>
          <div className="pt-2">
            <Link to="/blog" className="btn-primary text-xs py-2.5 px-6 inline-flex">
              <ArrowLeft size={14} />
              <span>Back to All Articles</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`${post.heading}\n\n${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      '_blank'
    );
  };

  const shareOnX = () => {
    const text = encodeURIComponent(`${post.heading} - ${post.primaryKeyword}`);
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${text}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-mist text-ink font-body selection:bg-gold-200 selection:text-navy-900">
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        canonicalUrl={`${window.location.origin}/blog/${post.slug}`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.heading,
          description: post.metaDescription || post.excerpt,
          datePublished: post.publishedDate,
          dateModified: post.publishedDate,
          keywords: [post.primaryKeyword, ...(post.secondaryKeywords || [])].join(', '),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${window.location.origin}/blog/${post.slug}`
          },
          author: {
            '@type': 'Organization',
            name: post.author.name
          },
          publisher: {
            '@type': 'Organization',
            name: 'Civiora Education & Institutional Services',
            logo: {
              '@type': 'ImageObject',
              url: typeof window !== 'undefined' ? `${window.location.origin}${logo}` : `https://civiora.co.in${logo}`
            }
          }
        }}
      />

      {/* Reading Progress Indicator Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-cyan-400 to-indigo-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <main id="main-content" className="pt-16 sm:pt-20">
        {/* 1. Header Section - Dark Navy with Ambient Wave & Orbs */}
        <header className="relative overflow-hidden bg-navy-950 text-white py-12 sm:py-16 md:py-20 border-b border-navy-900">
          <WaveCanvas opacity={0.35} />
          <AmbientShapes />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            {/* Breadcrumb & Navigation */}
            <div className="flex items-center justify-between gap-4 mb-6 text-xs text-navy-200">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-gold-300 hover:text-white transition-colors group focus:outline-none"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span>All Articles &amp; Insights</span>
              </Link>

              <div className="hidden sm:flex items-center gap-2 text-navy-300">
                <Link to="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-white">Blog</Link>
                <span>/</span>
                <span className="text-gold-300 truncate max-w-[200px]">{post.category}</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="eyebrow-dark text-[11px] py-0.5 px-3">
                <BookOpen size={11} className="text-gold-400" />
                <span>{post.category}</span>
              </span>

              {post.officialReference && (
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>Official CBSE Circular 02/2026</span>
                </span>
              )}
            </div>

            {/* Main Article Title */}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white font-bold leading-[1.2] tracking-tight">
              {post.heading}
            </h1>

            {/* Author, Date & Reading Time Bar */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-500 to-gold-300 text-navy-950 font-bold text-sm flex items-center justify-center shadow-md">
                  {post.author.initials || 'CI'}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {post.author.name}
                  </p>
                  <p className="text-[11px] text-navy-200">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-navy-200">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} className="text-gold-400" />
                  <span>{post.formattedDate}</span>
                </span>
                <span className="w-1 h-1 rounded-full bg-navy-400" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} className="text-gold-400" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Article Body & Content */}
        <article className="py-12 sm:py-16 bg-white border-b border-navy-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">
            
            {/* Featured Image Banner */}
            {post.coverImage && (
              <div className="rounded-2xl overflow-hidden shadow-md border border-navy-100 bg-navy-900">
                <img
                  src={post.coverImage}
                  alt={post.coverAlt || post.heading}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[440px] object-cover object-center"
                />
                <div className="py-2.5 px-4 bg-navy-950/80 text-[11px] text-navy-200 border-t border-navy-800 text-left">
                  {post.photoCaption || 'Photo: Structured career guidance and student capability development in Indian school campuses.'}
                </div>
              </div>
            )}

            {/* Introduction Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-navy-800 leading-relaxed font-body">
              {post.content.intro.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'text-lg sm:text-xl font-medium text-navy-900 leading-relaxed' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* Official Reference Banner Callout */}
            {post.officialReference && (
              <SpotlightCard
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-950 text-white border border-gold-400/40 shadow-lg text-left"
                spotlightColor="rgba(0, 242, 254, 0.2)"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 uppercase tracking-wider">
                      <FileText size={14} />
                      <span>Official Regulatory Reference</span>
                    </div>
                    <h2 className="font-display text-sm sm:text-base font-bold text-white">
                      {post.officialReference.title} ({post.officialReference.date})
                    </h2>
                    <p className="text-xs text-navy-200">
                      {post.officialReference.clause}
                    </p>
                  </div>

                  <a
                    href={post.officialReference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2.5 px-4 shrink-0 justify-center w-full sm:w-auto"
                  >
                    <span>Read Official Circular (PDF)</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </SpotlightCard>
            )}

            {/* Generalized Content Sections (if present) */}
            {post.content.sections && post.content.sections.map((sec, sIdx) => (
              <section key={sIdx} className="space-y-6 pt-6 border-t border-navy-100">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 leading-snug">
                  {sec.title}
                </h2>

                {sec.paragraphs && (
                  <div className="space-y-4 text-base sm:text-lg text-navy-800 leading-relaxed font-body">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                )}

                {sec.bullets && (
                  <ul className="space-y-3.5 my-5 pl-1">
                    {sec.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3.5 text-base sm:text-lg text-navy-800 leading-relaxed">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold-500 mt-2 shrink-0 ring-4 ring-gold-100" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.closingParagraphs && (
                  <div className="space-y-4 text-base sm:text-lg text-navy-800 leading-relaxed font-body pt-1">
                    {sec.closingParagraphs.map((cp, cpIdx) => (
                      <p key={cpIdx}>{cp}</p>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Custom Structured CBSE Sections (if present) */}
            {post.content.changes && (
              <>
                {/* Section 1: What Has CBSE Changed? */}
                <section className="space-y-6 pt-4 border-t border-navy-100">
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 leading-snug">
                    {post.content.changes.title}
                  </h2>

                  <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                    {post.content.changes.context}
                  </p>

                  {/* Requirements Grid (5 Key Mandates) */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {post.content.changes.requirements.map((req, idx) => (
                      <SpotlightCard
                        key={idx}
                        className="p-5 rounded-xl bg-mist border border-navy-100/80 shadow-xs hover:border-gold-400/50 transition-all text-left space-y-2.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="w-6 h-6 rounded-full bg-navy-900 text-gold-400 text-xs font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-[11px] font-mono font-semibold text-gold-800 bg-gold-100 px-2 py-0.5 rounded">
                            {req.highlight}
                          </span>
                        </div>
                        <h3 className="font-display text-sm sm:text-base font-bold text-navy-900">
                          {req.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                          {req.desc}
                        </p>
                      </SpotlightCard>
                    ))}
                  </div>

                  {/* Planning Recommendation Alert Box */}
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                    <AlertCircle size={18} className="text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Affiliation Planning Note: </span>
                      {post.content.changes.planningNote}
                    </div>
                  </div>
                </section>

                {/* Section 2: What Should Principals Review? */}
                {post.content.practicalSteps && (
                  <section className="space-y-6 pt-6 border-t border-navy-100">
                    <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 leading-snug">
                      {post.content.practicalSteps.title}
                    </h2>

                    <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                      {post.content.practicalSteps.summary}
                    </p>

                    {/* 5 Practical Steps */}
                    <div className="space-y-4 pt-2">
                      {post.content.practicalSteps.steps.map((step) => (
                        <SpotlightCard
                          key={step.number}
                          className="p-5 sm:p-6 rounded-2xl bg-white border border-navy-100 shadow-sm hover:shadow-md transition-shadow text-left"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 font-display font-bold text-base flex items-center justify-center shrink-0 shadow-xs">
                              {step.number}
                            </div>
                            <div className="space-y-1.5 flex-grow">
                              <h3 className="font-display text-base sm:text-lg font-bold text-navy-900">
                                {step.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                                {step.text}
                              </p>
                            </div>
                          </div>
                        </SpotlightCard>
                      ))}
                    </div>
                  </section>
                )}

                {/* Section 3: Why Is One Career Talk Insufficient? */}
                {post.content.whyOneTalkFails && (
                  <section className="space-y-6 pt-6 border-t border-navy-100">
                    <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 leading-snug">
                      {post.content.whyOneTalkFails.title}
                    </h2>

                    <div className="space-y-4 text-sm sm:text-base text-navy-700 leading-relaxed">
                      {post.content.whyOneTalkFails.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </section>
                )}

                {/* Section 4: How Can Civiora Support Schools? */}
                {post.content.civioraSupport && (
                  <section className="space-y-6 pt-6 border-t border-navy-100">
                    <div className="space-y-2">
                      <span className="eyebrow">Institutional Partnership</span>
                      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 leading-snug mt-1">
                        {post.content.civioraSupport.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                      {post.content.civioraSupport.lead}
                    </p>

                    {/* 4 Pillars of Support */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                      {post.content.civioraSupport.pillars.map((pillar, idx) => (
                        <SpotlightCard
                          key={idx}
                          className="p-5 rounded-xl bg-mist border border-navy-100 shadow-xs text-left space-y-2"
                        >
                          <div className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center">
                            <Sparkles size={16} />
                          </div>
                          <h3 className="font-display text-sm sm:text-base font-bold text-navy-900">
                            {pillar.title}
                          </h3>
                          <p className="text-xs text-navy-600 leading-relaxed">
                            {pillar.desc}
                          </p>
                        </SpotlightCard>
                      ))}
                    </div>

                    {/* Compliance Scope Note */}
                    <div className="p-4 rounded-xl bg-navy-50 border border-navy-200 text-navy-800 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                      <ShieldCheck size={18} className="text-gold-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="font-bold text-navy-900">Compliance &amp; Accreditation Notice: </span>
                        <p className="text-navy-700">{post.content.civioraSupport.complianceNotice}</p>
                      </div>
                    </div>
                  </section>
                )}
              </>
            )}

            {/* Closing Enquiry Callout or Conclusion Card */}
            {post.content.closingCta ? (
              <section className="pt-6 border-t border-navy-100">
                <SpotlightCard
                  className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white border border-gold-500/30 shadow-xl text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-6"
                  spotlightColor="rgba(0, 242, 254, 0.22)"
                >
                  <div className="space-y-2 max-w-xl text-left">
                    <span className="eyebrow-dark text-[11px] py-0.5 px-3">School Guidance Advisory</span>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {post.content.closingCta.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-navy-200 leading-relaxed">
                      {post.content.closingCta.lead}
                    </p>
                  </div>

                  <Link
                    to={post.content.closingCta.buttonLink || '/contact?type=School'}
                    className="btn-primary text-xs sm:text-sm py-3 px-6 whitespace-nowrap justify-center w-full sm:w-auto shrink-0 group"
                  >
                    <span>{post.content.closingCta.buttonText}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </SpotlightCard>
              </section>
            ) : post.content.conclusion ? (
              <section className="pt-6 border-t border-navy-100">
                <SpotlightCard
                  className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white border border-gold-500/30 shadow-xl text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-6"
                  spotlightColor="rgba(0, 242, 254, 0.22)"
                >
                  <div className="space-y-2 max-w-xl">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {post.content.conclusion.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-navy-200 leading-relaxed">
                      {post.content.conclusion.text}
                    </p>
                  </div>

                  <Link
                    to={post.content.conclusion.ctaLink || '/contact'}
                    className="btn-primary text-xs sm:text-sm py-3 px-6 whitespace-nowrap justify-center w-full sm:w-auto shrink-0 group"
                  >
                    <span>{post.content.conclusion.ctaText || 'Book a Consultation with Civiora'}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </SpotlightCard>
              </section>
            ) : null}

            {/* Social Sharing & Copy Link Bar */}
            <div className="pt-8 border-t border-navy-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-navy-700 mr-1">Share this article:</span>
                <button
                  type="button"
                  onClick={shareOnWhatsApp}
                  className="min-h-[40px] px-3.5 py-2 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                  aria-label="Share on WhatsApp"
                >
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={shareOnLinkedIn}
                  className="min-h-[40px] px-3.5 py-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                  aria-label="Share on LinkedIn"
                >
                  LinkedIn
                </button>
                <button
                  type="button"
                  onClick={shareOnX}
                  className="min-h-[40px] px-3.5 py-2 rounded-full bg-navy-50 text-navy-800 hover:bg-navy-100 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                  aria-label="Share on X"
                >
                  X
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopyLink}
                className="min-h-[40px] px-4 py-2 rounded-full bg-mist border border-navy-200 text-navy-800 hover:bg-white text-xs font-semibold transition-all inline-flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-700">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-navy-600" />
                    <span>Copy Article Link</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </article>

        {/* 3. Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="py-12 sm:py-16 bg-mist border-b border-navy-100">
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-navy-200/60">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900">
                  More Articles &amp; Insights
                </h3>
                <Link
                  to="/blog"
                  className="text-xs font-semibold text-gold-700 hover:text-navy-900 inline-flex items-center gap-1"
                >
                  <span>View All Articles</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <BlogCard key={rPost.id} post={rPost} dark={false} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

