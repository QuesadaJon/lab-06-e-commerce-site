// ### Step 4: Generate Shopping Cart

// In your `/shopping-cart/shopping-cart.js`, you will need to:
// 1. Import your data (both cart and products), DOM generation function, and any needed utility functions
import { boardGames, cart } from '../data.js';
import { findById } from '..utils.js';
import { renderTableRow } from '../cart-utils.js';
// 2. locate the `tbody` element where your line items will go
// 3. loop through your data
//     1. Create a variable based on the current array index.
//     1. Use your `findById` function to find the corresponding product for this line item
//     1. Pass these to your DOM generation function and capture result in variable
//     1. Append to the table body (`tbody`)
const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const game = cart[i]; 

    const tr = renderTableRow(game);

    table.appendChild(tr);       
}