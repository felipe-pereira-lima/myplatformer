class Enemy extends GameObject {
  constructor(context, position, direction, maxBoundaries) {
    super();
    this.position = position;
    this.direction = direction;

    this.speed = 3;

    this.image = new Image();
    this.image.src = "images/foe.png";
    this.maxBoundaries = maxBoundaries; //+ 100 to make off screen
    this.context = context;
  }

  update(deltaTime) {
    this.position = this.position.sum(this.direction.mult(this.speed));
    if (
      this.position.x < this.maxBoundaries ||
      this.position.y > this.maxBoundaries
    );
  }

  draw() {
    this.context.drawImage(this.image, this.position.x, this.position.y);
  }
}