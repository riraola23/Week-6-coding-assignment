



class Player {
    constructor (name, deck){
        this.name = name
        this.deck = deck
        this.totalPoints = 0
    }
}

// shuffle function,

function shuffle(array) {
    
    let currentIndex = array.length   

    while(currentIndex != 0) { // current index does not equal zero
        randomIndex = Math.floor(Math.random() * currentIndex); // mathfloor rounds down integer, 
        //mathrandom: num >0 but < the picked range of numbers
        
        currentIndex--; // substracts one
        
        [array [currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;

} 

const cardValueMap = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    j: 11,
    q: 12,
    k: 13,
    a: 14,
}

const mainDeck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a']
console.log('Fresh Deck of Cards: ' + mainDeck);

shuffle(mainDeck)
console.log('Shuffled Deck:' + mainDeck);


const player1 = new Player('Player 1', []);
player1.deck = mainDeck.slice(0, 26);

const player2 = new Player('Player 2', []);
player2.deck = mainDeck.slice(26, 52);

console.log('Player 1 Deck:' + player1.deck);
console.log('Player 2 Deck:' + player2.deck);





player1card = 0
player2card = 0
player1.score = 0
player2.score = 0

for (let i = 0; i < player1.deck.length; i++) {
    
    player1card = player1.deck[i];
    console.log('Player 1: ' + player1card);

    player2card = player2.deck[i];
    console.log('Player 2: ' + player2card);

if ( cardValueMap[player1card] > cardValueMap[player2card]) {
    player1.score++;

} else if (cardValueMap[player2card] > cardValueMap[player1card]) {
    player2.score++
} else {}


console.log('Player 1 score: ' + player1.score);
console.log('Player 2 score: ' + player2.score);
}

if ( player1.score > player2.score) {
    console.log(' PLAYER 1 WINS')
} else {
    console.log('PLAYER 2 WINS')
}