import PageHeader from '../components/PageHeader';
import Pathways from '../components/Pathways';
import SEO from '../components/SEO';
import pathwaysHeaderImg from '../assets/selected-client-images/P01-Hero-Indian-principal.png';

export default function PathwaysPage() {
  return (
    <div>
      <SEO
        title="School, College & University Partnerships | Civiora"
        description="Discover Civiora’s tailored approach to school, college and university partnerships for student development and career direction."
      />
      <PageHeader
        h1="Different Institutions. Distinct Priorities. A Tailored Approach."
        openingHeadline="Every institution has its own student community, academic commitments and development priorities."
        breadcrumbText="Who We Work With"
        image={pathwaysHeaderImg}
        imageAlt="Indian principal, academic advisor and institutional coordinator discussing student development priorities."
      />
      <Pathways />
    </div>
  );
}
