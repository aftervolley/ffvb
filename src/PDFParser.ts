import { Item } from "./Item";
import { BestItem, XYIndex } from "./XYIndex";
import type {
  PDFPageProxy,
  TextItem,
  TextMarkedContent,
} from "pdfjs-dist/types/src/display/api";

function isTextItem(item: TextItem | TextMarkedContent): item is TextItem {
  return "str" in item && "transform" in item;
}
function filterNonEmptyTextItems(
  items: Array<TextItem | TextMarkedContent>,
): TextItem[] {
  return items.filter(
    (item): item is TextItem =>
      isTextItem(item) &&
      item.str.trim().length > 0 &&
      item.transform.length >= 6,
  );
}
interface PDFItem {
  str: string;
  left: number;
  center: number;
  right: number;
  middle: number;
}

export class PDFParser {
  #leftIndex: XYIndex;
  #centerIndex: XYIndex;
  #rightIndex: XYIndex;
  #MAX_DISTANCE = 3;

  constructor() {
    this.#leftIndex = new XYIndex();
    this.#centerIndex = new XYIndex();
    this.#rightIndex = new XYIndex();
  }

  createItem({
    left,
    center,
    right,
    middle,
    debug,
  }: {
    left?: number;
    center?: number;
    right?: number;
    middle: number;
    debug?: boolean;
  }): Item {
    debug &&
      console.log("createItem arguments", { left, center, right, middle });
    if (middle === undefined) {
      throw new Error("middle is required");
    }
    const item = new Item();
    if (left !== undefined) {
      this.#leftIndex.add(item, { x: left, y: middle, debug });
    } else if (center !== undefined) {
      this.#centerIndex.add(item, { x: center, y: middle, debug });
    } else if (right !== undefined) {
      this.#rightIndex.add(item, { x: right, y: middle, debug });
    } else {
      throw new Error("left, center or right is required");
    }
    return item;
  }

  findNearestItem({
    left,
    center,
    right,
    middle,
  }: {
    left?: number;
    center?: number;
    right?: number;
    middle: number;
  }): BestItem | undefined {
    let best = undefined;
    if (left !== undefined) {
      best = this.#leftIndex.findNearestItem({ x: left, y: middle });
    }
    if (center !== undefined) {
      const result = this.#centerIndex.findNearestItem({
        x: center,
        y: middle,
      });
      if (
        best === undefined ||
        (result !== undefined && result.distance < best.distance)
      ) {
        best = result;
      }
    }
    if (right !== undefined) {
      const result = this.#rightIndex.findNearestItem({ x: right, y: middle });
      if (
        best === undefined ||
        (result !== undefined && result.distance < best.distance)
      ) {
        best = result;
      }
    }
    return best;
  }

  async fetchPDFTextItems(page: PDFPageProxy): Promise<PDFItem[]> {
    return await page.getTextContent().then((d) =>
      filterNonEmptyTextItems(d.items).map((d) => ({
        str: d.str,
        left: d.transform[4],
        center: d.transform[4] + d.width / 2,
        right: d.transform[4] + d.width,
        //top: d.transform[5],
        middle: d.transform[5] + d.height / 2,
        //bottom: d.transform[5] + d.height,
      })),
    );
  }

  async parsePage(page: PDFPageProxy): Promise<void> {
    const items = await this.fetchPDFTextItems(page);
    let i = 0;
    while (i < items.length) {
      const { left, center, right, middle, str } = items[i];
      const result = this.findNearestItem({
        left,
        center,
        right,
        middle,
      });
      if (result !== undefined && result.distance < this.#MAX_DISTANCE) {
        result.item.str = str;
      }
      i++;
    }
  }
}
