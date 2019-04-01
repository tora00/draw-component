import React from 'react';

window.globals = {
    setColorHex: function(){},
    setStrokeWidth: function(){},
    clearBoard: function(){}
};

class Draw extends React.Component{

    constructor(props){
        super(props);
    }

    updateColor(jscolor, e){
        console.log("New pen color: "+jscolor);
        window.globals.setColorHex("#"+jscolor);
    }

    updateWidth(width){
        console.log("New pen width: "+width);
        window.globals.setStrokeWidth(width);
    }

    clearBoard(e){
        console.log("Clearing board");
        window.globals.clearBoard();
    }

    render(){
        return(
            <canvas id="draw-pad" resize style="border:1px solid #000000;"></canvas>
            <input
                class="jscolor"
                style="width:50px; height:20px;"
                //onchange="updateColor(this.jscolor)"
                onchange={(e) => this.updateColor(this.jscolor, e)}
                id="cpicker"/>

            <input
                type="range"
                min="1"
                max="10"
                value="1"
                class="slider"
                onchange={(e) => this.updateWidth(this.value, e)}
                id="penwidth"/>

            <input
                type="button"
                value="clear"
                onclick={(e) => this.clearBoard(e)}/>
        );
    }

    ReactDOM.render(
        <Draw />,
        document.getElementById('root')
    );
}