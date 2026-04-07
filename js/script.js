window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===================================================================================

const cards = document.querySelectorAll(".process-card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
});

// =======================Hero Slider==============================
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let current = 0;
let total = slides.length;

function showSlide(nextIndex) {
  // remove all classes first (IMPORTANT FIX)
  slides.forEach((slide) => {
    slide.classList.remove("active", "prev");
  });

  dots.forEach((dot) => dot.classList.remove("active"));

  // set previous slide
  let prevIndex = (nextIndex - 1 + total) % total;
  slides[prevIndex].classList.add("prev");

  // set current slide
  slides[nextIndex].classList.add("active");
  dots[nextIndex].classList.add("active");

  current = nextIndex;
}

// AUTO LOOP (continuous)
let interval = setInterval(() => {
  let next = (current + 1) % total;
  showSlide(next);
}, 4000);

// DOT CLICK (manual control)
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    clearInterval(interval);

    let index = parseInt(dot.getAttribute("data-index"));
    showSlide(index);

    interval = setInterval(() => {
      let next = (current + 1) % total;
      showSlide(next);
    }, 4000);
  });
});

// =======================Process==============================

const cardsP = document.querySelectorAll(".process-card");
const preview = document.getElementById("preview-img");

cardsP.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // remove active
    cardsP.forEach((c) => c.classList.remove("active"));

    // add active
    card.classList.add("active");

    // change image
    preview.src = card.getAttribute("data-img");
  });
});
