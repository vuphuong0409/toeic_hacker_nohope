// require-login.js
// Ensures the current user is authenticated; if not, redirect to the site's root login.html
import { auth, onAuthStateChanged } from './firebase-config.js';

const loginUrl = new URL('login.html', import.meta.url).href;

// Immediately check auth state and redirect unauthenticated visitors.
onAuthStateChangedHandler();

function onAuthStateChangedHandler() {
  // Use onAuthStateChanged so the Firebase auth state is resolved correctly
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // redirect to the root login page
      window.location.href = loginUrl;
    }
  });
}
