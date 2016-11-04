var diag = 250;


function setup() {
  createCanvas(1000,1000);
  background(255,255,250);
}


function draw() {
  
  background(235,240,240);
  smooth();
  stroke('rgba(0,70,60,0.85)');
  strokeWeight(1);
  
  motif1();
  motif2();
 
  translate(125,125);
  motif1();
  motif2();
 
  translate(-125,125);
  motif1();
  motif2();
 
  translate(125,125);
  motif1();
  motif2();
  
}

//Motif avec variables
function motif1(){
  var pas;
  var num = round(map(mouseX, 0, 1000, 0, 30));
  for(var i=0 ; i <= num; i += 1){
    pas = (i/num)*(diag/2);
    line(diag , diag , pas+(diag+diag/2) , pas+(diag-diag/2));
  }
}

//Motif avec variables inversé
function motif2(){
  var pas;
  var num = round(map(mouseX, 0, 1000, 0, 30));
  for(var i=0 ; i <= num; i += 1){
    pas = (i/num)*(diag/2);
    line(2*diag , diag , (diag+diag/2)-pas , (diag+diag/2)-pas);
  }
}

