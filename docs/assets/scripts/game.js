class Game {

    /// INCLUDE FUTURE CONDITIONALS TO HIDE VALUES BASED ON PLAYER OWN VLAUES

    printEnemyStats (actorEntry) {
        console.log(`You printed ${actorEntry.actorName}`)
        lateralCtx.font = '15.5px georgia';
        lateralCtx.fillStyle = 'black';
        lateralCtx.fillText(`Name: ${actorEntry.actorName}`, 8, 750);
        lateralCtx.fillText(`Class: ${actorEntry.className}`, 8, 725);
        lateralCtx.fillText(`Hit Points: ${actorEntry.atrHP}`, 8, 700);

        // COLOR CONDITIONAL FOR STRENGTH
        if(actorEntry.attributeModifier(actorEntry.atrSTR) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Strength: ${actorEntry.atrSTR} (+${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 675);
        } else if (actorEntry.attributeModifier(actorEntry.atrSTR < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Strength: ${actorEntry.atrSTR} (${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 675);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Strength: ${actorEntry.atrSTR} (-${actorEntry.attributeModifier(actorEntry.atrSTR)})`, 8, 675);
        }

        // COLOR CONDITIONAL FOR DEXTERITIY
        if(actorEntry.attributeModifier(actorEntry.atrDEX) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Dexterity: ${actorEntry.atrDEX} (+${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 650);
        } else if (actorEntry.attributeModifier(actorEntry.atrDEX < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Dexterity: ${actorEntry.atrDEX} (${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 650);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Dexterity: ${actorEntry.atrDEX} (-${actorEntry.attributeModifier(actorEntry.atrDEX)})`, 8, 650);
        }

        // COLOR CONDITIONAL FOR INTELLIGENCE
        if(actorEntry.attributeModifier(actorEntry.atrINT) > 0) {
            lateralCtx.fillStyle = 'green';
            lateralCtx.fillText(`Intelligence: ${actorEntry.atrINT} (+${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 625);
        } else if (actorEntry.attributeModifier(actorEntry.atrINT < 0)) {
            lateralCtx.fillStyle = 'red';
            lateralCtx.fillText(`Intelligence: ${actorEntry.atrINT} (${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 625);
        } else {
            lateralCtx.fillStyle = 'yellow';
            lateralCtx.fillText(`Intelligence: ${actorEntry.atrINT} (-${actorEntry.attributeModifier(actorEntry.atrINT)})`, 8, 625);
        }
    };
}