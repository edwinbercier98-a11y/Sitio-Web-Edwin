// MENU responsive
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn && menuBtn.addEventListener('click', () => {
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});

// Pequeña animación al hacer scroll (fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('inview');
  });
},{threshold:0.12});

document.querySelectorAll('.card, .portfolio-item, .hero-left').forEach(el => {
  observer.observe(el);
});

// Añadir efecto suave al hacer click en enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
