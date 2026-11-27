import PageHeader from '../components/PageHeader';
import Network from '../components/Network';
import SEO from '../components/SEO';
const networkDesktop = '/images/network-desktop.webp';
const networkMobile = '/images/network-mobile.webp';

export default function NetworkPage() {
  return (
    <div>
      <SEO
        title="Academic & Specialist Partnerships | Civiora"
        description="Connect with Civiora for academic and specialist collaboration shaped around institutional requirements and clear delivery expectations."
        preloadImage={networkDesktop}
        preloadMobileImage={networkMobile}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Academic & Specialist Partnerships",
          "serviceType": "Specialist Educator & Academic Partner Coordination",
          "url": "https://civiora.co.in/network",
          "description": "Connect with Civiora for academic and specialist collaboration shaped around institutional requirements and clear delivery expectations.",
          "provider": {
            "@id": "https://civiora.co.in/#organization"
          }
        }}
      />
      <PageHeader
        h1="Relevant Expertise. Clear Expectations. Coordinated Delivery."
        openingHeadline="Civiora works with educators, mentors and specialist organisations whose expertise matches institutional requirements."
        breadcrumbText="Partners"
        image={networkDesktop}
        mobileImage={networkMobile}
        imageAlt="Academic specialists collaborating on institutional learning initiatives."
      />
      <Network />
    </div>
  );
}
