import PageHeader from '../components/PageHeader';
import HowItWorks from '../components/HowItWorks';
import SEO from '../components/SEO';
const howItWorksDesktop = '/images/how-it-works-desktop.webp';
const howItWorksMobile = '/images/how-it-works-mobile.webp';

export default function HowItWorksPage() {
  return (
    <div>
      <SEO
        title="How Civiora Works | Institutional Partnerships Process"
        description="Understand Civiora’s process for institutional consultation, engagement design, specialist alignment, implementation and progress review."
        preloadImage={howItWorksDesktop}
        preloadMobileImage={howItWorksMobile}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Civiora Five-Stage Institutional Engagement Process",
          "description": "Understand Civiora’s process for institutional consultation, engagement design, specialist alignment, implementation and progress review.",
          "publisher": {
            "@id": "https://civiora.co.in/#organization"
          },
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Discover", "text": "Understand institutional priorities, student needs, existing support and practical constraints." },
            { "@type": "HowToStep", "position": 2, "name": "Design", "text": "Agree the engagement scope, schedule, responsibilities and review indicators." },
            { "@type": "HowToStep", "position": 3, "name": "Connect", "text": "Align suitable educators, mentors and specialist partners with the requirement." },
            { "@type": "HowToStep", "position": 4, "name": "Govern", "text": "Coordinate implementation, communication, designated contacts and issue escalation." },
            { "@type": "HowToStep", "position": 5, "name": "Measure", "text": "Review participation, feedback and relevant progress indicators to inform subsequent decisions." }
          ]
        }}
      />
      <PageHeader
        h1="Clarity from the First Discussion to the Progress Review"
        openingHeadline="A structured process for consultation, engagement design, specialist alignment and progress review."
        breadcrumbText="How We Work"
        image={howItWorksDesktop}
        mobileImage={howItWorksMobile}
        imagePosition="object-[65%_top] sm:object-[center_top] md:object-top"
        imageAlt="Institutional development planning and consultation session."
      />
      <HowItWorks />
    </div>
  );
}
