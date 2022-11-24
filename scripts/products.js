var products = [
  {
    img: 3,
    icons: [1, 2, 3],
    liked: true,
    badge: "New",
  },
  {
    img: 2,
    icons: [1, 2],
    badge: "New",
  },
  {
    img: 1,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 3,
    icons: [1],
    liked: true,
  },
  {
    img: 2,
  },
  {
    img: 1,
    badge: "Sale",
  },
  //////////////////////
  {
    img: 4,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 5,
    icons: [1, 2],
    badge: "New",
  },
  {
    img: 4,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 5,
    icons: [1],
  },
  {
    img: 1,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 3,
    icons: [1],
    liked: true,
  },
  /////////////////////////
  {
    img: 2,
  },
  {
    img: 5,
    icons: [1, 2],
    badge: "New",
  },
  {
    img: 5,
    icons: [1, 2],
    badge: "New",
  },
  {
    img: 2,
    icons: [1, 2],
    badge: "New",
  },
  {
    img: 1,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 3,
    icons: [1],
    liked: true,
  },
  ///////////////////////////////
  {
    img: 4,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 5,
    icons: [1],
  },
  {
    img: 1,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 3,
    icons: [1],
    liked: true,
  },
  {
    img: 2,
  },
  {
    img: 5,
    icons: [1, 2],
    badge: "New",
  },
  //////////////////
  {
    img: 5,
    icons: [1],
  },
  {
    img: 1,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 3,
    icons: [1],
    liked: true,
  },
  {
    img: 1,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 3,
    icons: [1],
    liked: true,
  },
  {
    img: 2,
  },
  //////
  {
    img: 1,
    badge: "Sale",
  },
  {
    img: 4,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 5,
    icons: [1, 2],
    badge: "New",
  },
  {
    img: 4,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 5,
    icons: [1, 2],
    badge: "New",
  },
  {
    img: 4,
    icons: [1, 2, 3],
    badge: "New",
  },
  //////////////////////
  {
    img: 4,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 5,
    icons: [1, 2],
    badge: "New",
  },
  {
    img: 5,
    icons: [1],
  },
  {
    img: 1,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 4,
    icons: [1, 2, 3],
    badge: "New",
  },
  {
    img: 3,
    icons: [1],
    liked: true,
  },
];

var grid = document.querySelector(".products__grid");
var pagination = document.querySelector(".pagination");
var nums = document.querySelector(".pagination__nums");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

if (grid) {
  document.addEventListener("DOMContentLoaded", () => {
    renderProds(products.filter((item, i) => i <= 5));
  });

  var firstNum = 1;
  var lastNum = 35;
  var numProds = products.reduce((acc, item, i) => (acc += 1), 0);

  pagination.addEventListener("click", (e) => {
    var numbers = document.querySelectorAll(".pagination__page-num");

    var et = e.target;
    var num = et.textContent.trim() - 1;
    if (et.classList.contains("pagination__page-num")) {
      numbers.forEach((item) =>
        item.classList.remove("pagination__page-num--active")
      );
      et.classList.add("pagination__page-num--active");
      renderProds(
        products.filter((item, i) => {
          var start = num == 0 ? 0 <= i : 6 * num <= i;
          var end = num == 0 ? 5 >= i : 5 + num * 6 >= i;
          return start && end;
        })
      );
    }

    if (et.classList.contains("next")) {
      numProds -= 30;
      lastNum -= 30;
      firstNum += 5;

      prevBtn.classList.remove("none");

      if (numProds < 30) {
        nextBtn.classList.add("none");
      }

      nums.innerHTML = "";
      nums.insertAdjacentHTML(
        "beforeend",
        `<button class="pagination__page-num pagination__page-num--active">
      6
    </button>
    <button class="pagination__page-num">7</button>`
      );

      renderProds(
        products.filter((item, i) => i >= 24 + firstNum && i <= 29 + firstNum)
      );
    }

    if (et.classList.contains("prev")) {
      firstNum -= 5;
      numProds += 30;

      if (numProds >= 30) {
        nextBtn.classList.remove("none");
      }

      if (lastNum == 5) {
        prevBtn.classList.add("none");
      }

      nums.innerHTML = "";
      nums.insertAdjacentHTML(
        "beforeend",
        `<button class="pagination__page-num pagination__page-num--active">
        1
      </button>
      <button class="pagination__page-num">2</button>
      <button class="pagination__page-num">3</button>
      <button class="pagination__page-num">4</button>
      <button class="pagination__page-num five">5</button>`
      );
      var numbers = document.querySelectorAll(".pagination__page-num");
      numbers.forEach((item) =>
        item.classList.remove("pagination__page-num--active")
      );
      document
        .querySelector(".five")
        .classList.add("pagination__page-num--active");

      renderProds(
        products.filter((item, i) => i >= 19 + lastNum && i <= 24 + lastNum)
      );
      lastNum += 30;
    }
  });
}

function renderProds(data) {
  grid.innerHTML = "";
  data.forEach((product, i) => {
    grid.insertAdjacentHTML(
      "beforeend",
      `<div class="product arrival">
      <img
        src="../assets/images/products/product${product.img}.jpg"
        alt="Product Name"
        class="arrival__img"
      />
      <div class="product__icons">
        ${
          product.icons && product.icons[2]
            ? `<img
        src="../assets/images/icons/product-icon${product.icons[2]}.png"
        alt=""
        class="product__icon"
      />`
            : ""
        }
        ${
          product.icons && product.icons[0]
            ? `<img
        src="../assets/images/icons/product-icon${product.icons[0]}.png"
        alt=""
        class="product__icon"
      />`
            : ""
        }
        ${
          product.icons && product.icons[1]
            ? `<img
        src="../assets/images/icons/product-icon${product.icons[1]}.png"
        alt=""
        class="product__icon"
      />`
            : ""
        }
      </div>
      <p class="arrival__brand bold">Brand Name</p>
      <p class="arrival__name">Product Name</p>
      <p class="arrival__price">$379.00</p>
      <img
        src="../assets/images/icons/${product.liked ? "liked" : "like"}.png"
        alt="Like icon"
        class="arrival__like"
      />
      ${
        product.badge
          ? `<p class="products__badge ${
              product.badge == "Sale" ? "products__badge--new" : ""
            } medium">${product.badge}</p>`
          : ""
      }
      
    </div></a>`
    );
  });
}
