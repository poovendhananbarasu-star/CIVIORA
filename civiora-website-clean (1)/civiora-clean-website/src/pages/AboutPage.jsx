import PageHeader from '../components/PageHeader';
import About from '../components/About';
import SEO from '../components/SEO';
const aboutHeaderDesktop = '/images/about-desktop.webp';
const aboutHeaderMobile = '/images/about-mobile.webp';

export default function AboutPage() {
  return (
    <div>
      <SEO
        title="About Civiora | Institutional Learning Partner"
        description="Learn how Civiora supports institutions to identify student needs, plan tailored engagements and coordinate relevant expertise and implementation."
        preloadImage={aboutHeaderDesktop}
        preloadMobileImage={aboutHeaderMobile}
      />
      <PageHeader
        h1="An Institutional Partner for Student Development and Career Direction"
        openingHeadline="Connecting institutional priorities with relevant expertise and coordinated execution."
        breadcrumbText="About"
        image={aboutHeaderDesktop}
        mobileImage={aboutHeaderMobile}
        imageAlt="Academic advisor and institutional representatives reviewing priorities and an activity calendar."
      />
      <About />
    </div>
  );
}
