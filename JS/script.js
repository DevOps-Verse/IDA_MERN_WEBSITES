// Navbar
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// section 1 slider
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let current = 0;
let interval = 5000;

/* CREATE DOTS */
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = index;

  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

setInterval(() => {
  let next = (current + 1) % slides.length;
  showSlide(next);
}, interval);

// Featured Collection
const slider = document.getElementById("productSlider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});

// Festive Gift Box
function changeImage(el) {
  document.getElementById("mainImage").src = el.src;
}

function addToCart() {
  alert("Product added to cart (demo)");
}

// Timeline
const slide = document.querySelectorAll(".timeline-slide");
const buttons = document.querySelectorAll(".timeline-nav button");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  buttons.forEach((btn) => btn.classList.remove("active"));

  slides[index].classList.add("active");
  buttons[index].classList.add("active");
}

// Feature Article
function scrollTimeline(index) {
  const timeline = document.getElementById("timeline");
  const items = timeline.children;
  const item = items[index];
  timeline.scrollLeft = item.offsetLeft - timeline.offsetLeft;
  document
    .querySelectorAll(".timeline-nav button")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".timeline-nav button")
    [index].classList.add("active");
}

// Newsletter
const form = document.querySelector(".newsletter-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = form.querySelector("input").value;

  if (!email) return;

  alert("Thank you for subscribing!");
  form.reset();
});

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
