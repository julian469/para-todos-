const gallery = document.getElementById('gallery');

// Duplicamos contenido para efecto bucle suave
gallery.innerHTML += gallery.innerHTML;

let scrollSpeed = 0.8; // Velocidad (px por frame)
let autoScroll;

// Función para scroll infinito
function startAutoScroll() {
  autoScroll = setInterval(() => {
    gallery.scrollTop += scrollSpeed;

    // Si llega al final, vuelve al inicio
    if (gallery.scrollTop >= gallery.scrollHeight / 2) {
      gallery.scrollTop = 0;
    }
  }, 16); // ~60fps
}

// Iniciar scroll
startAutoScroll();

// Pausa al pasar mouse
gallery.addEventListener('mouseenter', () => clearInterval(autoScroll));
gallery.addEventListener('mouseleave', startAutoScroll);
