import { isWeekend, Day } from "../TS Basics/Ts-Basic-Exercises/isWeekend";

describe('isWeekend', () => {
  it('should return true for weekend days', () => {
    expect(isWeekend(Day.Saturday)).toBe(true);
    expect(isWeekend(Day.Sunday)).toBe(true);
  });

  it('should return false for weekdays', () => {
    expect(isWeekend(Day.Monday)).toBe(false);
    // Add similar assertions for other weekdays...
  });
});