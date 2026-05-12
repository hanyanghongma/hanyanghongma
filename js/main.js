(() => {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item, idx) => {
    item.style.transitionDelay = `${Math.min(idx * 60, 260)}ms`;
    observer.observe(item);
  });

  const hero = document.querySelector('.hero-bg');
  if (hero) {
    window.addEventListener('scroll', () => {
      const offset = window.scrollY * 0.09;
      hero.style.transform = `scale(1.02) translateY(${offset}px)`;
    });
  }

  document.querySelectorAll('.ticker-track').forEach((track) => {
    track.textContent = `${track.textContent} ${track.textContent}`;
  });
})();