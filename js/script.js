document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Counters
  ========================= */
  const counters = document.querySelectorAll('.counter');
  const countersSection = document.querySelector('.counters-section');
  let started = false;

  window.addEventListener('scroll', () => {
    if (!countersSection) return;

    const sectionTop = countersSection.offsetTop - window.innerHeight + 100;

    if (window.scrollY > sectionTop && !started) {
      counters.forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;

        const updateCounter = () => {
          current += target / 200;
          if (current < target) {
            counter.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();
      });
      started = true;
    }
  });

  /* =========================
     Video Modal
  ========================= */
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');

  if (videoModal && videoFrame) {
    const videoSrc = videoFrame.src;

    videoModal.addEventListener('hidden.bs.modal', () => {
      videoFrame.src = "";
      videoFrame.src = videoSrc;
    });
  }

  /* =========================
     Solutions Tabs
  ========================= */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
    });
  });

  /* =========================
     Pricing Toggle
  ========================= */
  const toggleBtns = document.querySelectorAll('.pricing-toggle span');
  const prices = document.querySelectorAll('.price');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const plan = btn.dataset.plan;

      prices.forEach(price => {
        const value = price.dataset[plan];
        price.innerHTML = `$${value}<span>${plan === 'monthly' ? '/mo' : '/yr'}</span>`;
      });
    });
  });

  /* =========================
     Back To Top
  ========================= */
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.classList.toggle('show', window.scrollY > 300);
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  

});
