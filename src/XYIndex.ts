import type { Item } from "./Item";

interface XYIndexItem {
  item: Item;
  x: number;
  y: number;
}
export interface BestItem {
  distance: number;
  item: Item;
}

export class XYIndex {
  #xyIndex: XYIndexItem[];

  constructor() {
    this.#xyIndex = [];
  }

  add(
    item: Item,
    { x, y, debug }: { x: number; y: number; debug?: boolean },
  ): void {
    this.#xyIndex.push({ item, x, y });
    debug && console.log("pushed", { x, y }, "new xyIndex", this.#xyIndex);
  }

  findNearestItem({ x, y }: { x: number; y: number }): BestItem | undefined {
    let best: BestItem | undefined = undefined;
    for (const value of this.#xyIndex) {
      const distance = Math.hypot(x - value.x, y - value.y);
      if (best === undefined || distance < best.distance) {
        best = { distance, item: value.item };
      }
    }
    return best;
  }
}
