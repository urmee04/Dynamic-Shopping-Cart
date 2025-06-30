## Lab 5.1: Dynamic Content Creation

---

### Lab Overview

This lab intends to create a dynamic shopping cart application to practice and reinforce DOM manipulation skills. The application will allow users to add, update, and remove items dynamically while keeping track of the total price. This lab focuses on modifying elements, creating and appending new elements, and updating content dynamically using JavaScript.

#### Features

1. Add new items with:

- Item Name

- Item Quantity

- Item Price

2. Remove items added to the list

3. Handles valid input: prevents adding products with empty names or prices

4. View added items along with their quantities and prices

#### Tech Stack

- HTML5 – Page structure and forms

- CSS3 – Visual styling and layout

- JavaScript (ES6) – App logic and interactivity

- Local Storage API – Persistent data storage

### Project Structure

```
Task-Management-App/
│
├── index.html        # Main HTML structure
├── styles.css        # Styling for layout, buttons, and item list
├── script.js         # JavaScript logic for adding and removing items
└── README.md         # Project documentation
```

### How to Use

- Clone or download this [repository](https://github.com/urmee04/Dynamic-Shopping-Cart.git)
- Open the index.html file in your browser
- Add item name, quantity and price using the inputs option.
- Remove items using remove button ('x') when they are no longer needed.

#### Reflection Questions

**How did you dynamically create and append new elements to the DOM?**

I used document.createElement() to create new list items and appendChild() to add them to the cart.
**What steps did you take to ensure accurate updates to the total price?**

I maintained a totalPrice variable that updates whenever a product is added or removed, ensuring the displayed total reflects the current state of the cart.
**How did you handle invalid input for product name or price?**

I included validation checks before adding a product to ensure the name is not empty and the price is a positive number.
**What challenges did you face when implementing the remove functionality?**

I had to ensure that the correct price was deducted from the total when an item was removed, which required storing the price in a data attribute on the list item.

##### Resources used

- [replaceChildren()](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)

- [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

- [Event Delegation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#event_delegation)

- [toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

- [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
