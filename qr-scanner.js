const statusElem = document.getElementById("status");

function getBackCameraId(devices) {
  for (const d of devices) {
    if (d.label.toLowerCase().includes("back") || d.label.toLowerCase().includes("environment")) {
      return d.id;
    }
  }
  return devices.length > 1 ? devices[devices.length - 1].id : devices[0].id;
}

async function startScanner() {
  if (!window.Html5Qrcode) {
    statusElem.textContent = "QR library failed to load.";
    return;
  }
  const reader = new Html5Qrcode("reader");
  try {
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
          window.location.href = qrCodeMessage;
        },
        error => {
          // Optionally show scanning errors
        }
      );
    } else {
      statusElem.textContent = "No camera found on this device.";
    }
  } catch (e) {
    statusElem.textContent = "Camera access denied or unavailable.";
  }
}

startScanner();