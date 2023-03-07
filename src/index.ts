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

//implement an interface with class

interface PersonInterface{
  id:number
  name:string
  register(): string
}

//and when we want to use it with a class we implement the interface

class PersonClassInterface implements PersonInterface{
   id: number
   name:string

   constructor(id:number, name:string){
      this.id=id
      this.name=name
   }
   register(){
    return 'he has registered'
   }
}

// extending a class, to also have the properties of person and a self property of position 

//Employee subclass
class Employee extends Person{
  
  position: string //position property

  constructor(id: number, name:string,age: number, postion:string){
    super(id,name,age);// used to call the constructor of its parent class to access the parent's properties and methods
    this.position=postion
  }
  paysRent(){
    return `${this.name} working as ${this.position} has paid rent.`
  }
}
const employee= new Employee(1,"Micheal",45,"Math teacher");
console.log(employee.register())
console.log(employee.paysRent())


// Generics, helps to define class or function with works with different types


//so this function has a type of any and it return any type as well , so it doesn't matter what you give it works

//what if we want function of specific types
function getArray(items:any[]):any[]{
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
numArray.push('Paul'); // not error because of any
let strArray = getArray(['Micheal', 'Peter', 'Simon']);

// we create a generic for this problem

function getArrays<T>(items: T[]): T[] { //So the T is working as a placeholder of the type and then we can replace it with whatever type you want 
    return new Array().concat(items);
}

let someArrays=getArrays<number>([1,2,3,4])
someArrays.push(5)
//someArrays.push("5")this will not work because of the number type defined 