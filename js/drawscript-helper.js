window.globals = {
    setColorHex: function(){},
    setStrokeWidth: function(){},
    clearBoard: function(){}
};

function updateColor(jscolor){
    console.log("New pen color: "+jscolor);
    window.globals.setColorHex("#"+jscolor);
}

function updateWidth(width){
    console.log("New pen width: "+width);
    window.globals.setStrokeWidth(width);
}

function clearBoard(){
    console.log("Clearing board");
    window.globals.clearBoard();
}