// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { render } from '../utils.js';
const test = QUnit.test;

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
