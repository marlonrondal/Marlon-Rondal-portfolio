export function initTextInteractive() {
  const section = document.getElementById('hero-mouse');
  const titleElement = document.getElementById('hero-title');

  if (!section || !titleElement) {
    console.warn('❌ No se encontraron los elementos hero-mouse o hero-title');
    return;
  }

  // Convertir el texto en spans para efecto por letra
  const text = titleElement.textContent;
  titleElement.innerHTML = text
    .split('')
    .map((char) => {
      if (char === ' ') {
        return `<span class="space">${char}</span>`;
      }
      return `<span>${char}</span>`;
    })
    .join('');

  const letters = titleElement.querySelectorAll('span:not(.space)');
  let mouseX = 0;
  let mouseY = 0;

  // Evento de movimiento del mouse
  section.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Efecto en cada letra
    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const letterX = rect.left + rect.width / 2;
      const letterY = rect.top + rect.height / 2;

      // Distancia entre mouse y letra
      const distance = Math.hypot(mouseX - letterX, mouseY - letterY);
      const maxDistance = 150; // Radio de influencia

      if (distance < maxDistance) {
        letter.classList.add('active');
        letter.classList.remove('nearby');

        // Efecto de repulsión y zoom
        const angle = Math.atan2(letterY - mouseY, letterX - mouseX);
        const force = (maxDistance - distance) / maxDistance;
        const moveX = Math.cos(angle) * force * 15;
        const moveY = Math.sin(angle) * force * 15;

        letter.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.3})`;
      } else if (distance < maxDistance + 50) {
        letter.classList.remove('active');
        letter.classList.add('nearby');
        letter.style.transform = 'translate(0, 0) scale(1)';
      } else {
        letter.classList.remove('active', 'nearby');
        letter.style.transform = 'translate(0, 0) scale(1)';
      }
    });
  });

  // Resetear cuando sale del área
  section.addEventListener('mouseleave', () => {
    letters.forEach((letter) => {
      letter.classList.remove('active', 'nearby');
      letter.style.transform = 'translate(0, 0) scale(1)';
    });
  });

  console.log('✅ Text interactive effect activo');
}

