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
