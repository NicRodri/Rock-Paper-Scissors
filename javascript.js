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
function playerPlay(){
    let result = window.prompt("Enter your selection").toLowerCase();

    if (result== "rock" || result== "paper" || result== "scissors"){
        return result;
    }
    else {
        return "Not a valid value!!";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            console.log("tie");
        }
        else if (computerSelection == "paper"){
            console.log("you lose");
        }
        else if (computerSelection == "scissors") {
            console.log("you win");
        }
    }
    else if(playerSelection == "paper"){
        if (computerSelection == "rock"){
            console.log("you win");
        }
        else if (computerSelection == "paper"){
            console.log("tie");
        }
        else if (computerSelection == "scissors"){
            console.log("you lose");
        }
    }
    else if(playerSelection == "scissors"){
        if (computerSelection == "rock"){
            console.log("you lose");
        }
        else if (computerSelection == "paper"){
            console.log("you win");
        }
        else if (computerSelection == "scissors"){
            console.log("tie");
        }
    }
}    
function game() {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i <5; i++){
        playRound();
    }
}
const computerSelection = computerPlay();
const playerSelection = playerPlay();
game();

