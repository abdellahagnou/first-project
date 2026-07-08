// Simple client-side handler for the contact form
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('formMessage');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    if (!name || !email) {
      msg.textContent = 'Please fill in your name and email.';
      msg.style.color = '#b33';
      return;
    }

    // Simulate success (no backend at the moment).
    msg.textContent = 'Thanks, ' + name + '! Your message was received.';
    msg.style.color = '#0a7';
    form.reset();
  });
});
