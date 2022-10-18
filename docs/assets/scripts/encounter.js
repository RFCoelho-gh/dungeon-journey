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

    kickoffEncounter(enemyVar){
        this.startEncounter();
        // DRAWING
        /* context.clearRect(0, 0, canvas.width, canvas.height); */
        mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
/*         player.drawActor (playerVar.color, playerVar.actorName); */
        enemyVar.drawActor(enemyVar.color, enemyVar.actorName);
    }

    executePlayerChoice(){
        if (this.isPlayerTurn){
            
        }
    }
}