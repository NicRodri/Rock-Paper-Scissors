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
//Takes your input and returns value if it matches rock paper or scissors. User values are not case sensitive
function playerPlay(){
    let result = window.prompt("Rock Paper or Scissors").toLowerCase();

    if (result== "rock" || result== "paper" || result== "scissors"){
        return result;
    }
    else {
        return "Not a valid value!!";
    }
}
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
//Plays the rock paper scissor game  
function game() {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i <5; i++){
        console.log(playRound(playerPlay(), computerPlay()));
    }
}
game();

