// export const boardGames = [
//     {
//         id: 'arkham',
//         title: 'Arkham Horror 3rd Edition',
//         publisher: 'Chaosium',
//         cover: 'arkham.png',
//         price: 64.99,
//         description: 'Arkham Horror: The Card Game is a cooperative Living Card Game® set amid a backdrop of Lovecraftian horror. As the Ancient Ones seek entry to our world, one to two investigators (or up to four with two Core Sets) work to unravel arcane mysteries and conspiracies.',
//         expansions: true,        
//     }


export function render(boardGames) {
    const li = document.createElement('li');
    const title = document.createElement('p');
    const publisher = document.createElement('p');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const cover = document.createElement('img');
 
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