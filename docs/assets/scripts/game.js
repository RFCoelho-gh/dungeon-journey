class Game {

    startGame() {
        gameStarted++;
    }

    endGame(player, enemy){
        if (player.atrHP === 0 && enemy.atrHP >= 1) { // PLAYER LOSS
            mainCtx.font = '80px fantasy';
            mainCtx.fillStyle = "#8B0000";
            mainCtx.fillText(`${player.actorName} lost!`, 350, 325);
        }
        if (enemy.atrHP === 0 && player.atrHP >= 1) { // PLAYER WIN
            mainCtx.font = '80px fantasy';
            mainCtx.fillStyle = "white";
            mainCtx.fillText(`${player.actorName} won!`,  350, 325)
        }
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

    drawStroked(ctx, string, x, y, fontFamily, fontPx, strokeColor, fillColor) {
/*         ctx.font = '80px Sans-serif'; */
        ctx.font = `${fontPx}px ${fontFamily}`;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 8;
        ctx.strokeText(string, x, y);
        ctx.fillStyle = fillColor;
        ctx.fillText(string, x, y);
    };
    
    printSpeedBars (player, enemy) {
        mainCtx.font = "25px fantasy";
        mainCtx.fillStyle = "white";
        mainCtx.fillText(`↻ ${player.atrSPD}`, 153, 250);
        mainCtx.fillText(`↻ ${enemy.atrSPD}`, 747, 250);
        //
        mainCtx.fillStyle = "white";
        mainCtx.fillRect(217, 239.5, 101.5, 7.1);
        mainCtx.fillRect(810, 239.5, 101.5, 7.1);
        //
        mainCtx.fillStyle = "black";
        mainCtx.fillRect(218, 240, 100, 6.1);
        mainCtx.fillRect(811, 240, 100, 6.1);
        //
        mainCtx.fillStyle = "yellow";
        mainCtx.fillRect(218, 240, player.atrSPD, 6);
        mainCtx.fillRect(811, 240, enemy.atrSPD, 6);
    }

    printHealthBars (player, enemy){
        mainCtx.font = "25px fantasy";
        mainCtx.fillStyle = "white";
        mainCtx.fillText(`❤ ${player.atrHP}`, 147, 222);
        mainCtx.fillText(`❤ ${enemy.atrHP}`, 742, 222);
        //
        mainCtx.fillStyle = "white";
        mainCtx.fillRect(217, 211.5, 101.5, 7.1);
        mainCtx.fillRect(810, 211.5, 101.5, 7.2);
        //
        mainCtx.fillStyle = "black";
        mainCtx.fillRect(218, 212, 100, 6.1);
        mainCtx.fillRect(811, 212, 100, 6.1);
        //
        mainCtx.fillStyle = "green";
        mainCtx.fillRect(218, 212, (player.atrHP / player.atrMaxHP * 100), 6);
        mainCtx.fillRect(811, 212, (enemy.atrHP / enemy.atrMaxHP * 100), 6);
    }

    printBothStats (player, enemy) {
        leftCtx.clearRect(0, 0, 200, 400);
        rightCtx.clearRect(0, 0, 200, 400);
        this.printHeroStats(player);
        this.printEnemyStats(enemy);
    };

    printHeroStats (actorEntry) {
        leftCtx.font = 'italic 25.5px fantasy';
        leftCtx.fillStyle = 'gold';
        leftCtx.fillText(`${actorEntry.actorName}`, 45, 30);
        leftCtx.fillStyle = 'white';
        leftCtx.font = 'bold 15px georgia';
        leftCtx.fillText(`Class: ${actorEntry.className}`, 14, 175);
        leftCtx.font = 'bold 15.5px georgia'
        leftCtx.fillText(`Hit Points: ${actorEntry.atrHP}`, 14, 200);

        if (actorEntry.atrSTR <= 9) {
            leftCtx.fillText(`STR: ${actorEntry.atrSTR} (${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 14, 225);
        } else {
            leftCtx.fillText(`STR: ${actorEntry.atrSTR} (+${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 14, 225);
        };

        if (actorEntry.atrDEX <= 9) {
            leftCtx.fillText(`DEX: ${actorEntry.atrDEX} (${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 14, 250);
        } else {
            leftCtx.fillText(`DEX: ${actorEntry.atrDEX} (+${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 14, 250);
        };

        if (actorEntry.atrINT <= 9) {
            leftCtx.fillText(`INT: ${actorEntry.atrINT} (${actorEntry.attributeModifier(actorEntry.atrINT)})`, 14, 275);
        } else {
            leftCtx.fillText(`INT: ${actorEntry.atrINT} (+${actorEntry.attributeModifier(actorEntry.atrINT)})`, 14, 275);
        };
    };

    printEnemyStats (actorEntry) {
        rightCtx.font = 'italic 25.5px fantasy';
        rightCtx.fillStyle = 'red';
        rightCtx.fillText(`${actorEntry.actorName}`, 35, 30);
        rightCtx.fillStyle = 'white';
        rightCtx.font = 'bold 15.5px georgia';
        rightCtx.fillText(`Class: ${actorEntry.className}`, 8, 175);
        rightCtx.fillText(`Hit Points: ${actorEntry.atrHP}`, 8, 200);

        if (actorEntry.atrSTR <= 9) {
            rightCtx.fillText(`STR: ${actorEntry.atrSTR} (${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 225);
        } else {
            rightCtx.fillText(`STR: ${actorEntry.atrSTR} (+${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 225);
        };

        if (actorEntry.atrDEX <= 9) {
            rightCtx.fillText(`DEX ${actorEntry.atrDEX} (${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 250);
        } else {
            rightCtx.fillText(`DEX ${actorEntry.atrDEX} (+${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 250);
        };

        if (actorEntry.atrINT <= 9) {
            rightCtx.fillText(`INT: ${actorEntry.atrINT} (${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 275);
        } else {
            rightCtx.fillText(`INT: ${actorEntry.atrINT} (+${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 275);
        };
    };
};