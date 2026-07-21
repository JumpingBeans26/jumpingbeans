/* =========================================================
   Jumping Beans Coffee — interactions
   - Mobile nav toggle
   - Newsletter signup (placeholder submit with success/error states)
   ========================================================= */
(function () {
  'use strict';

  /* ---- Mobile nav ---------------------------------------- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Close the menu after tapping a link (single-page anchors)
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---- Newsletter signup --------------------------------- */
  var form = document.getElementById('signup-form');
  var status = document.getElementById('signup-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var input = form.querySelector('input[type="email"]');
      var email = input ? input.value.trim() : '';
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      function setStatus(msg, kind) {
        if (!status) return;
        status.textContent = msg;
        status.classList.remove('is-success', 'is-error');
        if (kind) status.classList.add(kind);
      }

      if (!valid) {
        setStatus('Please enter a valid email address.', 'is-error');
        if (input) input.focus();
        return;
      }

      // ---------------------------------------------------------------
      // Placeholder submission.
      // Replace this block with a real provider (Mailchimp, Klaviyo,
      // Buttondown, etc.) — POST `email` to your list endpoint and
      // surface the returned success / error states below.
      // ---------------------------------------------------------------
      var button = form.querySelector('button[type="submit"]');
      if (button) button.disabled = true;
      setStatus('Signing you up…', null);

      // Simulate an async request so the states are wired and visible.
      window.setTimeout(function () {
        setStatus('Thanks! You’re on the list — see you out there. ☕', 'is-success');
        form.reset();
        if (button) button.disabled = false;
      }, 600);
    });
  }
})();
