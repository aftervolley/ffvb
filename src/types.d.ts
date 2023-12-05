export interface Parser {
  createItem: (itemPosition: ItemPosition) => Item | undefined;
}
export interface ItemPosition {
  left?: number;
  right?: number;
  center?: number;
  middle: number;
}
export interface Item {
  str: string;
}
