var LINE = 1;
var RECTANGLE = 2;

var currentDrawingMode = LINE;

var canvas = document.getElementById("drawingCanvas");
var drawingContext = canvas.getContext("2d");

var canvas2 = document.getElementById("a");
var drawingContext2 = canvas2.getContext("2d");
canvas.addEventListener("mousedown", MouseDown);
canvas.addEventListener("mouseup", MouseUp);
canvas.addEventListener("mousemove", MouseMove);
canvas2.addEventListener("mousemove", MouseMove);
var myclickon = 0;

var startPoint;

function setDrawingMode(newDrawingMode)
{
  currentDrawingMode = newDrawingMode;
}

function getMousePos(canvas, evt)
{
  var rect = canvas.getBoundingClientRect();

  return{
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}

function MouseDown(event)
{
  myclickon = 1;
  startPoint = getMousePos(canvas, event);
}

function clearCanvas()
{
  drawingContext.clearRect(0,0, canvas.width, canvas.height);
}

function MouseUp(event)
{
  var realMousePos = getMousePos(canvas, event);
  myclickon = 0;
  if (currentDrawingMode == LINE)
  {
    drawingContext.beginPath();
    drawingContext.moveTo(startPoint.x,startPoint.y);
    drawingContext.lineTo(realMousePos.x, realMousePos.y);
    drawingContext.stroke();
  }
  else if (currentDrawingMode == RECTANGLE)
  {
    drawingContext.beginPath();
    drawingContext.rect(startPoint.x,
                    startPoint.y,
                    realMousePos.x - startPoint.x,
                    realMousePos.y - startPoint.y);
    drawingContext.fill();
  }
}

function MouseMove(event)
{

  var realMousePos = getMousePos(canvas, event);
  drawingContext2.clearRect(0, 0, canvas.width, canvas.height);
  if (myclickon)
  {
    drawingContext2.beginPath();
    drawingContext2.moveTo(startPoint.x,startPoint.y);
    drawingContext2.lineTo(realMousePos.x, realMousePos.y);
    drawingContext2.stroke();
  }
}
