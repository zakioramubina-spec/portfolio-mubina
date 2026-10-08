/**
 * PORTFOLIO INTERACTION ENGINE
 * Client: Zakirova Mubina
 * Smooth Scroll, Scroll Reveal, Sticky Nav, Lightbox Modal & Parallax
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Minimal Navigation Bar
  const stickyNav = document.querySelector('.sticky-nav');
  const heroSection = document.querySelector('.hero-section');

  if (stickyNav && heroSection) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            stickyNav.classList.add('is-visible');
          } else {
            stickyNav.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    navObserver.observe(heroSection);
  }

  // 2. Project Lightbox Modal
  const modal = document.querySelector('.lightbox-modal');
  const modalImg = modal ? modal.querySelector('.lightbox-img-box img') : null;
  const modalTitle = modal ? modal.querySelector('.lightbox-title') : null;
  const modalClose = modal ? modal.querySelector('.lightbox-close-btn') : null;
  const projectCards = document.querySelectorAll('.project-card');

  if (modal && modalImg && modalClose) {
    projectCards.forEach((card) => {
      card.addEventListener('click', () => {
        const img = card.querySelector('.project-img');
        const title = card.querySelector('.project-title');
        if (img) {
          modalImg.src = img.src;
          modalImg.alt = img.alt || 'Project Preview';
          if (modalTitle && title) {
            modalTitle.textContent = title.textContent;
          }
          modal.classList.add('is-active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeModal = () => {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeModal();
      }
    });
  }

  // 3. Subtle Parallax on Hero Portrait & Decor
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const heroPortrait = document.querySelector('.hero-portrait-img');
    const heroLeftDecor = document.querySelector('.hero-decor-left');
    const heroRightDecor = document.querySelector('.hero-decor-right');

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;

      if (heroPortrait) {
        heroPortrait.style.transform = `translate(${xPercent * 6}px, ${yPercent * 4}px)`;
      }
      if (heroLeftDecor) {
        heroLeftDecor.style.transform = `translate(${xPercent * -10}px, ${yPercent * -8}px)`;
      }
      if (heroRightDecor) {
        heroRightDecor.style.transform = `translate(${xPercent * 10}px, ${yPercent * 8}px)`;
      }
    });
  }

  // 4. Console Signature
  console.log(
    '%c Zakirova Mubina %c Data Analyst & Business Intelligence Specialist %c',
    'background: #7a1a2b; color: #edd3c4; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'background: #1a0c10; color: #d9ae96; padding: 4px 8px; border-radius: 4px;',
    'background: transparent;'
  );
});
