import PageHeader from '../components/PageHeader';
import FinalCTA from '../components/FinalCTA';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import contactHeaderImg from '../assets/selected-client-images/C01-Contact-page-banner.png';

export default function ContactPage() {
  const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=No.%20134%2C%2057%2C%2013th%20Cross%2C%20Baldwins%20Road%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560030';
  const address = 'No. 134, 57, 13th Cross, Baldwins Road, Koramangala, Bengaluru, Karnataka – 560030';
  // Responsive Google Maps embed URL without an API key using the verified location address
  const embedMapUrl = 'https://maps.google.com/maps?q=Civiora%2C%20No.%20134%2C%2057%2C%2013th%20Cross%2C%20Baldwins%20Road%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560030&t=&z=16&ie=UTF8&iwloc=&output=embed';

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
        breadcrumbText="Contact"
        image={contactHeaderImg}
        imageAlt="Institutional consultation and partnership discussion with Civiora."
      />
      <FinalCTA />

      {/* Responsive Embedded Google Map Section */}
      <section className="bg-mist py-16 md:py-24 border-t border-navy-100 font-body">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow">Our Location</span>
              <h2 className="section-heading mt-4">Visit Civiora in Bengaluru</h2>
              <div className="gold-rule mx-auto mt-4" />
              <p className="mt-4 text-navy-700 text-sm sm:text-base leading-relaxed">
                We welcome educational institution leadership and academic partners to our office in Koramangala for scheduled partnership discussions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-navy-100 shadow-xl shadow-navy-950/5">
              {/* Responsive Embedded Google Map */}
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-xl overflow-hidden border border-navy-100 bg-navy-50 shadow-inner">
                <iframe
                  title="Civiora Office Location Map"
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Location Details, View on Google Maps Link & Directions Button */}
              <div className="mt-6 pt-5 border-t border-navy-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-navy-900">
                      Civiora Education &amp; Institutional Services
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-700 mt-0.5 leading-relaxed">
                      {address}
                    </p>
                    <div className="mt-2">
                      <a
                        href={mapsSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Civiora location on Google Maps"
                        className="inline-flex items-center gap-1.5 text-xs text-gold-700 hover:text-gold-800 font-semibold underline underline-offset-2 transition-colors focus:outline-none focus:underline"
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Civiora location on Google Maps"
                  className="btn-primary w-full sm:w-auto text-center justify-center shrink-0"
                >
                  <Navigation size={16} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
