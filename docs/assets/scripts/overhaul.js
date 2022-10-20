
const game = new Game;

const player = new HumanWarrior;

const firstEncounter = new BattleEncounter;

const firstEnemy = new BaseSlime;

player.actorName = "Reynauld";

firstEncounter.startEncounter();

firstEncounter.setActors(player, firstEnemy);

player.drawActor(player.color, player.img, player.actorName);

firstEnemy.drawActor(firstEnemy.color, firstEnemy.img, firstEnemy.actorName);

firstEncounter.createChatBox();

firstEncounter.createDescripText(`The adventurer ${player.actorName} encounters a wandering ${firstEnemy.actorName} while in the dungeon!`, "It seems hostile!", `Prepare for battle, ${player.actorName}, the ${player.className}!`);

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
    player.drawActor(player.color, player.img, player.actorName);
    firstEnemy.drawActor(firstEnemy.color, firstEnemy.img, firstEnemy.actorName);
    game.printBothStats(player, firstEnemy);
    game.printSpeedBars(player, firstEnemy);
    game.printHealthBars(player, firstEnemy);
}, 1000 / 60 * anonymousIntervalHandler);

setInterval(() =>{ // Increasing Speed of all actors as per their Dexteritiy Modifier
    if (player.atrSPD < 100 && player.atrSPD >= 0 && player.atrHP >= 1 && firstEnemy.atrHP >= 1) {
        player.atrSPD += (player.rollDice(6) + player.attributeModifier(player.atrDEX) + 1);
    }
    if (firstEnemy.atrSPD < 100 && firstEnemy.atrSPD >= 0 && firstEnemy.atrHP >= 1 && player.atrHP >= 1) {
        firstEnemy.atrSPD += (firstEnemy.rollDice(6) + player.attributeModifier(firstEnemy.atrDEX) + 1);
    }
}, 1000 / 2.5 * anonymousIntervalHandler); //! NORMAL VALUE IS '1000/2.5', RESTORE AFTER TESTING

setInterval(() =>{
    firstEncounter.endEncounter(player, firstEnemy);
    game.endGame(player, firstEnemy);
}, 1000 / 60 * anonymousIntervalHandler);

//* ENEMY AI

setInterval(()=>{
    if (firstEnemy.atrSPD >= 100 && player.atrHP > 0 && firstEnemy.atrHP > 0) {
        firstEnemy.atrSPD -= 100;
        let RNG = firstEnemy.rollDice(2);

        if (RNG === 1) {
/*             firstEncounter.createAttackDeclaration(firstEnemy.actions[0].abilityName) */
            if (firstEnemy.attributeModifier(firstEnemy.atrSTR) + firstEnemy.rollDice(20) >= player.atrSTR) {
                let floatingDamage = firstEnemy.rollDice(firstEnemy.actions[0].abilityDamageDice) + firstEnemy.attributeModifier(firstEnemy.atrSTR);
                player.atrHP -= Math.floor(floatingDamage * 1.25);
                player.atrSPD -= Math.floor((floatingDamage * 3) * 1.25);
            };
        } else if (RNG === 2) {
/*             firstEncounter.createAttackDeclaration(firstEnemy.actions[1].abilityName) */
            if (firstEnemy.attributeModifier(firstEnemy.atrDEX) + firstEnemy.rollDice(20) >= player.atrDEX) {
                let floatingDamage = firstEnemy.rollDice(firstEnemy.actions[1].abilityDamageDice) + firstEnemy.attributeModifier(firstEnemy.atrDEX);
                player.atrHP -= Math.floor(floatingDamage * 1.25);
                player.atrSPD -= Math.floor((floatingDamage * 3) * 1.25);
            }
        }
    }
}, 1000 / 60 * anonymousIntervalHandler);

//* CONTROLS

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyQ':
            if (player.atrSPD >= 100 && player.atrHP > 0) {
                player.atrSPD -= 100;
                if (player.attributeModifier(player.atrSTR) + player.rollDice(20) >= firstEnemy.atrSTR) {
                    let floatingDamage = player.rollDice(player.actions[0].abilityDamageDice) + player.attributeModifier(player.atrSTR);
                    firstEnemy.atrHP -= floatingDamage;
                    firstEnemy.atrSPD -= floatingDamage * 3;
                };
            }
        break;
        case 'KeyA':
             if (player.atrSPD >= 80 && player.atrHP > 0) {
                player.atrSPD -= 80;
                if (player.attributeModifier(player.atrDEX) + player.rollDice(20) >= firstEnemy.atrDEX) {
                    let floatingDamage = player.rollDice(player.actions[1].abilityDamageDice) + player.attributeModifier(player.atrDEX);
                    firstEnemy.atrHP -= floatingDamage;
                    firstEnemy.atrSPD -= floatingDamage * 3;
                };
            };
        break;
        case 'KeyW':
            if (player.atrSPD >= 60 && player.atrHP > 0) {
                player.atrSPD -= 60;
                if (player.attributeModifier(player.atrINT) + player.rollDice(20) >= firstEnemy.atrINT) {
                    let floatingDamage = player.rollDice(player.actions[2].abilityDamageDice) + player.attributeModifier(player.atrINT);
                    firstEnemy.atrHP -= floatingDamage;
                    firstEnemy.atrSPD -= floatingDamage * 3;
                };
            };
        break;
    }
});


