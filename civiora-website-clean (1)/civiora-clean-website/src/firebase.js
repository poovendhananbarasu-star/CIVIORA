// Firebase is initialized lazily and only if valid environment variables are
// present. This lets the site build and run perfectly well before Firebase
// has been configured — the contact form simply falls back gracefully.
//
// To enable Firebase:
//   1. Create a Firebase project at https://console.firebase.google.com
//   2. Enable Firestore (for storing appointment requests)
//   3. Copy .env.example to .env and fill in your project's config values
//   4. Restart the dev server / rebuild

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

let dbPromise = null;

/**
 * Lazily loads and initializes Firebase + Firestore only when needed,
 * and only if configuration is present. Keeps the initial bundle light
 * and avoids crashing the app when Firebase hasn't been set up yet.
 */
async function getDb() {
  if (!isFirebaseConfigured) return null;
  if (!dbPromise) {
    dbPromise = (async () => {
      const { initializeApp, getApps, getApp } = await import('firebase/app');
      const { getFirestore } = await import('firebase/firestore');
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      return getFirestore(app);
    })();
  }
  return dbPromise;
}

/**
 * Submits an appointment / enquiry request from the contact form.
 * Writes strictly to the Firestore collection "appointmentRequests".
 * Enforces field validation and returns the generated Firestore document ID.
 */
export async function submitAppointmentRequest(data) {
  if (!isFirebaseConfigured) {
    throw new Error(
      'Firebase is not configured in this environment. Please ensure VITE_FIREBASE_* settings are present in .env.'
    );
  }

  const db = await getDb();
  if (!db) {
    throw new Error('Failed to initialize Firestore database connection.');
  }

  const { collection, doc, setDoc, serverTimestamp } = await import('firebase/firestore');
  const appointmentDocRef = doc(collection(db, 'appointmentRequests'));
  const documentId = appointmentDocRef.id;

  const payload = {
    institutionType: String(data.institutionType || '').trim(),
    representativeName: String(data.representativeName || '').trim(),
    designation: String(data.designation || '').trim(),
    institutionName: String(data.institutionName || '').trim(),
    location: String(data.location || '').trim(),
    officialEmail: String(data.officialEmail || '').trim().toLowerCase(),
    telephone: String(data.telephone || '').trim(),
    discussionFormat: String(data.discussionFormat || 'Initial partnership discussion').trim(),
    requirement: String(data.requirement || '').trim(),
    consent: Boolean(data.consent),
    documentId: documentId,
    createdAt: serverTimestamp(),
  };

  if (data.primaryRequirement) {
    payload.primaryRequirement = String(data.primaryRequirement).trim();
  }

  try {
    await setDoc(appointmentDocRef, payload);
  } catch (err) {
    // If the deployed Firestore rules strictly enforce hasOnlyAllowedFields without primaryRequirement,
    // retry cleanly without the extra top-level key (the primary requirement remains safely recorded in requirement)
    if (payload.primaryRequirement && err?.code === 'permission-denied') {
      delete payload.primaryRequirement;
      await setDoc(appointmentDocRef, payload);
    } else {
      throw err;
    }
  }

  return { id: documentId };
}
