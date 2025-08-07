# PWA QR Code Scanner – Process Flow

## 1. Launch the App
- User opens the PWA in their mobile browser (e.g., Safari on iPhone, Chrome on Android) or as an installed web app.

## 2. Scan QR Code
- The app activates the **back camera** by default.
- The user sees a **live camera preview** and points it at the QR code.

## 3. QR Code Detection
- The app detects a QR code and **extracts the URL** encoded in it.

## 4. Navigate to the Resource
- The app **automatically opens the URL in the same tab** (browser window).

## 5. Authentication (Handled by the Resource Server)
- If the user is **already authenticated**, the file/resource opens directly.
- If the user is **not authenticated**, the server redirects the browser to the login portal.
- After **successful login**, the server automatically redirects the user back to the original resource URL.

## 6. Access the Resource
- The user now has access to the protected file/resource without needing to manually re-enter the URL or use another tab.

---

**Key Points:**
- The app itself does not manage authentication or redirects; it just opens the scanned URL.
- Authentication and post-login redirection are handled by the server hosting the resource.
- The user experience is seamless: scan → open (→ login if needed) → access.
- The back camera and live preview make scanning easy on mobile devices.
