//types data: string, boolean, number, ...
let x: number = 10;

x = 12;

console.log(x);

//inferencia x annotation
let y = 12; // inferencia

let z: number = 12; //annotation

// tipos básicos
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

firstName = "João";

console.log(firstName);

// object
const myNumbers: number[] = [1,2,3];

console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]]

myTuple = [5, "Teste", ["a","b"]]

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18,
};

console.log(user);

console.log(user.name);

// any
let a:any = 0

a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10"

id = 200

// type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType ="00001"
const shirId: myIdType = 123

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};

console.log(camisa);

// literal types
let teste: "autenticado" | null

// teste = "outrovalor"
teste = "autenticado";
teste = null;