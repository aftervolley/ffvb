import { Item } from "./Item.js";
import { PDFParser } from "./PDFParser.js";

import { POSITIONS } from "./Constants.js";

const WIDTH = 9.92;
const POSITION_WIDTH = WIDTH * 2;
const HEIGHT = 8.5;
const LEFT = -9.55;
const TOP = 461.83;

export class Serve {
  points: Item[];

  constructor({
    parser,
    xOffset,
    yOffset,
  }: {
    parser: PDFParser;
    xOffset: number;
    yOffset: number;
  }) {
    const CENTER_LEFT = xOffset + LEFT;
    const CENTER_RIGHT = CENTER_LEFT + WIDTH;
    const MIDDLE = TOP + yOffset;
    const turnPositions = [
      {
        center: CENTER_LEFT,
        middle: MIDDLE,
      },
      {
        center: CENTER_LEFT,
        middle: MIDDLE - HEIGHT,
      },
      {
        center: CENTER_LEFT,
        middle: MIDDLE - HEIGHT * 2,
      },
      {
        center: CENTER_LEFT,
        middle: MIDDLE - HEIGHT * 3,
      },
      {
        center: CENTER_RIGHT,
        middle: MIDDLE,
      },
      {
        center: CENTER_RIGHT,
        middle: MIDDLE - HEIGHT,
      },
      {
        center: CENTER_RIGHT,
        middle: MIDDLE - HEIGHT * 2,
      },
      {
        center: CENTER_RIGHT,
        middle: MIDDLE - HEIGHT * 3,
      },
    ];
    this.points = [];
    for (const { center, middle } of turnPositions) {
      for (const position of POSITIONS) {
        this.points.push(
          parser.createItem({
            center: center + (position - 1) * POSITION_WIDTH,
            middle,
          }),
        );
      }
    }
  }
}
