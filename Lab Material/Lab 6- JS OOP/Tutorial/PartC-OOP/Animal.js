class Animal {
    static countAnimals = 0
    constructor(name, age) {
        this.name = name
        this.age = age

        Animal.countAnimals += 1;
    }

    toString() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const animal = new Animal('Leo', 3)

export default Animal