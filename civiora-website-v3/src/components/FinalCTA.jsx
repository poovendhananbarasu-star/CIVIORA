import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Send, 
  AlertCircle,
  Loader2,
  Building2,
  Users2
} from 'lucide-react';
import Reveal from './Reveal';
import { submitAppointmentRequest, isFirebaseConfigured } from '../firebase';

const INSTITUTION_TYPES = [
  'School',
  'College',
  'University',
  'Academic/Specialist Partner',
  'Other Institution',
];

const DISCUSSION_FORMATS = [
  'In-person discussion (Bengaluru)',
  'Video conference',
  'Telephone discussion',
];

const WHO_CAN_CONNECT = [
  'School principals and school leadership teams',
  'College principals and management councils',
  'University deans, registrars and department chairs',
  'Institutional career development & placement leaders',
  'Specialist educators and prospective academic partners',
];

export default function FinalCTA() {
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('type');

  const [formData, setFormData] = useState({
    institutionType: INSTITUTION_TYPES[0],
    representativeName: '',
    designation: '',
    institutionName: '',
    location: '',
    officialEmail: '',
    telephone: '',
    requirement: '',
    discussionFormat: DISCUSSION_FORMATS[0],
    consent: false,
  });

  useEffect(() => {
    if (requestedType && INSTITUTION_TYPES.includes(requestedType)) {
      setFormData((prev) => ({ ...prev, institutionType: requestedType }));
    }
  }, [requestedType]);

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    fallbackTriggered: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please accept the consent checkbox to submit your institutional discussion request.',
        fallbackTriggered: false,
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null, fallbackTriggered: false });

    try {
      if (isFirebaseConfigured) {
        await submitAppointmentRequest(formData);
        setStatus({ submitting: false, submitted: true, error: null, fallbackTriggered: false });
      } else {
        // Fallback email client launch
        const subject = encodeURIComponent(
          `Institutional Discussion Request: ${formData.institutionName} - ${formData.representativeName}`
        );
        const body = encodeURIComponent(
          `Institutional Discussion Request Details:\n\n` +
          `Institution Type: ${formData.institutionType}\n` +
          `Representative Name: ${formData.representativeName}\n` +
          `Designation: ${formData.designation}\n` +
          `Institution Name: ${formData.institutionName}\n` +
          `Location: ${formData.location}\n` +
          `Official Email: ${formData.officialEmail}\n` +
          `Telephone: ${formData.telephone}\n` +
          `Preferred Discussion Format: ${formData.discussionFormat}\n\n` +
          `Requirement Summary:\n${formData.requirement}\n\n` +
          `Consent Given: Yes (Privacy Policy acknowledged)\n`
        );

        window.location.href = `mailto:connect@civiora.co.in?subject=${subject}&body=${body}`;

        setStatus({
          submitting: false,
          submitted: true,
          error: null,
          fallbackTriggered: true,
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Unable to process enquiry automatically. Please email connect@civiora.co.in directly.',
        fallbackTriggered: false,
      });
    }
  };

  return (
    <section id="contact-form" className="relative bg-white py-16 md:py-24 font-body">
      <div className="max-w-content mx-auto px-6 md:px-10">
        
        {/* Intro */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            Institutional Consultation
          </span>
          <h2 className="section-heading mt-4">
            Begin with Your Institution’s Priorities
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mt-5 text-navy-700 text-base md:text-lg leading-relaxed">
            Tell us what your institution wants to strengthen. Share your student context, priorities and preferred timeline, and Civiora will discuss an appropriate approach with your team.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
          
          {/* Left Column: Who can connect & Contact Details */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            {/* Who can connect */}
            <Reveal className="bg-mist rounded-2xl p-7 border border-navy-100 shadow-[0_2px_8px_rgba(11,42,84,0.03)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                  <Users2 size={20} />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-navy-900 font-semibold leading-snug">
                  Who can connect?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-navy-600 mt-3 leading-relaxed">
                Civiora works directly with institutional leadership and verified academic partners:
              </p>
              <ul className="mt-4 space-y-2.5">
                {WHO_CAN_CONNECT.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-700">
                    <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Official Contact Details */}
            <Reveal delay={100} className="bg-navy-900 text-white rounded-2xl p-7 sm:p-8 border border-white/10 shadow-xl">
              <h3 className="font-display text-lg sm:text-xl text-gold-400 font-semibold">
                Contact Details
              </h3>
              <p className="text-xs uppercase tracking-wider text-navy-300 mt-1 font-medium">
                Civiora Education &amp; Institutional Services
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-navy-100">
                <div className="flex items-start gap-3">
                  <MapPin size={17} className="text-gold-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    No. 134, 57, 13th Cross, Baldwins Road, Koramangala,<br />
                    Bengaluru, Karnataka – 560030.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={17} className="text-gold-400 shrink-0" />
                  <a href="tel:+918150003610" className="hover:text-gold-300 transition-colors focus:outline-none focus:underline">
                    +91 8150003610
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={17} className="text-gold-400 shrink-0" />
                  <a href="mailto:connect@civiora.co.in" className="hover:text-gold-300 transition-colors focus:outline-none focus:underline">
                    connect@civiora.co.in
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-navy-300">
                <p>Office hours: Monday to Friday, 9:30 AM – 6:00 PM IST</p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Institutional Request Form */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="bg-white rounded-2xl p-7 sm:p-10 border border-navy-100 shadow-xl shadow-navy-950/5">
                <div className="border-b border-navy-100 pb-5 mb-6">
                  <h3 className="font-display text-xl sm:text-2xl text-navy-900 font-semibold">
                    Request an Institutional Discussion
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600 mt-1">
                    Fill out the form below. We will coordinate a discussion aligned with your academic calendar.
                  </p>
                </div>

                {status.submitted ? (
                  <div className="p-8 text-center bg-mist rounded-xl border border-navy-200">
                    <CheckCircle2 size={44} className="text-gold-600 mx-auto mb-3" />
                    <h4 className="font-display text-xl text-navy-900 font-semibold">
                      {status.fallbackTriggered ? 'Enquiry prepared—please send.' : 'Enquiry received'}
                    </h4>
                    <p className="mt-3 text-sm text-navy-700 leading-relaxed max-w-md mx-auto">
                      {status.fallbackTriggered
                        ? 'Your email application has opened with your enquiry pre-filled. Please click send in your email client to complete your submission.'
                        : 'Thank you for connecting with Civiora. Our team will review your institutional priorities and get back to you shortly.'}
                    </p>
                    <button
                      onClick={() => setStatus({ submitting: false, submitted: false, error: null, fallbackTriggered: false })}
                      className="mt-6 px-6 py-2 rounded-xl text-xs font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status.error && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm">
                        <AlertCircle size={17} className="shrink-0 mt-0.5 text-red-600" />
                        <span>{status.error}</span>
                      </div>
                    )}

                    {/* Institution Type */}
                    <div>
                      <label htmlFor="institutionType" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        Institution Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="institutionType"
                        name="institutionType"
                        value={formData.institutionType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-navy-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                        required
                      >
                        {INSTITUTION_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Representative Name & Designation */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="representativeName" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Representative Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="representativeName"
                          name="representativeName"
                          value={formData.representativeName}
                          onChange={handleChange}
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="designation" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Designation <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          placeholder="e.g. Principal / Dean / Director"
                          className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                          required
                        />
                      </div>
                    </div>

                    {/* Institution Name & Location */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="institutionName" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Institution Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="institutionName"
                          name="institutionName"
                          value={formData.institutionName}
                          onChange={handleChange}
                          placeholder="e.g. National College of Excellence"
                          className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Location (City / State) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Bengaluru, Karnataka"
                          className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                          required
                        />
                      </div>
                    </div>

                    {/* Official Email & Telephone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="officialEmail" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Official Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="officialEmail"
                          name="officialEmail"
                          value={formData.officialEmail}
                          onChange={handleChange}
                          placeholder="name@institution.edu.in"
                          className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="telephone" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                          Telephone / Mobile <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                          required
                        />
                      </div>
                    </div>

                    {/* Preferred Discussion Format */}
                    <div>
                      <label htmlFor="discussionFormat" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        Preferred Discussion Format
                      </label>
                      <select
                        id="discussionFormat"
                        name="discussionFormat"
                        value={formData.discussionFormat}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-navy-200 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                      >
                        {DISCUSSION_FORMATS.map((fmt) => (
                          <option key={fmt} value={fmt}>
                            {fmt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Requirement Summary */}
                    <div>
                      <label htmlFor="requirement" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        Requirement &amp; Student Context <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="requirement"
                        name="requirement"
                        rows={4}
                        value={formData.requirement}
                        onChange={handleChange}
                        placeholder="Please briefly describe your student community, development priorities, and preferred timeline..."
                        className="w-full px-4 py-2.5 rounded-xl border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                        required
                      />
                    </div>

                    {/* Contact Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-navy-700">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-0.5 rounded border-navy-300 text-navy-900 focus:ring-navy-800 shrink-0"
                          required
                        />
                        <span>
                          I confirm this enquiry on behalf of my institution and agree to Civiora handling this information in accordance with its{' '}
                          <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold-700 underline font-semibold hover:text-gold-800">
                            Privacy Policy
                          </Link>.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status.submitting}
                        className="btn-primary w-full justify-center text-sm py-3 disabled:opacity-60"
                      >
                        {status.submitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Request an Institutional Discussion</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
