const Burger = document.querySelector(".burger");
const Navlink = document.querySelector(".nav-bar");

function Navanim() {
  Burger.addEventListener("click", function() {
    Navlink.classList.toggle("nav-active");
  });
}

Navanim();
