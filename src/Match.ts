import type { PDFPageProxy } from "pdfjs-dist/types/src/display/api";
import { PDFParser } from "./PDFParser";
import { Metadata } from "./Metadata";
import { Team } from "./Team";
import { Result } from "./Result";
import { ScoringSet } from "./ScoringSet";

const TEAM_WIDTH = 155.91;
const TEAM_WIDTH_SET_5 = 136.06;
const X_TEAM1 = 0;
const X_SET_1_3 = 142.07;
const X_SET_2_4 = X_SET_1_3 + 334.49;
const X_SET_5 = 42.86;
const X_TEAM2 = 127.56;
const Y_LINE_1 = 0;
const Y_LINE_2 = -93.54;
const Y_LINE_3 = -187.08;

export class Match {
  parser: PDFParser;
  metadata: Metadata;
  team1: Team;
  team2: Team;
  result: Result;
  sets: ScoringSet[];

  static async fromPage(page: PDFPageProxy): Promise<Match> {
    const match = new Match();
    await match.parser.parsePage(page);
    return match;
  }

  constructor() {
    const parser = new PDFParser();
    this.parser = parser;
    this.metadata = new Metadata({ parser });
    this.team1 = new Team({ parser, xOffset: X_TEAM1 });
    this.team2 = new Team({ parser, xOffset: X_TEAM2 });
    this.result = new Result({ parser });

    this.sets = [
      new ScoringSet({
        parser,
        setNumber: 1,
        yOffset: Y_LINE_1,
        teamLeftSizes: {
          xOffset: X_SET_1_3,
          width: TEAM_WIDTH,
        },
        teamRightSizes: {
          xOffset: X_SET_1_3 + TEAM_WIDTH,
          width: TEAM_WIDTH,
        },
      }),
      new ScoringSet({
        parser,
        setNumber: 2,
        yOffset: Y_LINE_1,
        teamLeftSizes: {
          xOffset: X_SET_2_4,
          width: TEAM_WIDTH,
        },
        teamRightSizes: {
          xOffset: X_SET_2_4 + TEAM_WIDTH,
          width: TEAM_WIDTH,
        },
      }),
      new ScoringSet({
        parser,
        setNumber: 3,
        yOffset: Y_LINE_2,
        teamLeftSizes: {
          xOffset: X_SET_1_3,
          width: TEAM_WIDTH,
        },
        teamRightSizes: {
          xOffset: X_SET_1_3 + TEAM_WIDTH,
          width: TEAM_WIDTH,
        },
      }),
      new ScoringSet({
        parser,
        setNumber: 4,
        yOffset: Y_LINE_2,
        teamLeftSizes: {
          xOffset: X_SET_2_4,
          width: TEAM_WIDTH,
        },
        teamRightSizes: {
          xOffset: X_SET_2_4 + TEAM_WIDTH,
          width: TEAM_WIDTH,
        },
      }),
      new ScoringSet({
        parser,
        setNumber: 5,
        yOffset: Y_LINE_3,
        teamLeftSizes: {
          xOffset: X_SET_5,
          width: TEAM_WIDTH_SET_5,
        },
        teamRightSizes: {
          xOffset: X_SET_5 + TEAM_WIDTH_SET_5,
          width: TEAM_WIDTH_SET_5,
        },
      }),
    ];
  }
}
