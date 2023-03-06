let expect = chai.expect;

// TEST deal()
describe('#deal', function() {
    it('should deal 26 cards to 2 players', function() {
        let menu = new Main();

        menu.deal();
        
        expect(menu.player1.deck.length).to.equal(26);
        expect(menu.player2.deck.length).to.equal(26);
    });
});

// TEST pickCard()
describe('#pickCard', function() {
    it('should pick the card at the top of the deck', function() {
        let main = new Main();

        main.deal();

        main.pickCard(main.player1);
        main.pickCard(main.player2);
    
        expect(main.player1.currentCard).to.be.an('object');
        expect(main.player2.currentCard).to.be.an('object');
    });

    it('should remove the card from the deck', function() {
        let main = new Main();

        main.deal();

        main.pickCard(main.player1);
        main.pickCard(main.player2);

        expect(main.player1.deck.length).to.equal(25);
        expect(main.player2.deck.length).to.equal(25);
    });
});

// TEST compareScores();
describe('#compareScores', function() {
    it('should return 1 if player 1 wins', function() {
        let main = new Main();

        main.player1.score = 5;
        main.player2.score = 4;

        expect(main.compareScores(main.player1, main.player2)).to.equal('1');
    });

    it('should return 2 if player 2 wins', function() {
        let main = new Main();

        main.player1.score = 4;
        main.player2.score = 5;

        expect(main.compareScores(main.player1, main.player2)).to.equal('2');
    });

    it('should return false if the game ends in a tie', function() {
        let main = new Main();

        main.player1.score = 5;
        main.player2.score = 5;

        expect(main.compareScores(main.player1, main.player2)).to.equal(false);
    })
})