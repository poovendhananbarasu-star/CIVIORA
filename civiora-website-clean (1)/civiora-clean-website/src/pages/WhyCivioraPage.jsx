import PageHeader from '../components/PageHeader';
import WhyCiviora from '../components/WhyCiviora';
import SEO from '../components/SEO';
const whyCivioraDesktop = '/images/why-civiora-desktop.webp';
const whyCivioraMobile = '/images/why-civiora-mobile.webp';

export default function WhyCivioraPage() {
  return (
    <div>
      <SEO
        title="Why Civiora | Institutional Learning Partnerships"
        description="Explore Civiora’s approach to tailored planning, academic alignment, specialist coordination and student-engagement reviews."
        preloadImage={whyCivioraDesktop}
        preloadMobileImage={whyCivioraMobile}
      />
      <PageHeader
        h1="Your Institution’s Priorities Shape the Partnership"
        openingHeadline="Civiora brings planning, specialist coordination and student engagement into one institutional relationship."
        breadcrumbText="Why Civiora"
        image={whyCivioraDesktop}
        mobileImage={whyCivioraMobile}
        imageAlt="Institutional coordinator and specialist reviewing student participation and engagement priorities."
      />
      <WhyCiviora />
    </div>
  );
}
