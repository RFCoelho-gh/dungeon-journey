
//* MAIN STARTS HERE //

const game = new Game;

let infinitePlayer;

let firstEncounter;

let currentStage;

/* document.getElementById("mainStart-btn").addEventListener("click", () => {
    console.log("A new way of click start")
    const gammaPlayer = game.heroCreator(document.getElementById("chosenAncestry").value, document.getElementById("chosenClass").value);
    return gammaPlayer;
}); */




window.onload = () => {
    document.getElementById("mainStart-btn").onclick = () => {
        if (gameStarted === 0) {
            console.log("Start Button was clicked with value 0")
            infinitePlayer = game.heroCreator(document.getElementById("chosenAncestry").value, document.getElementById("chosenClass").value);
            infinitePlayer.actorName = game.heroNamer(document.getElementById("heroName").value);
            game.startGame();
            setTimeout(() => {
                alphaTrigger++;
                console.log("Alpha Trigger increased to 1.")
              }, "10");
        } else if (gameStarted >= 1) {
            console.log("Start Button was clicked with value above 0")
        }
    };
}



//* ALPHA ENCOUNTER STARTS HERE

function alphaChecking () {
    if (alphaTrigger === 1) {
        clearInterval(alphaChecker);
        const alphaEncounter = new BattleEncounter;
        /* future conditionals for enemy variance */
        const alphaEnemy = new BaseSlime;
        const alphaPlayer = infinitePlayer;
        alphaEncounter.startEncounter();
        alphaEncounter.setActors(alphaPlayer, alphaEnemy);
        alphaPlayer.drawActor(alphaPlayer.color, alphaPlayer.actorName);
        alphaEnemy.drawActor(alphaEnemy.color, alphaEnemy.actorName);
        game.printHeroStats(alphaPlayer);
        game.printEnemyStats(alphaEnemy);
        alphaTrigger++;
        console.log("Alpha trigger has been pushed to 2+")
        console.log(alphaPlayer);
        console.log(alphaEnemy);
        alphaEncounter.createChatBox();
        alphaEncounter.createDescripText(`The adventurer ${alphaPlayer.actorName} encounters a wandering ${alphaEnemy.actorName} while in the forest!`, "It seems hostile!", `Prepare for battle, ${alphaPlayer.actorName}, the ${alphaPlayer.className}!`);
        alphaEncounter.drawBackground();
        setTimeout(() => {
            alphaEncounter.clearChatBox();
            alphaEncounter.createChatBox();
            alphaEncounter.createDescripText(`${alphaPlayer.actorName}, select your action!`, "", "")
            alphaEncounter.createAttackMenu(alphaPlayer);
          }, "3000");
        alphaEncounter.encounterStarted = true;
    }

    //* CONTROLS

    // KEY OPTION A

    document.getElementById("optionA-btn").addEventListener("click", () => {
        if (isPlayerTurn && !isEnemyTurn) {
            alphaEncounter.resultAttack(alphaPlayer, alphaEnemy, alphaEncounter.triggerAttack(alphaPlayer, alphaEnemy, 0));
        } else {
            console.log("No attacking out of your turn!");
        }
    });
}







//* END OF CONTROLS

const alphaChecker = setInterval(alphaChecking, 1000 / 60);



