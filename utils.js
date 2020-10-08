import { boardGames } from '../data.js';

export function render(boardGames) {
    const li = document.createElement('li');
    const title = document.createElement('p');
    const publisher = document.createElement('p');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const cover = document.createElement('img');
    const button = document.createElement('button');
 
    li.classList.add('product');

    title.classList.add('title');
    title.textContent = boardGames.title;

    li.appendChild(title);

    publisher.classList.add('publisher');
    publisher.textContent = boardGames.publisher;

    li.appendChild(publisher);

    cover.classList.add('cover');
    cover.src = `../assets/${boardGames.cover}`;

    li.appendChild(cover);

    price.classList.add('price');
    price.textContent = `$${boardGames.price.toFixed(2)}`;

    li.appendChild(price);

    description.classList.add('description');
    description.textContent = boardGames.description;

    li.appendChild(description);

    button.textContent = 'Add to Cart';
    li.appendChild(button);

    button.addEventListener('click', () => {

        const cart = getFromLocalStorage('CART') || [];

        const cartItems = findById(cart, boardGames.id);

        if (cartItems === undefined) {
            const newItem = {
                id: boardGames.id,
                quantity:1
            };

            cart.push(newItem);
        } else {
            cartItems.quantity++;
        }

        setInLocalStorage('CART', cart);
    });

   
    return li;
}

export function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.id === id) {
            return item;
        }
    }
}

export function calcLineItem(quantity, ammount) {
    const lineOne = quantity;
    const lineTwo = ammount;
    const result = lineOne * lineTwo;
    return Math.round(result * 100) / 100;
    
}

export function calcOrderItem(cartArray) {
    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];

        const itemActual = findById(boardGames, item.id);
        const subtotal = itemActual.price * item.quantity;
        accumulator = accumulator + subtotal;
    }
    return `$${Math.round(accumulator * 100) / 100}`;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    
    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}