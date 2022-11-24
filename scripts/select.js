var select = document.querySelector(".select-js");
var selected = document.querySelector(".selected-js");
var options = document.querySelector(".options-js");

var radiosCont = document.querySelector(".radios-js");
var radios = document.querySelectorAll(".radio-js");

var btnsCont = document.querySelector(".tabs-btn-cont-js");
var btns = document.querySelectorAll(".tabs-btn-js");
var contents = document.querySelectorAll(".tabs-content-js");

if (select) {
  select.addEventListener("click", () => {
    options.classList.toggle("hidden");
    select.classList.toggle("active");
  });

  options.addEventListener("click", (e) => {
    if (e.target.classList.contains("option-js")) {
      selected.textContent = e.target.textContent;
    }
    options.classList.add("hidden");
    select.classList.remove("active");
  });
}

if (radiosCont) {
  radiosCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("radio-js")) {
      radios.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
    }
  });
}

if (btnsCont) {
  btnsCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("tabs-btn-js")) {
      btns.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");

      contents.forEach((item) => item.classList.add("hidden"));
      contents[e.target.dataset.tab - 1].classList.remove("hidden");
    }
  });
}
