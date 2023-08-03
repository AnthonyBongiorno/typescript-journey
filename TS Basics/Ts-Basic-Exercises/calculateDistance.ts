
/*Create a type alias Point for a tuple representing a 2D point: [number, number]. 
Write a function calculateDistance(point1: Point, point2: Point): number 
that calculates and returns the distance between two points.*/ 

// Define the Point type
//TS sees a tuple even though its not declared type tuple just that the custom type references a tuple.
type Point = [number, number]; 

function calculateDistance(point1: Point, point2: Point): number {
    let xDiff = point2[0] - point1[0];
    let yDiff = point2[1] - point1[1];

    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

export {Point, calculateDistance } ;
