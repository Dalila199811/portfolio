gsap.registerPlugin(ScrollTrigger);

// Applica fade a tutti gli elementi con classe .fade (testo e immagini)
gsap.utils.toArray('.fade').forEach(element => {
  gsap.fromTo(element,
    { opacity: 0, y: 50 },
    {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );
});

// Intersection Observer per aggiungere la classe 'visible' quando l'elemento entra in viewport
const fadeElements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

fadeElements.forEach(element => {
  observer.observe(element);
});