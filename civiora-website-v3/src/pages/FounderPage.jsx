import PageHeader from '../components/PageHeader';
import Founder from '../components/Founder';
import SEO from '../components/SEO';
import founderHeaderImg from '../assets/headers/founder.jpg';

export default function FounderPage() {
  return (
    <div>
      <SEO
        title="Poovendhan Anbarasu | Founder & CEO, Civiora"
        description="Meet Poovendhan Anbarasu, Founder and CEO of Civiora, with experience in teaching, mentoring and institutional engagement."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Poovendhan Anbarasu",
          "jobTitle": "Founder & CEO",
          "worksFor": {
            "@type": "Organization",
            "name": "Civiora Education & Institutional Services",
            "url": "https://www.civiora.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 134, 57, 13th Cross, Baldwins Road, Koramangala",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560030",
              "addressCountry": "IN"
            }
          },
          "email": "connect@civiora.co.in",
          "telephone": "+918150003610",
          "description": "Founder and CEO of Civiora, with experience in teaching, mentoring and institutional engagement."
        }}
      />
      <PageHeader
        h1="Poovendhan Anbarasu — Founder & CEO"
        openingHeadline="Bringing teaching experience, mentoring insight and institutional perspective to student development."
        eyebrow="Founder & Leadership"
        breadcrumbText="Founder"
        image={founderHeaderImg}
        imageAlt="Poovendhan Anbarasu, Founder and CEO of Civiora."
        badgeText="Leadership & Vision"
      />
      <Founder />
    </div>
  );
}
