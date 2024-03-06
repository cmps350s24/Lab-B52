import Animal from "./Animal.js";
class Cat extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    toString() {
        return `${super.toString()}, breed: ${this.breed}`;
    }
}

const cat = new Cat('Mimi', 2, 'Siamese');
console.log(cat);