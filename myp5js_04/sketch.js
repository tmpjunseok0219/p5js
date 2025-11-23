let c1, c2, c3;
let cMid;

function setup() {
  createCanvas(800, 1000);
  colorMode(RGB);
  noStroke();
  
  c1 = color(171, 179, 178);
  c2 = color(138, 110, 71);
  c3 = color(43, 75, 36);
  cMid = color(13, 27, 74);
}



function draw() {
  background(7, 7, 7);

  let tt = millis() * 0.001;
  let ss = map(sin(tt), -1, 1, 0.9, 1.1);


  fill(118, 116, 117);
  arc(400, 1000, 1300, 500, radians(180), radians(360));

  noStroke();
  fill(147, 82, 29);
  circle(150, 150, 50);

  fill(183, 125, 49);
  circle(150, 150, 40);
  fill(239, 213, 149);
  circle(150, 150, 30);

  fill(246, 255, 218);
  circle(150, 150, 20);



  fill(162, 220, 230);
  quad(700, 200, 690, 225, 700, 250, 710, 225);

  stroke(255);
  strokeWeight(2);
  point(100, 200);
  point(120, 230);

  point(110, 700);
  point(105, 650);

  point(90, 700);
  point(80, 400); point(110, 400);
  point(110, 700);


  point(500, 700);
  point(520, 710); point(600, 200);

  point(620, 250);
  point(700, 500);
  point(730, 520);

  point(750, 530);
  point(450, 600);
  point(470, 610);
  point(480, 640);




  noStroke();
  let p1 = map(sin(tt * 2.0), -1, 1, 0.7, 1.3);

  fill(220);
  ellipse(650, 650, 20 * p1);

  fill(200, 200, 255, 150);
  ellipse(650, 650, 40 * p1);

  fill(180, 180, 255, 100);
  ellipse(650, 650, 70 * p1);


  let p2 = map(sin(tt * 2.8), -1, 1, 0.6, 1.4);

  fill(246, 255, 218);
  circle(150, 150, 20 * p2);





  fill(255, 180, 180);
  ellipse(300, 600, 8);

  ellipse(650, 150, 6);


  fill(150, 200, 255);
  ellipse(200, 300, 5);

  ellipse(550, 150, 7);




  stroke(103);
  strokeWeight(5);

  fill(50);
  ellipse(100, 900, 100);
  ellipse(400, 900, 102);

  ellipse(270, 850, 98);
  ellipse(550, 870, 130);

  ellipse(700, 950, 150);
  ellipse(200, 970, 110);




  let cc = [c1, c2, c3];
  let cs = (millis() * 0.0005) % 3;



  function mixColor(a, b, f) {
    return lerpColor(a, b, f);
  }

  function getCol(off) {
    let x = (cs + off) % 3;
    let i1 = floor(x);

    let i2 = (i1 + 1) % 3;
    let f = x - i1;

    return mixColor(cc[i1], cc[i2], f);
  }



  let colA = getCol(0.0);
  let colB = getCol(1.0);
  let colC = getCol(2.0);




  push();
  translate(400, 350);

  rotate(tt * 1.2);

  scale(ss);
  translate(-400, -350);


  fill(colA);
  stroke(colA);
  quad(438, 40, 362, 40, 100, 492, 176, 492);
  quad(519, 433, 553, 492, 176, 492, 211, 433);


  fill(colB);
  stroke(colB);
  quad(211, 433, 438, 40, 435, 167, 281, 433);
  quad(438, 40, 435, 167, 661, 559, 700, 492);


  fill(colC);
  stroke(colC);
  quad(100, 492, 137, 560, 661, 559, 553, 492);

  quad(553, 492, 661, 559, 435, 167, 400, 227);


  noStroke();
  fill(cMid);
  triangle(281, 433, 519, 433, 400, 227);


  pop();
  
}

function keyPressed() {
  if (key === 'g') {
    saveGif('my.gif',10);
  }
}