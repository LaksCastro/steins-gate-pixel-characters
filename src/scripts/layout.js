import Vector2D from "./vector2D";
import Vector0D from "./vector0D";
import { width, height } from "./canvas";
// =============================
// VAR WITH MAIN METADATA
// =============================
let grid = {
  indexes: [],
  columnsLength: null,
  rowsLength: null,
};

// =============================
// STATE OF LAYOUT
// =============================
const column_size = 150;
const row_size = 150;

let columnsLength = null;
let rowsLength = null;

let initialX = null;
let initialY = null;

// =============================
// GET POSITION BY MATRIZ INDEX
// =============================
const getPosition = (index) => {
  const row = Math.floor(index / columnsLength);
  const column = index - row * columnsLength;

  const y1 = initialY + row * row_size;
  const y2 = y1 + row_size;

  const x1 = initialX + column * column_size;
  const x2 = x1 + column_size;

  return Vector2D.createByCoord(Vector0D(x1, y1), Vector0D(x2, y2));
};

// =============================
// FUNCTION TO INIT LAYOUT LOGIC
// =============================
const init = () => {
  initialX = (width % column_size) / 2;
  columnsLength = Math.floor(width / column_size);

  initialY = (height % row_size) / 2;
  rowsLength = Math.floor(height / row_size);

  grid = {
    indexes: [0, columnsLength * rowsLength],
    columnsLength,
    rowsLength,
  };

  return grid;
};

// ======================
// TO GET MAIN POSITIONS
// ======================
const centerColumn = () => Math.floor(columnsLength / 2);
const centerRow = () => Math.floor(rowsLength / 2) * columnsLength;
const bottomRow = () => Math.floor(rowsLength - 1) * columnsLength;

const centerCenter = () => centerRow() + centerColumn();

const bottomLeft = () => bottomRow();
const bottomRight = () => bottomRow() + (columnsLength - 1);

const topLeft = () => 0;
const topRight = () => columnsLength - 1;

const bottomCenter = () => bottomRow() + centerColumn();
const topCenter = () => centerColumn();

export default Object.freeze({
  init,

  getPosition,

  centerColumn,
  centerRow,
  centerCenter,
  bottomRight,
  bottomLeft,
  topRight,
  topLeft,
  bottomCenter,
  topCenter,
});
