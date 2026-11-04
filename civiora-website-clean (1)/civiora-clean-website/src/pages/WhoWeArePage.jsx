import PageHeader from '../components/PageHeader';
import Pathways from '../components/Pathways';
import HowItWorks from '../components/HowItWorks';
import SEO from '../components/SEO';
const whoWeAreDesktop = '/images/who-we-are-desktop.webp';
const whoWeAreMobile = '/images/who-we-are-mobile.webp';

export default function WhoWeArePage() {
  return (
    <div>
      <SEO
        title="Who We Are | Institutional Partnerships & Delivery | Civiora"
        description="Learn who Civiora is, who we work with (schools, colleges, universities), and how our structured 5-stage institutional engagement framework operates."
        preloadImage={whoWeAreDesktop}
        preloadMobileImage={whoWeAreMobile}
      />
      <PageHeader
        h1="Who We Are: Partnerships, Ecosystem & Delivery"
        openingHeadline="Civiora partners with schools, colleges and universities through a structured engagement methodology to strengthen student capability and career direction."
        breadcrumbText="Who We Are"
        image={whoWeAreDesktop}
        mobileImage={whoWeAreMobile}
        imageAlt="Civiora Who We Are: Institutional partnerships and 5-stage delivery framework."
      />

      {/* Module 1: Who We Work With (Institutional Pathways & Ecosystem) */}
      <section id="who-we-work-with">
        <Pathways />
      </section>

      {/* Module 2: How We Work (5-Stage Engagement Methodology) */}
      <section id="how-we-work" className="border-t border-navy-100/80">
        <HowItWorks />
      </section>
    </div>
  );
}

