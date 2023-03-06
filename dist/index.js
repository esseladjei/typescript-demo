"use strict";
//Basic Types
let id = 5;
let company = 'Some typescript';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5, 6, 6]; // array of numbers
let keys = [1, 2, '3', '4', true, 'Hello'];
// tuple
let person = [1, 'hello', false];
//array of tuples
let employees;
employees = [
    [1, 'hello'],
    [2, 'world'],
    [3, 'typescript']
];
//Unions
let productID;
//enum: It allows us to define a set of named constants eg: either numeric or a string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
//objects
const user = {
    id: 1,
    firstname: 'John Doe'
};
console.log(user.firstname);
const someuser = {
    id: 1,
    name: 'John Doe Williams'
};
console.log(someuser.name);
