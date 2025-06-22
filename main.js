// Loader animation: sun rays loading
function createLoaderRays(numRays = 24, radius = 120, color = "#f56900", id = "loader-loading") {
  const container = document.getElementById(id);
  if (!container) return;
  const size = radius * 2;
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="position:absolute;top:0;left:0;">`;
  for (let i = 0; i < numRays; i++) {
    const angle = (i / numRays) * 2 * Math.PI;
    const x2 = radius + radius * Math.cos(angle);
    const y2 = radius + radius * Math.sin(angle);
    svg += `<line id="ray-${i}" x1="${radius}" y1="${radius}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3" opacity="0"/>`;
  }
  svg += "</svg>";
  container.innerHTML = svg;
}

createLoaderRays(24, 120, "#f56900", "loader-loading");

function animateLoaderRays(numRays = 24, duration = 3000) {
  let current = 0;
  const interval = duration / numRays;
  const showRay = () => {
    if (current < numRays) {
      const ray = document.getElementById(`ray-${current}`);
      if (ray) ray.setAttribute("opacity", "1");
      current++;
      setTimeout(showRay, interval);
    }
  };
  showRay();
}

animateLoaderRays(24, 2000);

// Nascondi loader dopo 3 secondi
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader-overlay').classList.add('hide');
    setTimeout(() => {
      document.getElementById('loader-overlay').style.display = 'none';
    }, 700); // tempo per la dissolvenza CSS
  }, 3000); // loader visibile per 3 secondi
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
        stella.classList.remove('rotate-once');
        void stella.offsetWidth;
        stella.classList.add('rotate-once');
      }
    } else{
      item.target.classList.remove("in-page");
      if(stella) {
        stella.classList.remove('rotate-once');
      }
    }
  });
}

var observer = new IntersectionObserver(callback, { threshold: 0.25});

elements_to_watch.forEach((element) => {
  observer.observe(element); 
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#stella-gsap", {
  rotate: 600,
  scrollTrigger: {
    trigger: "#stella-gsap",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

//  elemento2
gsap.to("#elemento2-gsap", {
  rotate: -600,
  scrollTrigger: {
    trigger: "#elemento2-gsap",
    start: "top bottom",
    end: "bottom top",
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


