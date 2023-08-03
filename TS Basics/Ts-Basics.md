# TypeScript: Basic Types and Interfaces

This lesson provides an introduction to basic types and interfaces in TypeScript.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Basic Types](#basic-types)
3. [Interfaces](#interfaces)

---

## Introduction

TypeScript extends JavaScript by adding types to the language. These additional features help you to catch errors during development and write safer, more self-documenting codebases.

---

## Basic Types

### Boolean

The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a `boolean`.

```ts
let isBoolean: boolean = true;

// Usage example
if(isBoolean) {
    console.log("The value is true");
}
```

### Number
As in JavaScript, all numbers in TypeScript are floating point values.

```ts
let num: number = 10;

// Usage example
console.log(num * num); // Outputs: 100
```

### String
We use the string type to refer to textual datatypes.

```ts
let str: string = "hello world";

// Usage example
console.log(str.toUpperCase()); // Outputs: "HELLO WORLD"
```
### Array
TypeScript allows you to work with arrays of values.

```ts
let numArray: number[] = [1, 2, 3, 4, 5];

// Usage example
console.log(numArray.length); // Outputs: 5
```

### Tuple
Tuple types allow you to express an array where the type of a fixed number of elements is known.

```ts
let tuple: [string, number] = ["something", 2];

// Usage example
console.log(tuple[0]); // Outputs: "something"
```

### Enum
An enum is a way of giving more friendly names to sets of numeric values.

```ts
enum Color {Red, Green, Blue};

// Usage example
let myColor: Color = Color.Red;
console.log(myColor); // Outputs: 0
console.log(Color[myColor]); // Outputs: "Red"
```

### Any
We use the any type to describe the type of variables that we do not know when we are writing an application.

``` ts
// Usage example
let anything: any = "asdasdsadas";
or
let anything: any = 12345;
or
let anything: any = true;
```
### Interfaces
Interfaces fill the role of naming types, and are a powerful way of defining contracts within your code.

``` ts
// Example of a given interface

interface Person {
  name: String;
  age: Number;
  hasPet: Boolean;
}
```
This allows you to use these types as you would other types.

```ts
// Example using an interface

function greet(person: Person): string {
  return `Hello, my name is ${person.name} and I'm ${person.age} years old.`;
}

let bob: Person = { name: "Bob", age: 30, hasPet: false };
console.log(greet(bob)); // Outputs: "Hello, my name is Bob and I'm 30 years old."
```
We hope you found this lesson useful in understanding basic types and interfaces in TypeScript!

***Now on to the basic exercises!***
