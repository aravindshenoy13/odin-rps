function playRound(a,b){
    if(a==b){
        console.log(`The computer also chose ${a}. It'd a draw!`);
        return
    }
    switch(a) {
        case "rock":
            if(b=="paper"){
                console.log(`The computer chose ${b}. You lost!`);
            }
            else{
                console.log(`The computer chose ${b}. You won!`);
            }
            break;
        case "paper":
            if(b=="scissors"){
                console.log(`The computer chose ${b}. You lost!`);
            }
            else{
                console.log(`The computer chose ${b}. You won!`);
            }
            break;
        case "scissors":
            if(b=="rock"){
                console.log(`The computer chose ${b}. You lost!`);
            }
            else{
                console.log(`The computer chose ${b}. You won!`);
            }
            break;
        default:
            console.log("Invalid input");
    }
}
function getComputerChoice(){
    let rnd = Math.random()
    if (rnd>0.6){
        return "rock";
    }
    else if (rnd>0.3){
        return "scissors";
    }
    else{
        return "paper";
    }
}

function getHumanChoice(){
    let usr_choice = prompt("Choose rock, paper or scissors!");
    usr_choice = usr_choice.toLowerCase()
    comp_choice = getComputerChoice()
    playRound(usr_choice, comp_choice);
}   


