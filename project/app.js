var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var setup = new Tank.setup();
setup.draw1(); //to draw whole setup
function function1() {
    var s1 = parseFloat(slider1.value);
    var s2 = parseFloat(slider2.value);
    context.save();
    context.translate(0, canvas.height);
    context.scale(1, -1);
    context.clearRect(160, 280, 110, 120);
    var tank = new Tank.Watertank(new Tank.Point(160, 280), 110, 120, context, "blue", s1);
    tank.draw();
    context.clearRect(160, 80, 110, 120);
    tank = new Tank.Watertank(new Tank.Point(160, 80), 110, 120, context, "rgb(146,53,181)", s2);
    tank.draw();
    context.restore();
    //--------------------------to set color in diode----------------------//
    if (s1 > 30 && s2 > 30) {
        var color = "green";
    }
    else {
        color = "grey";
    }
    context.beginPath(); //to indicate correct color in diode
    context.moveTo(520, 267);
    context.lineTo(505, 247);
    context.lineTo(535, 247);
    context.lineTo(520, 267);
    context.fillStyle = color;
    context.strokeStyle = "black";
    context.fill();
    context.stroke();
    wire(); //to give correct color to wires
    context.font = "10pt Verdana"; //to add text
    context.fillStyle = "black";
    context.fillText("Tank A", 190, 120);
    context.fillText("Tank B", 190, 320);
}
//-------------------------function to change color wires----------------------------------------------//
function wire() {
    var s1 = parseFloat(slider1.value);
    var s2 = parseFloat(slider2.value);
    if (s1 < 30 && s2 < 30) {
        var wire = new Tank.Wire("grey", "grey", "green"); //when tank1 & tank2 are less than their 1/4 th level
        wire.draw();
    }
    else {
        var wire = new Tank.Wire("green", "green", "grey"); //when tank1 & tank2 are greater than their 1/4 th level
        if (s2 < 30) {
            var wire = new Tank.Wire("green", "grey", "green"); //when tank2 comes to the level less than 1/4th
        }
        else if (s1 < 30) {
            var wire = new Tank.Wire("grey", "green", "green"); //when tank1 comes to the level less than 1/4th    
        }
        wire.draw();
    }
}
//------------------------------------------------------------------------------------------------------//
//# sourceMappingURL=app.js.map