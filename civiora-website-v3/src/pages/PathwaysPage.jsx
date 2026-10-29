import PageHeader from '../components/PageHeader';
import Pathways from '../components/Pathways';
import SEO from '../components/SEO';
import pathwaysHeaderImg from '../assets/headers/pathways.jpg';

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
        eyebrow="Who We Work With"
        breadcrumbText="Who We Work With"
        image={pathwaysHeaderImg}
        imageAlt="Institutional teams coordinating student development across schools, colleges and universities."
        badgeText="Institutional Partnerships"
      />
      <Pathways />
    </div>
  );
}
