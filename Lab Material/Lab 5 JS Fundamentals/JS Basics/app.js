// // import promptSync from 'prompt-sync'
// // const prompt = promptSync()
// // let name = prompt("Enter your name")
// // console.log(name);

// // declare variables in javascript

// // let x = 10
// // const y = 20
// // var x = 33

// let num = [
//     [1, 2, "hello", 3],
//     [4, 5, 6,
//         [55, 7, 8]
//     ]
// ]

// console.log(num.flat(2));
// console.log(num[1][3][0]);

// // add elemnts to the array
// let myArray = [10, 21, 13, 2, 222, 212, 4, 5]

// //add element to the end
// myArray.push(100)
// console.log("Array after push(100)", myArray);

// // remove element from the end
// myArray.pop()
// console.log("Array after pop()", myArray);

// // add element to the beginning
// myArray.unshift(100)
// console.log("Array after unshift(100)", myArray);

// // remove element from the beginning
// myArray.shift()
// console.log("Array after shift()", myArray);

// const sortedArray = myArray.sort(function (a, b) {
//     return a - b
// })
// const sortedArray2 = myArray.sort((a, b) => b - a)
// console.log("Array after sortedArray2", sortedArray2);

// console.log("Array before splice ", myArray);
// // removing element from the array
// myArray.splice(2, 1, 10000)

// console.log(myArray);


// function add(a, b) {
//     return a + b;
// }
// let add3 = function (a, b) {
//     return a + b;
// }

// let add2 = (a, b) => a + b;


// // function add(a, b) {
// //     return a + b;
// // }

// // let addx = (a, b) => a + b;

// // function print(a) {
// //     console.log(a);
// // }
// // let pringx = a => console.log(a);

// // function shout() {
// //     console.log("I am shouting inside");
// // }
// // let shoutx = () => console.log("I am shouting inside");



// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const div = (a, b) => a / b;
// const mult = (a, b) => a * b;


// const a = 10;
// const b = 20


// function calculator(x, y, callback) {
//     const result = callback(x, y);
//     return result
// }

// console.log(calculator(a, b, mult));
// console.log(calculator(a, b, sub));
// console.log(calculator(a, b, div));


// console.log(calculator(a, b, add));
// console.log(calculator(10, 20, (a, b) => a + b));


// const person1 = {
//     name: "Abdulahi",
//     age: 25,
//     gender: "Male"
// }
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.gender);


// const people = [
//     {
//         name: "Abdulahi",
//         age: 25,
//         gender: "Male"
//     },
//     {
//         name: "Ali",
//         age: 26,
//         gender: "Male"
//     },
//     {
//         name: "Sara",
//         age: 27,
//         gender: "Female"
//     },
//     {
//         name: "Maha",
//         age: 28,
//         gender: "Female"
//     }
// ]
// console.log("\nfor (const person of people) ");
// for (const person of people) {
//     console.log(person.name, person.age, person.gender);
// }
// console.log("\nCalling display inside display(person);");
// for (const person of people) {
//     display(person);
// }


const people = [
    {
        name: "Abdulahi",
        age: 25,
        gender: "Male"
    },
    {
        name: "Ali",
        age: 26,
        gender: "Male"
    },
    {
        name: "Sara",
        age: 27,
        gender: "Female"
    },
    {
        name: "Maha",
        age: 28,
        gender: "Female"
    }
]
people.forEach(person => console.log(person.name, person.age, person.gender))
const femaleStudents = people.filter(person => person.gender == "XFemale")
console.log(femaleStudents);
console.log(`This is the value ${12 + 15}`);

const oldest = people.reduce((old, person) => old.age > person.age ? old : person)

console.log(`The oldest person is ${oldest.name} and ${oldest.gender == "Female" ? "her" : "his"} age is ${oldest.age}`);
// Abdulahi 25 Male
// Ali 26 Male
// Sara 27 Female
// Maha 28 Female

const sum = people.reduce((total, person) => total + person.age, 0)

// total = 0, person = { age: 25 }, total = total + person.age, total = 0 + 25, total = 25
// total = 25, person = { age: 26 }, total = total + person.age, total = 25 + 26, total = 51
// total = 51, person = { age: 27 }, total = total + person.age, total = 51 + 27, total = 78
// total = 78, person = { age: 28 }, total = total + person.age, total = 78 + 28, total = 106


const avg = sum / people.length
console.log(`The average age is ${avg}`);

const sara = people.find(person => person.name == "Sara")

console.log(`Student Sara age is ${sara.age}`);


const namesOfStudens = people.map(person => `<li> ${person.name} </li>`)

console.log(namesOfStudens.join());


// // reduce
// let oldest = people[0]
// for (const person of people) {
//     if (person.age < oldest.age) {
//         oldest = person
//     }
// }


// if ()

//     const numbers = [1, 20, 3, 40, 5, 6, 7, 8, 9, 10]
// const max = numbers.reduce((big, curr) => big > curr ? big : curr)

// // round 1
// max = 1, curr = 20, compared, update value of max = 20
// max = 20, curr = 3, compared, update value of max = 20
// max = 20, curr = 40, compared, update value of max = 40
// max = 40, curr = 5, compared, update value of max = 40


























