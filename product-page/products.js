import { boardGames } from '../data.js';
import { render } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < boardGames.length; i++) {
    const game = boardGames[i];

    const li = render(game);

    ul.appendChild(li);    
}