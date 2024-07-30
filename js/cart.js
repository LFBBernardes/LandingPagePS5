document.addEventListener("DOMContentLoaded", function () {
  loadCart();

  function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.querySelector("#cart-items");
    const totalElement = document.querySelector("#cart-total");

    if (!cartContainer || !totalElement) return;

    cartItems = cartItems.filter(
      (item) =>
        item &&
        item.name &&
        !isNaN(parseFloat(item.price)) &&
        !isNaN(parseInt(item.quantity))
    );

    cartContainer.innerHTML = "";
    let total = 0;

    cartItems.forEach((item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      const itemTotal = price * quantity;
      total += itemTotal;

      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${price.toFixed(2)}</span>
            <span>x${quantity}</span>
            <span>$${itemTotal.toFixed(2)}</span>
            <button class="remove-item" data-name="${item.name}">Remove</button>
        `;
      cartContainer.appendChild(itemElement);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    localStorage.setItem("cart", JSON.stringify(cartItems));

    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", removeFromCart);
    });
  }

  function removeFromCart(event) {
    const itemName = event.target.getAttribute("data-name");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.name !== itemName);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
  }

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector(".cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = cartCount;
    }
  }
});
