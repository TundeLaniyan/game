type _2D = { x: number, y: number };

interface InitObject {
  x?: number;
  y?: number;
  image: HTMLImageElement;
}

class Obstacle {
  width: number;
  height: number;
  position: _2D;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  constructor(context: CanvasRenderingContext2D, { x = 100, y = 100, image }: InitObject) {
    this.context = context;
    this.position = { x, y }
    this.width = 1;
    this.height = 1;
    this.image = image;
    image?.addEventListener('load', () => {
      this.width = this.width === 1 ? image.width : this.width;
      this.height = this.height === 1 ? image.height : this.height;
    });
  }
  draw() {
    this.context.drawImage(this.image, this.position.x, this.position.y);
  }

  get bottom() { return this.position.y + this.height }
  get end() { return this.position.x + this.width }
}

export default Obstacle;