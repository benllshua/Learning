// bool function that return true if objects are touching
// object : [x, y, width, height]
function IsTouching(object1, object2) {
  ReduceObjectSize(object1);
  ReduceObjectSize(object2);
  return (
    object1[0] < object2[0] + object2[2] &&
    object1[0] + object1[2] > object2[0] &&
    object1[1] < object2[1] + object2[3] &&
    object1[1] + object1[3] > object2[1]
  );
}

// void function that reduce box size of object
// object : [x, y, width, height]
function ReduceObjectSize(object) {
  object[0] += detactionReductionSize;
  object[1] += detactionReductionSize;
  object[2] -= detactionReductionSize;
  object[3] -= detactionReductionSize;
}

// void function that sets all stats to basic stats
function RestartGame() {
  paused = false;
  dead = false;
  gameOver = false;
  justDied = false;
  score = 0;
  velocity = 3;
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  textOffset = 20;
  characterX = 50;
  characterY = 290;
  characterYVelocity = 0;
  characterXVelocity = 0;
  characterSpriteCounter = 0;
  skeletonCounter = 0;
  imageX = 0;
  characterSprite.src = "../assets/character/character1.png";
  missileImg.src = "../assets/obstacles/rocket.png";
  alertImg.src = "../assets/obstacles/coming.png";
  comingMissileImg.src = "../assets/obstacles/waitForIt.png";
  obsticalImg.src = "../assets/obstacles/zepper1.png";
  missiles = [[600, 70]];
  obsticals = [[canvasWidth, 100, 1]];
}
