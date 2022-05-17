const COOKIE_CONSENT_STORAGE_KEY = 'cookie_consent_closed';
const COOKIE_CONSENT_TEXT = 'Bist du der Weihnachtsmann? Weil ich hab cookies für dich! Mit dem benutzen dieser Webseite akzeptierst du diese.';

if (localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) === null) {
  const cookieBannerBase = document.createElement('div');
  const cookieBannerText = document.createElement('p');
  const cookieBannerButton = document.createElement('button');

  cookieBannerText.innerText = COOKIE_CONSENT_TEXT;

  cookieBannerButton.innerHTML = '&times;';
  cookieBannerButton.classList.add('cookie-banner__close');
  cookieBannerButton.addEventListener('click', () => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, new Date().getTime());
    cookieBannerBase.style.transition = 'transform 0.2s';
    cookieBannerBase.style.transform = 'translateY(200%)';
    delete cookieBannerBase;
    delete cookieBannerText;
    delete cookieBannerButton;
  });

  cookieBannerBase.classList.add('cookie-banner');
  cookieBannerBase.appendChild(cookieBannerText);
  cookieBannerBase.appendChild(cookieBannerButton);

  document.body.appendChild(cookieBannerBase);
}
