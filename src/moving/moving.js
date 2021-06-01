// rectangle start coords x and y
var rcx = [];
var rcy = [];

// delta to move x, y
var dx = [];
var dy = [];

// rectangle size (if you want it variable)
var size = [];

//counter for created rectangles
var i = 0;

// init canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// create and collect rectangles parameters on btn push
// with unique coords, deltas to move, and sizes for each rectangle.

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  //count every time you push the btn and create rect
  i = i + 1;

  //generate rect params x,y, delta x, delta y, size
  rcx[i] = 20;
  rcy[i] = 20;
  dx[i] = 1;
  dy[i] = 0;
  size[i] = 30;
});

// it is optional, but i decide made function for rectangle declaration. It will looks more compact when rendering.

function rect(x, y, size) {
  ctx.fillRect(x, y, size, size / 1.5);
  ctx.fillStyle = "red";
}

// finally all together into function draw()

function draw() {
  setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var j = 1; j < rcx.length; j++) {
      // read arrays
      // render rectangle with params from arrays
      rect(rcx[j], rcy[j], size[j]);

      // add delta to move (x,y) and rewrite new coords to arrays
      rcx[j] = rcx[j] + dx[j];
      rcy[j] = rcy[j] + dy[j];
    }
  }, 100);
}

//rendering animation
draw();
