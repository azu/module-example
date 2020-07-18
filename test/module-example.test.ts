import assert from "assert";
import { one, tri, two } from "../src/module-example";

describe("module-example", () => {
    it("one() return 1", () => {
        assert.strictEqual(one(), 1);
    });
    it("two() return 2", () => {
        assert.strictEqual(two(), 2);
    });
    it("tri() return 3 depended on one() and two()", () => {
        assert.strictEqual(tri(), 3);
    });
});
