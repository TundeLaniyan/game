import Obstacle from "./obstacle";
import Player from "./player";

type _2D = { x: number, y: number };
interface InitObject {
  x: number;
  y: number;
  image: HTMLImageElement;
}

class Platform extends Obstacle {
  // width = 0;
  // height = 0;
  constructor(context: CanvasRenderingContext2D, { x, y, image }: InitObject) {
    super(context, { x, y, image });
  }
  collision(player: Player): boolean {
    return player.bottom <= this.position.y && 
      player.bottom + player.velocity.y >= this.position.y && 
      player.position.x <= this.end && 
      player.end >= this.position.x;
  }
}

export default Platform;