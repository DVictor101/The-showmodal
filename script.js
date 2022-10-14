"strict";

//THE VARIABLE FOR ALL MAJOR PAGES
const main = document.querySelector("main");
const quotePage = document.querySelector(".quoteSectinContent");
const guesSection = document.querySelector(".guessection");
const diceSectioon = document.querySelector(".dicesection ");

//THE VARIABLE FOR BUTTONS AND DISPLAY CONTENT
const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttontwo");
const buttonThree = document.querySelector(".buttonthree");
const showModal = document.querySelector(".showmodal");
const guessBackButton = document.getElementById("guessid");
const guessNextButton = document.getElementById("guessmodal");
const quoteBackButton = document.querySelector(".backbuttonOne");
const diceBackDiv = document.querySelector(".backdivdice");
const diceNextButton = document.querySelector(".diceNextButton");
const diceBackButton = document.querySelector(".diceBackButton");

//THE SHOW MODALS BUTTON SCRIPT CONTENT STARTS HERE

buttonTwo.addEventListener("click", function () {
  main.style.display = "none";
  guesSection.style.display = "block";
});
buttonThree.addEventListener("click", function () {
  main.style.display = "none";

  quotePage.style.display = "block";
});
quoteBackButton.addEventListener("click", function () {
  main.classList.remove("hidden");

  quotePage.classList.add("hidden");
});

//THE QOUTE GENERATOR SCRIPT STARTS HERE
//SELECTING THE REQUIRED CLASS

const quoteText = document.querySelector(".quotetext");
const twitterSymbol = document.querySelector(".buttonOned");
const nextQuote = document.querySelector(".buttontwod");
const title = document.querySelector(".title");
const loader = document.getElementById("loader");
const quoteContainer = document.querySelector(".quotecontainer");

const quoteNextButton = document.querySelector(".backbuttontwo");
//GET QUOTES FROM API

let apiQuotes = [];

function newQuotes() {
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //TO CHECK IF AUTHOR FIELD IS BLANK AND ADJUST IF NOT

  if (!quotes.author) {
    title.textContent = "unknown";
  } else {
    title.textContent = quotes.author;
  }
  //Check the code lenght to determine the title
  if (quotes.text.length < 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //set the quote and hide loader

  quoteText.textContent = quotes.text;
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuotes();
  } catch (error) {}
}

//TWEET QUOTE
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${title.textContent} `;
  window.open(twitterUrl, "_blank");
}
//Event Listeneres
nextQuote.addEventListener("click", newQuotes);
twitterSymbol.addEventListener("click", tweetQuote);

//on page load
//getQuotes();
//loading();
//show loading

getQuotes();
//THE GET QUOTE SCRIPT ENDS HERE*********************************************************************************************************************************************************************

//THE GUESS MY NUMBER SCRIPT STARTS HERE
//the guess number variables
const guessSectionBody = document.querySelector(".guessection");
const againButton = document.getElementById("again__btn");
const unKnownBox = document.querySelector(".random-div__box");
const inputBox = document.querySelector(".numinput");
const checkButton = document.querySelector(".numberinput__btn");
const WinOrLossDeclaration = document.querySelector(".correct__pone");
const scoreValue = document.querySelector(".scorevalue");
const highScore = document.querySelector(".highscorevalue");
const parentScore = document.querySelector(".correct__ptwo");
const highScoreParent = document.querySelector(".correct__pthree");
//the guess number declaration
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore01 = 0;
playing = true;

checkButton.addEventListener("click", function () {
  const guess = Number(inputBox.value);

  if (!guess) {
    WinOrLossDeclaration.textContent = "⛔ No Number";
  } else if (guess === secretNumber) {
    unKnownBox.textContent = secretNumber;
    WinOrLossDeclaration.textContent = "💯 Correct Number!";
    parentScore.style.color = "white";
    guessSectionBody.style.backgroundColor = "#06106a";
    unKnownBox.style.width = "15rem";
    highScoreParent.style.color = "white";
    WinOrLossDeclaration.style.color = "white";
    highScore.style.color = "white";
    scoreValue.style.color = "white";
    if (score > highScore01) {
      highScore01 = score;
      highScore.textContent = highScore01;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      WinOrLossDeclaration.textContent = "📉 Number too high";
      score--;
      scoreValue.textContent = score;
    } else {
      WinOrLossDeclaration.textContent = "💥 You loss the game";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      WinOrLossDeclaration.textContent = "📈 Number too low";
      score--;
      scoreValue.textContent = score;
    } else {
      WinOrLossDeclaration.textContent = "💥 You loss the game";
    }
  }
});
againButton.addEventListener("click", function () {
  WinOrLossDeclaration.textContent = "📉 Start Guessing";
  score = 20;
  scoreValue.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  inputBox.value = "";
  parentScore.style.color = "black";
  unKnownBox.textContent = "?";
  guessSectionBody.style.backgroundColor = "#9ca0c2";
  unKnownBox.style.width = "6rem";
  highScoreParent.style.color = "black";
  WinOrLossDeclaration.style.color = "black";
  highScore.style.color = "black";
  scoreValue.style.color = "black";
});

/*THE DICE ROLL GAME SCRIPT STARTS HERE **************************************************************************************************************************/
//THE REQUIRED ELEMENT SELECTORS

const resetGame = document.querySelector(".m-c__btn");
const rollDice = document.querySelector(".m-c__roll");
const hold = document.querySelector(".m-c__hold");
const dice = document.querySelector(".m-c__img");
const playerOneValue = document.querySelector(".m-o__span");
const playerOneCurrentValue = document.querySelector(".m-o__spantwo--0");
const playerTwoValue = document.querySelector(".m-t__span");
const playerTwoCurrentValue = document.querySelector(".m-o__spantwo--1");
const backColor = document.querySelector(".player--0");
const backColor1 = document.querySelector(".player--1");
//Game order activities
let played, currentScore, activePlayer, scores;

const init = function () {
  played = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  dice.classList.add("hidden");

  document.querySelector(`.m-o__spantwo--${0}`).textContent = 0;
  document.querySelector(`.m-o__spantwo--${1}`).textContent = 0;
  document.getElementById(`score--${0}`).textContent = 0;
  document.getElementById(`score--${1}`).textContent = 0;
  backColor.classList.remove("player--winner");
  backColor1.classList.remove("player--winner");
  backColor.classList.add("player--active");
  backColor1.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`.m-o__spantwo--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  backColor.classList.toggle("player--active");
  backColor1.classList.toggle("player--active");
};

//ROLL DICE CLICKEVENT
rollDice.addEventListener("click", function () {
  if (played) {
    //RANDOM NUMBER GENERAATOR
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    //imagealteration
    dice.src = `./Assets/dice-${randomNumber}.png`;
    //DISPLAY THE RANDOM NUMBER IN THE CURRENT PAGE
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`.m-o__spantwo--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//HOLD EVENT ACTIVITY
hold.addEventListener("click", function () {
  if (played) {
    //ADD CURRENT PLAYER TO SCORE
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if th eplayer is >= 100
    if (scores[activePlayer] >= 100) {
      played = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      backColor.classList.remove("player--active");
      backColor1.classList.remove("player--active");
      dice.classList.add("hidden");
    }

    //switch tot the next player
    switchPlayer();
  }
});

resetGame.addEventListener("click", init);

// THE NAVIGATION BUTTONS SCRIPT
//DICE SECTION BACK BUTTON
diceSectioon.classList.add("hidden");

buttonOne.addEventListener("click", function () {
  diceSectioon.style.display = "block";
  main.style.display = "none";
});
//THE DICEBACKBUTTON SCRIPT

diceBackDiv.addEventListener("click", function () {
  diceSectioon.classList.add("hidden");
  main.classList.remove("hidden");
});
diceNextButton.addEventListener("click", function () {
  diceSectioon.style.display = "none";
  guesSection.style.display = "block";
  main.style.display = "none";
});
//guess back button
guessBackButton.addEventListener("click", function () {
  main.style.display = "block";
  guesSection.style.display = "none";
});
diceBackButton.addEventListener("click", function () {
  main.style.display = "inline-block";
  guesSection.style.display = "none";
  diceSectioon.style.display = "none";
});
//THE GUESS NEXT BUTTON
guessNextButton.addEventListener("click", function () {
  quotePage.style.display = "block";
  guesSection.style.display = "none";
});
//QUOTE BACK BUTTON
quoteBackButton.addEventListener("click", function () {
  main.style.display = "block";
  quotePage.style.display = "none";
});

//

//IF THE CURRENT BUTTON

//back.addEventListener("click", function(){
//if()

//})
