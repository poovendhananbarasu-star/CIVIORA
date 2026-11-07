import PageHeader from '../components/PageHeader';
import Founder from '../components/Founder';
import SEO from '../components/SEO';
const founderDesktop = '/images/founder-desktop.webp';
const founderMobile = '/images/founder-mobile.webp';

export default function FounderPage() {
  return (
    <div>
      <SEO
        title="Poovendhan Anbarasu | Founder & CEO, Civiora"
        description="Meet Poovendhan Anbarasu, Founder and CEO of Civiora, with experience in teaching, mentoring and institutional engagement."
        preloadImage={founderDesktop}
        preloadMobileImage={founderMobile}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Poovendhan Anbarasu",
          "jobTitle": "Founder & CEO",
          "worksFor": {
            "@type": "Organization",
            "name": "Civiora Education & Institutional Services",
            "url": "https://civiora.co.in/",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 134, 57, 13th Cross, Baldwins Road, Koramangala",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560030",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.linkedin.com/company/civioraeducation/",
              "https://www.instagram.com/civiora_official/",
              "https://www.facebook.com/civiora/",
              "https://www.youtube.com/@civioraedu"
            ]
          },
          "email": "connect@civiora.co.in",
          "telephone": "+918150003810",
          "description": "Founder and CEO of Civiora, with experience in teaching, mentoring and institutional engagement."
        }}
      />
      <PageHeader
        h1={
          <>
            <span>Poovendhan Anbarasu</span>
            <span className="block text-gold-300 font-display text-xl sm:text-2xl md:text-3xl font-medium mt-2">
              Founder &amp; CEO
            </span>
          </>
        }
        openingHeadline="Bringing teaching experience, mentoring insight and institutional perspective to student development."
        breadcrumbText="Founder"
        image={founderDesktop}
        mobileImage={founderMobile}
        imagePosition="object-[49%_15%] sm:object-[52%_15%] md:object-[56%_18%] lg:object-[60%_18%]"
        imageClassName="brightness-95 contrast-[1.05]"
        imageAlt="Poovendhan Anbarasu, Founder and CEO of Civiora, speaking on institutional learning and career direction."
      />
      <Founder />
    </div>
  );
}
