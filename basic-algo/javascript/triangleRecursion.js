// selectors and html elements + event listeners for sliders
const sizeSlider = document.getElementById("triangleSizeInput");
const heightSlider = document.getElementById("heightInput");
let canvas = document.getElementById("trianglesCanvas");
let context = canvas.getContext("2d");

let size = 100;
let floors = 0;
let startX = 200;

drawTriangle(0, canvas.height, size);

sizeSlider.addEventListener("change", (e) => {
  size = parseInt(sizeSlider.value);
  startX = (canvas.width - size) / 2;
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (floors === 0) {
    drawTriangle(0, canvas.height, size);
  } else {
    drawPyramid(0, canvas.height, size, floors - 1);
  }
});

heightSlider.addEventListener("change", (e) => {
  floors = parseInt(heightSlider.value);
  startX = (canvas.width - size) / 2;
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (floors === 0) {
    drawTriangle(0, canvas.height, size);
  } else {
    drawPyramid(0, canvas.height, size, floors - 1);
  }
});

// draw triangle void function
function drawTriangle(x, y, size) {
  let height = size * Math.cos(Math.PI / 6);

  context.beginPath();
  context.moveTo(startX + x, y);
  context.lineTo(startX + x + size, y);
  context.lineTo(startX + x + 0.5 * size, y - height);
  context.closePath();

  // the fill color
  context.fillStyle = "#FFCC00";
  context.fill();
}

/**
 * @
 * @param {number} posX
 * @param {number} posY
 * @param {number} size
 * @param {number} level
 */
function drawPyramid(posX, posY, size, level) {
  const innerSize = size / 2; // side length of inner triangles is half the side length of the outer triangle
  const innerPositions = [
    [posX, posY],
    [posX + innerSize, posY],
    [posX + innerSize * 0.5, posY - Math.sin(Math.PI / 3) * innerSize],
  ]; // these positions are the same as what was used in the createTriangle function
  if (level == 0) {
    innerPositions.forEach((trianglePosition) => {
      drawTriangle(trianglePosition[0], trianglePosition[1], innerSize);
    });
  } else {
    innerPositions.forEach((trianglePosition) => {
      drawPyramid(trianglePosition[0], trianglePosition[1], innerSize, level - 1);
    });
  }
}
