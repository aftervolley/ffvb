import type { PDFPageProxy } from "pdfjs-dist/types/src/display/api";
import { PDFParser } from "./PDFParser";
import { Metadata } from "./Metadata";
import { Team } from "./Team";
import { Result } from "./Result";
import { ScoringSet } from "./ScoringSet";

export class Match {
  parser: PDFParser;
  metadata: Metadata;
  team1: Team;
  team2: Team;
  result: Result;
  sets: ScoringSet[];

  static async fromPage(page: PDFPageProxy) {
    const match = new Match();
    await match.parser.parsePage(page);

    // function viewPdf(page: PDFPageProxy) {
    //   const scale = width / page.getViewport({ scale: 1 }).width;
    //   const viewport = page.getViewport({ scale });
    //   const context = DOM.context2d(viewport.width, viewport.height);
    //   context.canvas.style.border = "solid 1px #ccc";
    //   page.render({ canvasContext: context, viewport });
    //   return html`<p>${context.canvas}</p>`;
    // }
    // match.view = () => viewPdf(page);
    return match;
  }

  constructor() {
    const parser = new PDFParser();
    this.parser = parser;
    this.metadata = new Metadata({ parser });
    this.team1 = new Team({ parser, xOffset: 0 });
    this.team2 = new Team({ parser, xOffset: 127.56 });
    this.result = new Result({ parser });
    const DEFAULT_SET_XOFFSET = 142.06600000000003;
    const DEFAULT_TEAM_WIDTH = 155.91000000000003;
    this.sets = [
      new ScoringSet({
        parser,
        setNumber: 1,
        yOffset: 0,
        teamLeftSizes: {
          xOffset: DEFAULT_SET_XOFFSET,
          width: DEFAULT_TEAM_WIDTH,
        },
        teamRightSizes: {
          xOffset: DEFAULT_SET_XOFFSET + DEFAULT_TEAM_WIDTH,
          width: DEFAULT_TEAM_WIDTH,
        },
      }),
      new ScoringSet({
        parser,
        setNumber: 2,
        yOffset: 0,
        teamLeftSizes: {
          xOffset: DEFAULT_SET_XOFFSET + 334.49,
          width: DEFAULT_TEAM_WIDTH,
        },
        teamRightSizes: {
          xOffset: DEFAULT_SET_XOFFSET + 334.49 + DEFAULT_TEAM_WIDTH,
          width: DEFAULT_TEAM_WIDTH,
        },
      }),
      new ScoringSet({
        parser,
        setNumber: 3,
        yOffset: -93.54000000000008,
        teamLeftSizes: {
          xOffset: DEFAULT_SET_XOFFSET,
          width: DEFAULT_TEAM_WIDTH,
        },
        teamRightSizes: {
          xOffset: DEFAULT_SET_XOFFSET + DEFAULT_TEAM_WIDTH,
          width: DEFAULT_TEAM_WIDTH,
        },
      }),
      new ScoringSet({
        parser,
        setNumber: 4,
        yOffset: -93.54000000000008,
        teamLeftSizes: {
          xOffset: DEFAULT_SET_XOFFSET + 334.49,
          width: DEFAULT_TEAM_WIDTH,
        },
        teamRightSizes: {
          xOffset: DEFAULT_SET_XOFFSET + 334.49 + DEFAULT_TEAM_WIDTH,
          width: DEFAULT_TEAM_WIDTH,
        },
      }),
      new ScoringSet({
        parser,
        setNumber: 5,
        yOffset: -187.08000000000004,
        teamLeftSizes: {
          xOffset: 42.855999999999995,
          width: 136.06000000000006,
        },
        teamRightSizes: {
          xOffset: 42.855999999999995 + 136.06000000000006,
          width: 136.06000000000006,
        },
      }),
    ];
  }
}
