import { equal } from "assert";
import { add } from "./index";

describe("index.ts", function () {
  describe("add()", function () {
    it("should return 3 when adding 1 and 2", function () {
      equal(add(1, 2), 3);
    });
  });
});
