import PageHeader from '../components/PageHeader';
import Network from '../components/Network';
import SEO from '../components/SEO';
import networkHeaderImg from '../assets/headers/network.jpg';

export default function NetworkPage() {
  return (
    <div>
      <SEO
        title="Academic & Specialist Partnerships | Civiora"
        description="Connect with Civiora for academic and specialist collaboration shaped around institutional requirements and clear delivery expectations."
      />
      <PageHeader
        h1="Relevant Expertise. Clear Expectations. Coordinated Delivery."
        openingHeadline="Civiora works with educators, mentors and specialist organisations whose expertise matches institutional requirements."
        breadcrumbText="Partners"
        image={networkHeaderImg}
        imageAlt="Academic specialists collaborating on institutional learning initiatives."
      />
      <Network />
    </div>
  );
}
