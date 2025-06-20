gsap.to('.vertical-line', {
  height: '100vh',
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true
  },
  ease: 'none'
});
function animateCurvedLine(progress) {
  // progress: 0 (top) -> 1 (bottom)
  const svgHeight = window.innerHeight;
  const startX = 40, startY = 0;
  let d;

  if (progress < 0.5) {
    // Solo linea dritta
    const currentY = svgHeight * progress;
    d = `M${startX},${startY} L${startX},${currentY}`;
  } else {
    // Dritta fino a metà, poi curva dolcemente verso sinistra
    const curveStartY = svgHeight * 0.5;
    const curveProgress = (progress - 0.4) * 2; // 0 a 1 nella seconda metà
    const endY = curveStartY + (svgHeight * 0.5 * curveProgress);
    // Valori più piccoli per una curva più dolce e meno accentuata
    const controlX = startX - 10 * curveProgress; // punto di controllo leggermente a sinistra
    const endX = startX - 780 * curveProgress;    // punto finale più a sinistra
    d = `M${startX},${startY} L${startX},${curveStartY} Q${controlX},${curveStartY + 100 * curveProgress} ${endX},${endY}`;
  }

  document.getElementById('curved-path').setAttribute('d', d);
}

gsap.to({}, {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.7, // <--- più alto = più morbido/ritardato
    onUpdate: self => {
      animateCurvedLine(self.progress);
    }
  }
});


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
  rotate: 600, // o il numero di gradi
  scrollTrigger: {
    trigger: "#stella-gsap",
    start: "top bottom",    // quando la stella entra nella viewport
    end: "bottom top",      // quando la stella esce dalla viewport
    scrub: true             
  }
});

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

