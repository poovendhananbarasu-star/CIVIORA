import PageHeader from '../components/PageHeader';
import WhyCiviora from '../components/WhyCiviora';
import SEO from '../components/SEO';
import whyCivioraHeaderImg from '../assets/headers/why-civiora.jpg';

export default function WhyCivioraPage() {
  return (
    <div>
      <SEO
        title="Why Civiora | Institutional Learning Partnerships"
        description="Explore Civiora’s approach to tailored planning, academic alignment, specialist coordination and student-engagement reviews."
      />
      <PageHeader
        h1="Your Institution’s Priorities Shape the Partnership"
        openingHeadline="Civiora brings planning, specialist coordination and student engagement into one institutional relationship."
        eyebrow="Why Civiora"
        breadcrumbText="Why Civiora"
        image={whyCivioraHeaderImg}
        imageAlt="Institutional teams reviewing student engagement and feedback."
        badgeText="Core Advantage"
      />
      <WhyCiviora />
    </div>
  );
}
