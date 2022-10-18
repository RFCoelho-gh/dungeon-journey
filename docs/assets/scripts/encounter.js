//* ENCOUNTER GOVERNOR STARTS HERE //

class BattleEncounter {
    constructor(encounterRow, encounterColumn, leftActor, enemyActor) {
        this.encounterRow = encounterRow;
        this.encounterColumn = encounterColumn;
        this.isPlayerTurn = false;
        this.isEnemyTurn = false;
        this.leftActor;
        this.enemyActor;
    }

    setActors(playerActor, enemyActor){
        this.leftActor = playerActor;
        this.enemyActor = enemyActor;
    }

    startEncounter() {
        this.isPlayerTurn = true;
        this.isEnemyTurn = false;
    }

    passTurn(){
        if (this.isPlayerTurn && !this.isEnemyTurn) {
            this.isPlayerTurn = false;
            this.isEnemyTurn = true;
        } else if (this.isEnemyTurn && !this.isPlayerTurn) {
            this.isEnemyTurn = true;
            this.isEnemyTurn = false;
        }
    }

    createChatBox(){
        console.log("You attempted to create a Chat Box!")
        mainCtx.fillStyle = "#1e3f5a";
        mainCtx.fillRect(0, 625, mainCanvas.width, 175);
    }

    createDescripText(sentence1, sentence2, sentence3){
        mainCtx.fillStyle = "white";
        mainCtx.font = "24px cambria";
        if (sentence1.length !== 0) {
            mainCtx.fillText(sentence1, 50, 675)
        }
        if (!sentence2.length !== 0) {
            mainCtx.fillText(sentence2, 50, 715);
        }
        if (!sentence3.length !== 0) {
            mainCtx.fillText(sentence3, 50, 755);
        }
    };

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