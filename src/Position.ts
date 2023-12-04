import type { Parser } from "./types.js";

import { Starter } from "./Starter.js";
import { Substitute } from "./Substitute.js";

const POSITION_WIDTH = 19.84;

export class Position {
  starter: Starter;
  substitute: Substitute;

  constructor({
    parser,
    positionNumber,
    xOffset,
    yOffset,
  }: {
    parser: Parser,
    positionNumber: number,
    xOffset: number,
    yOffset: number,
  }) {
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
