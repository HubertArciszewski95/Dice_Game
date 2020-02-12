// Generate random number
const randomNumber = () =>  Math.floor((Math.random() * 6) + 1);

// Change dice image on web page
const changeDice = (playerNumber, diceNumber) => {
    playerNumber = playerNumber - 1;

    const path = `./images/dice${diceNumber}.png`;
    const diceElement = document.querySelectorAll('img')[playerNumber];

    diceElement.setAttribute("src", path);
}

const getResultText = (randomNumber1, randomNumber2) => {
    if (randomNumber1 > randomNumber2) {
        return "Player 1 wins!";
   }
   else if (randomNumber1 < randomNumber2) {
       return  "Player 2 wins!";
   }
   return "Draw!";
}

// Game logic
const playGame = (randomNumber1, randomNumber2) => {
    const player1 = 1;
    const player2 = 2;

    changeDice(player1, randomNumber1);
    changeDice(player2, randomNumber2);
    
    const h1 = document.querySelector('h1');
    h1.textContent = getResultText(randomNumber1,randomNumber2)
    
}

document.querySelector("button").addEventListener("click", () => playGame(randomNumber(), randomNumber()));
