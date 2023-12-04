export class Substitute {
  constructor({ parser, positionNumber, xOffset, yOffset }) {
    this.positionNumber = positionNumber;
    this.playerNumber = parser.createItem({
      center: -4.588000000000022 + xOffset,
      middle: 487.35 + yOffset
    });
    this.pointsAtEntry = parser.createItem({
      center: -4.588000000000022 + xOffset,
      middle: 478.84 + yOffset
    });
    this.pointsAtExit = parser.createItem({
      center: -4.588000000000022 + xOffset,
      middle: 470.34 + yOffset
    });
  }
}
