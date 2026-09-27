// GA4 measurement for PureGlow Naturals.
const GA4_ID = 'G-9BY5HRZKW2';

if (/^G-[A-Z0-9]+$/.test(GA4_ID)) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);
  window.gtag('js', new Date());
  window.gtag('config', GA4_ID);
}
