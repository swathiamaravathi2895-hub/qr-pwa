// Uses html5-qrcode from CDN
// Make sure to add this script to your repo or use <script src="https://unpkg.com/html5-qrcode@2.3.11/minified/html5-qrcode.min.js"></script> in your index.html if you want to avoid ESM import.

const statusElem = document.getElementById("status");

function getBackCameraId(devices) {
  // Try to find a camera labeled as environment/back
  for (const d of devices) {
    if (d.label.toLowerCase().includes("back") || d.label.toLowerCase().includes("environment")) {
      return d.id;
    }
  }
  // Fallback to the last device (usually back cam on phones)
  return devices.length > 1 ? devices[devices.length - 1].id : devices[0].id;
}

async function startScanner() {
  // Wait until html5-qrcode is available (after DOM loaded)
  const waitForQrcode = () =>
    new Promise((resolve) => {
      if (window.Html5Qrcode) resolve();
      else {
        const id = setInterval(() => {
          if (window.Html5Qrcode) {
            clearInterval(id);
            resolve();
          }
        }, 50);
      }
    });
  await waitForQrcode();

  const reader = new Html5Qrcode("reader");
  const devices = await Html5Qrcode.getCameras();
  if (devices && devices.length) {
    const backCamId = getBackCameraId(devices);
    statusElem.textContent = "Point your camera at a QR code.";
    reader.start(
      backCamId,
      { fps: 10, qrbox: { width: 300, height: 300 } },
      qrCodeMessage => {
        statusElem.textContent = "QR code detected! Redirecting...";
        reader.stop();
        window.location.href = qrCodeMessage; // Open in same tab
      },
      error => {
        // Optional: show scanning errors
      }
    );
  } else {
    statusElem.textContent = "No camera found on this device.";
  }
}

// Load html5-qrcode dynamically if not present
if (!window.Html5Qrcode) {
  const script = document.createElement('script');
  script.src = "https://unpkg.com/html5-qrcode@2.3.11/minified/html5-qrcode.min.js";
  script.onload = startScanner;
  document.head.appendChild(script);
} else {
  startScanner();
}