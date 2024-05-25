document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // TODO: if cart is empty, display a message

  if (cart.length === 0) {
    cartContainer.innerHTML = "<h1>Cart is empty</h1>";
    return;
  }

  function renderCart() {
    cartContainer.innerHTML = "";
    cart.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "card";
      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <button class="delete" onclick="deleteFromCart(${user.id})">Delete</button>
      `;
      cartContainer.appendChild(userCard);
    });
  }

  window.deleteFromCart = (id) => {
    const updatedCart = cart.filter((u) => u.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
    renderCart();
  };

  renderCart();
});
