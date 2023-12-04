import type { Item, Parser } from "./types.d.ts";

export class Metadata {
  league: Item;
  hall: Item;
  city: Item;
  championship: Item;
  match: Item;
  date: Item;
  ageAndGender: Item;
  teamLeft: Item;
  teamRight: Item;

  constructor({ parser }:{ parser: Parser }) {
    this.league = parser.createItem({ left: 14.17, middle: 534.12 });
    this.hall = parser.createItem({ left: 116.22, middle: 545.46 });
    this.city = parser.createItem({ left: 116.22, middle: 553.96 });
    this.championship = parser.createItem({ left: 116.22, middle: 563.26 });
    this.match = parser.createItem({ right: 819.21, middle: 562.86 });
    this.date = parser.createItem({ right: 819.22, middle: 551.53 });
    this.ageAndGender = parser.createItem({ center: 433.701, middle: 545.46 });
    this.teamLeft = parser.createItem({ right: 402.52, middle: 532.08 });
    this.teamRight = parser.createItem({ left: 450.71, middle: 532.08 });
  }
}
