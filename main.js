

var elements_to_watch = document.querySelectorAll('.watch');

var callback = function(items){
  items.forEach((item) => {
    var stella = item.target.querySelector('.stella');
    if(item.isIntersecting){
      item.target.classList.add("in-page");
      if(stella) {
        stella.classList.remove('rotate-once'); // Reset animation
        void stella.offsetWidth; // Force reflow for restart
        stella.classList.add('rotate-once');
      }
    } else{
      item.target.classList.remove("in-page");
      if(stella) {
        stella.classList.remove('rotate-once'); // Remove when out of view
      }
    }
  });
}

var observer = new IntersectionObserver(callback, { threshold: 0.6 } );

elements_to_watch.forEach((element) => {
  observer.observe(element); 
});

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

gsap.to("#stella-gsap", {
  rotate: 600, // o il numero di gradi che preferisci
  scrollTrigger: {
    trigger: "#stella-gsap",
    start: "top bottom",    // quando la stella entra nella viewport
    end: "bottom top",      // quando la stella esce dalla viewport
    scrub: true             // collega l'animazione allo scroll
  }
});

// Assicurati che GSAP sia incluso nel tuo progetto!
gsap.to("#marquee-gsap", {
  x: "-100%",
  duration: 25, // più alto = più lento
  ease: "linear",
  repeat: -1
});

const toggle = document.getElementById('navbar-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

