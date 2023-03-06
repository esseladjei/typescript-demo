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
console.log('enum:', Direction1.Right);

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

//functions 

function addNumber(x: number, y:number) :number{
  return x + y
}
console.log('The sum is:',addNumber(5,3))

//function without a return value

function log(message:string | number): void{
  console.log(message)
}
log('Hello world void function')

//interfaces
interface UserAccount{
  id:number
  name:string
}

const useraccount: UserAccount={
  id:1,
  name:'John Doe'
}

type Point =number | string //unions

const p1:Point=1
const p2:Point='string'

//using interface with functions
interface MathFunction {
    (x: number, y: number): number;
}
const add: MathFunction=(x:number, y:number): number =>x+y
console.log('add:',add(4,5))

const sub: MathFunction = (x: number, y: number): number => x - y;
console.log('sub:',sub(10,3))

//class

class Person{
  /**  
   * access modifier are public, private, protected 
   * By default properties are public
  **/ 
  public id:number
  protected name:string
  private age:number

  constructor(id:number, name:string, age: number){
    this.id=id
    this.name=name
    this.age=age
  }
  register(){
    return `${this.name} has registered with age ${this.age}`
  }
}

const mikePerson= new Person(123,'Micheal',34)
const johnPerson= new Person(12345, 'John Doe', 45)
console.log(mikePerson.register(),'\n',johnPerson.register())