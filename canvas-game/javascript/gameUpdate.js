// updates all game data
function update() {
  // update difficulty
  if (!dead) {
    velocity += 0.002;
  }

  // update background
  imageX -= velocity;
  if (-imageX > canvasWidth) {
    imageX += canvasWidth;
  }

  //update score
  if (!dead) {
    score++;
  }

  // update character - y
  characterYVelocity -= 0.3;

  if (characterYVelocity > 6) {
    characterYVelocity = 6;
  }
  characterY -= characterYVelocity;
  if (characterY > characterMinY) {
    characterY = characterMinY;
  }
  if (characterY < characterMaxY) {
    characterY = characterMaxY;
  }
  if (characterY == characterMaxY || characterY == characterMinY) {
    characterYVelocity = 0;
  }

  // update character - x
  if (characterXVelocity > 5) {
    characterXVelocity = 5;
  }
  characterX += characterXVelocity;
  if (characterX > characterMinY) {
    characterX = characterMinY;
  }
  if (characterX < characterMaxY) {
    characterX = characterMaxY;
  }

  // update character - sprite
  if (characterY == characterMinY) {
    if (score % Math.round(5 - 0.2 * velocity) === 0) {
      characterSpriteCounter++;
      if (characterSpriteCounter > 10) {
        characterSpriteCounter = 1;
      }
      characterSprite.src = `../assets/character/character${characterSpriteCounter}.png`;
    }
  } else {
    if (characterYVelocity > 0 || characterY <= characterMaxY + characterHeight) {
      characterSprite.src = `../assets/character/character11.png`;
    } else {
      characterSprite.src = `../assets/character/character8.png`;
    }
  }

  // update obsticals
  obsticals.map((obstical, index) => {
    obstical[0] -= velocity;
    if (obstical[0] < -50) {
      // passed allready - remove from list and prepare another
      obsticals.splice(index, 1);
      setTimeout(() => {
        let obsticalHeight = (Math.random() * canvasHeight) / 2;
        if (obsticalHeight < minObsticalHeight) {
          obsticalHeight = minObsticalHeight;
        }
        obsticals.push([
          (Math.random() + 1) * canvasWidth,
          obsticalHeight,
          Math.round(Math.random()),
        ]);
      }, 5000 - 1000 * velocity);
    }
  });

  // add more obsticals
  if (score % 1500 == 0) {
    obsticals.push([
      (Math.random() + 1) * 2 * canvasWidth,
      (Math.random() * canvasHeight) / 1.5,
      Math.round(Math.random()),
    ]);
  }

  //update obsticals src for zap effect
  if (score % 10 > 5) {
    obsticalImg.src = "../assets/obstacles/zepper1.png";
  } else {
    obsticalImg.src = "../assets/obstacles/zepper2.png";
  }

  // update missiles
  missiles.map((missile, index) => {
    missile[0] -= velocity * 2;
    if (missile[0] < -missileWidth) {
      // passed allready - remove from list and prepare another
      missiles.splice(index, 1);
      setTimeout(() => {
        missiles.push([velocity * canvasWidth, Math.random() * canvasHeight]);
      }, 5000 - 1000 * velocity);
    } else if (missile[0] > canvasWidth + alertDistance) {
      // didnt showed up yet - track player
      if (missile[1] < characterY + characterHeight / 2) {
        missile[1]++;
      } else {
        missile[1]--;
      }
    }
  });

  // add more missiles
  if (score % 2000 == 0) {
    missiles.push([velocity * canvasWidth, Math.random() * canvasHeight]);
  }

  // update alert distance
  alertDistance += 0.002; // as velocity

  // detect collidition and update dead state by that
  let playerObject = [characterX, characterY, characterWidth, characterHeight];

  // missile detection
  missiles.forEach((missile) => {
    let missileObject = [missile[0], missile[1], missileWidth, missileHeight];
    if (IsTouching(playerObject, missileObject)) {
      if (!dead) {
        justDied = true;
      }
      dead = true;
      setTimeout(() => {
        gameOver = true;
      }, 3000);
    }
  });

  // obsticals detection
  obsticals.forEach((obstical) => {
    let obsticalObject = [
      obstical[0],
      obstical[2] ? 0 : canvasHeight - obstical[1],
      obsticalWidth,
      obstical[1],
    ];
    if (IsTouching(playerObject, obsticalObject)) {
      if (!dead) {
        justDied = true;
      }
      dead = true;
      setTimeout(() => {
        gameOver = true;
      }, 3000);
    }
  });

  // dead
  if (dead) {
    if (justDied) {
      characterSprite.src = "../assets/character/skeletonExplode.png";
      characterXVelocity += 0.1;
      characterYVelocity = 10;
      setTimeout(() => {
        justDied = false;
      }, 500);
    } else {
      // dead for more then a little time
      characterSprite.src = "../assets/character/skeleton1.png";

      // if hit ground
      if (characterY >= characterMinY - 20) {
        if (score % 3 == 0) {
          skeletonCounter++;
        }
        if (skeletonCounter >= 6) {
          skeletonCounter = 6;
        }
        characterSprite.src = `../assets/character/skeleton${skeletonCounter}.png`;
      }

      // slow character jump
      characterXVelocity -= 0.1;
      if (characterXVelocity < 0) {
        characterXVelocity = 0;
      }

      // clear all missiles
      missiles = [];
    }
    velocity -= 0.1;
    if (velocity < 0 || gameOver) {
      velocity = 0;
    }
  }
}
