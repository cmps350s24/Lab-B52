// console.log("hello")

// const PI = 3.14
// let height = 1.67

// console.log(`PI is ${PI} and height is ${height}`)

// let num = [1, 2, 3, -5, 12, 11, 10]
// console.log(num);
// console.log(num);

// // you can use array methods [sort, search , filter , map [covert to other shape], reduce ]

// // array destructing
// const [first, second, ...others] = num
// console.log(first, second, others);
// // do no write anything below this [only for explanation]

// const person = {
//     name: "Ali",
//     age: 21,
//     gender: "male"
// }

// person.nationality = 'Qatari'
// person['address'] = 'Dukhan'

// console.log(`The name of the person is ${person.name}`);
// console.log(person);


// array of people using the same person
const people = [
    {
        name: "Ali",
        age: 21,
        gender: "male"
    },
    {
        name: "Alanoud",
        age: 22,
        gender: "female"
    },
    {
        name: "Omar",
        age: 23,
        gender: "male"
    },
    {
        name: "Aisha",
        age: 19,
        gender: "female"
    }
]


const filteredFemale = people.filter(person => person.gender === 'female')
const ageAbove21 = people.filter(person => person.age > 21 && person.gender === 'female')
const sortedPeople = people.sort((a, b) => b.age - a.age)
const namesOfpeople = people.map(a => a.name)
const avgAge = people.reduce((sum, curr) => sum + curr.age, 0) / people.length



console.log(filteredFemale);
console.log(ageAbove21);
console.log(sortedPeople);
console.log(namesOfpeople);
console.log(avgAge);

