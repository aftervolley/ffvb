import type { Item, Parser } from "./types.js";

const X_CENTER = -4.59;
const Y_PLAYER_NUMBER = 495.85;

export class Starter {
  positionNumber: number;
  playerNumber: Item;

  constructor({
    parser,
    positionNumber,
    xOffset,
    yOffset,
  }: {
    parser: Parser;
    positionNumber: number;
    xOffset: number;
    yOffset: number;
  }) {
    this.positionNumber = positionNumber;
    this.playerNumber = parser.createItem({
      center: xOffset + X_CENTER,
      middle: yOffset + Y_PLAYER_NUMBER,
    });
  }
}
