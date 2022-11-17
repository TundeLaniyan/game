import Platform from './platform';
import Player from './player';
import Obstacle from './obstacle';
import SpriteRunLeft from '../img/spriteRunLeft.png';
import SpriteRunRight from '../img/spriteRunRight.png';
import SpriteStandLeft from '../img/spriteStandLeft.png';
import SpriteStandRight from '../img/spriteStandRight.png';
import flag from './flag';
import Level from './level';
import { PLAYERSPEED } from './config';
import Controller from './controller';
import Pause from './pause';

function createImage(src: string) {
  const image =  new Image();
  image.src = src;
  // image.addEventListener('load', () => console.log(src, image.width));
  return image;
}

const canvas = document.querySelector('canvas');
if (!canvas) throw Error();
canvas.width = window.innerWidth;
canvas.height = (window.innerWidth / 16) * 9;
const canvasWidth = canvas.width || 1080;
const canvasHeight = canvas.height || 580;
// console.log('canvasHeight', canvasHeight, window.innerHeight, window.outerHeight)
const context = canvas.getContext('2d');
if (context === null) throw Error();


let scrollOffSet = 0;
let currentLevel: 1 | 2 = 1;

let player: Player;
const platforms: Platform[] = [];
const obstacles: Obstacle[] = [];

let time: number;
let runGame: boolean;

let pause: Pause;

const level = new Level({ screenHeight: canvasHeight, context });
const keys = {
  right: { pressed: false },
  left: { pressed: false },
  up: { pressed: false },
  down: { pressed: false }
}

const updateKey = (direction: { left: string, right: string, up: string, down: string }) => {
  runGame = pause.resumeGame();
  Object.entries(direction).forEach(([key, val]) => {
    // @ts-ignore
    keys[key].pressed = val;
  })
}

const updateAnalogKey = (direction: { left: boolean, right: boolean, up: boolean, down: boolean }) => {
  runGame = pause.resumeGame();
  Object.entries(direction).forEach(([key, val]) => {
    // @ts-ignore
    if (key !== 'up') keys[key].pressed = val;
  })
}

const controller = new Controller({
   x: 0,
   y: canvasHeight * .8,
   width: canvasWidth,
   height: canvasHeight * .2,
   context,
   keys,
}, { digital: updateKey, analog: updateAnalogKey })

const sprites = {
  stand: {
    right: createImage(SpriteStandRight),
    left: createImage(SpriteStandLeft),
    cropWidth: 177,
    width: 66,
    frame: 59
  },
  run: {
    right: createImage(SpriteRunRight),
    left: createImage(SpriteRunLeft),
    cropWidth: 341,
    width: 127.875,
    frame: 29
  }
}

function init(context: CanvasRenderingContext2D) {
  time = Date.now();
  runGame = false;
  pause = new Pause(time);

  platforms.length = 0; obstacles.length = 0;
  scrollOffSet = 0;
  
  const { platform, obstacle, startingPostion } = level[`level${currentLevel}`]();
  player = new Player(context, { canvasHeight, sprites, movement: keys, startingPostion });

  platform.forEach((platform: Platform) => platforms.push(platform));
  obstacle.forEach((obstacle: Obstacle) => obstacles.push(obstacle));
  
  keys.right.pressed = false;
  keys.left.pressed = false;
}
init(context);

function animate() {
  requestAnimationFrame(animate);
  if (level.autoScroll && runGame) {
    platforms.forEach(platform => platform.position.x -=PLAYERSPEED);
    obstacles.forEach(obstacle => obstacle.position.x -=PLAYERSPEED * .6);
  }
  
  if (context) context.fillStyle = 'black';
  context?.fillRect(0, 0, canvas?.width || 0, canvasHeight || 0);
  
  obstacles.forEach(obstacle => obstacle.draw());
  platforms.forEach(platform => platform.draw());
  runGame ? player.update() : player.draw();
  player.movement = keys;
  if (keys.right.pressed && player.position.x < 0.5 * canvasWidth) player.velocity.x = PLAYERSPEED;
  else if (
    (keys.left.pressed && player.position.x > 0.1 * canvasWidth) ||
    (keys.left.pressed && scrollOffSet === 0 && player.position.x > 0)) player.velocity.x = -PLAYERSPEED;
  else {
    player.velocity.x = 0;
    if (keys.right.pressed && runGame) {
      platforms.forEach(platform => platform.position.x -=PLAYERSPEED);
      obstacles.forEach(obstacle => obstacle.position.x -=PLAYERSPEED * .6);
      scrollOffSet +=PLAYERSPEED;
    } else if (keys.left.pressed && scrollOffSet > 0) {
      platforms.forEach(platform => platform.position.x += PLAYERSPEED);
      obstacles.forEach(obstacle => obstacle.position.x +=PLAYERSPEED * .6);
      scrollOffSet -= PLAYERSPEED;
    }
  }
  if (platforms.filter(platform => platform.collision(player)).length) player.collision();

  if (scrollOffSet >= level.levelComplete) {
    alert("WINNER");
    currentLevel = level.nextLevel(currentLevel);
    init(context);
  }
  if (player.position.y > canvasHeight) {
    // alert("YOU LOSE");
    init(context);
  }

  if (keys.up.pressed) player.jump();

  flag(context, { x: level.levelComplete - scrollOffSet + canvasWidth * 0.5, y: 250});

  const displayTime = (time: number) => {
    const currentTime = Date.now() - time - pause.getPauseTime(runGame);
    const minutesMeasurement = 60 * 1000;
    const secondsMeasurement = 1000;
    let remainingTime;
    const display = (unit: number) => unit <= 9 ? '0' + unit : unit;

    const minutes = Math.floor(currentTime / minutesMeasurement);
    remainingTime = currentTime % minutesMeasurement;
    const seconds = Math.floor(remainingTime / secondsMeasurement);
    remainingTime = remainingTime % secondsMeasurement
    const miliseconds = Math.round(remainingTime / 10);

    return `${display(minutes)}:${display(seconds)}:${display(miliseconds)}`;
  }

  controller.draw();
  context.fillStyle = '#ffffff';
  context.font = "25px Arial";
  context.fillText(displayTime(time), 100, 50);
  !runGame && context?.fillText("Pause", canvasWidth / 2 - 50, canvasHeight / 2)
}

animate();

addEventListener('keydown', ({ key }) => {
  if (key !== " " && !runGame) runGame = pause.resumeGame();
  
  switch (key) {
    case " ":
      if (!runGame) runGame = pause.resumeGame();
      else runGame = pause.pauseGame();

    default:
      break;
  }
})