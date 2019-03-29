console.log(version);

var myPath;
var penColor = 'black';
var penWidth = '1';
myPath = new Path();

function onMouseDown(event){
    myPath = new Path();
    console.log("pen color: "+penColor+"\n"+"pen width: "+penWidth);
    myPath.strokeColor = penColor;
    myPath.strokeWidth = penWidth;
}

function onMouseDrag(event){
    myPath.add(event.point);
}

function onMouseUp(event){
    myPath = new Path();
}

function setColorHex(color){
    console.log("Color set to HEX: "+color);
    penColor = color;
}

function setStrokeWidth(width){
    console.log("Stroke Width set to: "+width);
    penWidth = width;
}

function clearBoard(){
    project.clear();
}

globals.setColorHex = setColorHex;
globals.setStrokeWidth = setStrokeWidth;
globals.clearBoard = clearBoard;


