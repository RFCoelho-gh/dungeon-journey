
//* MAIN STARTS HERE //

window.onload = () => {
    document.getElementById("mainStart-btn").onclick = () => {
        if (gameStarted === 0) {
            console.log("Start Button was clicked with value 0")
            heroCreator();
            startGame();
            setTimeout(() => {
                alphaTrigger++;
                console.log("Alpha Trigger increased to 1.")
              }, "1000");
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
                var alphaPlayer = new HumanWarrior(heroName)
                printHeroStats(alphaPlayer);
                alphaPlayer.drawActor(alphaPlayer.color, alphaPlayer.actorName);
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
    if (alphaTrigger === 1){
        clearInterval(alphaChecker);
        const alphaEncounter = new BattleEncounter;
        /* future conditionals for enemy variance */
        const alphaEnemy = new BaseSlime;
        alphaEncounter.startEncounter();
/*         mainCtx.clearRect(0, 0, mainCanvas.clientWidth, mainCanvas.height); */
/*         alphaPlayer.drawActor(alphaPlayer.color, alphaPlayer.actorName); */
        alphaEnemy.drawActor(alphaEnemy.color, alphaEnemy.actorName);
        alphaTrigger++;
        console.log("Alpha trigger has been pushed to 2+")
    }
}

const alphaChecker = setInterval(alphaChecking, 1000 / 60);