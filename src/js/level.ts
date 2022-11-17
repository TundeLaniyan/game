import Obstacle from "./obstacle";
import Platform from "./platform";
import PlatformImg from '../img/platform.png';
import PlatformSmallImg from '../img/platformSmallTall.png';
import HillsImg from '../img/hills.png';
import BackgroundImg from '../img/background.png';

interface LevelConstructor {
  context: CanvasRenderingContext2D;
  screenHeight: number;
}

class Level {
  context: CanvasRenderingContext2D;
  screenHeight: number;
  levelComplete: number = 0;
  autoScroll: boolean = false;
  constructor({ context, screenHeight }: LevelConstructor) {
    this.context = context;
    this.screenHeight = screenHeight;
  }

  createImage(src: string) {
    const image =  new Image();
    image.src = src;
    // image.addEventListener('load', () => console.log(src, image.width));
    return image;
  }

  get zone1Platform() { return this.createImage(PlatformImg); }
  get zone1SmallPlatform() { return this.createImage(PlatformSmallImg); }
  get zone1Background() { return this.createImage(BackgroundImg); }
  get zone1BackgroundObject() { return this.createImage(HillsImg); }
  
  level1() {
    const platform: Platform[] = [], obstacle: Obstacle[] = [];
    this.levelComplete = 6000;
    this.autoScroll = true;
    const startingPostion = this.screenHeight - 325;

    platform.push(new Platform(this.context, { x: 4180, y: startingPostion, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 7800, y: startingPostion, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 8580, y: startingPostion, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 9080, y: startingPostion, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 10080, y: startingPostion, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: -1, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 577, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 2077, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 3308, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 3888, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 5600, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 6000, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 6500, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 8000, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 11500, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 12078, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 12656, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 13234, y: this.screenHeight - 125, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 13812, y: this.screenHeight - 125, image: this.zone1Platform }));
  
    obstacle.push(new Obstacle(this.context, { image: this.zone1Background, x: -1, y: -1 }));
    obstacle.push(new Obstacle(this.context, { image: this.zone1BackgroundObject, x: -1, y: -1 }));

    return { platform, obstacle, startingPostion };
  }

  level2() {
    const platform: Platform[] = [], obstacle: Obstacle[] = [];
    this.levelComplete = 6700;
    this.autoScroll = true;
    const startingPostion = this.screenHeight - 125
    
    platform.push(new Platform(this.context, { x: -1, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 577, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 1877, y: this.screenHeight - 325, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 2800, y: this.screenHeight - 525, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 4300, y: startingPostion, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 5000, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 5579, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 6380, y: this.screenHeight - 325, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 6980, y: this.screenHeight - 325, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 7580, y: this.screenHeight - 325, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 8000, y: this.screenHeight - 525, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 8579, y: this.screenHeight - 525, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 9200, y: this.screenHeight - 425, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 9740, y: this.screenHeight - 325, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 10320, y: this.screenHeight - 225, image: this.zone1SmallPlatform }));
    platform.push(new Platform(this.context, { x: 10900, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 11479, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 12058, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 12637, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 13216, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 14516, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 15095, y: startingPostion, image: this.zone1Platform }));
    platform.push(new Platform(this.context, { x: 15674, y: startingPostion, image: this.zone1Platform }));

    obstacle.push(new Obstacle(this.context, { image: this.zone1Background, x: -1, y: -1 }));
    obstacle.push(new Obstacle(this.context, { image: this.zone1BackgroundObject, x: -1, y: -1 }));

    return { platform, obstacle, startingPostion };
  }

  nextLevel(currentLevel: 1 | 2): 1 | 2 {
    if (currentLevel > 1) return 2
    // @ts-ignore
    return currentLevel + 1;
  }
}

export default Level