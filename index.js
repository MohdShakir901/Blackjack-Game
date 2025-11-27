let player = {
  name:"Shakir",
  chips:145
}

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let massage = "";

let massageEl = document.getElementById("massage-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name+": $"+player.chips

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
  return randonNum;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    massage = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    massage = "You've got Blackjack!";
  } else {
    isAlive = false;
    massage = "You are out of the game!";
  }
  massageEl.textContent = massage;
}

function newCards() {
  if (isAlive===true && hasBlackJack===false) {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
