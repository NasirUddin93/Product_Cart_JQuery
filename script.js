// DOM Elements
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");
const addToCartBtn = document.getElementById("addToCart");
const quantityInput = document.getElementById("quantity");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const price = parseFloat(document.getElementById("price").innerText);

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || { items: 0, total: 0 };
updateCartUI();

// Thumbnail click → change main image
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.dataset.large;

    thumbnails.forEach(t => t.classList.remove("selected"));
    thumb.classList.add("selected");
  });
});

// Add to Cart
addToCartBtn.addEventListener("click", () => {
  const quantity = parseInt(quantityInput.value);

  cart.items += quantity;
  cart.total += price * quantity;

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
});

// Update cart display
function updateCartUI() {
  cartCount.innerText = cart.items;
  cartTotal.innerText = cart.total.toFixed(2);
}
