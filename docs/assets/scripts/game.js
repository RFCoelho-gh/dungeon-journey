class Game {

    startGame() {
        gameStarted++;
    }

    heroNamer(inputName) {
        console.log("heroNamer was invoked inside of a Game Class")
        if (inputName.length >= 9 || inputName.length <= 1) {
            return "Hero";
        } else {
            return inputName;
        }
    }

    heroCreator (inputAncestry, inputClass) {

        console.log("heroCreator was invoked inside of a Game Class");

        // Human Options

        if (inputAncestry === "Human" || !inputAncestry) {
            if (inputClass === "Warrior" || !inputClass) {
                // HUMAN WARRIOR
                return new HumanWarrior;
            } else if (inputClass === "Ranger") {
                // HUMAN RANGER
            } else if (inputClass === "Wizard") {

            };
        }

        // Elf Options

        if (inputAncestry === "Elf") {
            if (inputClass === "Warrior") {
                // ELF WARRIOR
            } else if (inputClass === "Ranger") {
                // ELF RANGER
            } else if (inputClass === "Wizard") {

            };
        }

        // Dwarf Options

        if (inputAncestry === "Dwarf") {
            if (inputClass === "Warrior") {
                // DWARF WARRIOR
            } else if (inputClass === "Ranger") {
                // DWARF RANGER
            } else if (inputClass === "Wizard") {
                // DWARF WIZARD
            };
        }
    }

    printBothStats (player, enemy) {
        lateralCtx.clearRect(0, 0, 200, 800);
        this.printHeroStats(player);
        this.printEnemyStats(enemy);
    }
    
    printSpeedBars (player, enemy) {
        mainCtx.font = "25px fantasy";
        mainCtx.fillStyle = "white";
        mainCtx.fillText(`↻ ${player.atrSPD}`, 153, 250);
        mainCtx.fillText(`↻ ${enemy.atrSPD}`, 897, 250);
        //
        mainCtx.fillStyle = "black";
        mainCtx.fillRect(218, 240, 100, 6.1);
        mainCtx.fillRect(961, 240, 100, 6.1);
        //
        mainCtx.fillStyle = "yellow";
        mainCtx.fillRect(218, 240, player.atrSPD, 6);
        mainCtx.fillRect(961, 240, enemy.atrSPD, 6);
    }

    printHealthBars (player, enemy){
        mainCtx.font = "25px fantasy";
        mainCtx.fillStyle = "white";
        mainCtx.fillText(`❤ ${player.atrHP}`, 147, 222);
        mainCtx.fillText(`❤ ${enemy.atrHP}`, 892, 222);
        //
        mainCtx.fillStyle = "black";
        mainCtx.fillRect(218, 212, 100, 6.1);
        mainCtx.fillRect(961, 212, 100, 6.1);
        //
        mainCtx.fillStyle = "green";
        mainCtx.fillRect(218, 212, (player.atrHP / player.atrMaxHP * 100), 6);
        mainCtx.fillRect(961, 212, (enemy.atrHP / enemy.atrMaxHP * 100), 6);
    }

    printHeroStats (actorEntry) {
        lateralCtx.font = '15.5px georgia';
        lateralCtx.fillStyle = 'black';
        lateralCtx.fillText(`Name: ${actorEntry.actorName}`, 8, 50);
        lateralCtx.fillText(`Class: ${actorEntry.className}`, 8, 75);
        lateralCtx.fillText(`Hit Points: ${actorEntry.atrHP}`, 8, 100);

        // COLOR CONDITIONAL FOR STRENGTH
        if(actorEntry.attributeModifier(actorEntry.atrSTR) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Strength: ${actorEntry.atrSTR} (+${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 125);
        } else if (actorEntry.attributeModifier(actorEntry.atrSTR < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Strength: ${actorEntry.atrSTR} (${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 125);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Strength: ${actorEntry.atrSTR} (-${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 125);
        }

        // COLOR CONDITIONAL FOR DEXTERITIY
        if(actorEntry.attributeModifier(actorEntry.atrDEX) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Dexterity: ${actorEntry.atrDEX} (+${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 150);
        } else if (actorEntry.attributeModifier(actorEntry.atrDEX < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Dexterity: ${actorEntry.atrDEX} (${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 150);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Dexterity: ${actorEntry.atrDEX} (-${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 150);
        }

        // COLOR CONDITIONAL FOR INTELLIGENCE
        if(actorEntry.attributeModifier(actorEntry.atrINT) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Intelligence: ${actorEntry.atrINT} (+${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 175);
        } else if (actorEntry.attributeModifier(actorEntry.atrINT < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Intelligence: ${actorEntry.atrINT} (${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 175);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Intelligence: ${actorEntry.atrINT} (-${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 175);
        }
    }


    /// INCLUDE FUTURE CONDITIONALS TO HIDE VALUES BASED ON PLAYER OWN VLAUES

    /// , , , , , 

    printEnemyStats (actorEntry) {
        lateralCtx.font = '15.5px georgia';
        lateralCtx.fillStyle = 'black';
        lateralCtx.fillText(`Name: ${actorEntry.actorName}`, 8, 625);
        lateralCtx.fillText(`Class: ${actorEntry.className}`, 8, 650);
        lateralCtx.fillText(`Hit Points: ${actorEntry.atrHP}`, 8, 675);

        // COLOR CONDITIONAL FOR STRENGTH
        if(actorEntry.attributeModifier(actorEntry.atrSTR) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Strength: ${actorEntry.atrSTR} (+${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 700);
        } else if (actorEntry.attributeModifier(actorEntry.atrSTR < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Strength: ${actorEntry.atrSTR} (${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 700);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Strength: ${actorEntry.atrSTR} (-${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 700);
        }

        // COLOR CONDITIONAL FOR DEXTERITIY
        if(actorEntry.attributeModifier(actorEntry.atrDEX) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Dexterity: ${actorEntry.atrDEX} (+${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 725);
        } else if (actorEntry.attributeModifier(actorEntry.atrDEX < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Dexterity: ${actorEntry.atrDEX} (${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 725);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Dexterity: ${actorEntry.atrDEX} (-${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 725);
        }

        // COLOR CONDITIONAL FOR INTELLIGENCE
        if(actorEntry.attributeModifier(actorEntry.atrINT) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Intelligence: ${actorEntry.atrINT} (+${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 750);
        } else if (actorEntry.attributeModifier(actorEntry.atrINT < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Intelligence: ${actorEntry.atrINT} (${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 750);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Intelligence: ${actorEntry.atrINT} (-${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 750);
        }
    };
}