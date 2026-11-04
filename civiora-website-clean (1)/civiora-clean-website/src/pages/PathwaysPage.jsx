import PageHeader from '../components/PageHeader';
import Pathways from '../components/Pathways';
import SEO from '../components/SEO';
const pathwaysDesktop = '/images/pathways-desktop.webp';
const pathwaysMobile = '/images/pathways-mobile.webp';

export default function PathwaysPage() {
  return (
    <div>
      <SEO
        title="School, College & University Partnerships | Civiora"
        description="Discover Civiora’s tailored approach to school, college and university partnerships for student development and career direction."
        preloadImage={pathwaysDesktop}
        preloadMobileImage={pathwaysMobile}
      />
      <PageHeader
        h1="Different Institutions. Distinct Priorities. A Tailored Approach."
        openingHeadline="Every institution has its own student community, academic commitments and development priorities."
        breadcrumbText="Who We Work With"
        image={pathwaysDesktop}
        mobileImage={pathwaysMobile}
        imageAlt="Indian principal, academic advisor and institutional coordinator discussing student development priorities."
      />
      <Pathways />
    </div>
  );
}
