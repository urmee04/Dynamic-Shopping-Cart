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

  // set up event listeners to add an item
  addButton.addEventListener("click", addItem);
  // Set up a Single event listener for all remove button clicks
  cartList.addEventListener("click", (event) => {
    // Check if a remove button was the target of the click
    if (event.target.classList.contains("remove-item")) {
      // Get the index from the button's data attribute
      const index = parseInt(event.target.dataset.index);
      // Remove the item from the array
      cartItems.splice(index, 1);
      // Update the UI
      updateCart();
    }
  });
  // Core Add item function
  function addItem() {
    const itemName = nameInput.value.trim(); // Remove witespace
    // Price calculation with rounding
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

    // Update UI
    updateCart();

    // Clear inputs
    nameInput.value = "";
    priceInput.value = "";
    quantityInput.value = "1";
    nameInput.focus();
  }

  function updateCart() {
    // Clear the cart list and reset total price
    cartList.replaceChildren();
    totalPrice = 0;

    // Rebuild the cart UI for each item
    cartItems.forEach((item, index) => {
      // Create list item element
      const listItem = document.createElement("li");
      listItem.className = "cart-item";
      listItem.textContent = "✔";

      // Create DOM elements
      const nameSpan = document.createElement("span");
      nameSpan.className = "item-name";
      nameSpan.textContent = item.name;

      const priceSpan = document.createElement("span");
      priceSpan.className = "item-price";
      priceSpan.textContent = "$" + item.price.toFixed(2);

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-item";
      removeBtn.textContent = "x";
      removeBtn.dataset.index = index; // Set index for removal

      // Append Elements
      listItem.append(nameSpan, priceSpan, removeBtn);
      cartList.appendChild(listItem);

      // Update running total
      totalPrice += item.price;
    });
    // Update summary displays
    totalDisplay.textContent = totalPrice.toFixed(2);
    cartCount.textContent = cartItems.length.toString();
  }
});
