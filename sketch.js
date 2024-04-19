function setup() {
  createCanvas(600, 400); 
  background("rgb(221,205,164)");
}

function draw() {
  stroke(" blue");
  fill("red");

  
  if(mouseIsPressed){
   rect(mouseX, mouseY, 40, 20)
  }
}