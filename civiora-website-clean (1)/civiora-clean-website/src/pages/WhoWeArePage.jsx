import PageHeader from '../components/PageHeader';
import Pathways from '../components/Pathways';
import HowItWorks from '../components/HowItWorks';
import SEO from '../components/SEO';
import whoWeAreHeaderImg from '../assets/selected-client-images/A02-Who-we-are.png';

export default function WhoWeArePage() {
  return (
    <div>
      <SEO
        title="Who We Are | Institutional Partnerships & Delivery Framework | Civiora"
        description="Learn who Civiora is, who we work with (schools, colleges, universities), and how our structured 5-stage institutional engagement framework operates."
      />
      <PageHeader
        h1="Who We Are: Partnerships, Ecosystem & Delivery"
        openingHeadline="Civiora partners with schools, colleges and universities through a structured engagement methodology to strengthen student capability and career direction."
        breadcrumbText="Who We Are"
        image={whoWeAreHeaderImg}
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

