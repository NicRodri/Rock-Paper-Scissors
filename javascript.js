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
function game(){
    let winsPlayer = 0;
    let winsComputer = 0;
    let gameEnd = false;
    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn) => {
        btn.addEventListener('click', function(e){
            if(gameEnd == false){
                const playerSelection = this.textContent.toLowerCase();
                const computerSelection = computerPlay();
                let round = playRound(playerSelection, computerSelection);
                
                if (round == "you win"){
                    winsPlayer++;
                    console.log(round + "! " + playerSelection + " beats "+ computerSelection);
                }
                else if (round == "you lose"){
                    winsComputer++;
                    console.log(round + "! " + computerSelection + " beats "+ playerSelection);
                } 
                else{
                    console.log(round); 
                }
    
                if(winsPlayer == 5){
                    gameEnd = true;
                    console.log("congrats on winning");
                }
                else if(winsComputer == 5){
                    gameEnd = true;
                    console.log("you lose.........");
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

/*Plays the rock paper scissor game  
function game() {
    playerPlay();
    let wins = 0;
    let losses = 0;
    for (let i = 0; i <5; i++){
        let player='';
        let computer = computerPlay();
        let round = playRound(player, computer);
        
        if (round == "you win"){
            wins++;
            console.log(round + "! " + player + " beats "+ computer);
        }
        else if (round == "you lose"){
            losses++;
            console.log(round + "! " + computer + " beats "+ player);
        } 
        else{
            console.log(round); 
        }
    }
    if ((wins-losses)>0){
        console.log("Winnnner")
    }
    else if ((wins-losses)<0){
        console.log("You lose, unfortunate")
    }
    else if ((wins-losses) == 0){
        console.log("Game tied, no victors")
    }
} */


  