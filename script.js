// Wait for DOM to be fully loaded

document.addEventListener("DOMContentLoaded", function () {
  // Get all HTML elements
  const cartCount = document.getElementById("cart-count");
  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const quantityInput = document.getElementById("quantity");
  const addButton = document.getElementById("add-item");
  const cartList = document.getElementById("cart-item");
  const totalDisplay = document.getElementById("total-amount");

  // Initialize cart storage
  let cartItems = []; // Array to store items
  let totalPrice = 0; // Variable to track total cost

  // set up event listeners to add item
  addButton.addEventListener("click", addItem);
  // Core Add item function
  function addItem() {
    const itemName = nameInput.value.trim(); // Remove witespace
    // Price calculation with rounding to ensure the result has exactly to decimal values
    const itemPrice = Math.round(parseFloat(priceInput.value) * 100) / 100;
    const itemQuantity = parseInt(quantityInput.value) || 1; // or operator provides a fallback value if the left side is falsy

    // Validate inputs
    if (!itemName || isNaN(itemPrice) || itemQuantity < 1) {
      alert("Please enter valid item values");
      return;
    }

    // Add to cart array
    cartItems.push({
      name: itemName,
      price: itemPrice * itemQuantity,
    });

    // Clear inputs
    nameInput.value = "";
    priceInput.value = "";
    quantityInput.value = "1";
    nameInput.focus();
  }
});
