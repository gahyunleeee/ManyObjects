let m;

function setup() {
  createCanvas(400, 400);
  m = new Mover(50, 50, 10);
}

function draw() {
  background(220);
  m.update();
  m.show();

  if (mouseIsPressed) {
  let mousePos = createVector (mouseX,mouseY);
  let f = p5.Vector.sub(mousePos, m.pos); //마우스를 향하는 방향의 벡터 구하는 코드
  f.limit(3); //너무 빨라서 리미트로 힘 크기 제한
  m.applyForce(f);
    //make attract to mouse position
  }
}
