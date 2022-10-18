
const game = new Game;

const player = new HumanWarrior;

const firstEncounter = new BattleEncounter;

const firstEnemy = new BaseSlime;

player.actorName = "Hero";

firstEncounter.startEncounter();

firstEncounter.setActors(player, firstEnemy);

player.drawActor(player.color, player.actorName);

firstEnemy.drawActor(firstEnemy.color, firstEnemy.actorName);

firstEncounter.createChatBox();

firstEncounter.createDescripText(`The adventurer ${player.actorName} encounters a wandering ${firstEnemy.actorName} while in the forest!`, "It seems hostile!", `Prepare for battle, ${player.actorName}, the ${player.className}!`);

firstEncounter.drawBackground();

setTimeout(() => {
    firstEncounter.clearChatBox();
    firstEncounter.createChatBox();
    firstEncounter.createDescripText(`${player.actorName}, select your action!`, "", "")
    firstEncounter.createAttackMenu(player);
}, "3000");

setInterval(() =>{ /// Limiting Speed of all Actors, Redrawing all the time
    if (player.atrSPD < 0) {
        player.atrSPD = 0;
    }
    if (player.atrSPD >= 100) {
        player.atrSPD = 100;
    }
    if (firstEnemy.atrSPD < 0) {
        firstEnemy.atrSPD = 0;
    }
    if (firstEnemy.atrSPD >= 100) {
        firstEnemy.atrSPD = 100;
    }
    mainCtx.clearRect(0, 0, 1200, 624);
    player.drawActor(player.color, player.actorName);
    firstEnemy.drawActor(firstEnemy.color, firstEnemy.actorName);
    game.printBothStats(player, firstEnemy);
    game.printSpeed(player, firstEnemy);
}, 1000 / 60)

setInterval(() =>{ // Increasing Speed of all actors as per their Dexteritiy Modifier
    if (player.atrSPD < 100 && player.atrSPD >= 0) {
        player.atrSPD += (player.rollDice(6) + player.attributeModifier(player.atrDEX));
    }
    if (firstEnemy.atrSPD < 100 && firstEnemy.atrSPD >= 0) {
        firstEnemy.atrSPD += (firstEnemy.rollDice(6) + player.attributeModifier(firstEnemy.atrDEX));
    }
}, 1000 / 2) // NORMAL VALUE IS 500, RESTORE AFTER TESTING

// ENEMY AI

setInterval(()=>{
    if (firstEnemy.atrSPD >= 75) {
        firstEnemy.atrSPD -= 75;
        let RNG = firstEnemy.rollDice(2);
        if (RNG === 1) {
            if (firstEnemy.attributeModifier(firstEnemy.atrSTR) + firstEnemy.rollDice(20) >= player.atrSTR) {
                let floatingDamage = firstEnemy.rollDice(firstEnemy.actions[0].abilityDamageDice) + firstEnemy.attributeModifier(firstEnemy.atrSTR);
                player.atrHP -= floatingDamage;
            };
        } else if (RNG === 2) {
            if (firstEnemy.attributeModifier(firstEnemy.atrDEX) + firstEnemy.rollDice(20) >= player.atrDEX) {
                let floatingDamage = firstEnemy.rollDice(firstEnemy.actions[1].abilityDamageDice) + firstEnemy.attributeModifier(firstEnemy.atrDEX);
                player.atrHP -= floatingDamage;
            }
        }
    }
}, 1000 / 60)

// CONTROLS

document.getElementById("optionA-btn").addEventListener("click", () => {
    if (player.atrSPD >= 100) {
        player.atrSPD -= 100;
        if (player.attributeModifier(player.atrSTR) + player.rollDice(20) >= firstEnemy.atrSTR) {
            let floatingDamage = player.rollDice(player.actions[0].abilityDamageDice) + player.attributeModifier(player.atrSTR);
            firstEnemy.atrHP -= floatingDamage;
        }
    } else {
        console.log("No speed!")
    }
});

document.getElementById("optionB-btn").addEventListener("click", () => {
    if (player.atrSPD >= 80) {
        player.atrSPD -= 80;
        if (player.attributeModifier(player.atrDEX) + player.rollDice(20) >= firstEnemy.atrDEX) {
            let floatingDamage = player.rollDice(player.actions[1].abilityDamageDice) + player.attributeModifier(player.atrDEX);
            firstEnemy.atrHP -= floatingDamage;
        }
    }
})

document.getElementById("optionC-btn").addEventListener("click", () => {
    if (player.atrSPD >= 60) {
        player.atrSPD -= 60;
        if (player.attributeModifier(player.atrINT) + player.rollDice(20) >= firstEnemy.atrINT) {
            let floatingDamage = player.rollDice(player.actions[2].abilityDamageDice) + player.attributeModifier(player.atrINT);
            firstEnemy.atrHP -= floatingDamage;
        }
    }
})



