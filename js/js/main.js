// HÁBITAT OASIS – main.js

// ---- ACCORDION ----
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

// ---- LIGHTBOX ----
const fotos = [
  'fotos/foto01.jpg',
  'fotos/habitat02.jpg',
  'fotos/habitat03.jpg',
  'fotos/habitat04.jpg',
  'fotos/habitat05.jpg',
  'fotos/habitat06.jpg',
  'fotos/habitat07.jpg',
  'fotos/habitat08.jpg',
  'fotos/habitat09.jpg',
  'fotos/habitat10.jpg',
  'fotos/habitat11.jpg'
];

let fotoActual = 0;

function abrirLightbox(src) {
  fotoActual = fotos.indexOf(src);
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('activo');
  document.body.style.overflow = 'hidden';
}

function cerrarLightbox() {
  document.getElementById('lightbox').classList.remove('activo');
  document.body.style.overflow = '';
}

function cambiarFoto(direccion) {
  fotoActual = (fotoActual + direccion + fotos.length) % fotos.length;
  document.getElementById('lightbox-img').src = fotos[fotoActual];
}

document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('activo')) return;
  if (e.key === 'Escape') cerrarLightbox();
  if (e.key === 'ArrowRight') cambiarFoto(1);
  if (e.key === 'ArrowLeft') cambiarFoto(-1);
});

// ---- MOBILE NAV ----
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
}, { passive: true });

// Lista de todas las imágenes de la galería (en el orden en que aparecen)
const imagenesGaleria = [
    'fotos/habitat08.jpg',
    'fotos/habitat09.jpg',
    'fotos/habitat10.jpg',
    'fotos/habitat11.jpg'
    // Si tienes más, agrégalas aquí
];

let indiceActual = 0;

function abrirLightbox(ruta) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = ruta;
    indiceActual = imagenesGaleria.indexOf(ruta);
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Evita scroll
}

function cerrarLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = '';
}

function cambiarFoto(direccion) {
    const total = imagenesGaleria.length;
    indiceActual = (indiceActual + direccion + total) % total;
    const img = document.getElementById('lightbox-img');
    img.src = imagenesGaleria[indiceActual];
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarLightbox();
    }
});