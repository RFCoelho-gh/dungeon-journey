
let gameStarted = 0;

let isPlayerTurn = false;
let isEnemyTurn = false;

const mainCanvas = document.getElementById("mainCanvas");
const mainCtx = mainCanvas.getContext("2d");

const rightCanvas = document.getElementById("rightCanvas");
const rightCtx = rightCanvas.getContext("2d");

const leftCanvas = document.getElementById("leftCanvas");
const leftCtx = leftCanvas.getContext("2d");

let alphaTrigger = 0;

const arrayOfEnemies = ["GreenSlime", "Skeleton", "Orc"]

let anonymousIntervalHandler = 1;