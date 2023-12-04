import { Starter } from "./starter";
import { Substitute } from "./substitute";

const POSITION_WIDTH = 19.84;

export class Position {
  constructor({ parser, positionNumber, xOffset, yOffset }) {
    xOffset = xOffset + (positionNumber - 1) * POSITION_WIDTH;
    this.starter = new Starter({
      parser,
      positionNumber,
      xOffset,
      yOffset,
    });
    this.substitute = new Substitute({
      parser,
      positionNumber,
      xOffset,
      yOffset,
    });
  }
}
