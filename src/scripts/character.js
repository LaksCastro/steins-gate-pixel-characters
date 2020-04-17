import utils from "./utils";

const { pixel_size } = utils;

const draw = (ctx, character, point) => {
  const { x: initialX, y: initialY } = point;

  let x = 0;
  let y = 0;

  console.log({ initialX, initialY });

  for (let row = 0; row < character.length; row++) {
    for (
      let column = 0;
      column < Math.max(...character.map((arr) => arr.length));
      column++
    ) {
      const pixel = character[row][column];
      if (!pixel) {
        x += pixel_size;
        continue;
      }

      ctx.beginPath();

      ctx.fillStyle = pixel;
      ctx.rect(initialX + x, initialY + y, pixel_size, pixel_size);

      ctx.closePath();
      ctx.fill();

      x += pixel_size;
    }
    x = 0;

    y += pixel_size;
  }

  return ctx;
};

export default Object.freeze({
  draw,
});
