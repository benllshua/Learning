//main game interval

// check that browser has canvas
if (context) {
  setInterval(() => {
    // update if not paused or over
    if (!paused && !gameOver) {
      update();
    }
    // drawing the game ( drawing without updating = freeze all objects )
    draw();
  }, Math.round(1000 / fps));
} else {
  alert("your browser does not supprt canvas");
}
