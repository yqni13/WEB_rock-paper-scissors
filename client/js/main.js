let counterUser = 0;
let counterAI = 0;

function gameRPS(user) {
    // user(0) == rock
    // user(1) == paper
    // user(2) == scissors

    // call random AI decision
    let ai = Math.floor(Math.random() * 3);
    document.getElementById("game_result").style.fontWeight = "bold";

    // compare choices
    if (user == ai) {
        resultTIE();
    } else if ((user == 0 && ai == 2) || (user == 1 && ai == 0) || (user == 2 && ai ==1)) {
        resultWIN();
    } else {
        resultLOSE();
    }
}

function resultWIN() {
    document.getElementById("game_result").innerHTML = "YOU WON!";
    document.getElementById("game_result").className = "game_win";
    ++counterUser;
    document.getElementById('counter_user').innerHTML = "User: " + counterUser;
}

function resultLOSE() {
    document.getElementById("game_result").innerHTML = "YOU LOST!";
    document.getElementById("game_result").className = "game_lose";
    ++counterAI;
    document.getElementById('counter_ai').innerHTML = "AI: " + counterAI;
}

function resultTIE() {
    document.getElementById("game_result").innerHTML = "THE GAME WAS A DRAW";
    document.getElementById("game_result").className = "game_tie";
}