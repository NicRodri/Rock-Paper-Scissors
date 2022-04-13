//Computer will guess at random from a value from 0 to 2, numbers represent value for rock paper and scissors
function computerPlay() { 
    let computerPlay = Math.floor(Math.random() * 3);
    if (computerPlay == 0){
        return "rock";
    }
    else if (computerPlay == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}
//Plays the game of rock paper scissors 
function game(){
    let winsPlayer = 0;
    let winsComputer = 0;
    let ties = 0;
    let gameEnd = false;
    const pScore = document.getElementById("playerScore");
    const pPlay = document.getElementById("playerPlay");
    const cScore = document.getElementById("computerScore");
    const cPlay = document.getElementById("computerPlay");
    const outcome = document.getElementById('outcome');
    const tieScore = document.getElementById("tieScore");
    const gameFinish = document.getElementById("gameEnd");
    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn) => {
        btn.addEventListener('click', function(e){
            //Allows the game to end after a winner is found
            if(gameEnd == false){
                const playerSelection = this.textContent.toLowerCase();
                const computerSelection = computerPlay();
                pPlay.textContent = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
                cPlay.textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
                //Logic used to determine winner
                let round = playRound(playerSelection, computerSelection);
                //Game states
                if (round == "you win"){
                    winsPlayer++;
                    pScore.textContent = "Player: " + winsPlayer + " wins";
                    outcome.textContent = "You win! " + pPlay.textContent + " beats " + computerSelection + ".";
                }
                else if (round == "you lose"){
                    winsComputer++;
                    cScore.textContent = "CPU:  " + winsComputer + " wins";
                    outcome.textContent = "You lose! " + cPlay.textContent + " beats " + playerSelection + ".";
                } 
                else{
                    ties++;
                    tieScore.textContent = "Ties: " + ties;
                    outcome.textContent = "Tie! You both picked " + playerSelection + ".";
                }
                if(winsPlayer == 5){
                    gameEnd = true;
                    gameFinish.textContent= "You Win!!!";
                    gameFinish.style.color = "greenyellow"
                }
                else if(winsComputer == 5){
                    gameEnd = true;
                    gameFinish.textContent= "You Lose!!!";
                    gameFinish.style.color = "rgb(255, 0, 64)"
                }
                //Allows the option to play a new game
                if(winsPlayer==5||winsComputer==5){
                    const container = document.getElementById('container');
                    const button = document.createElement('button');
                    button.setAttribute('id','replay');
                    button.textContent="Play Again?";
                    button.style.backgroundColor = "rgb(209, 0, 200)";
                    button.style.border ="0px";
                    button.style.borderRadius = "5px";
                    container.appendChild(button);
                    button.addEventListener('click', function(e){
                        game();
                        button.remove();
                        pScore.textContent = "Player: 0 wins";
                        cScore.textContent = "CPU: 0 wins";
                        tieScore.textContent = "Ties: 0";
                        pPlay.textContent = "";
                        outcome.textContent= "";
                        cPlay.textContent = "";
                        gameFinish.textContent= "";
                    });
                }
                
            }

    });
});
}
game();

//Determines who wins the rps by comparing both player and computer selections
function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            return "tie";
        }
        else if (computerSelection == "paper"){
            return "you lose";
        }
        else if (computerSelection == "scissors") {
            return "you win";
        }
    }
    else if(playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "you win";
        }
        else if (computerSelection == "paper"){
            return "tie";
        }
        else if (computerSelection == "scissors"){
            return "you lose";
        }
    }
    else if(playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return "you lose";
        }
        else if (computerSelection == "paper"){
            return "you win";
        }
        else if (computerSelection == "scissors"){
            return "tie";
        }
    }
}  



  