namespace Tank{
    export class Point{
        public x:number;
        public y:number;
       constructor(x:number,y:number){
       this.x=x;
       this.y=y;
    }

  }
    export class Watertank{
        private startpt:Point;
        private width:number;
        private height:number;
        private context:CanvasRenderingContext2D;
        private l:number=1;
        private color:string;
        private fill:string;
        constructor(stpt:Point,w:number,h:number,context:CanvasRenderingContext2D,color:string,l?:number){
            this.startpt=stpt;
            this.width=w;
            this.height=h;
            this.context=context;
            this.l=l;
            this.color=color;
        }

        draw(){  
            //to draw tank
            this.context.save();
            this.context.scale(1,1);
            this.context.beginPath();
            this.context.rect(this.startpt.x,this.startpt.y,this.width,this.height);
            this.context.strokeStyle= "black";  
            this.context.lineWidth=4
            this.context.stroke();
        
        //to fill tank
        this.context.beginPath();
        this.context.rect(this.startpt.x+1,this.startpt.y+1,this.width-1,this.l);
        this.context.fillStyle= this.color;  
        this.context.fill();
        this.context.restore();
        }
    }
    export class setup{ 
        constructor(){
        }
     draw1(){
//----------------------to draw tanks--------------------------------//
     context.save()
     context.translate(0,canvas.height)
     context.scale(1,-1);
     var s1=parseFloat(slider1.value);
     var s2=parseFloat(slider2.value);
     var tank=new Tank.Watertank(new Tank.Point(160,280),110,120,context,"blue",s1);
     tank.draw(); 
     tank=new Tank.Watertank(new Tank.Point(160,80),110,120,context,"rgb(146,53,181)",s2);
     tank.draw();
     context.restore()
//---------------------------to draw valves------------------------------//
    var valve=new Tank.Watertank(new Tank.Point(270,185),10,10,context,"black");
    valve.draw(); 
    valve=new Tank.Watertank(new Tank.Point(270,385),10,10,context,"black");
    valve.draw();
    var Andgate=new Tank.Watertank(new Tank.Point(430,265),25,25,context,"black");
    Andgate.draw()                                      //to draw and gate
//----------------------------to draw wires-------------------------------//
    var wire=new Tank.Wire("green","green","grey")         //when tank1 is already filled
    wire.draw()
//---------------------------to draw diode,And gate,Not gate,resistor,arrows,motor,text-----------------------//
        context.beginPath();                                            //to draw diode
        context.moveTo(520,267);
        context.lineTo(505,247);
        context.lineTo(535,247);
        context.lineTo(520,267);
        context.fillStyle="green";
        context.strokeStyle="black";
        context.fill();
        context.stroke();

        context.beginPath();                                           //half circle for And gate
        context.arc(453,277.5,12.5,Math.PI/2,3*Math.PI/2,true);
        context.strokeStyle="black";
        context.fillStyle="white";
        context.fill();
        context.lineWidth=4;
        context.stroke();
        
        context.beginPath();                                          // to add Not gate to And gate 
        context.arc(465,277,4,0,2*Math.PI,true);
        context.strokeStyle="black";
        context.fillStyle="grey";
        context.fill();
        context.lineWidth=2;
        context.stroke();

        context.beginPath();                                       //negative end of diode(horizontal line)
        context.moveTo(505,267);
        context.lineTo(535,267);

        context.moveTo(520,247);                                    //resistor
        context.lineTo(520,227);
        context.lineTo(515,223);
        context.lineTo(525,218);
        context.lineTo(515,213);
        context.lineTo(525,208);
        context.lineTo(515,203);
        context.lineTo(525,198);
        context.lineTo(520,195);
        context.lineTo(520,175);
        
        context.moveTo(540,260);                                    //arrow line (left)
        context.lineTo(560,275);
        context.moveTo(550,274);                                    //point of arrow
        context.lineTo(560,275);
        context.lineTo(558,266);
        context.moveTo(550,245);                                   //arrow line (right)
        context.lineTo(570,260);
        context.moveTo(560,259);                                    //point of arrow
        context.lineTo(570,260);
        context.lineTo(568,251);
        context.strokeStyle="black";
        context.lineWidth=2;
        context.stroke();

        context.beginPath();                                        //circle above resistor
        context.arc(520,173,4,0,2*Math.PI,true);
        context.strokeStyle="black";
        context.stroke();

        context.font="10pt Verdana";                            //to add text
        context.fillStyle="black";
        context.fillText("Tank A",190,120);
        context.fillText("Tank B",190,320);
        context.fillText("Level Sensor A",280,180);
        context.fillText("Level Sensor B",280,410);
        context.fillText("1/4 Level",280,215);
        context.fillText("1/4 Level",280,375);
        context.fillText("Y=(A.B)'",530,315);
        context.fillText("1/4 Level",280,375);
        context.fillText("Y=(A.B)'",530,315);
        context.fillStyle="blue";
        context.fillText("R",500,213);
        context.fillText("+5V",480,180);            
        }
    }
      //-----------------------------to draw wires---------------------------------------------------//
    export class Wire{
        private color1:string; 
        private color2:string; 
        private color3:string; 
        constructor(color1:string,color2:string,color3:string){
            this.color1=color1;
            this.color2=color2;
            this.color3=color3;
        }

        draw(){  
            
            context.beginPath();                                          // wire betn tank A & And gate
            context.moveTo(280,190);
            context.lineTo(350,190);
            context.lineTo(350,270);
            context.lineTo(430,270);
            context.strokeStyle=this.color1;
            context.stroke();

            context.beginPath();                                          // wire betn tank A & And gate
            context.moveTo(280,390);
            context.lineTo(350,390);
            context.lineTo(350,280);
            context.lineTo(430,280);
            context.strokeStyle=this.color2;
            context.stroke();

            context.beginPath();                                        //wire betn And gate & negative end of diode
            context.moveTo(465,277)
            context.lineTo(520,277)
            context.lineTo(520,267)
            context.strokeStyle=this.color3;
            context.lineWidth=2;
            context.stroke();
            
        }
        
    }
}