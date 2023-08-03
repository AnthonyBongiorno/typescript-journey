import { multiplyNumbers } from "../TS Basics/Ts-Basic-Exercises/multiplyNumbers";

describe('multiplyNumbers', () => {
    it('multiplies two numbers correctly', () => {
      const result = multiplyNumbers(55, 10);
      expect(result).toBe(550);
    });
  });