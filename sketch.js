function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  angleMode(DEGREES);
  noStroke();
  let gui_setup = new dat.GUI();
  gui = new Gui();
  gui_setup.addColor(gui, 'skyColor');
  gui_setup.addColor(gui, 'grassColor');
  gui_setup.addColor(gui, 'houseColor');
  gui_setup.addColor(gui, 'roofColor');
  gui_setup.addColor(gui, 'windowsColor');
  gui_setup.addColor(gui, 'doorColor');
  gui_setup.addColor(gui, 'doorknobColor');

}

function draw() {
  background(220);
  rectMode(CORNER);

  //   sky
  fill(gui.skyColor);
  rect(0, 0, windowWidth, 300);

  // grass
  fill(gui.grassColor);
  rect(0, 300, windowWidth, 300);

  //   house
  let xc = windowWidth / 2;
  let yc = windowHeight / 2;
  fill(gui.houseColor);
  let size = 150;
  rect(175, 250, 350, 250); 

  //   roof
  fill(gui.roofColor);
  triangle(150, 250, 350, 100, 550, 250);

  //   windows
  stroke('black');
  fill(gui.windowsColor);
  rect(200, yc+20, 60, 60);  // left window
  rect(440, yc+20, 60, 60);  // right window
  
   //   door
  stroke('black');
  fill(gui.doorColor);
  rect(300, 300, 100, 200);

  //   doorknob
  fill(gui.doorknobColor);
  ellipse(375, 400, 8);
  
}

function Gui() {
  this.skyColor = '#41c2de';
  this.grassColor = '#3fa218';
  this.houseColor = '#e1e882';
  this.roofColor = '#8c6f6f';
  this.windowsColor = '#e36b2a';
  this.doorColor = '#e3b72a';
  this.doorknobColor = '#673400';
}

function update() {
  redraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}