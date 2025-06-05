const { sum, subtract } = require("./math");

test("sum adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtract subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});
