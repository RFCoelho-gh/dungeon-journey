//* ENCOUNTER GOVERNOR STARTS HERE //

class BattleEncounter {
    constructor(encounterRow, encounterColumn, playerActor, enemyActor) {
        this.encounterRow = encounterRow;
        this.encounterColumn = encounterColumn;
        this.isPlayerTurn = false;
        this.isEnemyTurn = false;
        this.leftActor = playerActor;
        this.enemyActor = enemyActor;
    }

    startEncounter() {
        this.isPlayerTurn = true;
        this.isEnemyTurn = false;
    }

    passTurn(){
        if (this.isPlayerTurn === true && this.isEnemyTurn === false) {
            this.isPlayerTurn = false;
            this.isEnemyTurn = true;
        } else if (this.isEnemyTurn === true && this.isPlayerTurn === false) {
            this.isEnemyTurn = true;
            this.isEnemyTurn = false;
        }
    }

    executePlayerChoice(){
        
    }
}