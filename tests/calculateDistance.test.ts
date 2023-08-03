import { calculateDistance, Point } from '../TS Basics/Ts-Basic-Exercises/calculateDistance'

describe('calculateDistance', () => {
    it('should calculate the correct distance', () => {
      let point1: Point = [1, 2];
      let point2: Point = [3, 4];
      let distance = calculateDistance(point1, point2);
      // This checks that the calculated distance is close to 2.82 with a precision of 2
        expect(distance).toBeCloseTo(2.82, 1);
      
        // This checks that the calculated distance is greater than 2.81
        expect(distance).toBeGreaterThan(2.81);
      
        // This checks that the calculated distance is less than 2.83
        expect(distance).toBeLessThan(2.83);
    });
  });