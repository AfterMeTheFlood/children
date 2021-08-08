var canvas = document.getElementById("beeCanvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
ctx.strokeStyle = "Black";
ctx.fillStyle = "Gold";

var x = 150;
var y = 150;
setInterval(function () {
  ctx.clearRect(0, 0, 300, 300);
  ctx.strokeRect(0, 0, 300, 300);
  drawBee(x, y);
  x = updateCoordinate(x);
  y = updateCoordinate(y);
}, 30);

function drawCircle(x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

function drawBee(x, y) {
  // draw the bee's body with black
  drawCircle(x, y, 8, false);
  // Fill the cicle with gold color
  drawCircle(x, y, 8, true);
  // draw two eyes
  drawCircle(x - 2, y - 1, 2, false);
  drawCircle(x + 2, y - 1, 2, false);
  // draw two wings
  drawCircle(x - 5, y - 11, 5, false);
  drawCircle(x + 5, y - 11, 5, false);
}

function updateCoordinate(coordinate) {
  console.log(Math.random());
  var offset = Math.random() * 10 - 5;
  coordinate += offset;
  if (coordinate > 300) {
    coordinate = 300;
  }
  if (coordinate < 0) {
    coordinate = 0;
  }
  return coordinate;
}
