function setup() {
  createCanvas(800, 1000);
  background(7, 7, 7);
  noStroke();
  
  


  // forma 1
  fill(171, 179, 178);
  stroke(171, 179, 178);
  quad(438, 40, 362, 40, 100, 492, 176, 492);
  quad(519, 433, 553, 492, 176, 492, 211, 433);


  // forma 2
  fill(138, 110, 71);
  stroke(138, 110, 71);
  quad(211, 433, 438, 40, 435, 167, 281, 433);
  quad(438, 40, 435, 167, 661, 559, 700, 492);
  

  // forma 3
  fill(43, 75, 36);
  stroke(43, 75, 36);
  quad(100, 492, 137, 560, 661, 559, 553, 492);
  quad(553, 492, 661, 559,435, 167, 400, 227);
  
  fill(13, 27, 74);
  triangle(281, 433, 519, 433, 400, 227);
  
  fill(118, 116, 117);
  arc(400, 1000, 1300, 500, radians(180), radians(360));
  
  noStroke();
  fill(147,82,29);
  circle(150, 150, 50, 50);
  fill(183,125,49);
  circle(150, 150, 40, 40);
  fill(239,213,149);
  circle(150, 150, 30, 30);
  fill(246, 255, 218);
  circle(150, 150, 20, 20);
  
  fill(162, 220, 230);
  quad(700, 200, 690, 225, 700, 250, 710, 225);
  

  stroke(255);  
  strokeWeight(2);
  point(100, 200);
  point(120, 230);
  point(110, 700);
  point(105, 650);
  point(90, 700);
  point(80,400);
  point(110, 400);
  point(110, 700);
  point(500, 700);
  point(520, 710);
  point(600, 200);
  point(620, 250);
  point(700, 500);
  point(730, 520);
  point(750, 530);
  point(450, 600);
  point(470, 610);
  point(480, 640);

  fill(220);
  ellipse(650, 650, 20, 20);
  fill(200, 200, 255, 150);
  ellipse(650, 650, 40, 40);
  fill(180, 180, 255, 100);
  ellipse(650, 650, 70, 70);

  fill(255, 180, 180);
  ellipse(300, 600, 8, 8);
  ellipse(650, 150, 6, 6);
  
  fill(150, 200, 255);
  ellipse(200, 300, 5, 5);
  ellipse(550, 150, 7, 7);
  
  stroke(103);
  strokeWeight(5)
  fill(50);
  ellipse(100, 900, 100);
  ellipse(400, 900, 102)
  ellipse(270, 850, 98);
  ellipse(550, 870, 130);
  ellipse(700, 950, 150);
  ellipse(200, 970, 110);

}
