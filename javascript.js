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
function playerPlay(clicked_id){
        return clicked_id;
    }
const computerSelection = computerPlay();
const playerSelection = playerPlay();

function playRound(playerSelection, computerSelection){
    
}
