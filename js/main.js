// HÁBITAT OASIS – main.js

function toggleAccordion(id) {
  const body = document.getElementById('body-' + id);
  const btn  = body.previousElementSibling;
  const isOpen = body.classList.contains('open');

  document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.accordion-btn').forEach(b => b.classList.remove('open'));

  if (!isOpen) {
    body.classList.add('open');
    btn.classList.add('open');
  }
}

const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
  }
}, { passive: true });