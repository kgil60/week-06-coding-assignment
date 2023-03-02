//  card deck is array of objects {cardName: "Ace of Hearts", value: 1}

// function to deal to 2 players
    // dealt cards array with cards dealt to first player (player1Deck)
        // pick random number 1 - 52, if not in dealtCards push to player1Deck, push number to dealtCards, until 26 cards dealt
        // do same for player2

// player1Score, player2Score variables
    
// function to check scores
    // player1Card, player2Card perameters
    // return whos card was higher, false if tie

// CLASSES:
    // Player
        // currentCard = new Card() - picks from top of deck
    
    // Deck
        
    
    // Card
        // pickCard()

    // Main
        // start() - starts game
        // deck = new Deck()
        // compareScores() - compares scores
        // deal() - deals cards

class Player {
    constructor() {
        this.score = 0;
        this.currentCard = null;
        this.deck = []
    }
}

class Deck {
    constructor() {
        this.cards = [
            // {cardName: 'Ace of Hearts', value: 1},
            {cardName: 'Two of Hearts', value: 2},
            {cardName: 'Three of Hearts', value: 3},
            {cardName: 'Four of Hearts', value: 4},
            {cardName: 'Five of Hearts', value: 5},
            {cardName: 'Six of Hearts', value: 6},
            {cardName: 'Seven of Hearts', value: 7},
            {cardName: 'Eight of Hearts', value: 8},
            {cardName: 'Nine of Hearts', value: 9},
            {cardName: 'Ten of Hearts', value: 10},
            {cardName: 'Jack of Hearts', value: 11},
            {cardName: 'Queen of Hearts', value: 12},
            {cardName: 'King of Hearts', value: 13},
        ];
    }
}

class Main {
    constructor() {
        this.deck = new Deck();
        this.player1 = new Player()
        this.player2 = new Player();
    }

    start() {
        // console.log(this.player1.score, this.player1.currentCard);
        // console.log(this.player2.score, this.player2.currentCard);
        // console.log(Math.floor(Math.random() * 52 + 1))

        this.deal();
    }

    deal() {
        let dealtCards = []

        while (this.player1.deck.length < 6) {
            let chosenCard = Math.floor(Math.random() * 12 + 0)
            
            if (this.deck.cards[chosenCard] && dealtCards.includes(this.deck.cards[chosenCard]) === false) {
                this.player1.deck.push(this.deck.cards[chosenCard]);
                dealtCards.push(this.deck.cards[chosenCard]);
            }
        }

        console.log(this.player1.deck);

        while (this.player2.deck.length < 6) {
            let chosenCard = Math.floor(Math.random() * 12)

            if (this.deck.cards[chosenCard] && dealtCards.includes(this.deck.cards[chosenCard]) === false) {
                this.player2.deck.push(this.deck.cards[chosenCard]);
                dealtCards.push(this.deck.cards[chosenCard]);
            }
        }

        console.log(this.player2.deck);
    }
}

let game = new Main();
game.start();