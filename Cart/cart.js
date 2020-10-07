import { cart } from '../data.js';
import { calcOrderItem } from '..utils.js';
import { renderTableRow } from '../cart-utils.js';
console.log('hello world');


const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const game = cart[i]; 

    const tr = renderTableRow(game);

    table.appendChild(tr);       
}

const total = calcOrderItem(cart);

const totalGrid = document.querySelector('.total');

totalGrid.textContent = `total: $${total}`;