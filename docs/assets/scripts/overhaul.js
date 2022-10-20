
const game = new Game;

function randomizeClass (){
    let randomClass;
    let RNG = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    if (RNG >= 1 || RNG <=4 ) {
        randomClass = new HumanWarrior;
    }
    return randomClass;

}

const player = randomizeClass();

const firstEncounter = new BattleEncounter;

function randomizeEnemy (){
    let randomEnemy;
    let RNG = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    if (RNG >= 1 || RNG <= 4) {
        randomEnemy = new BaseSlime;
    }
    return randomEnemy;
}

const firstEnemy = randomizeEnemy();

player.actorName = "Reynauld";

firstEncounter.startEncounter();

firstEncounter.setActors(player, firstEnemy);

player.drawActor(player.color, player.img, player.actorName);

firstEnemy.drawActor(firstEnemy.color, firstEnemy.img, firstEnemy.actorName);

firstEncounter.createChatBox();

firstEncounter.createDescripText(`The adventurer ${player.actorName} encounters a wandering ${firstEnemy.actorName} while in the dungeon!`, "It seems hostile!", `Prepare for battle, ${player.actorName}, the ${player.className}!`);

firstEncounter.drawBackground(player, firstEnemy);

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
    mainCtx.clearRect(0, 125, 1200, (624-125));
    player.drawActor(player.color, player.image, player.actorName);
    firstEnemy.drawActor(firstEnemy.color, firstEnemy.image, firstEnemy.actorName);
    game.printBothStats(player, firstEnemy);
    game.printSpeedBars(player, firstEnemy);
    game.printHealthBars(player, firstEnemy);
}, 1000 / 60 * anonymousIntervalHandler);

setInterval(() =>{ // Increasing Speed of all actors as per their Dexteritiy Modifier
    if (player.atrSPD < 100 && player.atrSPD >= 0 && player.atrHP >= 1 && firstEnemy.atrHP >= 1) {
        player.atrSPD += (player.rollDice(4) + player.attributeModifier(player.atrDEX));
    }
    if (firstEnemy.atrSPD < 100 && firstEnemy.atrSPD >= 0 && firstEnemy.atrHP >= 1 && player.atrHP >= 1) {
        firstEnemy.atrSPD += (firstEnemy.rollDice(4) + player.attributeModifier(firstEnemy.atrDEX));
    }
}, 1000 / 2 * anonymousIntervalHandler); //! NORMAL VALUE IS '1000/2', RESTORE AFTER TESTING

setInterval(() =>{
    firstEncounter.endEncounter(player, firstEnemy);
    game.endGame(player, firstEnemy);
}, 1000 / 60 * anonymousIntervalHandler);

//* ENEMY AI

setInterval(()=>{
    if (firstEnemy.atrSPD >= 100 && player.atrHP > 0 && firstEnemy.atrHP > 0) {
        firstEnemy.atrSPD -= 100;
        let RNG = firstEnemy.rollDice(5);

        if (RNG === 1 || RNG === 2) {
            firstEncounter.createDeclaration(firstEnemy.actions[0].abilityName, firstEnemy);

            if (firstEnemy.attributeModifier(firstEnemy.atrSTR) + firstEnemy.rollDice(20) + BAB >= player.atrSTR) {
                let floatingDamage = firstEnemy.rollDice(firstEnemy.actions[0].abilityDamageDice) + firstEnemy.attributeModifier(firstEnemy.atrSTR);
                player.atrHP -= Math.floor(floatingDamage * 1.25);
                player.atrSPD -= Math.floor((floatingDamage * 3) * 1.25);
                firstEncounter.createHitDeclaration(firstEnemy, `-${floatingDamage} HP!`);
            } else {
                firstEncounter.createHitDeclaration(firstEnemy, "Miss !");
            };

        } else if (RNG === 3 || RNG === 4) {
            firstEncounter.createDeclaration(firstEnemy.actions[1].abilityName, firstEnemy);

            if (firstEnemy.attributeModifier(firstEnemy.atrDEX) + firstEnemy.rollDice(20) + BAB >= player.atrDEX) {
                let floatingDamage = firstEnemy.rollDice(firstEnemy.actions[1].abilityDamageDice) + firstEnemy.attributeModifier(firstEnemy.atrDEX);
                player.atrHP -= Math.floor(floatingDamage * 1.25);
                player.atrSPD -= Math.floor((floatingDamage * 3) * 1.25);
                firstEncounter.createHitDeclaration(firstEnemy, `-${floatingDamage} HP!`);
            } else {
                firstEncounter.createHitDeclaration(firstEnemy, "Miss !");
            };
        } else if (RNG === 5) {
            firstEncounter.createDeclaration(firstEnemy.actions[2].abilityName, firstEnemy);

            if (firstEnemy.attributeModifier(firstEnemy.atrINT) + firstEnemy.rollDice(20) + BAB >= player.atrINT) {
                let floatingDamage = firstEnemy.rollDice(firstEnemy.actions[2].abilityDamageDice) + firstEnemy.attributeModifier(firstEnemy.atrINT);
                player.atrHP -= Math.floor(floatingDamage * 1.25);
                player.atrSPD -= Math.floor ((floatingDamage * 3) * 1.25);
                firstEnemy.atrHP += Math.floor((floatingDamage * 1.25) / 2);
                firstEncounter.createHitDeclaration(firstEnemy, `-${floatingDamage} HP!`);
            } else {
                firstEncounter.createHitDeclaration(firstEnemy, "Miss !");
            };
        };
    };
}, 1000 / 60 * anonymousIntervalHandler);

//* CONTROLS

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyQ':
            if (player.atrSPD >= 100 && player.atrHP > 0) {
                firstEncounter.createDeclaration(player.actions[0].abilityName, player);
                player.atrSPD -= 100;
                if (player.attributeModifier(player.atrSTR) + player.rollDice(20) + BAB >= firstEnemy.atrDEX) {
                    let floatingDamage = player.rollDice(player.actions[0].abilityDamageDice) + player.attributeModifier(player.atrSTR);
                    firstEnemy.atrHP -= floatingDamage;
                    firstEnemy.atrSPD -= floatingDamage * 3;
                    firstEncounter.createHitDeclaration(player, `-${floatingDamage} HP!`);
                } else {
                    firstEncounter.createHitDeclaration(player, "Miss !")
                };
            }
        break;
        case 'KeyA':
             if (player.atrSPD >= 80 && player.atrHP > 0) {
                firstEncounter.createDeclaration(player.actions[1].abilityName, player);
                player.atrSPD -= 80;
                if (player.attributeModifier(player.atrDEX) + player.rollDice(20) + BAB >= firstEnemy.atrDEX) {
                    let floatingDamage = player.rollDice(player.actions[1].abilityDamageDice) + player.attributeModifier(player.atrDEX);
                    firstEnemy.atrHP -= floatingDamage;
                    firstEnemy.atrSPD -= floatingDamage * 3;
                    firstEncounter.createHitDeclaration(player, `-${floatingDamage} HP!`);
                } else {
                    firstEncounter.createHitDeclaration(player, "Miss !")
                };
            };
        break;
        case 'KeyW':
            if (player.atrSPD >= 60 && player.atrHP > 0) {
                firstEncounter.createDeclaration(player.actions[2].abilityName, player);
                player.atrSPD -= 60;
                if (player.attributeModifier(player.atrINT) + player.rollDice(20) + BAB >= firstEnemy.atrINT) {
                    let floatingDamage = player.rollDice(player.actions[2].abilityDamageDice) + player.attributeModifier(player.atrINT);
                    firstEnemy.atrHP -= floatingDamage;
                    firstEnemy.atrSPD -= floatingDamage * 3;
                    firstEncounter.createHitDeclaration(player, `-${floatingDamage} HP!`);
                } else {
                    firstEncounter.createHitDeclaration(player, "Miss !")
                };
            };
        break;
        case 'KeyS':
            if (player.atrSPD >= 100 && player.atrHP > 0) {
                firstEncounter.createDeclaration(player.actions[3].abilityName, player);
                player.atrSPD -= 100;
                if (player.attributeModifier(player.atrSTR) + player.rollDice(20) + BAB >= firstEnemy.atrSTR) {
                    let floatingDamage = player.rollDice(player.actions[3].abilityDamageDice) + player.attributeModifier(player.atrSTR);
                    firstEnemy.atrHP -= floatingDamage;
                    firstEnemy.atrSPD -= (floatingDamage * 3) * 2; // SLOW EFFECT
                    firstEncounter.createHitDeclaration(player, `-${floatingDamage} HP!`);
                } else {
                    firstEncounter.createHitDeclaration(player, "Miss !")
                };
            };
        break;
    }
});


