const X_CENTER = -4.59;
const Y_PLAYER_NUMBER = 487.35;
const Y_ENTRY_POINTS = 478.84;
const Y_EXIT_POINTS = 470.34;

export class Substitute {
  constructor({ parser, positionNumber, xOffset, yOffset }) {
    const center = xOffset + X_CENTER;
    this.positionNumber = positionNumber;
    this.playerNumber = parser.createItem({
      center,
      middle: yOffset + Y_PLAYER_NUMBER,
    });
    this.pointsAtEntry = parser.createItem({
      center,
      middle: yOffset + Y_ENTRY_POINTS,
    });
    this.pointsAtExit = parser.createItem({
      center,
      middle: yOffset + Y_EXIT_POINTS,
    });
  }
}
