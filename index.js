// Generate random number
const randomNumber = () =>  Math.floor((Math.random() * 6) + 1);

// Change dice image on web page
const changeDice = (playerNumber, diceNumber) => {
    playerNumber = playerNumber - 1;

    const diceElement = document.querySelectorAll('img')[playerNumber];
    const path = `./images/dice${diceNumber}.png`;

    diceElement.setAttribute("src", path);
}

// Game logic
const playGame = (randomNumber1, randomNumber2) => {
    const player1 = 1;
    const player2 = 2;

    changeDice(player1, randomNumber1);
    changeDice(player2, randomNumber2);

    const h1 = document.querySelector('h1');

    if (randomNumber1 > randomNumber2) {
        h1.textContent = "Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        h1.textContent = "Player 2 wins!";
    }
    else {
        h1.textContent = "Draw!";
    }
}

document.querySelector("button").addEventListener("click", () => playGame(randomNumber(), randomNumber()));
