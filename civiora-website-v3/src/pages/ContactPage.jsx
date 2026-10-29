import PageHeader from '../components/PageHeader';
import FinalCTA from '../components/FinalCTA';
import SEO from '../components/SEO';
import contactHeaderImg from '../assets/headers/contact.jpg';

export default function ContactPage() {
  return (
    <div>
      <SEO
        title="Contact Civiora | Institutional Partnerships, Bengaluru"
        description="Contact Civiora in Koramangala, Bengaluru to discuss student-development and career partnerships for your institution."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Civiora",
          "description": "Contact Civiora for Institutional Learning & Career Partnerships",
          "mainEntity": {
            "@type": "Organization",
            "name": "Civiora Education & Institutional Services",
            "email": "connect@civiora.co.in",
            "telephone": "+918150003610",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 134, 57, 13th Cross, Baldwins Road, Koramangala",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560030",
              "addressCountry": "IN"
            }
          }
        }}
      />
      <PageHeader
        h1="Begin with Your Institution’s Priorities"
        openingHeadline="Tell us what your institution wants to strengthen. Share your student context, priorities and preferred timeline, and Civiora will discuss an appropriate approach with your team."
        eyebrow="Institutional Contact"
        breadcrumbText="Contact"
        image={contactHeaderImg}
        imageAlt="Institutional consultation with Civiora."
        badgeText="Institutional Consultation"
      />
      <FinalCTA />
    </div>
  );
}
