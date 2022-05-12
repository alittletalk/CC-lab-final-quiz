let b = 0;
let img;
function preload(){
img = loadImage("mouse cursor.png");
}

function setup(){
    let c = createCanvas(window.innerWidth,window.innerHeight);
    c.parent('canvas-wrapper');
  }
  
  function draw(){
      background(b);
      fill(255,255,255,90);
    // circle (mouseX,mouseY,20,20);
    image(img,mouseX,mouseY,100,100);

  }
  
  document.addEventListener("DOMContentLoaded", function(){
    
    document.querySelector("button").addEventListener("click", function(){
        if(b == 255){
          b = 0;
        }else{
          b = 255;  
        }
        
    })

})

