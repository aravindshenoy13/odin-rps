function rps(a){
    let rnd = Math.random()
    if (rnd>0.6){
        b = "rock";
    }
    else if (rnd>0.3){
        b = "scissors";
    }
    else{
        b = "paper";
    }
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

let choice = prompt("Choose rock, paper or scissors!");
rps(choice);