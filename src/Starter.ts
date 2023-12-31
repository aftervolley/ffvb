import { Item } from "./Item.js";
import { PDFParser } from "./PDFParser.js";

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
    parser: PDFParser;
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
