// Add the Google Ads AW- ID here after creating the assignment account.
// Leave blank while this is a local demo. No external tracking runs without an ID.
const GOOGLE_ADS_ID = '';
if (/^AW-\d+$/.test(GOOGLE_ADS_ID)) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GOOGLE_ADS_ID);
}
