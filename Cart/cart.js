// import { cart } from '../data.js';
import { calcOrderItem, getFromLocalStorage } from '../utils.js';
import { renderTableRow } from './cart-utils.js';


const table = document.querySelector('tbody');
const totalCell = document.querySelector('tfoot');
const checkoutButton = document.querySelector('button');

const cart = getFromLocalStorage('CART') || [];

for (let i = 0; i < cart.length; i++) {
    const game = cart[i]; 
    const tr = renderTableRow(game);
    table.appendChild(tr);
}

const grandTotal = calcOrderItem(cart);
totalCell.textContent = grandTotal;

checkoutButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);
});