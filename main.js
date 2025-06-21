// Loader animation
function createSunLines(numLines = 24, radius = 400, color = "#f56900", id = "sun-lines") {
  const container = document.getElementById(id);
  if (!container) return;
  const size = radius * 2;
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="position:absolute;top:0;left:0;">`;
  for (let i = 0; i < numLines; i++) {
    const angle = (i / numLines) * 2 * Math.PI;
    const x2 = radius + radius * Math.cos(angle);
    const y2 = radius + radius * Math.sin(angle);
    svg += `<line x1="${radius}" y1="${radius}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2" opacity="${0.7 + 0.3 * Math.random()}"/>`;
  }
  svg += "</svg>";
  container.innerHTML = svg;
}

// Loader suns
createSunLines(40, 150, "#F1F3F5", "loader-sun-big");
createSunLines(20, 60, "#f56900", "loader-sun-small");

// Loader rotation
let loaderAngle = 0;
let loaderAngleSmall = 0;
const loaderInterval = setInterval(() => {
  loaderAngle += 2;
  loaderAngleSmall -= 4;
  const big = document.getElementById("loader-sun-big");
  const small = document.getElementById("loader-sun-small");
  if (big && big.firstChild) big.firstChild.style.transform = `rotate(${loaderAngle}deg)`;
  if (small && small.firstChild) small.firstChild.style.transform = `rotate(${loaderAngleSmall}deg)`;
}, 6000);

// Hide loader on page load
window.addEventListener('load', () => {
  document.getElementById('loader-overlay').classList.add('hide');
  setTimeout(() => {
    document.getElementById('loader-overlay').style.display = 'none';
    clearInterval(loaderInterval);
  }, 6000);
});





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

gsap.to('.divider-line', {
  width: '100vw',
  scrollTrigger: {
    trigger: '.divider-line',
    start: 'top 80%',
    end: 'top 30%',     
    scrub: 2
  },
  ease: 'none'
});


// Animazione custom per il titolo about
const aboutTitle = document.querySelector('.custom-animate');
if (aboutTitle) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutTitle.classList.add('in-view');
      } else {
        aboutTitle.classList.remove('in-view');
      }
    });
  }, { threshold: 0.5 });
  observer.observe(aboutTitle);
}


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


