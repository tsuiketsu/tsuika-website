const matcher = window.matchMedia('(prefers-color-scheme: dark)');

const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

(() => {
  if (!darkSchemeIcon || !lightSchemeIcon) return;

  if (matcher.matches) {
    lightSchemeIcon?.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon?.remove();
  }
})();
