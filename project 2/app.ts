var canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById("mycanvas");
var context:CanvasRenderingContext2D=canvas.getContext("2d");

var slider1:HTMLInputElement=<HTMLInputElement>document.getElementById("slider1");
var slider2:HTMLInputElement=<HTMLInputElement>document.getElementById("slider2");
var l1=new Tank.Circle(new Tank.Point(531,270),4,context);
var isanim:boolean=false;

var setup=new Tank.setup();
     setup.draw1();            //to draw whole setup

function function2(){
     var s1=parseFloat(slider1.value);
     var s2=parseFloat(slider2.value);
     context.save();
     context.translate(0,canvas.height);
     context.scale(1,-1);
    
     context.clearRect(160,280,110,120);                                          //to clear tank1
     var tank1=new Tank.Watertank(new Tank.Point(160,280),110,120,context,"blue",s1);
     tank1.draw(); 
     context.clearRect(160,80,110,120);                                          //to clear tank2
     var tank2=new Tank.Watertank(new Tank.Point(160,80),110,120,context,"rgb(146,53,181)",s2);
     tank2.draw();

     context.restore();

     start();                                                                  //call to the start function
     //------------------------------------to set the color when upper tank is filled--------------------//
     if(s1>=115){     
          if(s2<30){
               console.log("s2<30")
               var wire=new Tank.Wire("green","grey","grey","grey")         //when tank1 is already filled
               wire.draw()
          }
          else{
               console.log("s1>30")
               wire=new Tank.Wire("green","grey","green","grey")             //when tank1 is completely filled
               wire.draw()    
          }
     }
     //--------------------------------------------------------------------------------------------------//
     //-----------------------to set the color when upper tank is not completely filled------------------//
     if(s1<115){
          console.log(s1)
          var wire=new Tank.Wire("grey","green","grey","grey")         //when tank1 is already filled
                    wire.draw()
     }
     //--------------------------------------------------------------------------------------------------//


     //*****************************************start function**********************************************//
     function start(){
          context.save()
          context.translate(0,canvas.height)
          context.scale(1,-1);
          var color="grey"
          //------------------------when lowertank is greater than 1/4 th level & uppertank is not completely filled----------------//
          if(s1<115 && s2>30){                                                       
               color="green"
               s1++;
               s2=parseInt(slider2.value)
               console.log(s2)
               //---------------------when again level of lowertank is less than 1/4 th --------------------------//
               if(s2<=30){               
                    console.log("s2<30")
                    s1=1;
                   color="grey";
                  context.restore()
                    wire=new Tank.Wire("grey","green","grey","grey");             //when tank1 is completely filled
                    wire.draw();
                    isanim=false;
               }
               //-------------------------------------------------------------------------------------------------//
               else{
               var tank1=new Tank.Watertank(new Tank.Point(160,280),110,120,context,"blue",s1);
               tank1.draw(); 
               context.restore();
               color="green";
               wire=new Tank.Wire("grey","green","green","green");             //when tank1 is being filled
               wire.draw();  
               }       
               window.requestAnimationFrame(start);                              //for animation
               //----------------------------when upper tank is completely filled------------------------------------//
               if(s1>=115){
                    isanim=false;
                    context.restore();
                    slider1.value="115";
                    wire=new Tank.Wire("green","grey","green","grey");             //when tank1 is completely filled
                    wire.draw();
                    color="grey";
               }    
               //--------------------------------------------------------------------------------------------------//
               context.beginPath();                           //to indicate green color in motor              
               context.arc(525,277,15,0,2*Math.PI,true);
               context.strokeStyle="black"
               context.fillStyle=color;
               context.fill()
               context.stroke()

               isanim=true;
               anim();                        //to rotate circle
          }
          //-------------------------------------------------------------------------------------------------------------------------//
         context.restore();

         context.font="10pt Verdana";                             //to add text
         context.fillStyle="black";
         context.fillText("Tank B",190,120);
         context.fillText("Tank A",190,320);  
          //-------------------------------function to rotate circle in motor when uppertank is being filled-------------------------//    
          function anim(){      
               if(s1<115 && s2>30){                         //when tank is getting filled
                    l1.rotate();
                    l1.draw();
                    if(isanim){
                         window.requestAnimationFrame(anim);         //animation to roate the circle
                    }
               }  
          }
          //--------------------------------------------------------------------------------------------------------------------------//
     }
     //*****************************************************************************************************//
}

     


