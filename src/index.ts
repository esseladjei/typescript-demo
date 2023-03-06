//Basic Types
let id: number = 5
let company: string = 'Some typescript'
let isPublished: Boolean = true
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
enum Diraction1 {
    Up, 
    Down,
    Left,
    Right
}