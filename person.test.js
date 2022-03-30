import Person from "./person.js";

test("should return person name when name property called", () => {
  const person1 = new Person("Charlotte");
  expect(person1.name).toBe("Charlotte");
});

test("greeting to return my name is carina", () => {
  const person2 = new Person("Carina");
  expect(person2.greeting()).toBe("My name is Carina");
});

test("age is over 18", () => {
  const person = new Person("Charlotte", 23);
  expect(person.isAdult()).toBeTruthy();
});

test("age is under 18", () => {
  const person = new Person("Tom", 14);
  expect(person.isAdult()).toBeFalsy();
});

test("return year of birth correctly", () => {
  const person = new Person("Charlotte", 23);
  expect(person.yearBorn()).toEqual(1999);
});

test("return year of birth for 15 yo", () => {
  const person = new Person("Carina", 15);
  expect(person.yearBorn()).toEqual(2007);
});
