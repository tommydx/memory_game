 console.log("Up and running!");

 var cards = [
 		{
 			rank: 'Queen',
 			suit: 'Hearts',
 			cardImage: "C:/Users/Verge/fundamentals/memory_game/images/images/queen-of-hearts.png"
 		},
 		{
 			rank: 'Queen',
 			suit: 'Diamonds',
 			cardImage: "C:/Users/Verge/fundamentals/memory_game/images/images/queen-of-diamonds.png"
 		},
 		{
 			rank: 'King',
 			suit: 'Hearts',
 			cardImage: "C:/Users/Verge/fundamentals/memory_game/images/images/king-of-hearts.png"
 		},
 		{
 			rank: 'King',
 			suit: 'Diamonds',
 			cardImage: "C:/Users/Verge/fundamentals/memory_game/images/images/king-of-diamonds.png"
 		}

 ];
 var cardsInPlay = [];


	var checkForMatch = function () {

		this.setAttribute(cards[cardId].cardImage);

		if (cardsInPlay[0] === cardsInPlay[1]) {
  	    alert("You found a match!");
 		 } 
 		else {
     	alert("Sorry, try again.");
 		 }
	}


	
	var flipCard = function () {
		this.getAttribute(cards[cardId].rank);

		console.log("User flipped " + cards.rank);
		cardsInPlay.push(cards.rank);

		console.log(cards.suit);
		console.log(cards.cardImage);
	
		checkForMatch();

	}

	var createBoard = function () {
		for (var i = 0; i < cards.length; i++) {
			var cardElement = document.createElement('img');
			cardElement.setAttribute('src', "C:/Users/Verge/fundamentals/memory_game/images/images/back.png");
			cardElement.setAttribute(cards.rank, i[0]);
			cardElement.addEventListener('click', flipCard());
			document.getElementById('game-board').appendChild(cardElement);
		}


	}


	createBoard();

	document.getElementsByTagName('*').length;




