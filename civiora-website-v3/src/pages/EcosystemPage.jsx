import PageHeader from '../components/PageHeader';
import Ecosystem from '../components/Ecosystem';
import SEO from '../components/SEO';
import ecosystemHeaderImg from '../assets/headers/ecosystem.jpg';

export default function EcosystemPage() {
  return (
    <div>
      <SEO
        title="Institutional Partnership Ecosystem | Civiora"
        description="Explore how Civiora connects institutional teams, specialist partners and students through clear roles and coordinated implementation."
      />
      <PageHeader
        h1="A Connected Framework with Clear Responsibilities"
        openingHeadline="Clear roles make collaboration easier to implement and review."
        eyebrow="Partnership Ecosystem"
        breadcrumbText="Ecosystem"
        image={ecosystemHeaderImg}
        imageAlt="Institutional and academic teams coordinating student-development support."
        badgeText="Stakeholder Framework"
      />
      <Ecosystem />
    </div>
  );
}
