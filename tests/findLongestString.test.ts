import { findLongestString } from "../TS Basics/Ts-Basic-Exercises/findLongestString";

describe('findLongestString', () => {
  it('should return the longest string', () => {
    let strings: string[] = ["Hello", "How", "Pastrami"];
    expect(findLongestString(strings)).toBe("Pastrami");
  });
});