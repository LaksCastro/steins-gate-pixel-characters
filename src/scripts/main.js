import Wrapper from "../components/Wrapper";

import Character from "./character";

import Vector0D from "./vector0D";
import Vector2D from "./vector2D";

import Alignment from "./alignment";

import Canvas from "./canvas";

import Characters from "../pixels/characters";

import utils from "./utils";

const { pixel_size } = utils;

// ========================================
// RENDER CANVAS NODE ELEMENTS
// ========================================

const createNodeCanvas = () => {
  Object.keys(Characters).forEach((key) => {
    key = key.toLowerCase();

    document.body.innerHTML += Wrapper(key);
  });
};

// ========================================
// NOW, RENDER ALL CANVAS PIXELS CHARACTERS(src/pixels)
// ========================================
const renderCanvas = () => {
  Object.keys(Characters).forEach((key) => {
    const character = Characters[key];

    key = key.toLowerCase();

    let { ctx, width, height } = Canvas.create(key);

    const characterPosition = Alignment.align(
      Vector2D.createByCoord(
        {
          x: 0,
          y: 0,
        },
        {
          x: width,
          y: height,
        }
      ),
      Vector2D.createBySize(
        character[0].length * pixel_size,
        character.length * pixel_size
      )
    );
    ctx = Character.draw(
      ctx,
      character,
      Vector0D(characterPosition.x[0], characterPosition.y[0])
    );
  });
};
export default () => {
  createNodeCanvas();
  renderCanvas();
};
