# QR File Access Scanner (PWA)

A simple PWA to scan QR codes (using your device's back camera by default) and open the URL in the same tab. If the URL requires authentication, the server will handle login and redirect you back to the resource.

## How it works

1. **Open the app** (on GitHub Pages or your own hosting).
2. **Grant camera access** when prompted.
3. **Point your device's back camera at a QR code.**
4. On scan, the app redirects you to the QR code's URL in the same tab.
5. If the URL requires login, you'll be redirected to the login portal and then to the resource after login.

## Deployment

- Place all files in your repo (including icons).
- Enable GitHub Pages (Settings > Pages) and select the main branch.
- Access your app at `https://<username>.github.io/<repo-name>/`.

## Notes

- Works on mobile and desktop, but is optimized for mobile.
- **If the camera does not activate:**  
  - Make sure you are not in Incognito/Private mode (some browsers block camera).
  - Use HTTPS (GitHub Pages is always HTTPS).
  - Grant camera access when prompted.
- Add your own 192x192 and 512x512 icons for best PWA experience.

## Credit

- Uses [html5-qrcode](https://github.com/mebjas/html5-qrcode) for QR code scanning.