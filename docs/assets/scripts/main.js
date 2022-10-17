//* Main Script File

const mainCanvas = document.getElementById("mainCanvas");
const mainCtx = mainCanvas.getContext("2d");

const lateralCanvas = document.getElementById("lateralCanvas");
const lateralCtx = lateralCanvas.getContext("2d");

window.onload = () => {
    document.getElementById("mainStart-btn").onclick = () => {
        console.log("Start Button was clicked!");
        startGame();
    };

    function startGame () {
        // CHOOSING RACE + CLASS OF PLAYER

        const player = new HumanWarrior()
    };

}