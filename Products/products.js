// ### Step 1: Design List

// Work out the static design for one product in your list. This will help you to flush out what data will be needed. Make sure to include an "Add" button whose value is the product `id`.

// Property | Description
// ---|---
// `id` | a unique string that identifies this product
// `name` | user friendly name of the product
// `image` | image file name for this image (should live in `assets`)
// `description` | a longer description of the product
// `category` | the category this product belongs to, limit to one
// `price` | the price the user will pay

// board games
import { boardGames } from '../data.js';
import { render } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < boardGames.length; i++) {
    const game = boardGames[i];

    const li = render(game);

    ul.appendChild(li);    
}