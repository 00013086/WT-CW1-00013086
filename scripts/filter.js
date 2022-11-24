var filter = document.querySelector(".filter-js");
var filterBtn = document.querySelector(".filter-toggle-js");
var accordions = document.querySelector(".products__filters");
var accList = document.querySelectorAll(".filter__list");
var accBtns = document.querySelectorAll(".filter__arr");
var prods = document.querySelector(".prods-js");

if (filter) {
  var filterIcon = filterBtn.querySelector("img");
  var clicked = false;
  filterBtn.addEventListener("click", () => {
    const filterWidth = filter.clientWidth;
    if (!clicked) {
      filterIcon.src = "../assets/images/minus.png";
      filter.style.left = "0";
      clicked = true;
      if (window.innerWidth < 992) return;
      prods.style.paddingLeft = `${filterWidth}px`;
      prods.style.maxWidth = "unset";
    } else {
      filterIcon.src = "../assets/images/plus.png";
      filter.style.left = "-100%";
      clicked = false;

      if (window.innerWidth < 992) return;
      prods.style.paddingLeft = 0;
      prods.style.maxWidth = "100rem";
    }
  });

  if (filter) {
    accordions.addEventListener("click", (e) => {
      const isAcc =
        containClassHandler(e, "filter__title") ||
        containClassHandler(e, "filter__header") ||
        containClassHandler(e, "filter__arr");

      if (isAcc) {
        const accText = e.target.closest(".filter__header").nextElementSibling;
        const accBtn = e.target.closest(".filter__header").lastElementChild;
        accList.forEach((text) => text.classList.add("none"));
        accBtns.forEach(
          (btn) => (btn.src = "../assets/images/arrows/top-arr.png")
        );

        accText.classList.remove("none");
        accBtn.src = "../assets/images/arrows/bottom-arr.png";
      }
    });
  }
}

function containClassHandler(e, cls) {
  return e.target.classList.contains(`${cls}`);
}
