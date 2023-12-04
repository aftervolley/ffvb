import type { Item, Parser } from "./types.js";

import { SETS } from "./Constants.js";
import { ScoringSetTeam } from "./ScoringSetTeam.js";

const TEAM_A_LEFT_SETS = [1, 3, 5];
const X_RIGHT = -17.34;
const Y_MIDDLE = 515.69;

export class ScoringSet {
  startTime: Item;
  endTime: Item;
  teamA: ScoringSetTeam;
  teamB: ScoringSetTeam;

  constructor({
    parser,
    setNumber,
    yOffset,
    teamLeftSizes,
    teamRightSizes,
  }: {
    parser: Parser;
    setNumber: number;
    yOffset: number;
    teamLeftSizes: { xOffset: number; width: number };
    teamRightSizes: { xOffset: number; width: number };
  }) {
    if (!SETS.includes(setNumber)) {
      throw new Error("Invalid set index");
    }
    this.startTime = parser.createItem({
      right: teamLeftSizes.xOffset + teamLeftSizes.width + X_RIGHT,
      middle: yOffset + Y_MIDDLE,
    });
    this.endTime = parser.createItem({
      right: teamRightSizes.xOffset + teamRightSizes.width + X_RIGHT,
      middle: yOffset + Y_MIDDLE,
    });

    const leftTeam = new ScoringSetTeam({
      parser,
      xOffset: teamLeftSizes.xOffset,
      yOffset,
    });
    const rightTeam = new ScoringSetTeam({
      parser,
      xOffset: teamRightSizes.xOffset,
      yOffset,
    });
    [this.teamA, this.teamB] = TEAM_A_LEFT_SETS.includes(setNumber)
      ? [leftTeam, rightTeam]
      : [rightTeam, leftTeam];

    // TODO: time-outs, list of points, serves/receives
  }
}
