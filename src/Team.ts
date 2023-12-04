import type { Item, Parser } from "./types.js";

import { PLAYERS } from "./Constants.js";
import { Player } from "./Player.js";

const X_NAME = 589.95;
const Y_NAME = 328.61;

export class Team {
  name: Item;
  players: Player[];
  
  constructor({ parser, xOffset }: { parser: Parser; xOffset: number }) {
    this.name = parser.createItem({ left: xOffset + X_NAME, middle: Y_NAME });
    this.players = PLAYERS.map(
      (i) => new Player({ parser, xOffset, playerIndex: i - 1 })
    ); // missing: "libéros", "officiels", "captains", "team A / B"
  }
}
