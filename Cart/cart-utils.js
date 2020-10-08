import { boardGames } from '../data.js';
import { findById, calcLineItem } from '../utils.js';

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const gameData = findById(boardGames, cartItem.id);

    const title = gameData.title;
    const price = gameData.price;
    
    tdTitle.textContent = title;
    tdPrice.textContent = `$${price}`; 

    const total = calcLineItem(price, cartItem.quantity);

    tdTotal.textContent = `$${total}`;

    tr.append(tdTitle, tdPrice, tdQuantity, tdTotal);
    
    return tr;
}