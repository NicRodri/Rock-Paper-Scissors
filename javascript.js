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
    const tieScore = document.getElementById("tieScore");
    const gameFinish = document.getElementById("gameEnd");
    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn) => {
        btn.addEventListener('click', function(e){
            if(gameEnd == false){
                const playerSelection = this.textContent.toLowerCase();
                const computerSelection = computerPlay();
                let round = playRound(playerSelection, computerSelection);
                
                if (round == "you win"){
                    winsPlayer++;
                    pScore.textContent = "Player-" + winsPlayer;
                }
                else if (round == "you lose"){
                    winsComputer++;
                    cScore.textContent = "Computer-" + winsComputer;
                } 
                else{
                    ties++;
                    tieScore.textContent = "Ties-" + ties;
                }
                if(winsPlayer == 5){
                    gameEnd = true;
                    gameFinish.textContent= "Congrats you win!!!";
                }
                else if(winsComputer == 5){
                    gameEnd = true;
                    gameFinish.textContent= "You lose!!!";
                }
                //Allows the option to play a new game
                if(winsPlayer==5||winsComputer==5){
                    const container = document.getElementById('container');
                    const button = document.createElement('button');
                    button.setAttribute('id','replay');
                    button.textContent="Play Again?";
                    container.appendChild(button);
                    button.addEventListener('click', function(e){
                        game();
                        button.remove();
                        pScore.textContent = "Player-0";
                        cScore.textContent = "Computer-0";
                        tieScore.textContent = "Ties-0";
                        gameFinish.textContent= "";
                    });
                }
                
            }

    });
});
}
game();

//At the moment any value not rock paper or scissors is not accounted for
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



  