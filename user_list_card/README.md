# 🛒 User Cards Web Application

Welcome to the User Cards Web Application! This project displays user cards and provides "Add to Cart" and "Delete" functionality, utilizing local storage to maintain user data and cart state.

## 🚀 Features

- 🧑‍🤝‍🧑 **Display User Cards**: View user cards with names and email addresses.
- ➕ **Add to Cart**: Add users to the cart with a simple click.
- 🗑️ **Delete Users**: Remove users from the cart.
- 💾 **Local Storage**: Maintain state across page reloads.

## 📂 File Structure

- `index.html`: Home page displaying user cards.
- `index.js`: JavaScript for home page functionalities.
- `cart.html`: Cart page displaying items added to cart.
- `cart.js`: JavaScript for cart page functionalities.
- `style.css`: CSS for styling the pages.

## 📄 Detailed Explanation

### `index.html`

Basic structure for the home page with a navbar linking to the home and cart pages.

### `cart.html`

Basic structure for the cart page with a navbar linking to the home and cart pages.

### `style.css`

CSS for styling the user cards and buttons:

- Flexbox layout for displaying user cards.
- Styling for navigation bar and buttons.

### `index.js`

JavaScript for handling home page functionalities:

- Render user cards from a predefined array.
- Implement the `addToCart` function to store selected users in local storage.

### `cart.js`

JavaScript for handling cart page functionalities:

- Render user cards from the cart stored in local storage.
- Implement the `deleteFromCart` function to remove users from the cart and update local storage.

## 🧑‍💻 Usage

- **Home Page**: Displays a list of user cards with an "Add to Cart" button.
- **Cart Page**: Displays users added to the cart with a "Delete" button to remove them from the cart.

---

Enjoy using the User Cards Web Application ! 🎉

---
