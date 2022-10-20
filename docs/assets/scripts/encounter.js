//* ENCOUNTER GOVERNOR STARTS HERE //

class BattleEncounter {
    constructor(encounterRow, encounterColumn, leftActor, enemyActor) {
        this.encounterRow = encounterRow;
        this.encounterColumn = encounterColumn;
/*         this.isPlayerTurn = false;
        this.isEnemyTurn = false; */
        this.leftActor;
        this.enemyActor;
        this.encounterStarted = false;

        const img1 = new Image ();
        img1.src = "icon-btn.png";

        this.image = img1;
    }

    setActors(playerActor, enemyActor){
        this.leftActor = playerActor;
        this.enemyActor = enemyActor;
    }

    startEncounter() {
        isPlayerTurn = true;
        isEnemyTurn = false;
    }

    endEncounter(player, enemy) {
        if (player.atrHP <= 0) {
            anonymousIntervalHandler = 1000000;
            player.atrHP = 0;
        }
        if (enemy.atrHP <= 0) {
            anonymousIntervalHandler = 1000000;
            enemy.atrHP = 0;
        }
    }

    passTurn(){
        if (isPlayerTurn && !isEnemyTurn) {
            isPlayerTurn = false;
            isEnemyTurn = true;
        } else if (isEnemyTurn && !isPlayerTurn) {
            isEnemyTurn = true;
            isEnemyTurn = false;
        }
    }

    createChatBox(){
        //
        mainCtx.fillStyle = "white";
        mainCtx.fillRect(0, 623, mainCanvas.width, 175);
        //
        mainCtx.fillStyle = "#1e3f5a";
        mainCtx.fillRect(0, 625, mainCanvas.width, 175);
    }

    clearChatBox(){
        mainCtx.clearRect(0, 625, mainCanvas.width, 175);
    }

/*     createAttackDeclaration(actionName){
        mainCtx.fillStyle = "#1e3f5a";
        mainCtx.fillRect(700, 625, 150, 40);
        //
        mainCtx.fillStyle = "white"
        mainCtx.font = "20px fantasy";
        mainCtx.fillText(`${actionName}+ !`, 700, 625);
        //
    }; */

    createDescripText(sentence1, sentence2, sentence3){
        mainCtx.fillStyle = "white";
        mainCtx.font = "24px cambria";
        if (sentence1.length !== 0) {
            mainCtx.fillText(sentence1, 50, 665)
        }
        if (!sentence2.length !== 0) {
            mainCtx.fillText(sentence2, 50, 705);
        }
        if (!sentence3.length !== 0) {
            mainCtx.fillText(sentence3, 50, 745);
        }
    };

    createAttackMenu(actor){
        console.log("You attempted to create an AttackMeu");
        //
        mainCtx.fillStyle = "white";
        mainCtx.fillRect(29, 689, 152, 42);
        mainCtx.fillRect(29, 739, 152, 42);
        mainCtx.fillRect(599, 689, 152, 42);
        mainCtx.fillRect(599, 739, 152, 42); 
        //
        mainCtx.fillStyle = "black";
        mainCtx.fillRect(30, 690, 150, 40);
        mainCtx.fillRect(30, 740, 150, 40);
        mainCtx.fillRect(600, 690, 150, 40);
        mainCtx.fillRect(600, 740, 150, 40);
        //
        mainCtx.font = "20px fantasy";
        mainCtx.fillStyle = "gold";
        mainCtx.fillText(`${actor.actions[0].abilityName}`, 42.5, 718);
        mainCtx.fillText(`${actor.actions[1].abilityName}`, 42.5, 768);
        mainCtx.fillText(`${actor.actions[2].abilityName}`, 610, 718);
        mainCtx.fillText(`Filler Action`, 610, 768);
        //
        mainCtx.fillStyle = "white";
        mainCtx.font = "18px cambria";
        mainCtx.fillText(`${actor.actions[0].abilityShortDescrip}`, 190, 715);
        mainCtx.fillText(`${actor.actions[1].abilityShortDescrip}`, 190, 765);
        mainCtx.fillText(`${actor.actions[2].abilityShortDescrip}`, 760, 715);
        mainCtx.fillText(`Lorem ipsum, filler text.`, 760, 765);
        //
        // Keyboard Q
        mainCtx.drawImage(this.image, 4, 688, 38, 38);
        mainCtx.fillStyle = "black";
        mainCtx.font = "25px arial";
        mainCtx.fillText("Q", 13, 713);

        //Keyboard A
        mainCtx.drawImage(this.image, 4, 738, 38, 38);
        mainCtx.fillText("A", 14.5, 765);

        //Keyboard S
        mainCtx.drawImage(this.image, 570, 738, 38, 38);
        mainCtx.fillText("S", 581, 763);

        //Keyboard W
        mainCtx.font = "24px arial";
        mainCtx.drawImage(this.image, 570, 688, 38, 38);
        mainCtx.fillText("W", 577.2, 714);




    }

    drawBackground() {
        let alphaBackground = new Image ();
        alphaBackground.src = 'docs/assets/scripts/dd_ruins_background.jpg'
        
        mainCtx.drawImage(alphaBackground, 0, 0);
        mainCanvas.style.backgroundSize = "1200px 625px";
        mainCanvas.style.backgroundRepeat = "no-repeat";
        mainCanvas.style.backgroundImage = "url(docs/assets/images/dd_ruins_background.jpg)";
    }

    triggerAttack(attacker, defender, actionIndex){
        return attacker.actions[actionIndex].execute(defender);
    }

    resultAttack(attacker, defender, damage){
        if (attacker.atrSPD >= 60) {
            this.clearChatBox();
            this.createChatBox();
            attacker.atrSPD -= 60;
            console.log(damage);
            if (damage > 0) {
                defender.atrHP -= damage;
            }
            if (damage >= 1){
                if (attacker.atrHP > damage) {
                    defender.atrHP -= damage;
                    this.createDescripText(`${attacker.actorName} attacked ${defender.actorName} with success!`, `${defender.actorName} suffered ${damage} points of damage!`, `${defender.actorName} has ${defender.atrHP} HP left!`);
                } else if (defender.atrHP <= damage) {
                    defender.atrHP -= damage;
                    this.createDescripText(`${attacker.actorName} has defeated ${defender.actorName}!`, "", ""); 
                };
            } else if (damage <= 0) {
                this.createDescripText(`${attacker.actorName} has missed their attack on ${defender.actorName}!`, "", "");
            }
        } else {
            console.log("No attacking out of your turn!");
        }
    }

    fetchEnemy(array){
        let max = array.length - 1;
        let min = 1;
        let rng = Math.floor(Math.random() * (max - min + 1) + min);
        if (array[rng] === 0) { // GREEN SLIME
            return new BaseSlime;
        } else if (array[rng] === 1) {
/*             fetchedEnemy = new Skeleton; */
        } else if (array[rng] === 2) {
/*             fetchedEnemy = new Orc; */
        }
    }
}