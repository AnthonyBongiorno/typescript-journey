// Here, we're declaring a variable named `isBoolean` with the type of boolean, and we're setting its initial value to `true`.
let isBoolean: boolean = true;

// Here, we're declaring a variable named `num` with the type of number, and we're setting its initial value to `10`.
let num: number = 10;

// Here, we're declaring a variable named `str` with the type of string, and we're setting its initial value to `"hello world"`.
let str: string = "hello world";

// Here, we're declaring a variable named `numArray` with the type of number array, and we're setting its initial value to `[1, 2, 3, 4, 5]`.
let numArray: number[] = [1, 2, 3, 4, 5];

console.log(numArray);

// Here, we're declaring a variable named `tuple` with the type of tuple that contains a string and a number, and we're setting its initial value to `["something", 2]`.
let tuple: [string, number] = ["something", 2];

// Here, we're declaring an enumeration named `Color` which has three members: `Red`, `Green`, and `Blue`. By default, `Red` is `0`, `Green` is `1`, and `Blue` is `2`.
enum Color {Red, Green, Blue};

// Here, we're declaring a variable named `anything` with the type of any, and we're setting its initial value to `"asdasdsadas"`. The `any` type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
let anything: any = "asdasdsadas";