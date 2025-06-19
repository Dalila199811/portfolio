const cursor = document.querySelector(".custom-cursor");
const cursorImage = document.getElementById("cursor-image");
const listItems = document.querySelectorAll(".work-list li");

// Segui il mouse con GSAP
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    duration: 0.3,
    x: e.clientX,
    y: e.clientY,
    ease: "power2.out"
  });
});

// Mostra l'immagine quando entri in un <li>
listItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const image = item.getAttribute("data-image");
    cursorImage.src = image;
    gsap.to(cursor, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.3
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      autoAlpha: 0,
      scale: 0.8,
      duration: 0.2
    });
  });
});
