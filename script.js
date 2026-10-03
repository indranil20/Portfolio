// Mobile menu
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.innerHTML = nav.classList.contains("open")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  })
);

// Header shadow + active nav link on scroll
const header = document.getElementById("header");
const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);

  let current = "home";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + current)
  );
});

// Projects slider
const track = document.getElementById("projectTrack");
const step = () => track.querySelector(".project").offsetWidth + 18;

document.getElementById("nextBtn").addEventListener("click", () =>
  track.scrollBy({ left: step() })
);
document.getElementById("prevBtn").addEventListener("click", () =>
  track.scrollBy({ left: -step() })
);

// Reveal on scroll
const revealEls = document.querySelectorAll(
  ".section-title, .feature, .skill-card, .project, .tl-card, .edu-card, .c-card"
);
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
