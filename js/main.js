/* =========================================================
   Jumping Beans Coffee -- interactions
   - Mobile nav toggle
   - Newsletter, Coffee Club and Events booking forms
     (placeholder submits with success / error states)
   ========================================================= */
(function () {
  'use strict';

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---- Form helper --------------------------------------- */
  // Wires a form to a placeholder async "submit". Replace the setTimeout
  // block with a real POST to your provider (Mailchimp / Klaviyo / HubSpot
  // for lists; an email or CRM endpoint for booking enquiries) and surface
  // the returned success / error states.
  function wireForm(formId, statusId, opts) {
    var form = document.getElementById(formId);
    var status = document.getElementById(statusId);
    if (!form) return;

    function setStatus(msg, kind) {
      if (!status) return;
      status.textContent = msg;
      status.classList.remove('is-success', 'is-error');
      if (kind) status.classList.add(kind);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate required fields (native validity + explicit email check)
      var invalid = form.querySelector(':invalid');
      var emailField = form.querySelector('input[type="email"]');
      var emailOk = !emailField || EMAIL_RE.test(emailField.value.trim());

      if (invalid || !emailOk) {
        setStatus(opts.invalidMsg, 'is-error');
        (invalid || emailField).focus();
        return;
      }

      var button = form.querySelector('button[type="submit"]');
      if (button) button.disabled = true;
      setStatus(opts.pendingMsg, null);

      window.setTimeout(function () {
        setStatus(opts.successMsg, 'is-success');
        form.reset();
        if (button) button.disabled = false;
      }, 600);
    });
  }

  wireForm('signup-form', 'signup-status', {
    invalidMsg: 'Please enter a valid email address.',
    pendingMsg: 'Signing you up…',
    successMsg: 'Thanks! You’re on the list — see you out there. ☕'
  });

  wireForm('club-form', 'club-status', {
    invalidMsg: 'Please add your name and a valid email.',
    pendingMsg: 'Joining…',
    successMsg: 'Welcome to the family! Check your inbox for your welcome email. ☕'
  });

  wireForm('booking-form', 'booking-status', {
    invalidMsg: 'Please add your name and a valid email so we can reply.',
    pendingMsg: 'Sending your enquiry…',
    successMsg: 'Thanks — we’ve got your enquiry and will be in touch shortly. 🎉'
  });
})();
