import { SETS } from "./Constants.js";
import { ResultSet, ResultTotal } from "./ResultSet.js";

const X_START_TIME = 447.87;
const X_END_TIME = 493.98;
const X_DURATION = 538.59;
const Y_MIDDLE = 81.99;
const Y_TOTAL = 99;
const Y_SET = 141.52;
const SET_HEIGHT = -8.5;

export class Result {
  constructor({ parser }) {
    this.startTime = parser.createItem({
      center: X_START_TIME,
      middle: Y_MIDDLE,
    });
    this.endTime = parser.createItem({
      center: X_END_TIME,
      middle: Y_MIDDLE,
    });
    this.duration = parser.createItem({
      center: X_DURATION,
      middle: Y_MIDDLE,
    });
    this.total = new ResultTotal({ parser, yOffset: Y_TOTAL });
    this.sets = SETS.map(
      (_, i) =>
        new ResultSet({
          parser,
          yOffset: Y_SET + (i - 1) * SET_HEIGHT,
        })
    );
  }
}
