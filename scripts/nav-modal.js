var menuBtn = document.querySelector(".menu-js");
var nav = document.querySelector(".nav-js");
var overlay = document.querySelector(".overlay-js");
var closeBtn = document.querySelector(".close-js");

if (nav) {
  menuBtn.addEventListener("click", () => {
    if (overlay.classList.contains("hidden")) {
      nav.style.left = "0";
      overlay.classList.remove("hidden");
    } else {
      nav.style.left = "-100%";
      overlay.classList.add("hidden");
    }
  });

  closeBtn.addEventListener("click", () => {
    nav.style.left = "-100%";
    overlay.classList.add("hidden");
  });
}
