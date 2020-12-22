var Tank;
(function (Tank) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Tank.Point = Point;
    //-----------------------------to draw & fill tank---------------------------------------------//
    class Watertank {
        constructor(stpt, w, h, context, color, l) {
            this.l = 1;
            this.startpt = stpt;
            this.width = w;
            this.height = h;
            this.context = context;
            this.l = l;
            this.color = color;
        }
        draw() {
            this.context.save();
            this.context.scale(1, 1);
            this.context.beginPath();
            this.context.rect(this.startpt.x, this.startpt.y, this.width, this.height); //to draw tank
            this.context.strokeStyle = "black";
            this.context.lineWidth = 4;
            this.context.stroke();
            this.context.beginPath();
            this.context.rect(this.startpt.x + 1, this.startpt.y + 1, this.width - 1, this.l); //to fill tank
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.restore();
        }
    }
    Tank.Watertank = Watertank;
    //-----------------------------to draw wires---------------------------------------------------//
    class Wire {
        constructor(color1, color2, color3, color4) {
            this.color1 = color1;
            this.color2 = color2;
            this.color3 = color3;
            this.color4 = color4;
        }
        draw() {
            context.beginPath(); // wire betn upper tank & Not gate
            context.moveTo(282, 110);
            context.lineTo(320, 110);
            context.strokeStyle = this.color1;
            context.lineWidth = 2;
            context.stroke();
            context.beginPath(); // wire betn Not gate & And gate
            context.moveTo(342, 110);
            context.lineTo(372, 110);
            context.lineTo(372, 270);
            context.lineTo(429, 270);
            context.strokeStyle = this.color2;
            context.stroke();
            context.beginPath(); // wire betn lower tank & And gate
            context.moveTo(282, 390);
            context.lineTo(350, 390);
            context.lineTo(350, 280);
            context.lineTo(429, 280);
            context.strokeStyle = this.color3;
            context.stroke();
            context.beginPath(); //Wire betn And gate & Motor
            context.moveTo(467, 277);
            context.lineTo(510, 277);
            context.strokeStyle = this.color4;
            context.lineWidth = 3;
            context.stroke();
        }
    }
    Tank.Wire = Wire;
    //-----------------------------all setup of motor,text-----------------------------------------//
    class setup {
        constructor() {
        }
        draw1() {
            //----------------------to draw tanks--------------------------------//
            context.save();
            context.translate(0, canvas.height);
            context.scale(1, -1);
            var s1 = parseFloat(slider1.value);
            var s2 = parseFloat(slider2.value);
            var tank = new Tank.Watertank(new Tank.Point(160, 280), 110, 120, context, "blue", s1);
            tank.draw();
            tank = new Tank.Watertank(new Tank.Point(160, 80), 110, 120, context, "rgb(146,53,181)", s2);
            tank.draw();
            context.restore();
            //---------------------------to draw valves------------------------------//
            var valve = new Tank.Watertank(new Tank.Point(270, 105), 10, 10, context, "black");
            valve.draw();
            valve = new Tank.Watertank(new Tank.Point(270, 385), 10, 10, context, "black");
            valve.draw();
            var Andgate = new Tank.Watertank(new Tank.Point(430, 265), 25, 25, context, "black"); //for And gate
            Andgate.draw();
            //----------------------------to draw wires-------------------------------//
            var wire = new Tank.Wire("grey", "green", "grey", "grey"); //wire
            wire.draw();
            //---------------------------to draw gate,motor,text-----------------------//
            context.beginPath(); //half circle for and gate
            context.arc(453, 277.5, 12.5, Math.PI / 2, 3 * Math.PI / 2, true);
            context.strokeStyle = "black";
            context.fillStyle = "white";
            context.fill();
            context.lineWidth = 4;
            context.stroke();
            context.beginPath(); //Not gate  (Triangle)
            context.moveTo(320, 95);
            context.lineTo(320, 125);
            context.lineTo(340, 110);
            context.lineTo(319, 95);
            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.stroke();
            context.beginPath(); //Not gate   (circle)
            context.arc(342, 110, 4, 0, Math.PI * 2, true);
            context.strokeStyle = "black";
            context.fillStyle = "grey";
            context.fill();
            context.stroke();
            context.beginPath(); //motor to indicate color
            context.arc(525, 277, 15, 0, 2 * Math.PI, true);
            context.strokeStyle = "black";
            context.fillStyle = "grey";
            context.fill();
            context.stroke();
            context.font = "10pt Verdana"; //to add text
            context.fillStyle = "black";
            context.fillText("Tank B", 190, 120);
            context.fillText("Tank A", 190, 320);
            context.fillText("Level Sensor B", 280, 140);
            context.fillText("Level Sensor A", 280, 410);
            context.fillText("Full Level", 280, 90);
            context.fillText("1/4 Level", 280, 375);
            context.fillText("Y=(A.B)'", 530, 315);
        }
    }
    Tank.setup = setup;
    //----------------------------circle to rotate in motor----------------------------------------//
    class Circle {
        constructor(cenpt, radius, canvas) {
            this.color = "blue";
            this.motion = "forward";
            this.move = false;
            this._cenpt = cenpt;
            this._radius = radius;
            this.context = context;
            this._angle = this.angle;
        }
        get angle() {
            let ang = Math.atan2(this._radius, this._radius) * 180 / Math.PI;
            return (ang);
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this._cenpt.x, this._cenpt.y, this._radius, 0, 2 * Math.PI);
            this.context.fillStyle = "yellow";
            this.context.fill();
            this.context.strokeStyle = "green";
            this.context.lineWidth = 1;
            this.context.stroke();
        }
        rotate() {
            this._angle++;
            this._cenpt.x = this._cenpt.x + 0.15 * Math.cos(this._angle * Math.PI / 180);
            this._cenpt.y = this._cenpt.y + 0.15 * Math.sin(this._angle * Math.PI / 180);
        }
    }
    Tank.Circle = Circle;
})(Tank || (Tank = {}));
//# sourceMappingURL=framework.js.map