import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, BookOpen, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import WaveCanvas from '../components/effects/WaveCanvas';
import AmbientShapes from '../components/effects/AmbientShapes';
import BlogCard from '../components/blog/BlogCard';
import SpotlightCard from '../components/effects/SpotlightCard';
import { getAllBlogPosts } from '../data/blogPosts';

const CATEGORIES = [
  'All Perspectives',
  'School Career Guidance and Institutional Support',
  'School Leadership & Regulatory',
  'Higher Education Pathways',
  'Career Guidance Practice'
];

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Perspectives');
  const [searchQuery, setSearchQuery] = useState('');

  const allPosts = getAllBlogPosts();

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All Perspectives' || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.primaryKeyword && post.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.secondaryKeywords &&
          post.secondaryKeywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesQuery;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-mist text-ink font-body selection:bg-gold-200 selection:text-navy-900">
      <SEO
        title="Institutional Blog & Regulatory Insights | Civiora"
        description="Explore analysis, CBSE regulatory guidelines, student development research, and practical advice for school principals and higher education leadership."
        canonicalUrl="https://civiora.co.in/blog"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Civiora Institutional Insights & Perspectives',
          description:
            'Strategic perspectives, regulatory breakdowns, and actionable guidance for school principals and academic leadership.',
          publisher: {
            '@type': 'Organization',
            name: 'Civiora Education & Institutional Services',
            url: 'https://civiora.co.in/'
          }
        }}
      />

      <main id="main-content" className="pt-16 sm:pt-20">
        {/* 1. Hero Header Section - Dark Theme with Waves and Floating Orbs */}
        <section className="relative overflow-hidden bg-navy-950 text-white py-14 sm:py-20 md:py-24 border-b border-navy-900">
          <WaveCanvas opacity={0.4} />
          <AmbientShapes />

          <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 relative z-10 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900/90 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm backdrop-blur-md">
                <Sparkles size={13} className="text-gold-400" />
                <span>Civiora Perspectives &amp; Regulatory Insights</span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mx-auto">
                Institutional Guidance, Regulatory Analysis &amp; Student Pathways
              </h1>

              <div className="gold-rule mx-auto mt-4" />

              <p className="mt-4 text-sm sm:text-base md:text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
                Objective analysis of policy circulars, institutional governance best practices, and structured frameworks to help school and college leaders take decisive next steps.
              </p>
            </Reveal>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto relative z-10">
              <div className="relative">
                <Search size={18} aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
                <input
                  type="text"
                  id="blog-search-input"
                  aria-label="Search articles, circulars, or keywords"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, circulars, or keywords..."
                  className="w-full pl-11 pr-4 py-3 min-h-[44px] rounded-full bg-navy-900/80 border border-white/10 text-white placeholder-navy-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/60 focus:border-transparent backdrop-blur-md transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center text-xs text-navy-400 hover:text-white rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    aria-label="Clear search input"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-6 flex items-center justify-center gap-2 flex-wrap relative z-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                    selectedCategory === cat
                      ? 'bg-gold-500 text-navy-950 font-bold shadow-md'
                      : 'bg-white/5 text-navy-200 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Blog Post Grid Section */}
        <section className="py-14 sm:py-20 md:py-24 bg-white border-b border-navy-100">
          <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-navy-100">
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-navy-900">
                  {selectedCategory === 'All Perspectives' ? 'Latest Perspectives & Articles' : selectedCategory}
                </h2>
                <p className="text-xs sm:text-sm text-navy-600 mt-0.5">
                  Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                </p>
              </div>

              {searchQuery && (
                <div className="text-xs text-navy-600">
                  Filtered by: <span className="font-semibold text-navy-900">"{searchQuery}"</span>
                </div>
              )}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-mist rounded-2xl border border-navy-100 p-8 space-y-4">
                <BookOpen size={36} className="mx-auto text-navy-400" />
                <h3 className="font-display text-lg font-bold text-navy-900">
                  No articles matched your criteria
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 max-w-md mx-auto">
                  Try adjusting your search terms or clearing your category filters to view all available analyses.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All Perspectives');
                    setSearchQuery('');
                  }}
                  className="btn-secondary text-xs py-2 px-5"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {filteredPosts.map((post) => (
                  <Reveal key={post.id} className="h-full">
                    <BlogCard post={post} dark={false} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. Institutional Support & Consultation Banner */}
        <section className="relative overflow-hidden py-14 sm:py-20 bg-navy-950 text-white border-b border-navy-900">
          <WaveCanvas opacity={0.25} />
          <AmbientShapes />

          <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 relative z-10">
            <SpotlightCard
              className="glass-card p-6 sm:p-10 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8"
              spotlightColor="rgba(0, 242, 254, 0.2)"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider border border-gold-400/30">
                  <ShieldCheck size={14} className="text-gold-400" />
                  <span>School Leadership Advisory</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                  Preparing for the Next CBSE Affiliation Cycle?
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-navy-200 leading-relaxed font-body">
                  Civiora works alongside school management to design structured career guidance programs, map student interests, and connect accredited expert partners in full alignment with institutional priorities.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="btn-primary text-xs sm:text-sm py-3 px-6 text-center justify-center whitespace-nowrap"
                >
                  <span>Book an Advisory Consultation</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/institutional-partnership"
                  className="btn-ghost text-xs sm:text-sm py-3 px-6 text-center justify-center whitespace-nowrap"
                >
                  <span>Explore School Partnerships</span>
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </section>
      </main>
    </div>
  );
}

