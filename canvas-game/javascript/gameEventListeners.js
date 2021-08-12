// event listeners
document.addEventListener("keydown", (e) => {
  if (!paused && !dead) {
    if (e.key == " ") {
      if (characterYVelocity < 0) {
        characterYVelocity = 0;
      }
      characterYVelocity += 1;
    }
  }
  if (e.key.toLowerCase() == "p" || e.key == "פ" || e.which == 27) {
    // 27 - Esc
    paused = !paused;
  }
});
document.addEventListener("keypress", (e) => {
  if (!paused && !dead) {
    if (e.key == " ") {
      characterYVelocity += 5;
      characterY -= 15;
    }
  }

  if (gameOver) {
    RestartGame();
  }
});
