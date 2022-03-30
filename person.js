export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `My name is ${this.name}`;
  }

  isAdult() {
    if (this.age > 17) {
      return true;
    } else {
      return false;
    }
  }

  yearBorn() {
    const currentYear = new Date().getFullYear();
    const yearBorn = currentYear - this.age;
    return yearBorn;
  }
}
