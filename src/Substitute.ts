import type { Item, Parser } from "./types.js";

const X_CENTER = -4.59;
const Y_PLAYER_NUMBER = 487.35;
const Y_ENTRY_POINTS = 478.84;
const Y_EXIT_POINTS = 470.34;

export class Substitute {
  positionNumber: number;
  playerNumber: Item;
  pointsAtEntry: Item;
  pointsAtExit: Item;
  
  constructor({ parser, positionNumber, xOffset, yOffset }: { parser: Parser, positionNumber: number, xOffset: number, yOffset: number }) {
    const center = xOffset + X_CENTER;
    this.positionNumber = positionNumber;
    this.playerNumber = parser.createItem({
      center,
      middle: yOffset + Y_PLAYER_NUMBER,
    });
    this.pointsAtEntry = parser.createItem({
      center,
      middle: yOffset + Y_ENTRY_POINTS,
    });
    this.pointsAtExit = parser.createItem({
      center,
      middle: yOffset + Y_EXIT_POINTS,
    });
  }
}
