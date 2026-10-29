import PageHeader from '../components/PageHeader';
import About from '../components/About';
import SEO from '../components/SEO';
import aboutHeaderImg from '../assets/selected-client-images/A01-About-us-Hero.png';

export default function AboutPage() {
  return (
    <div>
      <SEO
        title="About Civiora | Institutional Learning Partner"
        description="Learn how Civiora supports institutions to identify student needs, plan tailored engagements and coordinate relevant expertise and implementation."
      />
      <PageHeader
        h1="An Institutional Partner for Student Development and Career Direction"
        openingHeadline="Connecting institutional priorities with relevant expertise and coordinated execution."
        breadcrumbText="About"
        image={aboutHeaderImg}
        imageAlt="Academic advisor and institutional representatives reviewing priorities and an activity calendar."
      />
      <About />
    </div>
  );
}
