//Basic Types
let id: number = 5
let company: string = 'Some typescript'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5, 6, 6]; // array of numbers
let keys: any[] = [1, 2, '3', '4', true, 'Hello'];

// tuple
let person: [number, string, boolean] = [1, 'hello', false]

//array of tuples
let employees: [number, string][]

employees = [
    [1, 'hello'],
    [2, 'world'],
    [3,'typescript']
]

//Unions
let productID: string | number

//enum: It allows us to define a set of named constants eg: either numeric or a string
enum Direction1 {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}
console.log(Direction1.Right);

//objects

const user: {
    id: number;
    firstname: string;
} = {
    id: 1,
    firstname: 'John Doe',
};
console.log(user.firstname);
//This way of creating object in ts seem quite complicated . An alternative will be

type User = {
    id: number;
    name: string;
};
const someuser: User = {
    id: 1,
    name: 'John Doe Williams',
};

console.log(someuser.name);

//type Assertion
let cid: any = 1;
let customerid = <number>cid;
//or same as 

let customerIDNumber= cid as number
//customerIDNumber='3'
customerIDNumber=3
//customerid='s'
customerid=1
