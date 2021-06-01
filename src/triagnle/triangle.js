var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");

// the triangle
context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();

// the outline
context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();

// the fill color
context.fillStyle = "#FFCC00";
context.fill();
