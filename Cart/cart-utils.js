import { boardGames } from '../data.js';
import { findById, calcLineItem, calcOrderItem } from '../utils.js';

// 1. Import your data (both cart and products), DOM generation function, and any needed utility functions
// 2. locate the `tbody` element where your line items will go
// 3. loop through your data
//     1. Create a variable based on the current array index.
//     1. Use your `findById` function to find the corresponding product for this line item
//     1. Pass these to your DOM generation function and capture result in variable
/*
### Step 6: Add Order Total to Table

In `/shopping-cart/shopping-cart.js`:

1. import the `calcOrderTotal` function
1. Use the function to calculate the cart total and
display the result in the appropriate element.*/

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');
    const tdOrderTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const gameData = findById(boardGames, cartItem.id);

    const title = gameData.title;
    const price = gameData.price;
    
    tdTitle.textContent = title;
    tdPrice.textContent = `$${price}`; 

    const total = calcLineItem(price, cartItem.quantity);

    tdTotal.textContent = `$${total}`;
    
    const orderTotal = calcOrderItem(total);

    tr.append(tdTitle, tdPrice, tdQuantity, tdTotal, tdOrderTotal, orderTotal);
    return tr;
}