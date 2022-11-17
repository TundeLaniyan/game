interface Range { x1: number; x2: number; y1: number; y2: number; active: boolean; }
interface CircleRange extends Range { radius: number, xm: number, ym: number; }
interface Axis { x1: number; y1: number; width: number; height: number; }

const ACTIVE = '#ffffff99', INACTIVE = '#ffffff50';

class Controller {
  jump: Axis & Range; type: 'digital' | 'analog'
  x: number; y: number; width: number; height: number; context: CanvasRenderingContext2D
  movementRange: CircleRange; jumpRange: CircleRange; keys: any; updateDigitalKey: any; updateAnalogKey: any; left: Axis & Range; right: Axis & Range;
  pointer = { x: 0, y: 0 };
  sensitivity = 40;
  constructor({ x, y, width, height, context, keys, type = 'analog' }: any, { digital, analog }: any) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context;
    this.keys = keys;
    this.updateDigitalKey = digital;
    this.updateAnalogKey = analog;
    this.type = type;

    const assignCircleValue = ({ xm, ym, radius }: any): CircleRange => {
      return {
        x1: xm - radius,
        x2: xm + radius,
        y1: ym - radius,
        y2: ym + radius,
        active: false,
        xm,
        ym,
        radius
      }
    }

    this.movementRange = assignCircleValue({
      xm: this.x + this.width * .2,
      ym: this.y + this.height * .2,
      radius: this.width * .06
    })

    this.jumpRange = assignCircleValue({
      xm: this.x + this.width * .775,
      ym: this.y + this.height * .2,
      radius: this.width * .06
    })

    const assignValue = ({ x1, y1, width, height }: Axis): Axis & Range => {
      return { width, height, x1, y1, x2: x1 + width, y2: y1 + height, active: false };
    }

    this.left = assignValue({
      x1: this.x + this.width * .08, y1: this.y + this.height * .2, width: 100, height: 50
    })

    this.right = assignValue({
      x1: this.x + this.width * .22, y1: this.y + this.height * .2, width: 100, height: 50
    })

    this.jump = assignValue({
      x1: this.x + this.width * .88, y1: this.left.y1 + 25, width: 25, height: 25
    })

    addEventListener('touchmove', (e) => this.touchMove(e), { passive: false });
    addEventListener('touchstart', (e) => this.touchStart(e), { passive: false });
    addEventListener('touchend', () => this.touchEnd())
    addEventListener('keydown', (e) => this.keyDown(e))
    addEventListener('keyup', (e) => this.keyUp(e))
  }

  draw() {
    
    if (!this.isTouchDevice()) return;
    this.context.fillStyle = '#00000040';
    this.context.strokeStyle = '#ffffff50';
    this.context.lineWidth = 4;
    this.context.arc(100, 100, 100, 0, 2 * Math.PI)
    
    // this.context.fillStyle = '#00000040';
    // this.context.strokeStyle = '#ffffff50';
    // this.context.lineWidth = 8;
    // this.context.beginPath();
    // this.context.arc(this.x + this.width * .775, this.y + this.height * .2, this.width * .075, 0, 2 * Math.PI)
    // this.context.fill();
    // this.context.stroke();
    
    // this.context.fillStyle = '#ffffff';
    if (this.type === 'analog') {
      this.context.beginPath();
      this.analogBtn(this.movementRange, true);
      this.analogBtn(this.jumpRange, false);
    } else if (this.type === 'digital') {
  
      this.directionBtn(this.left, 'left')
      this.directionBtn(this.right, 'right')
      
      this.context.arc(this.jump.x1, this.jump.y1, this.jump.width, 0, 2 * Math.PI)
      this.context.fill();
      this.context.stroke();
    }
    
    // this.context.fillRect(this.movementRange.x1, this.movementRange.y1, this.movementRange.radius * 2, this.movementRange.radius * 2)
  }

  inRange(object: Range, x: number, y: number) {
    return x > object.x1 && x < object.x2 && y > object.y1 && y < object.y2
  }

  isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
  }

  touchMove(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const { clientX, clientY} = e.targetTouches[0];
    // const y = clientY - ((innerHeight - this.height * 5) / 2);
    const x = clientX - (innerWidth - this.width) / 2
    const y = clientY;
    
    if (this.inRange(this.movementRange, x, y)) {
      this.movementRange.active = true;
      this.pointer = { x, y };

      this.updateAnalogKey({ up: false, left: false, right: false })
      if (this.x + this.width * .2 + this.sensitivity < this.pointer.x) this.updateAnalogKey({ right: true });
      if (this.x + this.width * .2 - this.sensitivity > this.pointer.x) this.updateAnalogKey({ left: true});
      if (this.y + this.height * .2 - this.sensitivity > this.pointer.y) this.updateAnalogKey({ up: true });

    }

    // else if (this.inRange(this.jumpRange, x, y)) {
    //   this.pointer = { x, y };

    //   this.keys.up.pressed = false;
    //   // this.keys.right.pressed = false;
    //   // this.keys.left.pressed = false;

    //   // if (this.x + this.width * .2 + this.sensitivity < this.pointer.x) this.keys.right.pressed = true;
    //   // if (this.x + this.width * .2 - this.sensitivity > this.pointer.x) this.keys.left.pressed = true;
    //   if (this.y + this.height * .2 - this.sensitivity > this.pointer.y) this.keys.up.pressed = true;

    // }
  }

  canvas_arrow(fromX: number, fromY: number, toX: number, toY: number) {
    this.context.beginPath();
    var headlen = 30; // length of head in pixels
    var dx = toX - fromX;
    var dy = toY - fromY;
    var angle = Math.atan2(dy, dx);
    this.context.moveTo(fromX, fromY);
    this.context.lineTo(toX, toY);
    this.context.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    this.context.moveTo(toX, toY);
    this.context.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    this.context.stroke();
    this.context.beginPath();
  }

  directionBtn(object: Range & Axis, direction: 'left' | 'right' = 'left') {
    this.context.strokeStyle = object.active ? ACTIVE : INACTIVE;
    

    this.context.fillRect(object.x1, object.y1, object.width, object.height)
    this.context.strokeRect(object.x1, object.y1, object.width, object.height)
    if (direction.toLowerCase() === 'left') this.canvas_arrow(
      object.x2 * 0.92,
      object.y1 + object.height / 2,
      object.x1 * 1.2, 
      object.y1 + object.height / 2, 
    )
    else if (direction.toLowerCase() === 'right') this.canvas_arrow(
      this.right.x1 * 1.05, 
      this.right.y1 + this.right.height / 2, 
      this.right.x2 * 0.95, 
      this.right.y1 + this.right.height / 2
    )
    this.context.strokeStyle = INACTIVE;
  }

  analogBtn(object: CircleRange, pointer: boolean) {
    this.context.strokeStyle = object.active ? ACTIVE : INACTIVE;
    this.context.fillStyle = '#00000040';
    this.context.beginPath();
    this.context.arc(object.xm, object.ym, object.radius, 0, 2 * Math.PI)
    this.context.fill();
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(pointer && this.pointer.x || object.x1 + object.radius, pointer && this.pointer.y || object.y1 + object.radius, object.radius * 5 / 12, 0, 2 * Math.PI)
    this.context.fill();
    this.context.stroke();
    this.context.beginPath();

    this.context.strokeStyle = INACTIVE;
  }

  touchStart(e: any) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const { clientX, clientY} = e.targetTouches[0];
    // const y = clientY ;
    // const y = clientY - (innerHeight - this.height) / 2;
    const y = clientY - 8;
    const x = clientX - 8;

    // if (this.inRange(this.jumpRange, x, y)) {
      // this.pointer = { x, y };

    //   this.keys.up.pressed = true;
    //   // this.keys.right.pressed = false;
    //   // this.keys.left.pressed = false;

    //   // if (this.x + this.width * .2 + this.sensitivity < this.pointer.x) this.keys.right.pressed = true;
    //   // if (this.x + this.width * .2 - this.sensitivity > this.pointer.x) this.keys.left.pressed = true;
    //   // if (this.y + this.height * .2 - this.sensitivity > this.pointer.y) this.keys.up.pressed = true;

    // }

    if (this.inRange(this.left, x, y)){
      this.left.active = true;
      this.updateDigitalKey({ left: true });
    } else if (this.inRange(this.right, x, y)){
      this.right.active = true;
      this.updateDigitalKey({ right: true });
    } else if (false && this.inRange(this.jump, x, y)) {
      this.jump.active = true;
      this.updateDigitalKey({ up: true });
    } else if (this.inRange(this.jumpRange, x, y)) {
      this.jumpRange.active = true;
      this.updateDigitalKey({ up: true });
    }
  }


  touchEnd() {
    this.pointer = { x: 0, y: 0 };
    this.updateDigitalKey({ left: false, right: false, up: false })

    this.left.active = false;
    this.right.active = false;
    this.jump.active = false;
    this.movementRange.active = false;
    this.jumpRange.active = false;
  }

  keyDown({ key }: { key: string }){
    switch (key) {
      case "ArrowUp":
        this.updateDigitalKey({ up: true })
        break
  
      case "ArrowLeft": 
      this.updateDigitalKey({ left: true })
        break
  
      case "ArrowRight": 
      this.updateDigitalKey({ right: true })
        break
  
      default:
        break;
    }
  }
  
  keyUp({ key }: { key: string }) {
    switch (key) {
      case "ArrowUp":
        this.updateDigitalKey({ up: false })
        break
  
      case "ArrowLeft": 
      this.updateDigitalKey({ left: false })
        break
  
      case "ArrowRight":
        this.updateDigitalKey({ right: false })
        break
  
      default:
        break;
    }
  }
}

export default Controller;