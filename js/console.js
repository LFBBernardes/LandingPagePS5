document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-up");
  fadeInElements.forEach((el) => fadeInObserver.observe(el));

  // Animação sequencial para as inovações
  const innovationItems = document.querySelectorAll(".innovation-item");
  innovationItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.9}s`;
  });
});
