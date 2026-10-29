import PageHeader from '../components/PageHeader';
import About from '../components/About';
import SEO from '../components/SEO';
import aboutHeaderImg from '../assets/headers/about.jpg';

export default function AboutPage() {
  return (
    <div>
      <SEO
        title="About Civiora | Institutional Learning Partner"
        description="Learn how Civiora helps institutions identify student needs, plan tailored engagements and coordinate relevant expertise and implementation."
      />
      <PageHeader
        h1="An Institutional Partner for Student Development and Career Direction"
        openingHeadline="Connecting institutional priorities with relevant expertise and coordinated execution."
        eyebrow="About Civiora"
        breadcrumbText="About"
        image={aboutHeaderImg}
        imageAlt="Educators and institutional representatives planning a learning partnership."
        badgeText="Institutional Learning & Career Pathways Partner"
      />
      <About />
    </div>
  );
}
