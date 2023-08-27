let scorePlayer = 0;
let scoreComputer = 0;

const btnRock = document.querySelector("#btn-Rock");
const btnPaper = document.querySelector("#btn-Paper");
const btnScissors = document.querySelector("#btn-Scissors");

function randomInt () {
    let max = 5;
    let min = 0;
    let computerValue = Math.floor((Math.random() *(max-min+1)+min));
    return computerValue;
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
                console.log("You win this round!");
                scorePlayer += 1;
                break;
            case (answerComputer - 1):
            case (answerComputer + 2):
            case (answerComputer - 4):
                console.log("You loose this round");
                scoreComputer += 1;
                break;
            default:
                console.log("Nobody wins");
                break;
            }
    document.querySelector(".spieler").innerHTML = scorePlayer;
    document.querySelector(".computer").innerHTML = scoreComputer;
}





btnRock.addEventListener("click", function () {
    playGame(1);
})
btnPaper.addEventListener("click", function () {
    playGame(2);
})
btnScissors.addEventListener("click", function () {
    playGame(3);
})



