import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, Building, User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import { submitAppointmentRequest, isFirebaseConfigured } from '../../firebase';
import { trackMetaLead } from '../../utils/metaPixel';

const INSTITUTION_TYPES = [
  'School',
  'College',
  'University',
  'Education Service Provider',
];

const PRIMARY_REQUIREMENTS = [
  'School Student Development',
  'Government Career Cell',
  'Career Awareness & Counselling',
  'Programme Partnership',
];

const SUBMISSION_COOLDOWN_MS = 30_000;

export default function InstitutionalLeadForm({
  selectedType,
  selectedRequirement,
  className = '',
  id = 'lead-form',
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    institutionName: '',
    designation: '',
    mobileNumber: '',
    emailAddress: '',
    city: '',
    institutionType: INSTITUTION_TYPES[0],
    primaryRequirement: PRIMARY_REQUIREMENTS[0],
    briefRequirement: '',
    consent: false,
    website: '', // Honeypot field
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [lastSubmissionAt, setLastSubmissionAt] = useState(0);
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    documentId: null,
  });

  const formRef = useRef(null);
  const fullNameRef = useRef(null);

  // Sync external preselection changes
  useEffect(() => {
    if (selectedType && INSTITUTION_TYPES.includes(selectedType)) {
      setFormData((prev) => ({ ...prev, institutionType: selectedType }));
    }
  }, [selectedType]);

  useEffect(() => {
    if (selectedRequirement && PRIMARY_REQUIREMENTS.includes(selectedRequirement)) {
      setFormData((prev) => ({ ...prev, primaryRequirement: selectedRequirement }));
    }
  }, [selectedRequirement]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9+\s\-()]{5,50}$/;

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length > 150) {
      errors.fullName = 'Name cannot exceed 150 characters.';
    }

    if (!formData.institutionName.trim()) {
      errors.institutionName = 'Institution name is required.';
    } else if (formData.institutionName.trim().length > 200) {
      errors.institutionName = 'Institution name cannot exceed 200 characters.';
    }

    if (!formData.designation.trim()) {
      errors.designation = 'Designation is required.';
    } else if (formData.designation.trim().length > 150) {
      errors.designation = 'Designation cannot exceed 150 characters.';
    }

    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile number is required.';
    } else if (!phoneRegex.test(formData.mobileNumber.trim())) {
      errors.mobileNumber = 'Please enter a valid telephone/mobile number (minimum 5 digits).';
    }

    if (!formData.emailAddress.trim()) {
      errors.emailAddress = 'Email address is required.';
    } else if (!emailRegex.test(formData.emailAddress.trim().toLowerCase())) {
      errors.emailAddress = 'Please enter a valid institutional email address.';
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required.';
    } else if (formData.city.trim().length > 150) {
      errors.city = 'City cannot exceed 150 characters.';
    }

    if (!formData.institutionType) {
      errors.institutionType = 'Please select your institution type.';
    }

    if (!formData.primaryRequirement) {
      errors.primaryRequirement = 'Please select your primary requirement.';
    }

    if (!formData.consent) {
      errors.consent = 'Please accept the consent checkbox to submit your enquiry.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent concurrent duplicate submissions
    if (status.submitting) return;

    // 1. Honeypot check: Bots filling the hidden website field receive instant mock success
    if (formData.website.trim()) {
      setStatus({ submitting: false, submitted: true, error: null, documentId: null });
      return;
    }

    // 2. Validate all inputs
    if (!validate()) {
      return;
    }

    // 3. Prevent rapid duplicate submissions
    if (Date.now() - lastSubmissionAt < SUBMISSION_COOLDOWN_MS) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please wait a moment before submitting another enquiry.',
        documentId: null,
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null, documentId: null });

    try {
      if (!isFirebaseConfigured) {
        throw new Error(
          'Database service is currently unconfigured. Please ensure environment variables are present.'
        );
      }

      // Map compatible schema for Firestore appointmentRequests collection
      const firestoreType =
        formData.institutionType === 'Education Service Provider'
          ? 'Academic/Specialist Partner'
          : formData.institutionType;

      const requirementDetails = formData.briefRequirement.trim()
        ? `[Primary: ${formData.primaryRequirement.trim()}] ${formData.briefRequirement.trim()}`
        : `Primary Requirement: ${formData.primaryRequirement.trim()}`;

      const leadPayload = {
        representativeName: formData.fullName.trim(),
        institutionName: formData.institutionName.trim(),
        designation: formData.designation.trim(),
        telephone: formData.mobileNumber.trim(),
        officialEmail: formData.emailAddress.trim().toLowerCase(),
        location: formData.city.trim(),
        institutionType: firestoreType,
        primaryRequirement: formData.primaryRequirement.trim(),
        requirement: requirementDetails,
        discussionFormat: 'Institutional Partnership Discussion',
        consent: Boolean(formData.consent),
      };

      const result = await submitAppointmentRequest(leadPayload);

      // Track Meta Lead event strictly without transmitting any user data / PII
      trackMetaLead();
      setLastSubmissionAt(Date.now());

      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        documentId: result?.id || null,
      });
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error('Lead form submission error:', err);
      }

      let errorMessage = 'Unable to submit your enquiry at this time. Please try again or email us directly at connect@civiora.co.in.';
      if (err?.code === 'permission-denied') {
        errorMessage = 'Submission was rejected due to permission constraints. Please verify all required fields and try again.';
      } else if (err?.code === 'unavailable') {
        errorMessage = 'Database service is temporarily unavailable. Please check your network connection and try again.';
      }

      setStatus({
        submitting: false,
        submitted: false,
        error: errorMessage,
        documentId: null,
      });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      institutionName: '',
      designation: '',
      mobileNumber: '',
      emailAddress: '',
      city: '',
      institutionType: INSTITUTION_TYPES[0],
      primaryRequirement: PRIMARY_REQUIREMENTS[0],
      briefRequirement: '',
      consent: false,
      website: '',
    });
    setFieldErrors({});
    setStatus({
      submitting: false,
      submitted: false,
      error: null,
      documentId: null,
    });
  };

  return (
    <div
      id={id}
      ref={formRef}
      className={`bg-white rounded-3xl p-5 sm:p-7 md:p-8 border border-navy-100 shadow-xl shadow-navy-950/5 font-body relative scroll-mt-24 transition-all duration-300 ${className}`}
      data-clarity-mask="true"
      data-clarity-exclude="true"
    >
      {/* Form Header */}
      <div className="border-b border-navy-100 pb-4 mb-5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
          Institutional Enquiry
        </span>
        <h2 className="font-display text-xl sm:text-2xl text-navy-900 font-bold mt-2 tracking-tight">
          Let’s Explore What Your Campus Needs.
        </h2>
        <p className="text-xs sm:text-sm text-navy-600 mt-1.5 leading-relaxed">
          Complete the form, and the Civiora team will contact you for an initial partnership discussion.
        </p>
      </div>

      {/* Success Message Area - Explicitly masked & excluded from recording */}
      {status.submitted ? (
        <div
          className="py-8 px-4 text-center space-y-4 animate-fadeUp"
          data-clarity-mask="true"
          data-clarity-exclude="true"
        >
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
            <CheckCircle2 size={32} />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900">
              Enquiry Received
            </h3>
            <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
              Thank you for your interest. Your enquiry has been received. Our team will contact you to understand your institution’s requirements.
            </p>
            {status.documentId && (
              <p className="text-[11px] text-navy-600 font-mono pt-1">
                Reference ID: {status.documentId}
              </p>
            )}
          </div>
          <div className="pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary text-xs py-2 px-5"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        /* Form Inputs - Explicitly masked & excluded from recording */
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4 text-left"
          data-clarity-mask="true"
          data-clarity-exclude="true"
        >
          {/* Honeypot Field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="form-website-trap">Website</label>
            <input
              type="text"
              id="form-website-trap"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Error Banner */}
          {status.error && (
            <div
              role="alert"
              className="p-3 sm:p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5"
            >
              <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5" />
              <span>{status.error}</span>
            </div>
          )}

          {/* Row 1: Full Name & Institution Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-navy-900 mb-1">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                ref={fullNameRef}
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Dr. / Prof. / Mr. / Ms."
                data-clarity-mask="true"
                data-clarity-exclude="true"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 transition-all ${
                  fieldErrors.fullName
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-navy-200 focus:ring-gold-500 focus:border-gold-500 bg-navy-50/30'
                }`}
              />
              {fieldErrors.fullName && (
                <p className="text-[11px] text-red-600 mt-1">{fieldErrors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="institutionName" className="block text-xs font-semibold text-navy-900 mb-1">
                Institution name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="institutionName"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                placeholder="School, College or University name"
                data-clarity-mask="true"
                data-clarity-exclude="true"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 transition-all ${
                  fieldErrors.institutionName
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-navy-200 focus:ring-gold-500 focus:border-gold-500 bg-navy-50/30'
                }`}
              />
              {fieldErrors.institutionName && (
                <p className="text-[11px] text-red-600 mt-1">{fieldErrors.institutionName}</p>
              )}
            </div>
          </div>

          {/* Row 2: Designation & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label htmlFor="designation" className="block text-xs font-semibold text-navy-900 mb-1">
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Principal, Dean, Director, Trustee..."
                data-clarity-mask="true"
                data-clarity-exclude="true"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 transition-all ${
                  fieldErrors.designation
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-navy-200 focus:ring-gold-500 focus:border-gold-500 bg-navy-50/30'
                }`}
              />
              {fieldErrors.designation && (
                <p className="text-[11px] text-red-600 mt-1">{fieldErrors.designation}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="block text-xs font-semibold text-navy-900 mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Campus city / location"
                data-clarity-mask="true"
                data-clarity-exclude="true"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 transition-all ${
                  fieldErrors.city
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-navy-200 focus:ring-gold-500 focus:border-gold-500 bg-navy-50/30'
                }`}
              />
              {fieldErrors.city && (
                <p className="text-[11px] text-red-600 mt-1">{fieldErrors.city}</p>
              )}
            </div>
          </div>

          {/* Row 3: Mobile Number & Email Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-semibold text-navy-900 mb-1">
                Mobile number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                data-clarity-mask="true"
                data-clarity-exclude="true"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 transition-all ${
                  fieldErrors.mobileNumber
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-navy-200 focus:ring-gold-500 focus:border-gold-500 bg-navy-50/30'
                }`}
              />
              {fieldErrors.mobileNumber && (
                <p className="text-[11px] text-red-600 mt-1">{fieldErrors.mobileNumber}</p>
              )}
            </div>

            <div>
              <label htmlFor="emailAddress" className="block text-xs font-semibold text-navy-900 mb-1">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="leadership@institution.edu.in"
                data-clarity-mask="true"
                data-clarity-exclude="true"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 transition-all ${
                  fieldErrors.emailAddress
                    ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                    : 'border-navy-200 focus:ring-gold-500 focus:border-gold-500 bg-navy-50/30'
                }`}
              />
              {fieldErrors.emailAddress && (
                <p className="text-[11px] text-red-600 mt-1">{fieldErrors.emailAddress}</p>
              )}
            </div>
          </div>

          {/* Row 4: Institution Type & Primary Requirement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label htmlFor="institutionType" className="block text-xs font-semibold text-navy-900 mb-1">
                Institution type <span className="text-red-500">*</span>
              </label>
              <select
                id="institutionType"
                name="institutionType"
                value={formData.institutionType}
                onChange={handleChange}
                data-clarity-mask="true"
                data-clarity-exclude="true"
                className="w-full px-3.5 py-2.5 rounded-xl border border-navy-200 text-xs sm:text-sm text-navy-900 bg-navy-50/30 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all cursor-pointer"
              >
                {INSTITUTION_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="primaryRequirement" className="block text-xs font-semibold text-navy-900 mb-1">
                Primary requirement <span className="text-red-500">*</span>
              </label>
              <select
                id="primaryRequirement"
                name="primaryRequirement"
                value={formData.primaryRequirement}
                onChange={handleChange}
                data-clarity-mask="true"
                data-clarity-exclude="true"
                className="w-full px-3.5 py-2.5 rounded-xl border border-navy-200 text-xs sm:text-sm text-navy-900 bg-navy-50/30 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all cursor-pointer"
              >
                {PRIMARY_REQUIREMENTS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 5: Brief Requirement (Optional) */}
          <div>
            <label htmlFor="briefRequirement" className="block text-xs font-semibold text-navy-900 mb-1">
              Briefly describe your requirement <span className="text-navy-400 font-normal">— optional</span>
            </label>
            <textarea
              id="briefRequirement"
              name="briefRequirement"
              rows={3}
              value={formData.briefRequirement}
              onChange={handleChange}
              placeholder="E.g., Number of students, target grades/batches, preferred timeline or specific learning focus..."
              data-clarity-mask="true"
              data-clarity-exclude="true"
              className="w-full px-3.5 py-2.5 rounded-xl border border-navy-200 text-xs sm:text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-navy-50/30 transition-all resize-y"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="pt-1">
            <label htmlFor="lead-consent" className="flex items-start gap-2.5 cursor-pointer text-xs text-navy-700 select-none">
              <input
                type="checkbox"
                id="lead-consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                data-clarity-mask="true"
                data-clarity-exclude="true"
                className="w-4 h-4 rounded border-navy-300 text-gold-600 focus:ring-gold-500 mt-0.5 shrink-0 cursor-pointer"
              />
              <span className="leading-snug">
                I agree to be contacted by Civiora regarding this enquiry and acknowledge the{' '}
                <Link
                  to="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 font-semibold underline hover:text-gold-700"
                >
                  Privacy Policy
                </Link>
                . <span className="text-red-500">*</span>
              </span>
            </label>
            {fieldErrors.consent && (
              <p className="text-[11px] text-red-600 mt-1">{fieldErrors.consent}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status.submitting}
              className="w-full btn-primary py-3.5 text-xs sm:text-sm font-semibold tracking-wide justify-center shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status.submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin mr-2" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Request a Partnership Discussion</span>
                  <Send size={14} className="ml-1" />
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-navy-600 mt-2">
              * Required field · Civiora provides consulting &amp; coordination; specialist partners deliver agreed programmes.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

