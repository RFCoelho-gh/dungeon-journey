
//* MAIN STARTS HERE //

const game = new Game;

let infinitePlayer;

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
            startGame();
            setTimeout(() => {
                alphaTrigger++;
                console.log("Alpha Trigger increased to 1.")
              }, "10");
        } else if (gameStarted >= 1) {
            console.log("Start Button was clicked with value above 0")
        }
    };

    function startGame () {
        gameStarted++;
        isPlayerTurn = true;
        isEnemyTurn = false;
    };

    function printHeroStats (player) {
        console.log(`You printed ${player.actorName}`)
        lateralCtx.font = '15.5px georgia';
        lateralCtx.fillStyle = 'black';
        lateralCtx.fillText(`Name: ${player.actorName}`, 8, 50);
        lateralCtx.fillText(`Class: ${player.className}`, 8, 75);
        lateralCtx.fillText(`Hit Points: ${player.atrHP}`, 8, 100);

        // COLOR CONDITIONAL FOR STRENGTH
        if(player.attributeModifier(player.atrSTR) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Strength: ${player.atrSTR} (+${player.attributeModifier(player.atrSTR)})`, 8, 125);
        } else if (player.attributeModifier(player.atrSTR < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Strength: ${player.atrSTR} (${player.attributeModifier(player.atrSTR)})`, 8, 125);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Strength: ${player.atrSTR} (-${player.attributeModifier(player.atrSTR)})`, 8, 125);
        }

        // COLOR CONDITIONAL FOR DEXTERITIY
        if(player.attributeModifier(player.atrDEX) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Dexterity: ${player.atrDEX} (+${player.attributeModifier(player.atrDEX)})`, 8, 150);
        } else if (player.attributeModifier(player.atrDEX < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Dexterity: ${player.atrDEX} (${player.attributeModifier(player.atrDEX)})`, 8, 150);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Dexterity: ${player.atrDEX} (-${player.attributeModifier(player.atrDEX)})`, 8, 150);
        }

        // COLOR CONDITIONAL FOR INTELLIGENCE
        if(player.attributeModifier(player.atrINT) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Intelligence: ${player.atrINT} (+${player.attributeModifier(player.atrINT)})`, 8, 175);
        } else if (player.attributeModifier(player.atrINT < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Intelligence: ${player.atrINT} (${player.attributeModifier(player.atrINT)})`, 8, 175);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Intelligence: ${player.atrINT} (-${player.attributeModifier(player.atrINT)})`, 8, 175);
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
/*         mainCtx.clearRect(0, 0, mainCanvas.clientWidth, mainCanvas.height); */
/*         alphaPlayer.drawActor(alphaPlayer.color, alphaPlayer.actorName); */
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
    }
}

const alphaChecker = setInterval(alphaChecking, 1000 / 60);

