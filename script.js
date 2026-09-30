/* Small, progressively enhanced navigation. All page content works without JS. */
(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const mobile = window.matchMedia('(max-width: 63.99rem)');

  if (header && toggle && navigation) {
    const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

    const setOpen = (open, returnFocus = false) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      header.classList.toggle('menu-open', open);
      navigation.inert = mobile.matches && !open;
      if (returnFocus) toggle.focus();
    };

    const syncNavigation = () => {
      const focusWillBeHidden = mobile.matches && navigation.contains(document.activeElement);
      setOpen(false, focusWillBeHidden);
    };

    // Only collapse the navigation once its handlers are ready.
    toggle.addEventListener('click', () => setOpen(!isOpen()));
    navigation.addEventListener('click', (event) => {
      if (mobile.matches && event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && isOpen()) setOpen(false, true);
    });
    document.addEventListener('click', (event) => {
      if (isOpen() && !header.contains(event.target)) {
        setOpen(false, navigation.contains(document.activeElement));
      }
    });
    header.addEventListener('focusout', (event) => {
      if (isOpen() && event.relatedTarget && !header.contains(event.relatedTarget)) setOpen(false);
    });
    mobile.addEventListener('change', syncNavigation);
    header.classList.add('nav-ready');
    syncNavigation();
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
