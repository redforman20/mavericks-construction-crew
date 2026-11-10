Maverick's Construction Crew v9 — Automatic Update Checker

Upload all SIX files directly to the root of your EXISTING GitHub Pages repository:
index.html, sw.js, version.json, manifest.webmanifest, icon-192.png, icon-512.png
Do not upload the ZIP itself.

New: The app checks version.json when opened, when coming back from the background, on reconnection, and every five minutes while open. When a newer version appears, it gives a visible notification and refreshes after a short delay (unless Parent Settings is open). A Check update button lets you manually check. The version number is visible on the main screen.

For EVERY FUTURE release, change the version number in BOTH index.html (APP_VERSION) and version.json, and change the service worker CACHE name. Upload these files together. Otherwise automatic update checking cannot detect a new version.

Stars, redeemed rewards, voice settings, and dates continue using the SAME localStorage key: maverick-construction-v1. Do not delete the Home Screen app or clear website data as a troubleshooting step. Local device progress does not sync across phones and iPads. Offline use still works after the first successful load.

An installed iOS Home Screen app can sometimes retain an older cache until iOS launches it again. Updating is best-effort: the app must be opened online to check for updates. If it remains stale, open the GitHub Pages link in Safari once with ?version=9 appended. Never clear Safari website data to force an update.
