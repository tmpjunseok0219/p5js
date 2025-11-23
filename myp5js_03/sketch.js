let hatR = 0;
let hatG = 0;
let hatB = 0;
let happy = false;
let headX = 200; // 얼굴 중심 x좌표

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // 얼굴
  fill(255, 224, 189);
  ellipse(headX, 200, 180, 200);

  // 모자
  fill(hatR, hatG, hatB);
  arc(headX, 130, 190, 150, radians(160), radians(380));

  // 눈
  let leftEyeX = headX - 40;
  let rightEyeX = headX + 40;
  let eyeY = 180;
  let eyeRadius = 30;
  let pupilRadius = 8;

  // 마우스 방향에 따라 눈동자 이동
  let leftDx = constrain((mouseX - leftEyeX) / 20, -eyeRadius / 2, eyeRadius / 2);
  let leftDy = constrain((mouseY - eyeY) / 20, -eyeRadius / 2, eyeRadius / 2);
  let rightDx = constrain((mouseX - rightEyeX) / 20, -eyeRadius / 2, eyeRadius / 2);
  let rightDy = constrain((mouseY - eyeY) / 20, -eyeRadius / 2, eyeRadius / 2);

  // 눈 흰자
  noFill();
  stroke(0);
  strokeWeight(1.5);
  circle(leftEyeX, eyeY, eyeRadius * 2);
  circle(rightEyeX, eyeY, eyeRadius * 2);

  // 눈동자
  fill(0);
  noStroke();
  circle(leftEyeX + leftDx, eyeY + leftDy, pupilRadius * 2);
  circle(rightEyeX + rightDx, eyeY + rightDy, pupilRadius * 2);

  // 코
  stroke(0);
  noFill();
  line(headX - 10, 200, headX + 5, 180);
  line(headX - 10, 200, headX + 5, 220);

  // 입 (표정)
  if (happy) {
    noFill();
    arc(headX, 250, 80, 40, radians(10), radians(170)); // 웃는 얼굴
  } else {
    noFill();
    arc(headX, 260, 60, 10, radians(0), radians(180)); // 기본 얼굴
  }
}

//마우스 클릭 시 모자 색 랜덤 변경
function mousePressed() {
  hatR = random(255);
  hatG = random(255);
  hatB = random(255);
}

// 방향키로 조작 
function keyPressed() {
  if (keyCode === UP_ARROW) {
    happy = !happy; // 위쪽 방향키로 표정 토글
  } else if (keyCode === LEFT_ARROW) {
    headX -= 10; // 왼쪽 이동
  } else if (keyCode === RIGHT_ARROW) {
    headX += 10; // 오른쪽 이동
  } else if (key === 's') {
    saveGif('mySketch', 10);
  }
  // 화면 밖으로 나가지 않게 조정
  headX = constrain(headX, 120, 280);
}