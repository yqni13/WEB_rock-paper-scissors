function gameRPS(choice) {
    let resultMSG = document.getElementById("game_result")
    console.log("halloo");
    // choice(rock) == 0
    // choice(paper) == 1
    // choice(scissors) == 2

    // call random AI decision
    let randomChoice = Math.floor(Math.random() * 3);

    // compare 'weapons'
    if (choice == randomChoice) {
        disableOnclick();
        console.log("unentschieden");
        resultMSG.innerHTML = "THE GAME WAS A DRAW";
        resultMSG.className = "game_tie";
        resultMSG.style.fontWeight = "bold";
    }

    setTimeout(function() {
        resultMSG.className = "";
        resultMSG.style.fontWeight = "normal"
        resultMSG.innerHTML = "Choose your weapon!"
        enableOnclick();
    }, 5000);

    // call out winner and increase respective counter
    let counterUser = document.getElementById('counter_user').value;
    document.getElementById('counter_user').value = counterUser+1;
    // or:
    let counterAI = document.getElementById('counter_ai').value;
    document.getElementById('counter_ai').value = counterAI+1;
}

function disableOnclick() {
    document.getElementById('rock').onclick = "";
    document.getElementById('paper').onclick = "";
    document.getElementById('scissors').onclick = "";
}

function enableOnclick() {
    document.getElementById('rock').onclick = function() { gameRPS(0); };
    document.getElementById('paper').onclick = function() { gameRPS(1); };
    document.getElementById('scissors').onclick = function() { gameRPS(2); };
}