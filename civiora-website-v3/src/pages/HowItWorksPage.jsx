import PageHeader from '../components/PageHeader';
import HowItWorks from '../components/HowItWorks';
import SEO from '../components/SEO';
import howItWorksHeaderImg from '../assets/headers/how-it-works.jpg';

export default function HowItWorksPage() {
  return (
    <div>
      <SEO
        title="How Civiora’s Institutional Partnerships Work"
        description="Understand Civiora’s process for institutional consultation, engagement design, specialist alignment, implementation and progress review."
      />
      <PageHeader
        h1="Clarity from the First Discussion to the Progress Review"
        openingHeadline="A structured process for consultation, engagement design, specialist alignment and progress review."
        eyebrow="How We Work"
        breadcrumbText="How We Work"
        image={howItWorksHeaderImg}
        imageAlt="Institutional consultation and implementation planning."
        badgeText="5-Stage Framework"
      />
      <HowItWorks />
    </div>
  );
}
