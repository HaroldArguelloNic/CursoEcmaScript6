function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
function newFunction2(name='oscar', age = 32, country='MX') {
    console.log(name,age,country);
};

newFunction2();
newFunction2('Ricardo','23','CO');

let hello = 'Hello';
let world = 'world';
let epicPrhase = hello + ' '+ world;
console.log(epicPrhase);
let epicPrhase2 = `${hello} ${world}`;
console.log(epicPrhase2);

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase epica que necesitamos.";
let lorem2= `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age,person.country);

//let {name,age,country} = person;
console.log(name, age, country);

let taem1 = ['oscar','julian','ricardo'];
let taem2 = ['valeria', 'yesica', 'camila'];
let education = ['david', ...taem1, ...taem2];

console.log(education);

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';


console.log(a);

let name= 'Harold';
let age = 47;
//es5
obj = { name: name, age: age};
//es6
obj2 = {name, age};

console.log(obj2);

const names = [
    {name: 'Harold', age:47},
    {name: 'Yolanda', age:47}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

let listOfName2 = names.map( item => console.log(item.name));

//const listOfName3 = (name, age, country) => {
//    ...
//}

//const listOfName4 = name => {
//    ...
//}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(Response => console.log(Response))
.then(() => console.log('hola'))
.catch(error => console.log(error));