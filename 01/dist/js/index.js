"use strict";
//types data: string, boolean, number, ...
let x = 10;
x = 12;
console.log(x);
//inferencia x annotation
let y = 12; // inferencia
let z = 12; //annotation
// tipos básicos
let firstName = "Matheus";
let age = 30;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// tuplas
let myTuple;
myTuple = [5, "Teste", ["a", "b"]];
// object literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
console.log(user.name);
// any
let a = 0;
a = "teste";
a = true;
a = [];
