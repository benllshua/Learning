// draws situation by game data
function draw() {
  // draw background
  context.globalCompositeOperation = "source-over";
  context.drawImage(backImg, imageX, 0, canvasWidth, canvasHeight);
  context.drawImage(backImg, imageX + canvasWidth, 0, canvasWidth, canvasHeight);

  // draw score
  context.font = "16px Heebo";
  context.fillText(`score:${score}`, textOffset, textOffset);

  // draw character
  if (skeletonCounter > 3) {
    context.drawImage(characterSprite, characterX, characterY + 20, bonesWidth, bonesHeight);
  } else {
    context.drawImage(characterSprite, characterX, characterY, characterWidth, characterHeight);
  }

  // draw obsticals
  obsticals.forEach((obstical) => {
    context.drawImage(
      obsticalImg,
      obstical[0],
      obstical[2] ? 0 : canvasHeight - obstical[1],
      obsticalWidth,
      obstical[1]
    );
  });

  // draw missiles
  missiles.forEach((missile) => {
    if (missile[0] > canvasWidth + alertDistance) {
      context.drawImage(
        comingMissileImg,
        canvasWidth - missileWidth,
        missile[1],
        missileHeight,
        missileHeight
      );
    } else if (missile[0] > canvasWidth) {
      context.drawImage(
        alertImg,
        canvasWidth - missileWidth,
        missile[1],
        missileHeight,
        missileHeight
      );
    } else {
      context.drawImage(missileImg, missile[0], missile[1], missileWidth, missileHeight);
    }
  });

  // draw pause overlay if paused
  if (paused && !gameOver) {
    context.fillStyle = "#000000aa";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "#ffffff";
    context.fillText("Paused! Press P to continue ", canvasWidth / 2 - 90, canvasHeight / 2);
  }

  // draw gameOver overlay if paused
  if (gameOver) {
    context.fillStyle = "#000000aa";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "#ffffff";
    context.fillText("GAME OVER PRESS ANY KEY TO RESTART", canvasWidth / 2 - 150, canvasHeight / 2);
    context.fillText("Score: " + score, canvasWidth / 2 - 50, canvasHeight / 2 + 50);
  }
}
