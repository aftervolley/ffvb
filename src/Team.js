import { PLAYERS } from "./Constants.js";
import { Player } from "./Player.js";

X_NAME = 589.95;
Y_NAME = 328.61;

export class Team {
  constructor({ parser, xOffset }) {
    this.name = parser.createItem({ left: xOffset + X_NAME, middle: Y_NAME });
    this.players = PLAYERS.map(
      (i) => new Player({ parser, xOffset, playerIndex: i - 1 })
    ); // missing: "libéros", "officiels", "captains", "team A / B"
  }
}
