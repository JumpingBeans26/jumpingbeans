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
  // Wires a form's submit to success / error states.
  //
  // - For the newsletter and Coffee Club lists this is a placeholder submit:
  //   replace the setTimeout block with a real POST to your provider
  //   (Mailchimp / Klaviyo / HubSpot).
  // - When `opts.mailto` is set (the booking enquiry form), the form composes
  //   a pre-filled email to that address using the visitor's mail app, so the
  //   enquiry is received at the business inbox.
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

    // Build a mailto: link from the named fields listed in opts.fields.
    function buildMailto() {
      var lines = opts.fields.map(function (f) {
        var el = form.elements[f[0]];
        var v = el ? String(el.value).trim() : '';
        return f[1] + ': ' + (v || '-');
      });
      var name = form.elements.name ? form.elements.name.value.trim() : '';
      var subject = 'Event booking enquiry' + (name ? ' - ' + name : '');
      var body = 'New event booking enquiry from the Jumping Beans website:\n\n' + lines.join('\n');
      return 'mailto:' + opts.mailto +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
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

      // Booking enquiry: open the visitor's mail app addressed to the business.
      if (opts.mailto) {
        window.location.assign(buildMailto());
        setStatus(opts.successMsg, 'is-success');
        return;
      }

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
    successMsg: 'Opening your email app to send the enquiry to us — just hit send. 🎉',
    mailto: 'jumping_bean26@hotmail.com',
    fields: [
      ['name', 'Name'],
      ['event_name', 'Company / event name'],
      ['email', 'Email'],
      ['phone', 'Phone'],
      ['date', 'Event date'],
      ['location', 'Event location'],
      ['attendance', 'Expected attendance'],
      ['type', 'Event type']
    ]
  });
})();
