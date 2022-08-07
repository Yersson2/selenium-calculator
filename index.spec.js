const calculator = require("./index");

describe("calculator", () => {
    it("the result should be 5", async () => {
        const result = await calculator();
        expect(result).toBe(5);
    });
});
