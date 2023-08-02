import { calculateDistance, Point } from '../TS Basics/Ts-Basic-exercises'

describe('calculateDistance', () => {
    it('should calculate the correct distance', () => {
      let point1: Point = [1, 2];
      let point2: Point = [3, 4];
      expect(calculateDistance(point1, point2)).toBeCloseTo(2.82, 1);  // The second parameter is the precision
    });
  });