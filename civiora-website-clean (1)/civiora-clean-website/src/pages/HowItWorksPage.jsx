import PageHeader from '../components/PageHeader';
import HowItWorks from '../components/HowItWorks';
import SEO from '../components/SEO';
import howItWorksHeaderImg from '../assets/selected-client-images/A02-How-We-work.png';

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
        breadcrumbText="How We Work"
        image={howItWorksHeaderImg}
        imagePosition="object-[65%_top] sm:object-[center_top] md:object-top"
        imageAlt="Institutional development planning and consultation session."
      />
      <HowItWorks />
    </div>
  );
}
