const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

  reveals.forEach(section => {

    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      section.classList.add("active");
    }

  });

}

revealSections();

window.addEventListener("scroll", () => {

  const header = document.getElementById("header");

  header.classList.toggle("scroll", window.scrollY > 50);

});