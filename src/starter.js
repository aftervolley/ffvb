const X_CENTER = -4.59;
const Y_PLAYER_NUMBER = 495.85;

export class Starter {
  constructor({ parser, positionNumber, xOffset, yOffset }) {
    this.positionNumber = positionNumber;
    this.playerNumber = parser.createItem({
      center: xOffset + X_CENTER,
      middle: yOffset + Y_PLAYER_NUMBER,
    });
  }
}
