import { describePerson, Person } from "../TS Basics/Ts-Basic-exercises";

describe('describePerson', () => {
  it('should describe a person correctly', () => {
    const Bob: Person = { name: "Bob", age: 30, hasPet: true };
    expect(describePerson(Bob)).toBe("Bob is 30 years old. They have a pet.");
  });
});