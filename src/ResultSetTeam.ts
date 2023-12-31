import { Item } from "./Item.js";
import { PDFParser } from "./PDFParser.js";

const LEFT_CENTERS = {
  T: 430.86,
  R: 442.21,
  G: 453.54,
  P: 464.88,
};
const RIGHT_CENTERS = {
  T: 555.59,
  R: 544.26,
  G: 532.91,
  P: 521.57,
};

export class ResultSetTeam {
  timeOuts: Item;
  substitutions: Item;
  won: Item;
  points: Item;

  constructor({
    parser,
    yOffset,
    isLeft,
  }: {
    parser: PDFParser;
    yOffset: number;
    isLeft: boolean;
  }) {
    const { T, R, G, P } = isLeft ? LEFT_CENTERS : RIGHT_CENTERS;
    this.timeOuts = parser.createItem({ center: T, middle: yOffset });
    this.substitutions = parser.createItem({ center: R, middle: yOffset });
    this.won = parser.createItem({ center: G, middle: yOffset });
    this.points = parser.createItem({ center: P, middle: yOffset });
  }
}
