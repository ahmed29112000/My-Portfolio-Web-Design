// Toggle Menu
let toggle = document.querySelector("header nav .toggle-menu");
let toggleUl = document.querySelector("header nav .toggle-menu + ul");
toggle.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  toggleUl.classList.toggle("open");
};

// Get all links in the header
const links = document.querySelectorAll("header nav ul li a");

// Add an event listener to each link
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Remove the active class from all links
    links.forEach((l) => l.classList.remove("active"));

    // Add the active class to the clicked link
    e.target.classList.add("active");
  });
});

// const sections = document.querySelectorAll(".section"); // assuming all sections have a class of "section"
// // const links0 = document.querySelectorAll(".header-link"); // assuming all links have a class of "header-link"

// window.addEventListener("scroll", () => {
//   sections.forEach((section, index) => {
//     const sectionRect = section.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     if (sectionRect.top <= windowHeight && sectionRect.bottom >= 0) {
//       links[index].classList.add("active");
//     } else {
//       links[index].classList.remove("active");
//     }
//   });
// });

// about Imation scroll
let section = document.querySelector("header");
let ctext = document.querySelector(".landing .all");
let botn = document.querySelector(".landing .bot");
window.onscroll = () => {
  if (window.scrollY >= section.offsetTop) {
    ctext.style.cssText = " opacity: 1;";
    botn.style.cssText = " opacity: 1;";
  }
};



// skills Imation scroll
let section1 = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
window.addEventListener("scroll", () => {
  if (window.scrollY >= section1.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// box Imation scroll

let boxs = document.querySelectorAll(
  ".our-skills .container .GALLERY .conGall .box");
window.addEventListener("scroll", () => {
  if (window.scrollY >= section1.offsetTop) {
    boxs.forEach((box) => {
      box.style.transform = " translateX(0px)";
      box.style.opacity = "1"
    });
  }
});
