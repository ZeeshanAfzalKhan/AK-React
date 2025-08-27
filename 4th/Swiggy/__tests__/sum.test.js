import sum from "../src/Components/sum";

test("sum function should return sum of two numbers passed to it", () => {
    expect(sum(2, 3)).toBe(5);
})