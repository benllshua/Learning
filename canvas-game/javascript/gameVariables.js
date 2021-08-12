// variables

// Canvas & context
let canvas = document.querySelector("#gameCanvas");
let context = canvas.getContext("2d");

// overall game stats
const fps = 60;
let paused = false;
let dead = false;
let gameOver = false;
let justDied = false;
let velocity = 3;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

// score
let score = 0;
let textOffset = 20;

// background
let imageX = 0;
let backImg = new Image();
backImg.src = "../assets/images/gameBackground.jpg";

// character
const characterMinY = 470;
const characterMaxY = 0;
const characterHeight = 100;
const characterWidth = 80;
const bonesHeight = 72;
const bonesWidth = 120;

let characterX = 60; // 60 = startX
let characterY = 470; // 470 = startY
let characterYVelocity = 0;
let characterXVelocity = 0;
let skeletonCounter = 1;
let characterSpriteCounter = 0; // switching between images by counter
let characterSprite = new Image();
characterSprite.src = "../assets/character/character1.png";

// missile
const missileHeight = 75;
const missileWidth = 100;
let alertDistance = 500;

let missileImg = new Image();
missileImg.src = "../assets/obstacles/rocket.png";
let alertImg = new Image();
alertImg.src = "../assets/obstacles/coming.png";
let comingMissileImg = new Image();
comingMissileImg.src = "../assets/obstacles/waitForIt.png";
let missiles = [[600, 70]]; // missile[0] - missileX, missile[1] - missileY ([600, 70] = startMissile)

// zeppers
const obsticalWidth = 75;
const minObsticalHeight = 150;

let obsticalImg = new Image();
obsticalImg.src = "../assets/obstacles/zepper1.png";
let obsticals = [[canvasWidth, 150, 1]];
// obstical[0] - obsticalX, obstical[1] - missileHeight, obstical[2] - top or bottom
// ([600, 70] = startMissile)

const detactionReductionSize = 25; // dont detect from all view box - reduce padding
