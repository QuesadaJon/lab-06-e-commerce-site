// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { render, findById, calcLineItem, calcOrderItem } from '../utils.js';
import { renderTableRow } from '../cart/cart-utils.js';


const test = QUnit.test;

const arkham = {
    id: 'arkham',
    title: 'Arkham Horror',
    publisher: 'Chaosium',
    cover: 'arkham.png',
    price: 64.99,
    description: 'Arkham Horror: The Card Game is a cooperative Living Card Game® set amid a backdrop of Lovecraftian horror. As the Ancient Ones seek entry to our world, one to two investigators (or up to four with two Core Sets) work to unravel arcane mysteries and conspiracies.',
    expansions: true,        
};

const betrayal = {
    id: 'betrayal',
    title: 'Betrayal at House on the Hill',
    publisher: 'Avalon Hill',
    cover: 'betrayal.png',
    price: 29.99,
    description: 'Betrayal at House on the Hill is a tile game that allows players to build their own haunted house room by room, tile by tile, creating a new thrilling game board every time. The game is designed for three to six people, each of whom plays one of six possible characters.',
    expansions: true,        
};

const boss = {
    id: 'boss',
    title: 'Boss Monster',
    publisher: 'Brotherwise Games',
    cover: 'boss-monster.png',
    price: 21.99,
    description: 'Boss Monster: The Dungeon-Building Card Game is a 2-4 player card game released in July 2013 by Brotherwise Games. In the game, players take control of a Boss Monster whose objective is to build a Dungeon that will lure in Heroes and destroy them in order to capture their Souls without taking too many Wounds.',
    expansions: true,        
};

const gloomhaven = {
    id: 'gloomhaven',
    title: 'Gloomhaven',
    publisher: 'Cephalofai Games',
    cover: 'gloomhaven.png',
    price: 99.99,
    description: 'Gloomhaven is a tactical skirmish adventure game. You work together to clear out dungeons and ruins. As you gain experience, you develop abilities, gain loot, and uncover facets of the world in this expanding and branching setting.',
    expansions: true,        
};

const rokugan = {
    id: 'rokugan',
    title: 'The Legend of the Five Rings: Battle for Rokugan',
    publisher: 'Fantasy Flight Games',
    cover: 'rokugan.png',
    price: 29.99,
    description: 'This turn-based strategy game of conquest and mayhem puts players in the role of Rokugan daimyō struggling for control over the rich land of the Emerald Empire. Leaders must balance their resources, plan their attacks, and outwit their enemies to ensure their clan\'s victory. The land is there for the taking.',
    expansions: true,        
};

const gameArray = [
    arkham,
    betrayal,
    boss,
    gloomhaven,
    rokugan
];

const arkhamCheckout = {
    id: 'arkham',
    quantity: 4
};
const betrayalCheckout = {
    id: 'betrayal',
    quantity: 2
};
const bossCheckout = {
    id: 'boss',
    quantity: 1,
};

const checkoutArray = [
    arkhamCheckout,
    betrayalCheckout,
    bossCheckout
];


test('Function should take in my game data and return an li with the appropreate contents', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const game = {
        id: 'arkham',
        title: 'Arkham Horror 3rd Edition',
        publisher: 'Chaosium',
        cover: 'arkham.png',
        price: 64.99,
        description: 'Arkham Horror: The Card Game is a cooperative Living Card Game® set amid a backdrop of Lovecraftian horror. As the Ancient Ones seek entry to our world, one to two investigators (or up to four with two Core Sets) work to unravel arcane mysteries and conspiracies.',
        expansions: true,        
    };
    
    const expected = '<li class="product"><p class="title">Arkham Horror 3rd Edition</p><p class="publisher">Chaosium</p><img class="cover" src="../assets/arkham.png"><p class="price">$64.99</p><p class="description">Arkham Horror: The Card Game is a cooperative Living Card Game® set amid a backdrop of Lovecraftian horror. As the Ancient Ones seek entry to our world, one to two investigators (or up to four with two Core Sets) work to unravel arcane mysteries and conspiracies.</p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = render(game);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('Function should be able to take an array and an id and return the array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //Arrange
    // Set up your parameters and expectations

    const myId1 = 'arkham';
    const myId2 = 'betrayal';
    const expected1 = arkham;
    const expected2 = betrayal;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(gameArray, myId1);
    const actual2 = findById(gameArray, myId2);
    
    //Assert
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});


test('Function should take in an ammount and a quantitiy and returns the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const line1 = 4;
    const line2 = 29.99;
    const expected = 119.96;

    const line1a = 27;
    const line2a = 29.99;
    const expecteda = 809.73;
        
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(line1, line2);
    const actuala = calcLineItem(line1a, line2a);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
    expect.equal(expecteda, actuala);
});

test('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {
    const cartItem = {
        id: 'arkham',
        quantity: 4
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>Arkham Horror</td><td>$64.99</td><td>4</td><td>$259.96</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cartItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should take in a cartArray and return the subtotal of items in cart', (expect) => {
    const cartArray = checkoutArray;

    //Arrange
    // Set up your arguments and expectations
    const expected = '$341.93';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderItem(cartArray);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

