import assert from "assert";
import { add } from "../src/index.js";

describe("index.js", function () {
  describe("add()", function () {
    it("should return 3 when adding 1 and 2", function () {
      assert.equal(add(1, 2), 3);
    });
  });
});
