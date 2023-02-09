var MainCanvas = document.getElementById("PowerBars");
var MainContext = MainCanvas.getContext('2d');
var DivWidth = document.getElementById("smCanvasHolder").clientWidth;
var DivHeight = document.getElementById("smCanvasHolder").clientHeight;
MainCanvas.width = DivWidth;
MainCanvas.height = DivHeight;
var speed = 0.6;


var barCount = 28;
 
var BarArray = new Array();
         
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

class Rectangle {
    constructor(xPos, yPos, width, height, rounding) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width,
        this.height = height*0.3;
        this.rounding = rounding;
        this.counter = 0;
        this.phase = 0;
        this.index = 0;
        
    }
    update() {
        this.counter += speed;
        MainContext.beginPath();

        if (this.index < Math.floor(BarArray.length / 2) - 2)
        {
            MainContext.roundRect(
                this.xPos,
                this.yPos,
                this.width,
                this.height*Math.pow(Math.cos(-this.phase*12 + this.counter/100), 2) + 0.3*DivHeight*((barCount - 3*this.index)/barCount) - 0.4*DivHeight ,
                this.rounding);
            
        }
        
        else
        {
            MainContext.roundRect(
                this.xPos,
                this.yPos,
                this.width,
                this.height*Math.pow(Math.cos(-this.phase*12 + this.counter/100), 2) - 0.3*DivHeight*((barCount - 3*this.index)/barCount) - 0.4*DivHeight ,
                this.rounding);
        }

        
        MainContext.closePath();

        if (this.counter < 1) {
            MainContext.fillStyle = "#FFFFFF";
        }
        else {
            MainContext.fillStyle = "#e52585";  //0d34e3 - alternative blue colour
        }

        MainContext.fill();
    }
}

function drawRectangles() // initialises and adds the rectangle object to BarArray
{
    for (let i = 0; i < barCount; i++)
    {
        var rectangle = new Rectangle(
            (i * DivWidth / (barCount-6)), //x position
            MainCanvas.height, // y position, formerly: MainCanvas.height,
            DivWidth / barCount, //width of bar
            -Math.pow(1, 2) * DivHeight * 0.75 - 0.15 * DivHeight, //height of bar
            // -Math.pow(Math.cos(((i * 12) / barCount)), 2) * DivHeight*0.75 - 0.15*DivHeight, //spare argument
            0.001 * DivWidth);
        rectangle.phase = (i / barCount) * Math.PI;
        rectangle.index = i;
        
        BarArray.push(rectangle);
    }
    
    draw();
}

window.addEventListener('load', drawRectangles());


function draw() {
    MainContext.clearRect(0, 0, MainCanvas.width, MainCanvas.height);
   
    for (var i = 0; i < BarArray.length; i++) {
        var myRect = BarArray[i];
        myRect.update();
    }
    requestAnimationFrame(draw);
}