// 1: Write a function multiplyNumbers(a: number, b: number): number that returns the product of two numbers.

export function multiplyNumbers(a: number, b: number): number {    
    return a * b;
}

/* 2: Define an interface Person with properties name (string), age (number), and hasPet (boolean). 
   Then, write a function describePerson(person: Person): string that returns a string description of the person.*/

   interface Person {
    name: String;
    age: Number;
    hasPet: Boolean;
 }

function describePerson(person: Person): string {
    return `${person.name} is ${person.age} years old. ${person.hasPet ? 'They have a pet.' : 'They do not have a pet'}`
}

export { Person, describePerson };

/* Create an enum Day for days of the week (Sunday, Monday, etc.). 
   Write a function isWeekend(day: Day): boolean that returns true if the given day is a weekend day, and false otherwise. */

enum Day {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,};

function isWeekend(day: Day): boolean {
    if ( day === Day.Saturday || day === Day.Sunday) {
        return true;
    }
    else {
        return false;
    }
};

export { Day, isWeekend };

/*Write a function findLongestString(strings: string[]): string that takes an array of strings and returns the longest one. 
If multiple strings have the same longest length, return the first one that appears.*/

 function findLongestString(strings : string[]): string {
    // set longest string by default
    let longestString = strings[0]

    //loop through all the elements of the string array
    for (let i = 0; i < strings.length; i++) {
        //
        if(strings[i].length > longestString.length){
            longestString = strings[i];
        }
    }
    return longestString;
}

export { findLongestString };

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

