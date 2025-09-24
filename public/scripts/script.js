document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
    
    // Abrir menú móvil
    hamburgerBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evitar scroll cuando el menú está abierto
    });
    
    // Cerrar menú móvil
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
    
    closeBtn.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    
    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});

// Cambio de color al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const scrollThreshold = 50; // Píxeles después de los cuales cambia el estilo

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Añadir listener para el evento scroll
  window.addEventListener('scroll', handleScroll);
  
  // Llamar a la función una vez para establecer el estado inicial
  handleScroll();
});