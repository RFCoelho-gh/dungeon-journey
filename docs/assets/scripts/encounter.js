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
        if (this.isPlayerTurn && !this.isEnemyTurn) {
            this.isPlayerTurn = false;
            this.isEnemyTurn = true;
        } else if (this.isEnemyTurn && !this.isPlayerTurn) {
            this.isEnemyTurn = true;
            this.isEnemyTurn = false;
        }
    }

    executePlayerChoice(){
        if (this.isPlayerTurn){
            
        }
    }
}