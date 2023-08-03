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