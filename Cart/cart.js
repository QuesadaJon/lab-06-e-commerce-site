import { cart } from '../data.js';
import { calcOrderItem } from '../utils.js';
import { renderTableRow } from './cart-utils.js';


const table = document.querySelector('tbody');
const totalCell = document.querySelector('tfoot');

for (let i = 0; i < cart.length; i++) {
    const game = cart[i]; 
    const tr = renderTableRow(game);
    table.appendChild(tr);
}

const grandTotal = calcOrderItem(cart);
totalCell.textContent = grandTotal;