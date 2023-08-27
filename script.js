let scorePlayer = 0;
let scoreComputer = 0;
let delay = 500;

const btnRock = document.querySelector("#btn-Rock");
const btnPaper = document.querySelector("#btn-Paper");
const btnScissors = document.querySelector("#btn-Scissors");

function randomInt () {
    let max = 5;
    let min = 0;
    let computerValue = Math.floor((Math.random() *(max-min+1)+min));
    return computerValue;
}

function isThereWinner () {
    if (scorePlayer == 5) {
        document.querySelector(".gewinn").innerHTML = "Du hast gewonnen!";

        setTimeout(function(){
            scorePlayer = 0;
            scoreComputer = 0;
            document.querySelector(".spieler").innerHTML = scorePlayer;
            document.querySelector(".computer").innerHTML = scoreComputer;
        }, delay); 
    } else if (scoreComputer == 5) {
        document.querySelector(".gewinn").innerHTML = "Der Computer hat gewonnen!";

        setTimeout(function(){
            scorePlayer = 0;
            scoreComputer = 0;
            document.querySelector(".spieler").innerHTML = scorePlayer;
            document.querySelector(".computer").innerHTML = scoreComputer;
        }, delay); 
    }
}

function playGame(playerInput) {
    let answerPlayer = parseInt(playerInput);
    console.log(answerPlayer)
    let answerComputer = randomInt();
    if (answerPlayer == 1) {
        console.log("You chose Rock")
    } else if (answerPlayer == 2) {
        console.log("You chose Paper")
    } else if (answerPlayer == 3) {
        console.log("You chose Scissors")
    }
    switch (answerComputer) {
        case 1:
        case 4:
            console.log("Computer chose Rock");
            break;
        case 2:
        case 5:
            console.log("Computer chose Paper");
            break;
        case 0:
        case 3:
            console.log("Computer chose Scissors");
            break;}

        switch (answerPlayer) {
            case (answerComputer + 1):
            case (answerComputer + 4):
            case (answerComputer - 2):
                document.querySelector(".gewinn").innerHTML = "Diesen Zug hast du gewonnen!";

                scorePlayer += 1;
                break;
            case (answerComputer - 1):
            case (answerComputer + 2):
            case (answerComputer - 4):
                document.querySelector(".gewinn").innerHTML = "Diesen Zug hat der Computer gewonnen!";

                scoreComputer += 1;
                break;
            default:
                document.querySelector(".gewinn").innerHTML = "Das war ein Unentschieden, keiner gewinnt in diesem Zug";

                break;
            }
    document.querySelector(".spieler").innerHTML = scorePlayer;
    document.querySelector(".computer").innerHTML = scoreComputer;
}


btnRock.addEventListener("click", function () {
    playGame(1);
    isThereWinner();
})
btnPaper.addEventListener("click", function () {
    playGame(2);
    isThereWinner();
})
btnScissors.addEventListener("click", function () {
    playGame(3);
    isThereWinner();
})



