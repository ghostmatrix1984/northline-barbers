/* Gallery-only enhancement. The photographs remain visible without JavaScript. */
(() => {
  const dialog = document.querySelector('.gallery-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const preview = dialog.querySelector('.gallery-lightbox-image');
  const caption = dialog.querySelector('.gallery-lightbox-caption');
  const closeButton = dialog.querySelector('.gallery-lightbox-close');
  let opener = null;

  document.querySelectorAll('.gallery-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      const thumbnail = button.querySelector('img');
      opener = button;
      preview.src = thumbnail.currentSrc || thumbnail.src;
      preview.alt = thumbnail.alt;
      caption.textContent = button.closest('figure').querySelector('figcaption').textContent.trim();
      dialog.showModal();
      document.body.classList.add('gallery-lightbox-open');
      document.documentElement.classList.add('gallery-modal-open');
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog &&
        (event.clientX < bounds.left || event.clientX > bounds.right ||
         event.clientY < bounds.top || event.clientY > bounds.bottom)) {
      dialog.close();
    }
  });

  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('gallery-lightbox-open');
    document.documentElement.classList.remove('gallery-modal-open');
    preview.removeAttribute('src');
    preview.alt = '';
    caption.textContent = '';
    if (opener?.isConnected) opener.focus();
    opener = null;
  });
})();
