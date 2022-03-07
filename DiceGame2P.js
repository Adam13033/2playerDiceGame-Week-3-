const header = document.querySelector('.header');
const body = document.getElementById('diceGame');

const player1Position = document.getElementById("player1-position");
const scoreCard1 = document.querySelector(".player1-score-card");
const diceContainer1 = document.querySelector(".dice-container1");
const diceText1 = document.getElementById("roll-dice1");
const diceimg1 = document.getElementById("player1-dice");
const player1Roll = document.getElementById("player1-roll");
const player1Hold = document.getElementById("player1-hold");
const player1Again = document.getElementById("play-again1");

const player2Position = document.getElementById("player2-position");
const scoreCard2 = document.querySelector(".player2-score-card");
const diceContainer2 = document.querySelector(".dice-container2");
const diceText2 = document.getElementById("roll-dice2");
const diceimg2 = document.getElementById("player2-dice");
const player2Roll = document.getElementById("player2-roll");
const player2Hold = document.getElementById("player2-hold");
const player2Again = document.getElementById("play-again2");

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1; 

const player1Wins = () => {
    scoreCard1.textContent = `${player1Score} You win!`;
    scoreCard2.textContent = `${player2Score} You lose!`;
    player1Score = 0;
    scoreCard1.style.backgroundcolor = "green"
};

const player1Loses = () => {
    scoreCard2.textContent = `${player1Score} You lose!`;
    scoreCard1.textContent = `${player2Score} You win!`;
    player1Score = 0;
};

const player2Wins = () => {
    scoreCard2.textContent = `${player2Score} You win!`;
    scoreCard1.textContent = `${player1Score} You lose!`;
    player2Score = 0;
};

const player2Loses = () => {
    scoreCard2.textContent = `${player2Score} You lose!`;
    scoreCard1.textContent = `${player1Score} You win!`;
    player2Score = 0;
};

player1Roll.addEventListener("click", () =>{
    if (currentPlayer === 1) {
        let myRoll = Math.ceil(Math.random() *6);
        diceimg1.src = `./images/${myRoll}.png`;
        player1Score += myRoll;
        scoreCard1.textContent = `Score: ${player1Score}`;

        if (player1Score >= 20) {
            player1Wins();
            player2Loses();
        } else {
            if (myRoll === 1) {
                player1Loses();
                player2Wins();
            }
            currentPlayer++;
            diceText2.textContent = "Your turn, player 2!";
            diceText1.textContent = "Wait for your turn!";
        }
    }
});

player2Roll.addEventListener("click", () => {
    if (currentPlayer === 2) {
        let myRoll = Math.ceil(Math.random() *6);
        diceimg2.src = `./images/${myRoll}.png`;
        player2Score += myRoll;
        scoreCard2.textContent = `Score: ${player2Score}`;

        if (player2Score >= 20) {
            player2Wins();
            player1Loses();
        } else {
            if (myRoll === 1) {
                player2Loses();
                player1Wins();
            }
            currentPlayer--;
            diceText1.textContent = "Your turn, player 1!";
            diceText2.textContent = "Wait for your turn!";
        }
    }
});

player1Hold.addEventListener("click", () => {
    if (currentPlayer === 1) {
        currentPlayer = 2;
        diceText2.textContent = "Your turn, player 2!";
        diceText1.textContent = "You held!";
    }
});
player2Hold.addEventListener("click", () => {
    if (currentPlayer === 2) {
        currentPlayer = 2;
        diceText2.textContent = "You held!";
        let winner = (player1Score > player2Score) ? `Player 1 wins with a score of: ${player1Score}!` : `Player 2 wins with a score of: ${player2Score}!`;
        scoreCard1.textContent = winner;
        scoreCard2.textContent = winner;

    }
});

player1Again.addEventListener("click", () => {
    window.location.reload();
});
player2Again.addEventListener("click", () => {
    window.location.reload();
});