import { add, subtract, multiple, divide, remainder } from "./maths.js";

test("add should return 4", () => {
  expect(add(3, 1)).toEqual(4);
});

test("subtract should return 8", () => {
  expect(subtract(10, 2)).toEqual(8);
});

test("multiply should return 20", () => {
  expect(multiple(4, 5)).toEqual(20);
});

test("divide should return 3", () => {
  expect(divide(15, 5)).toEqual(3);
});

test("remainder should return 1", () => {
  expect(remainder(13, 4)).toEqual(1);
});

test("add not equal 6", () => {
  expect(add(3, 1)).not.toEqual(6);
});
