
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.fade').forEach(section => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

const sections = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

sections.forEach(section => {
  observer.observe(section);
});