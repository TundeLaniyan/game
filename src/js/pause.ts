class Pause {
  start: number;
  pauseTime: number;
  state: 'play' | 'pause'
  
  constructor(start = Date.now()) {
    this.start = start;
    this.pauseTime = 0;
    this.state = "pause"
  }
  pauseGame() {
    if (this.state === 'pause') return false;
    this.state = 'pause';
    this.start = Date.now();
    return false;
  }
  resumeGame() {
    if (this.state === 'play') return true;
    this.state = 'play';
    this.pauseTime = Date.now() - this.start
    return true;
  }
  getPauseTime(runGame: boolean) {
    if (!runGame) this.pauseTime = Date.now() - this.start;
    return this.pauseTime;
  }
}

export default Pause;