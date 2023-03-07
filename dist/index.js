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
console.log('enum:', Direction1.Right);
//objects
const user = {
    id: 1,
    firstname: 'John Doe',
};
console.log(user.firstname);
const someuser = {
    id: 1,
    name: 'John Doe Williams',
};
console.log(someuser.name);
//type Assertion
let cid = 1;
let customerid = cid;
//or same as 
let customerIDNumber = cid;
//customerIDNumber='3'
customerIDNumber = 3;
//customerid='s'
customerid = 1;
//functions 
function addNumber(x, y) {
    return x + y;
}
console.log('The sum is:', addNumber(5, 3));
//function without a return value
function log(message) {
    console.log(message);
}
log('Hello world void function');
const useraccount = {
    id: 1,
    name: 'John Doe'
};
const p1 = 1;
const p2 = 'string';
const add = (x, y) => x + y;
console.log('add:', add(4, 5));
const sub = (x, y) => x - y;
console.log('sub:', sub(10, 3));
//class
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} has registered with age ${this.age}`;
    }
}
const mikePerson = new Person(123, 'Micheal', 34);
const johnPerson = new Person(12345, 'John Doe', 45);
console.log(mikePerson.register(), '\n', johnPerson.register());
//and when we want to use it with a class we implement the interface
class PersonClassInterface {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return 'he has registered';
    }
}
// extending a class, to also have the properties of person and a self property of position 
//Employee subclass
class Employee extends Person {
    constructor(id, name, age, postion) {
        super(id, name, age); // used to call the constructor of its parent class to access the parent's properties and methods
        this.position = postion;
    }
    paysRent() {
        return `${this.name} working as ${this.position} has paid rent.`;
    }
}
const employee = new Employee(1, "Micheal", 45, "Math teacher");
console.log(employee.register());
console.log(employee.paysRent());
// Generics, helps to define class or function with works with different types
//so this function has a type of any and it return any type as well , so it doesn't matter what you give it works
//what if we want function of specific types
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
numArray.push('Paul'); // not error because of any
let strArray = getArray(['Micheal', 'Peter', 'Simon']);
// we create a generic for this problem
function getArrays(items) {
    return new Array().concat(items);
}
let someArrays = getArrays([1, 2, 3, 4]);
someArrays.push(5);
//someArrays.push("5")this will not work because of the number type defined 
