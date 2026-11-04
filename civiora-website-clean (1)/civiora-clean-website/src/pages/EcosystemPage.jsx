import PageHeader from '../components/PageHeader';
import Ecosystem from '../components/Ecosystem';
import SEO from '../components/SEO';
const ecosystemDesktop = '/images/ecosystem-desktop.webp';
const ecosystemMobile = '/images/ecosystem-mobile.webp';

export default function EcosystemPage() {
  return (
    <div>
      <SEO
        title="Institutional Partnership Ecosystem | Civiora"
        description="Explore how Civiora connects institutional teams, specialist partners and students through clear roles and coordinated implementation."
        preloadImage={ecosystemDesktop}
        preloadMobileImage={ecosystemMobile}
      />
      <PageHeader
        h1="A Connected Framework with Clear Responsibilities"
        openingHeadline="Clear roles make collaboration easier to implement and review."
        breadcrumbText="Ecosystem"
        image={ecosystemDesktop}
        mobileImage={ecosystemMobile}
        imageAlt="Institutional and academic teams coordinating student-development support."
      />
      <Ecosystem />
    </div>
  );
}
