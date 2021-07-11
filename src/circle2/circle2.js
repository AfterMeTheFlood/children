// get the canvas
var c = document.getElementById("myCanvas");
// returns a drawing context on the canvas
var ctx = c.getContext("2d");
// call this method when you want to create a new path.

drawCircle(60, "red");
drawCircle(50, "blue");
drawCircle(40, "orange");
drawCircle(30, "yellow");
drawCircle(20, "green");
drawCircle(10, "purple");

function drawCircle(radius, strokeStyle) {
  ctx.beginPath();
  /*
    Adds a circular arc to the current sub-path
    x: The horizontal coordinate of the arc's center.
    y: The vertical coordinate of the arc's center.
    radius: The arc's radius. Must be positive.
    startAngle: The angle at which the arc starts in radians, measured from the positive x-axis.
    endAngle: The angle at which the arc ends in radians, measured from the positive x-axis.
    counterclockwise: Optional An optional Boolean. If true, draws the arc counter-clockwise between the start and end angles. The default is false (clockwise).
    */
  ctx.arc(100, 75, radius, 0, 2 * Math.PI, false);
  ctx.lineWidth = 5;
  // color
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
}
