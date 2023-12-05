import { Item } from "./Item.js";
import { PDFParser } from "./PDFParser.js";

import { POSITIONS } from "./Constants.js";
import { Position } from "./Position.js";
import { Serve } from "./Serve.js";

const Y_TEAM = 515.69;

export class ScoringSetTeam {
  team: Item;
  positions: Position[];
  serve: Serve;

  constructor({
    parser,
    xOffset,
    yOffset,
  }: {
    parser: PDFParser;
    xOffset: number;
    yOffset: number;
  }) {
    this.team = parser.createItem({
      left: xOffset,
      middle: yOffset + Y_TEAM,
    });
    this.positions = POSITIONS.map(
      (positionNumber) =>
        new Position({
          parser,
          positionNumber,
          xOffset,
          yOffset,
        }),
    );
    this.serve = new Serve({ parser, xOffset, yOffset });
  }
}
