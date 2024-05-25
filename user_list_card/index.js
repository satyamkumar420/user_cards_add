const users = [
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
  { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
  { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
  { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org" },
  { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca" },
  { id: 6, name: "Mrs. Dennis Schulist", email: "Karley_Dach@jasper.info" },
  { id: 7, name: "Kurtis Weissnat", email: "Telly.Hoeger@billy.biz" },
  { id: 8, name: "Nicholas Runolfsdottir V", email: "Sherwood@rosamond.me" },
  { id: 9, name: "Glenna Reichert", email: "Chaim_McDermott@dana.io" },
  { id: 10, name: "Clementina DuBuque", email: "Rey.Padberg@karina.biz" },
];

document.addEventListener("DOMContentLoaded", () => {
  const userContainer = document.getElementById("user-container");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderUsers() {
    userContainer.innerHTML = "";
    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "card";
      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <button onclick="addToCart(${user.id})">Add to Cart</button>
      `;
      userContainer.appendChild(userCard);
    });
  }

  window.addToCart = (id) => {
    const user = users.find((u) => u.id === id);
    if (!cart.find((u) => u.id === id)) {
      cart.push(user);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("User added to cart");
    }
  };

  renderUsers();
});
