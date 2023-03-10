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
            {cardName: 'Ace of Hearts', value: 1},
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
            {cardName: 'Ace of Clubs', value: 1},
            {cardName: 'Two of Clubs', value: 2},
            {cardName: 'Three of Clubs', value: 3},
            {cardName: 'Four of Clubs', value: 4},
            {cardName: 'Five of Clubs', value: 5},
            {cardName: 'Six of Clubs', value: 6},
            {cardName: 'Seven of Clubs', value: 7},
            {cardName: 'Eight of Clubs', value: 8},
            {cardName: 'Nine of Clubs', value: 9},
            {cardName: 'Ten of Clubs', value: 10},
            {cardName: 'Jack of Clubs', value: 11},
            {cardName: 'Queen of Clubs', value: 12},
            {cardName: 'King of Clubs', value: 13},
            {cardName: 'Ace of Diamonds', value: 1},
            {cardName: 'Two of Diamonds', value: 2},
            {cardName: 'Three of Diamonds', value: 3},
            {cardName: 'Four of Diamonds', value: 4},
            {cardName: 'Five of Diamonds', value: 5},
            {cardName: 'Six of Diamonds', value: 6},
            {cardName: 'Seven of Diamonds', value: 7},
            {cardName: 'Eight of Diamonds', value: 8},
            {cardName: 'Nine of Diamonds', value: 9},
            {cardName: 'Ten of Diamonds', value: 10},
            {cardName: 'Jack of Diamonds', value: 11},
            {cardName: 'Queen of Diamonds', value: 12},
            {cardName: 'King of Diamonds', value: 13},
            {cardName: 'Ace of Spades', value: 1},
            {cardName: 'Two of Spades', value: 2},
            {cardName: 'Three of Spades', value: 3},
            {cardName: 'Four of Spades', value: 4},
            {cardName: 'Five of Spades', value: 5}, 
            {cardName: 'Six of Spades', value: 6},
            {cardName: 'Seven of Spades', value: 7},
            {cardName: 'Eight of Spades', value: 8},
            {cardName: 'Nine of Spades', value: 9},
            {cardName: 'Ten of Spades', value: 10},
            {cardName: 'Jack of Spades', value: 11},
            {cardName: 'Queen of Spades', value: 12},
            {cardName: 'King of Spades', value: 13}
        ];
    }
}

class Card {
    constructor() {
        this.name = null;
        this.value = null;
    }
}

class Main {
    constructor() {
        this.deck = new Deck();
        this.player1 = new Player()
        this.player2 = new Player();
    }

    // STARTS GAME
    start() {
        alert('Click OK to start the game');

        this.deal();

        alert('The cards have been dealt. Click OK to continue.');

        while (this.player1.deck.length > 0 && this.player2.deck.length > 0) {
            this.pickCard(this.player1);
            this.pickCard(this.player2);

            alert(`Player 1 has ${this.player1.currentCard.name}\nPlayer 2 has ${this.player2.currentCard.name}`);

            if (this.player1.currentCard.value > this.player2.currentCard.value) {
                this.player1.score += 1;

                alert(`Player 1, you win this round! You now have ${this.player1.score} points.\nPlayer 2 has ${this.player2.score} points.`);
            }
            else if (this.player2.currentCard.value > this.player1.currentCard.value) {
                this.player2.score += 1;

                alert(`Player 2, you win this round! You now have ${this.player2.score} points.\nPlayer 1 has ${this.player1.score} points.`);
            } else {
                alert('It\'s a tie! No points awarded.');
            }
        }

        alert(`The game is over. Let\'s compare scores...\n\nPlayer 1: ${this.player1.score} points.\nPlayer 2: ${this.player2.score} points.`)

        let winner = this.compareScores(this.player1, this.player2);
        
        if (winner) {
            alert(`Player ${winner} wins!`);
        } else {
            alert('It\'s a tie!');
        }
    }

    // DEALS CARDS TO BOTH PLAYERS
    deal() {
        let dealtCards = []

        while (this.player1.deck.length < 26) {
            let chosenCard = Math.floor(Math.random() * 52)
            
            if (this.deck.cards[chosenCard] && dealtCards.includes(this.deck.cards[chosenCard]) === false) {
                this.player1.deck.push(this.deck.cards[chosenCard]);
                dealtCards.push(this.deck.cards[chosenCard]);
            }
        }

        while (this.player2.deck.length < 26) {
            let chosenCard = Math.floor(Math.random() * 52)

            if (this.deck.cards[chosenCard] && dealtCards.includes(this.deck.cards[chosenCard]) === false) {
                this.player2.deck.push(this.deck.cards[chosenCard]);
                dealtCards.push(this.deck.cards[chosenCard]);
            }
        }
    }

    // PICKS A CARD FROM THE DECK
    pickCard(player) {
        let playerCard = new Card();
        playerCard.name = player.deck[0].cardName;
        playerCard.value = player.deck[0].value;

        player.currentCard = playerCard;

        player.deck.splice(0,1);
    }

    // COMPARES SCORES AT END OF GAME AND RETURNS WINNING PLAYER NUMBER
    compareScores(player1, player2) {
        if (player1.score > player2.score) {
            return '1';
        }
        else if (player2.score > player1.score) {
            return '2';
        } else {
            return false;
        }
    }
}

let game = new Main();
game.start();