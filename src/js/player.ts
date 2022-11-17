import { GRAVITY, jumpHeight } from "./config";
import Obstacle from "./obstacle";

interface PlayerDefault {
  canvasHeight: number;
  x?: number;
  y?: number;
  sprites: Sprites;
  movement: Movement;
  startingPostion?: number;
}

interface Sprites {
  stand: { right: HTMLImageElement; left: HTMLImageElement; cropWidth: number; width: number; frame: number; };
  run: { right: HTMLImageElement; left: HTMLImageElement; cropWidth: number; width: number; frame: number; };
};

interface Movement { right: { pressed: boolean; }; left: { pressed: boolean; }}

type _2D = { x: number, y: number };

class Player extends Obstacle {
  velocity: _2D;
  canvasHeight: number;
  frame: number;
  sprites: Sprites;
  cropWidth = 177;
  movement: Movement;
  direction: 'right' | 'left' = 'right';
  canJump = true;

  constructor(context: CanvasRenderingContext2D, { canvasHeight, x, y, sprites, movement, startingPostion }: PlayerDefault) {
    super(context, { x, y, image: sprites.stand.right });
    this.canvasHeight = canvasHeight;
    this.velocity = { x: 0, y: 0 };
    this.width = 66;
    this.height = 150;
    this.frame = 0;
    this.movement = movement;
    this.sprites = sprites;
    this.position.y = startingPostion || 0;
  }

  draw() {
    this.context.drawImage(
      this.image, 
      this.cropWidth * this.frame,
      0,
      this.cropWidth,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.width = this.sprites.run.width;
    this.cropWidth = this.sprites.run.cropWidth;

    if (this.movement.right.pressed) {
      this.image = this.sprites.run.right;
      this.frame = this.frame < this.sprites.run.frame ? this.frame + 1 : 0;
      this.direction = 'right';
    } else if (this.movement.left.pressed) {
      this.image = this.sprites.run.left;
      this.frame = this.frame < this.sprites.run.frame ? this.frame + 1 : 0;
      this.direction = 'left';
    } else {
      this.image = this.sprites.stand[this.direction];
      this.width = this.sprites.stand.width;
      this.cropWidth = this.sprites.stand.cropWidth;
      this.frame = this.frame < this.sprites.stand.frame ? this.frame + 1 : 0;
    }

    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + this.height + this.velocity.y <= this.canvasHeight)
      this.velocity.y += GRAVITY;
  }

  jump() {
    if (this.canJump && !this.velocity.y) {
      this.velocity.y -= jumpHeight;
      this.canJump = false;
    }
  }

  collision() {
    this.velocity.y = 0;
    this.canJump = true;
  }
}

export default Player;