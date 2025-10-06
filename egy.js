document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if(name && email && message) {
        alert(`Köszönjük az üzenetet, ${name}!`);
        form.reset();
      } else {
        alert('Kérjük, töltse ki az összes mezőt!');
      }
    });
  }
});
