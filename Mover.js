class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.m = m;

  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.m);
    this.acc.add(f);
  }

  arrtactTo (aPos) {
    let f = p5.Vector.sub(aPos, this.pos); //마우스를 향하는 방향의 벡터 구하는 코드
    f.limit(5); //너무 빨라서 리미트로 힘 크기 제한
    this.applyForce(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill(0);
    circle(this.pos.x, this.pos.y, this.m);
  }
}
