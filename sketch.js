function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0)
  noFill()
  stroke(255)
  ellipse(25,25,50)
  rectMode(CENTER)
  rect(25,25,50)
  ellipse(50,50,25)
  rectMode(CENTER)
  rect(50,50,25)
  
  ellipse(25*3,25,50)
  rect(25*3,25,50)
  ellipse(50*2,50,25)
  rect(50*2,50,25)
}

function draw() {
  background(0)
  noFill()
  rectMode(CENTER)
  stroke(255)
  for(var i=0;i<int(width/50);i++)
  {
    ellipse(25+(i*50),25,50)
    rect(25+(i*50),25,50)
    ellipse(50+(i*50),50,25)
    rect(50+(i*50),50,25)
  }
  for(var i=0;i<int(width/50);i++)
  ellipse(25,75,50)
  rect(25,75,50)
  ellipse(50,100,25)
  rect(50,100,25)
  for(var i=0;i<int(width/50);i++)
  {
    ellipse(25+(i*50),75,50)
    rect(25+(i*50),75,50)
    ellipse(50+(i*50),100,25) 
    rect(50+(i*50),100,25)

    ellipse(25+(i*50),125,50)
    rect(25+(i*50),125,50)
    ellipse(50+(i*50),150,25)
    rect(50+(i*50),150,25)

    ellipse(25+(i*50),175,50)
    rect(25+(i*50),175,50)
    ellipse(50+(i*50),200,25)
    rect(50+(i*50),200,25)

    ellipse(25+(i*50),225,50)
    rect(25+(i*50),225,50)
    ellipse(50+(i*50),250,25)
    rect(50+(i*50),250,25)

    ellipse(25+(i*50),275,50)
    rect(25+(i*50),275,50)
    ellipse(50+(i*50),300,25)
    rect(50+(i*50),300,25)

    ellipse(25+(i*50),325,50)
    rect(25+(i*50),325,50)
    ellipse(50+(i*50),350,25)
    rect(50+(i*50),350,25)
  }
  

  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0)
  noFill()
  rectMode(CENTER)
  
  for(var i=0;i<int(width/50);i++)
  {
    stroke("#219ebc")
    ellipse(25+(i*50),25,50+mouseX/32)
    stroke("#ccd5ae")
    rect(25+(i*50),25,50+mouseX/32)
    stroke("#a2d2ff")
    ellipse(50+(i*50),50,25+mouseX/32)
    stroke("#ffb3c6")
    rect(50+(i*50),50,25+mouseX/32)

    stroke("#219ebc")
    ellipse(25+(i*50),75,50+mouseX/32)
    stroke("#ccd5ae")
    rect(25+(i*50),75,50+mouseX/32)
    stroke("#a2d2ff")
    ellipse(50+(i*50),100,25+mouseX/32)
    stroke("#ffb3c6")
    rect(50+(i*50),100,25+mouseX/32)

    stroke("#219ebc")
    ellipse(25+(i*50),125,50+mouseX/32)
    stroke("#ccd5ae")
    rect(25+(i*50),125,50+mouseX/32)
    stroke("#a2d2ff")
    ellipse(50+(i*50),150,25+mouseX/32)
    stroke("#ffb3c6")
    rect(50+(i*50),150,25+mouseX/32)

    stroke("#219ebc")
    ellipse(25+(i*50),175,50+mouseX/32)
    stroke("#ccd5ae")
    rect(25+(i*50),175,50+mouseX/32)
    stroke("#a2d2ff")
    ellipse(50+(i*50),200,25+mouseX/32)
    stroke("#ffb3c6")
    rect(50+(i*50),200,25+mouseX/32)

    stroke("#219ebc")
    ellipse(25+(i*50),225,50+mouseX/32)
    stroke("#ccd5ae")
    rect(25+(i*50),225,50+mouseX/32)
    stroke("#a2d2ff")
    ellipse(50+(i*50),250,25+mouseX/32)
    stroke("#ffb3c6")
    rect(50+(i*50),250,25+mouseX/32)

    stroke("#219ebc")
    ellipse(25+(i*50),275,50+mouseX/32)
    stroke("#ccd5ae")
    rect(25+(i*50),275,50+mouseX/32)
    stroke("#a2d2ff")
    ellipse(50+(i*50),300,25+mouseX/32)
    stroke("#ffb3c6")
    rect(50+(i*50),300,25+mouseX/32)

    stroke("#219ebc")
    ellipse(25+(i*50),325,50+mouseX/32)
    stroke("#ccd5ae")
    rect(25+(i*50),325,50+mouseX/32)
    stroke("#a2d2ff")
    ellipse(50+(i*50),350,25+mouseX/32)
    stroke("#ffb3c6")
    rect(50+(i*50),350,25+mouseX/32)
  }

}