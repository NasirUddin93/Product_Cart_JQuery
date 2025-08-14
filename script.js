// DOM Elements
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");
const addToCartBtn = document.getElementById("addToCart");
const quantityInput = document.getElementById("quantity");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

// Make price re-assignable
let price = parseFloat(document.getElementById("price").innerText);

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || { items: 0, total: 0 };
updateCartUI();

// Thumbnail click → change main image & price
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Change main image
    mainImage.src = thumb.dataset.large;

    // Highlight selected thumbnail
    thumbnails.forEach(t => t.classList.remove("selected"));
    thumb.classList.add("selected");

    // Update price from dataset
    price = parseFloat(thumb.dataset.price);
    document.getElementById("price").innerText = price;
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
