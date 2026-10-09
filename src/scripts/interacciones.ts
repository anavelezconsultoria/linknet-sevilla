/**
 * Interacciones del sitio: aparicion al hacer scroll, sombra de la cabecera y
 * cierre del menu movil. Todo es mejora progresiva: sin JS el sitio se ve completo.
 */

function revelarAlDesplazar(): void {
  const elementos = document.querySelectorAll<HTMLElement>('[data-aparece]');
  if (!('IntersectionObserver' in window)) {
    elementos.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  elementos.forEach((el) => observador.observe(el));
}

function sombraDeCabecera(): void {
  const cabecera = document.querySelector<HTMLElement>('[data-cabecera]');
  if (!cabecera) return;
  const actualizar = () => cabecera.classList.toggle('con-scroll', window.scrollY > 12);
  actualizar();
  window.addEventListener('scroll', actualizar, { passive: true });
}

function cerrarMenuAlNavegar(): void {
  document.querySelectorAll<HTMLDetailsElement>('[data-menu]').forEach((menu) => {
    menu.addEventListener('click', (evento) => {
      if (evento.target instanceof HTMLAnchorElement) menu.open = false;
    });
  });
}

revelarAlDesplazar();
sombraDeCabecera();
cerrarMenuAlNavegar();
