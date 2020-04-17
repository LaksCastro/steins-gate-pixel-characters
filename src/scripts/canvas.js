// ==========================================
// CENTRALIZE CANVAS CONTEXT IN A UNIC FILE
// ==========================================

let allCanvas = [];

const create = (id) => {
  const canvas = document.getElementById(id);

  let { clientWidth: width, clientHeight: height } = canvas;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  const clear = () => ctx.clearRect(0, 0, width, height);

  const canvasData = {
    clear,
    width,
    height,
    ctx,
    id,
  };

  allCanvas.push(canvasData);
  return Object.freeze(canvasData);
};

const get = (id) => {
  const [canvas] = allCanvas.filter((item) => item.id === id);
  return canvas;
};

export default Object.freeze({
  create,
  get,
});
