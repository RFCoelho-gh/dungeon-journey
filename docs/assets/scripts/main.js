//* Main Script File

const mainCanvas = document.getElementById("mainCanvas");
const mainCtx = mainCanvas.getContext("2d");

const lateralCanvas = document.getElementById("lateralCanvas");
const lateralCtx = lateralCanvas.getContext("2d");

window.onload = () => {
    document.getElementById("mainStart-btn").onclick = () => {
        if (gameStarted === 0) {
            console.log("Start Button was clicked with value 0")
            heroCreator();
            startGame();
            gameStarted++;
        } else if (gameStarted >= 1) {
            console.log("Start Button was clicked with value above 0")
        }
    };

    function heroCreator() {
        console.log("heroCreator was invoked!")
        let heroName = document.getElementById("heroName").value;
        if (typeof(heroName) !== 'string' || heroName.length >= 9 || heroName.length == 0) {
            heroName = "Hero";
        }
        let chosenAncestry = document.getElementById("chosenAncestry").value;
        let chosenClass = document.getElementById("chosenClass").value;

        // Human Options

        if (chosenAncestry === "Human" || !chosenAncestry) {
            if (chosenClass === "Warrior" || !chosenClass) {
                // HUMAN WARRIOR
                const player = new HumanWarrior(heroName)
                console.log(player);
                console.log(player.actorName);
                console.log(player.className)
                console.log(player.atrHP);
                
            }
            if (chosenClass === "Ranger") {
                // HUMAN RANGER
            }
            if (chosenClass === "Wizard") {

            }
        }

        // Elf Options

        if (chosenAncestry === "Elf") {
            if (chosenClass === "Warrior") {
                // ELF WARRIOR
            }
            if (chosenClass === "Ranger") {
                // ELF RANGER
            }
            if (chosenClass === "Wizard") {
                // ELF WIZARD
            }
        }

        // Dwarf Options

        if (chosenAncestry === "Dwarf") {
            if (chosenClass === "Warrior") {
                // DWARF WARRIOR
            }
            if (chosenClass === "Ranger") {
                // DWARF RANGER
            }
            if (chosenClass === "Wizard") {
                // DWARF WIZARD
            }
        }
    }

    function startGame () {
    };

}