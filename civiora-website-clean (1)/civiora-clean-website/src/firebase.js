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
  firebaseConfig.apiKey && firebaseConfig.projectId
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
      const { initializeApp } = await import('firebase/app');
      const { getFirestore } = await import('firebase/firestore');
      const app = initializeApp(firebaseConfig);
      return getFirestore(app);
    })();
  }
  return dbPromise;
}

/**
 * Submits an appointment / enquiry request from the contact form.
 * Writes to a Firestore collection called "appointmentRequests" when
 * Firebase is configured. When it isn't, throws so the UI can fall back
 * to showing the direct email/phone contact details.
 */
export async function submitAppointmentRequest(data) {
  const db = await getDb();
  if (!db) {
    throw new Error(
      'Firebase is not configured yet. Add your config to .env (see .env.example).'
    );
  }
  const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
  await addDoc(collection(db, 'appointmentRequests'), {
    ...data,
    createdAt: serverTimestamp(),
  });
}
