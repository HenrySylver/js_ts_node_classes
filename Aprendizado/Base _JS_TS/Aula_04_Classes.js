// class persona {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// }

// const person = new persona('James', 'Bond', 23);

// person.getFullName();

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`This ${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name, origin) {
    super(name);
    this.origin = origin;
  }

  speak() {
    console.log(`This ${this.name} made some noise! ${this.name} is ${this.origin}.`);
  }
}

const simba = new Animal('Simba');
simba.speak();

const fluffy = new Dog('Fluffy', 'Britsh');
fluffy.speak();
