let string = "Hello World";
console.log(typeof(string)); // string
let number = 10;
console.log(typeof(number)); // number
let boolean = true;
console.log(typeof(boolean)); // boolean
let array = [1, 2, 3];
console.log(typeof(array)); // object
let object = {name: "John", age: 25};
console.log(typeof(object)); // object

let array2 = ['bafoussam', 'Batie', 'Bafang'];
console.log(array2.length); // 3

console.log(array2.length);

let person = {
    name: 'bafoussam',
    age: 25,
    city: 'Bafang',
    country: 'Cameroon',
    isnul: null
};

console.log(person.name);
console.log(person.country[1]);

let nom = 'Myra';
console.log(nom.length);

let array3 =["bafoussam",42,true,"bafang","bamenda",null,{
    name: "Myra",
    age: 25
}];

console.log(array3[6].age);// 3


let objet = {
    firstname: "Myra",
    lastname: "Ngo",
    age: 25,
    technos: ["Javascript", "nodejs", "React", "laravel", "Flutter"],
    admin: false,
};

console.log(typeof(objet.technos[2]));