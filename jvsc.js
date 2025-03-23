const res = document.querySelector(".result");
let uscore = 0, cscore = 0;

function playRound(a, b) {
    if (a === b) {
        res.textContent = `The computer also chose ${a}. It's a draw!`;
        return 0;
    }
    if ((a === "rock" && b === "scissors") || 
        (a === "paper" && b === "rock") || 
        (a === "scissors" && b === "paper")) {
        res.textContent = `The computer chose ${b}. You won!`;
        return 1;
    } else {
        res.textContent = `The computer chose ${b}. You lost!`;
        return 2;
    }
}

function getComputerChoice() {
    let rnd = Math.random();
    if (rnd > 0.6) return "rock";
    if (rnd > 0.3) return "scissors";
    return "paper";
}

function updateScore(outcome) {
    if (outcome === 1) uscore++;
    if (outcome === 2) cscore++;
    document.querySelector(".score").textContent = `Score - You: ${uscore}, Computer: ${cscore}`;
}

document.querySelectorAll(".rps").forEach(btn => {
    btn.addEventListener("click", () => {
        let userChoice = btn.getAttribute("id");
        let compChoice = getComputerChoice();
        let outcome = playRound(userChoice, compChoice);
        updateScore(outcome);
    });
});
