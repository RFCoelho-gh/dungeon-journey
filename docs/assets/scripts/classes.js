//* base Actor

const baseHP = 12+10+(0);
const baseSTR = 10;
const baseDEX = 10;
const baseINT = 10;
const baseSPD = 0;

class Actor {
    constructor(){
        this.actorName = "";
        this.atrMaxHP = baseHP;
        this.atrHP = baseHP;
        this.atrSTR = baseSTR;
        this.atrDEX = baseDEX;
        this.atrINT = baseINT;
        this.atrSPD = baseSPD;
        this.color = "black";
        this.friendly = false;
        this.width = 50;
        this.height = 50;
        this.animState = "idle"; // or attack, or defend

        const img1 = new Image (); // IDLE
        img1.src = "dd_warrior_rightfacing.png";


        this.image = img1;
    }

    setName(newName) {
        this.actorName = newName;
    }

    receiveDamage(damage) {
        this.atrHP = this.atrHP - damage;
    }

    rollDice(diceSize) {
        if (typeof diceSize !== "number" ) {
            throw new Error ('method "rollDice" received a non-number as an Argument')
        }
        return (Math.floor(Math.random() * (diceSize - 1 + 1) + 1 ))
    }

    attributeModifier(atr){
        return Math.floor((atr / 2) - 5);
    }

    drawActor(color, image, name){
        mainCtx.fillStyle = "white";

        if (this.friendly === false) { // IF ENEMY

            mainCtx.font = '20px fantasy';
            mainCtx.fillText(`${name}`, 925, 185);

            mainCtx.fillStyle = image;
/*             mainCtx.fillRect(950, 400, this.width, this.height); */

            mainCtx.drawImage(this.image, 780, 300, this.width, this.height);

        } else { // IF PLAYER

            mainCtx.font = '20px fantasy';
            mainCtx.fillText(`${name}`, 205, 185);

            mainCtx.drawImage(this.image, 175, 285, this.width, this.height);

        /*  mainCtx.fillStyle = image;
            mainCtx.fillRect(200, 400, this.width, this.height); */
        }
    }
}

//* Player Actor Ancestries
// Human

class Human extends Actor {
    constructor(actorName, atrMaxHP, atrHP, atrSTR, atrDEX, atrINT, atrSPD, friendly, width, height) {
        super(atrMaxHP, atrHP, atrSTR, atrDEX, atrINT, atrSPD, friendly, width, height)
        this.actorName = actorName;
        this.humanAtrBonus = {
            humanBonusHP: 2,
            humanBonusSTR: 1,
            humanBonusDEX: 1,
            humanBonusINT: 1,
            humanBonusSPD: 0,
        };
        this.atrMaxHP = atrHP + this.humanAtrBonus.humanBonusHP;
        this.atrHP = atrHP + this.humanAtrBonus.humanBonusHP;
        this.atrSTR = atrSTR + this.humanAtrBonus.humanBonusSTR;
        this.atrDEX = atrDEX + this.humanAtrBonus.humanBonusDEX;
        this.atrINT = atrINT + this.humanAtrBonus.humanBonusINT;
        this.atrSPD = atrINT + this.humanAtrBonus.humanBonusSPD;
        this.friendly = true;
    }
}

//* Player Actor Classes
//? Human Variants


// Human Warrior
class HumanWarrior extends Human {
    constructor(actorName, atrMaxHP, atrHP, atrSTR, atrDEX, atrINT, atrSPD, friendly, width, height) {
        super(atrMaxHP, atrHP, atrSTR, atrDEX, atrINT, atrSPD, friendly, width, height)
        this.warriorAtrBonus = {
            warriorBonusHP: 6,
            warriorBonusSTR: 4+2,
            warriorBonusDEX: 2,
            warriorBonusINT: -2,
            warriorBonusSPD: 0,
        };

        this.actorName = actorName;
        this.className = "Human Warrior";
        this.atrMaxHP = baseHP + this.humanAtrBonus.humanBonusHP + this.warriorAtrBonus.warriorBonusHP; 
        this.atrHP = baseHP + this.humanAtrBonus.humanBonusHP + this.warriorAtrBonus.warriorBonusHP;
        this.atrSTR = baseSTR + this.humanAtrBonus.humanBonusSTR + this.warriorAtrBonus.warriorBonusSTR;
        this.atrDEX = baseDEX + this.humanAtrBonus.humanBonusDEX + this.warriorAtrBonus.warriorBonusDEX;
        this.atrINT = baseINT + this.humanAtrBonus.humanBonusINT + this.warriorAtrBonus.warriorBonusINT;
        this.atrSPD = baseSPD + this.humanAtrBonus.humanBonusSPD + this.warriorAtrBonus.warriorBonusSPD;

        this.width = 589/2;
        this.height = 580/2;

        this.actions = [ // ARRAY OF WARRIOR ABILITIES
            { // INDEX 0
                abilityName: "Heavy Slash",
                abilityAttribute: "Strength",
                abilityDamageDice: 8,
                abilityDamageType: "slashing",
                abilityShortDescrip: `d20+3 ⚔ DEX ~ ❤ d8+3 ~ ↻ 100`,
                abilityDescription: `${actorName} attacks the enemy, with a modifier of D20+${this.attributeModifier(this.atrSTR)}, causing D${(this.abilityDamageDice)}+${this.attributeModifier(this.atrSTR)} points of ${this.abilityDamageType} damage.`,
                execute(target){ // RETURNS DAMAGE VALUE
                    if (this.atrSPD === 100) {
                        if (this.attributeModifier(this.atrSTR) + this.rollDice(20) >= target.atrSTR) {
                            return this.rollDice(this.actions[0].abilityDamageDice) + this.attributeModifier(this.atrSTR);
                        } else {
                            return 0; //? Use 0 as Boolean for MISS
                        }
                    } else {
                        console.log("No speed!")
                    }
                },
            },
            {
                abilityName: "Quick Jab",
                abilityAttribute: "Dexterity",
                abilityDamageDice: 6,
                abilityDamageType: "piercing",
                abilityShortDescrip: `d20+1 ⚔ DEX ~ ❤ d6+1 ~ ↻ 80`,
                abilityDescription: `${this.actorName} attacks the enemy, with a modifier of D20+${this.attributeModifier(this.atrDEX)}, causing D${this.abilityDamageDice}+${this.attributeModifier(this.atrDEX)} points of ${this.abilityDamageType} damage.`,
                execute(target) { // RETURNS DAMAGE VALUE
                    if (this.attributeModifier(this.atrDEX) + this.rollDice(20) >= target.atrDEX) {
                        return this.rollDice(this.actions[1].abilityDamageDice) + this.attributeModifier(this.atrDEX);
                    } else {
                        return 0;
                    }
                },
            },
            {
                abilityName: "Feinting Riposte",
                abilityAttribute: "Intelligence",
                abilityDamageDice: 4,
                abilityDamageType: "slashing",
                abilityShortDescrip: `d20-1 ⚔ INT ~ ❤ d4-1 ~ ↻ 60`,
                abilityDescription: `${this.actorName} attacks the enemy, with a modifier of D20+${this.attributeModifier(this.atrINT)}, causing D${this.abilityDamageDice}+${this.attributeModifier(this.atrINT)} points of ${this.abilityDamageType} damage.`,
                execute(target) { // RETURNS DAMAGE VALUE
                    if (this.attributeModifier(this.atrINT) + this.rollDice(20) >= target.atrINT) {
                        return this.rollDice(this.actions[2].abilityDamageDice) + this.attributeModifier(this.atrINT);
                    } else {
                        return 0;
                    }
                },
            },
            {
                abilityName: "Pommel Stun",
                abilityAttribute: "Strength",
                abilityDamageDice: 3,
                abilityDamageType: "bludgeoning",
                abilityShortDescrip: `d20+3 ⚔ STR ~ ❤ d4+3 ~ ↻ 100 ~ 🌀 SLOW`,
                abilityDescription: `${this.actorName} attacks the enemy, with a modifier of D20+${this.attributeModifier(this.atrINT)}, causing D${this.abilityDamageDice}+${this.attributeModifier(this.atrINT)} points of ${this.abilityDamageType} damage.`,
                execute(target) { // RETURNS DAMAGE VALUE
                    if (this.attributeModifier(this.atrINT) + this.rollDice(20) >= target.atrINT) {
                        return this.rollDice(this.actions[2].abilityDamageDice) + this.attributeModifier(this.atrINT);
                    } else {
                        return 0;
                    }
                },
            },
        ];

    }
}

//* Enemy Actor Ancestries
// base Slime (Green Slime aka Ooze)

class BaseSlime extends Actor {
    constructor(atrMaxHP, atrHP, atrSTR, atrDEX, atrINT, atrSPD, color, friendly, width, height) {
        super(atrMaxHP, atrHP, atrSTR, atrDEX, atrINT, atrSPD, color, friendly, width, height)
        this.actorName = "Green Slime";
        this.className = "Common Ooze";
        this.slimeAtrBonus = {
            slimeBonusHP: -7+2,
            slimeBonusSTR: -2+2+4,
            slimeBonusDEX: 2+2,
            slimeBonusINT: -5+2,
            slimeBonusSPD: 0,
        };
        this.atrMaxHP = baseHP + this.slimeAtrBonus.slimeBonusHP;
        this.atrHP = baseHP + this.slimeAtrBonus.slimeBonusHP;
        this.atrSTR = baseSTR + this.slimeAtrBonus.slimeBonusSTR;
        this.atrDEX = baseDEX + this.slimeAtrBonus.slimeBonusDEX;
        this.atrINT = baseINT + this.slimeAtrBonus.slimeBonusINT;
        this.atrSPD = baseSPD + this.slimeAtrBonus.slimeBonusSPD;
        this.color = "green";
        this.backgroundX = 0;
        this.backgroundY = 0;
        this.width = 340/2;
        this.height = 554/2;

        const img1 = new Image ();
        img1.src = "dd_bone_goo.png";

        this.image = img1;

        this.actions = [
            {
                abilityName: "Slimy Slam",
                abilityAttribute: "Strength",
                abilityDamageDice: 6,
                abilityDamageType: "acid",
                descriptionSlimySlam: `${this.actorName} attacks their enemy, with a modifier of D20+${this.attributeModifier(this.atrSTR)}, causing D${(this.abilityDamageDice)}+${this.attributeModifier(this.atrSTR)} points of ${this.abilityDamageType} damage.`,
                execute(target){ // RETURNS DAMAGE VALUE
                    if (this.attributeModifier(this.atrSTR) + this.rollDice(20) >= target.atrSTR) {
                        return this.rollDice(this.actions[0].abilityDamageDice) + this.attributeModifier(this.atrSTR);
                    } else {
                        return 0; //? Use 0 as Boolean for MISS
                    }
                },
            },
            {
                abilityName: "Acid Splash",
                abilityAttribute: "Dexterity",
                abilityDamageDice: 4,
                abilityDamageType: "acid",
                descriptionAcidSplash: `${this.actorName} attacks their enemy, with a modifier of D20+${this.attributeModifier(this.atrDEX)}, causing D${(this.abilityDamageDice)}+${this.attributeModifier(this.atrDEX)} points of ${this.abilityDamageType} damage.`,
                execute(target){ // RETURNS DAMAGE VALUE
                    if (this.attributeModifier(this.atrDEX) + this.rollDice(20) >= target.atrDEX) {
                        return this.rollDice(this.actions[1].abilityDamageDice) + this.attributeModifier(this.atrDEX);
                    } else {
                        return 0; //? Use 0 as Boolean for MISS
                    }
                },
            },
            {
                abilityName: "Plasmic Devouring",
                abilityAttribute: "Intelligence",
                abilityDamageDice: 4,
                abilityDamageType: "acid",
                descriptionAcidSplash: `${this.actorName} attacks their enemy, with a modifier of D20+${this.attributeModifier(this.atrDEX)}, causing D${(this.abilityDamageDice)}+${this.attributeModifier(this.atrDEX)} points of ${this.abilityDamageType} damage.`,
                execute(target){ // RETURNS DAMAGE VALUE
                    if (this.attributeModifier(this.atrDEX) + this.rollDice(20) >= target.atrDEX) {
                        return this.rollDice(this.actions[1].abilityDamageDice) + this.attributeModifier(this.atrDEX);
                    } else {
                        return 0; //? Use 0 as Boolean for MISS
                    }
                },
            },
        ]
    }

    acidSplash(target) {
        if (this.attributeModifier(this.atrDEX) + this.rollDice(20) >= target.atrDEX) {
            return this.rollDice(3) + this.attributeModifier(this.atrSTR);
        } else {
            return 0; //? Use 0 as Boolean for MISS
        }
    }
}