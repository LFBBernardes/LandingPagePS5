document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  function addToCart(event) {
    const button = event.target;
    const gameName = button.getAttribute("data-game");
    const price = parseFloat(button.getAttribute("data-price"));

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.name === gameName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: gameName, price: price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${gameName} has been added to your cart!`);
  }

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector(".cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = cartCount;
    }
  }

  updateCartCount();
});
