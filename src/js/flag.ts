const flag = (context: CanvasRenderingContext2D, { x, y }: { x: number; y: number }) => {
  context.fillStyle = 'black';
  context.fillRect(x, y, 20, 20);
  context.fillRect(x + 40, y, 20, 20);
  context.fillRect(x + 80, y, 20, 20);

  context.fillRect(x + 20, y + 20, 20, 20);
  context.fillRect(x + 60, y + 20, 20, 20);

  context.fillRect(x, y + 40, 20, 20);
  context.fillRect(x + 40, y + 40, 20, 20);
  context.fillRect(x + 80, y + 40, 20, 20);

  context.fillRect(x + 20, y + 60, 20, 20);
  context.fillRect(x + 60, y + 60, 20, 20);

  context.fillRect(x, y + 80, 20, 20);
  context.fillRect(x + 40, y + 80, 20, 20);
  context.fillRect(x + 80, y + 80, 20, 20);

  context.fillStyle = 'white';
  context.fillRect(x + 20, y, 20, 20);
  context.fillRect(x + 60, y, 20, 20);

  context.fillRect(x , y + 20, 20, 20);
  context.fillRect(x + 40, y + 20, 20, 20);
  context.fillRect(x + 80, y + 20, 20, 20);

  context.fillRect(x + 20, y + 40, 20, 20);
  context.fillRect(x + 60, y + 40, 20, 20);

  context.fillRect(x, y + 60, 20, 20);
  context.fillRect(x + 40, y + 60, 20, 20);
  context.fillRect(x + 80, y + 60, 20, 20);

  context.fillRect(x + 20, y + 80, 20, 20);
  context.fillRect(x + 60, y + 80, 20, 20);
}

export default flag;