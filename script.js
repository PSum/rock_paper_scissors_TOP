function askPlayer() {
    let playerValue = prompt("Make your move! \n 1 : Rock \n 2 : Paper \n 3: Scissors");
    return playerValue;
}

function randomInt () {
    let max = 5;
    let min = 0;
    let computerValue = Math.floor((Math.random() *(max-min+1)+min));
    return computerValue;
}

function playGame(turns) {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (i=0; i < turns; i++) {
        let answerPlayer = parseInt(askPlayer());
        console.log(answerPlayer)
        let answerComputer = randomInt();
        if (answerPlayer == 1) {
            console.log("You chose Rock")
        } else if (answerPlayer == 2) {
            console.log("You chose Paper")
        } else if (answerPlayer == 3) {
            console.log("You chose Paper")
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
                break;
        }

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
        console.log(`The score is:\n You: ${scorePlayer} \n Computer: ${scoreComputer}`)

    }
}

let turns = prompt("Wie viele Runden?");
playGame(turns);

