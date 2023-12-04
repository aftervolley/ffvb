import { ResultSetTeam } from "./ResultSetTeam.js";

X_SET_NUMBER = 481.88;
X_SET_DURATION = 504.57;
X_TOTAL_DURATION = 493.23;

export class _ResultRow {
  constructor({ parser, yOffset }) {
    this.teamA = new ResultSetTeam({ parser, isLeft: true, yOffset });
    this.teamB = new ResultSetTeam({ parser, isLeft: false, yOffset });
  }
}

export class ResultSet extends _ResultRow {
  constructor({ parser, yOffset }) {
    super({ parser, yOffset });
    this.setNumber = parser.createItem({
      center: X_SET_NUMBER,
      middle: yOffset,
    });
    this.duration = parser.createItem({
      center: X_SET_DURATION,
      middle: yOffset,
    });
  }
}

export class ResultTotal extends _ResultRow {
  constructor({ parser, yOffset }) {
    super({ parser, yOffset });
    this.duration = parser.createItem({
      center: X_TOTAL_DURATION,
      middle: yOffset,
    });
  }
}
