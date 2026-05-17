/* ===========================
   CURSOR CUSTOMIZADO
=========================== */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Cursor principal — segue o mouse direto
  cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;

  // Anel — segue com delay suave (lerp)
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

/* ===========================
   NAVBAR — EFEITO AO ROLAR
=========================== */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ===========================
   INTERSECTION OBSERVER
   Ativa animações ao entrar na viewport
=========================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Anima as barras de skill dentro do elemento visível
      const skillBars = entry.target.querySelectorAll('.skill-fill');
      skillBars.forEach(bar => bar.classList.add('animate'));
    }
  });
}, { threshold: 0.15 });

// Observa elementos com fade-in e itens da timeline
document.querySelectorAll('.fade-in, .tl-item').forEach(el => observer.observe(el));

// Observa os grupos de skill para acionar as barras
document.querySelectorAll('.skill-group').forEach(el => observer.observe(el));
