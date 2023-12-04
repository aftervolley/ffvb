const PLAYER_HEIGHT = 8.5;
const X_NUMBER = 578.32;
const X_NAME = 589.61;
const X_LICENSE = 679.09;
const Y_MIDDLE = 308.56;

export class Player {
  constructor({ parser, xOffset, playerIndex }) {
    const middle = -playerIndex * PLAYER_HEIGHT + Y_MIDDLE;
    this.number = parser.createItem({ left: xOffset + X_NUMBER, middle });
    this.name = parser.createItem({ left: xOffset + X_NAME, middle });
    this.license = parser.createItem({ left: xOffset + X_LICENSE, middle });
  }
}
