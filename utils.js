import { boardGames as hardCodedGames } from '../data.js';
import { PRODUCT, CART } from './constants.js';


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

        const cart = getFromLocalStorage(CART) || [];

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

        setInLocalStorage(CART, cart);
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
    const result = quantity * ammount;
    return Math.round(result * 100) / 100;
    
}

export function calcOrderItem(cartArray) {
    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];

        const itemActual = findById(hardCodedGames, item.id);
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
export function getLocalStorageGames(key) {

    // go get localStorageBooks from local storage and call them localStorageBooks
    let localStorageBooks = JSON.parse(localStorage.getItem(key));

    // if there are no localStorageBooks in local storage yet
    // if they've never been to the site
    if (!localStorageBooks) {
        // go grab the hard coded localStorageBooks, and SEED local storage with them
        const stringyBooks = JSON.stringify(hardCodedGames);

        localStorage.setItem(key, stringyBooks);
        localStorageBooks = hardCodedGames;
    }

    return localStorageBooks;
}

export function addProduct(newProduct) {

    const localStorageBooks = getLocalStorageGames();

    localStorageBooks.push(newProduct);

    const stringyLocalBooks = JSON.stringify(localStorageBooks);
    localStorage.setItem(PRODUCT, stringyLocalBooks);

    // It takes a product object as a parameter and puts the product into the correct place in localStorage.
    // Your test should add a product, then retrieve all the products and assert deep Equal the last item
    // in the array and the supplied new product.
    
    // Your function will need to:
    
    // 1. Retrieve the existing products array
    // 1. Push the new product into the array
    // 1. Re-save the products array into localStorage
}