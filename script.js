/**
 * Constructors
 * @link https://www.altcademy.com/classroom/courses/javascriptium/book/constructors
 *
 */

//CONSTRUCTOR PROTOTYPE
// const Person3 = function (type) {
//     this.type = type;
// };

// let man = new Person3('male');
// let woman = new Person3('female');
// Person3.prototype.introduce = function () {
//   console.log(`I am a ${this.type}.`);
// };

// man.introduce();
// woman.introduce();
// console.log(Object.getPrototypeOf(Person3) === Function.prototype);
// Perons3 > Function.prototype > Object.prototype
// console.log(Object.getPrototypeOf(man) === Person3.prototype);
// Man > Person3.prototype > Object.prototype

// OVERRIDING PROPERTIES
// Person3.prototype.hair = 'black';
// man.hair = 'brown';
// woman.hair = 'Blonde';
// console.log(man.hair);
// console.log(woman.hair);
// Person3.prototype.age = 20;
// man.age = 36;
// woman.age = 24;
// console.log(Person3.prototype);
// console.log(Person3.prototype.hair);
// console.log(man);
// console.log(woman);
// Person3.prototype.introduce = function () {
//   console.log(`I am a ${this.age} year old ${this.type} with ${this.hair} hair.`);
// }
// console.log(Person3.prototype);
// woman.introduce();
// man.introduce();


// PRIVATE PROPERTIES
// const Employee = function(name, id) {
//   let salary = 1800;
//   this.name = name;
//   this.id = id;
//   this.getSalary = function (password){
//     if (password === '123') {
//       console.log(`The previous salary of ${this.name} is $${salary} USD Weekly.`);
//       return salary;
//     }
//     console.log('Unauthorized');
//     return;
//   }

//   this.setSalary = function (password, newSalary){
//     if (password === '123'){
//       salary = newSalary;
//       console.log(`The current salary of ${this.name} is $${salary} USD Weekly.`);
//       return salary;
//     }
//     console.log('Unauthorized');
//     return;
//   }
// };

// let Ced = new Employee('Ced', 2);

// console.log(Ced.salary); // The salary will be private because it is not a "this" property.
// Ced.getSalary();
// Ced.getSalary('123');
// Ced.setSalary('123', 1937);
// console.log(Ced);


// const Person = function (name, city, type) {
//   let age = 55; // This will be private because it is not a "this" property.
//   this.name = name;
//   this.city = city;
//   this.type = type;
//   this.birthday = function () {
//     age ++;
//     console.log(`${name} is now ${age} years old and lives in ${city}. Happy Birthday!!!`);
//   }
// };

// let ced = new Person('Cedric', 'Orlanod', 'Male');
// console.log(ced.name);
// ced.name = 'Jerry';
// console.log(ced.name);
// console.log(ced.age); //age is private because it is nto a "this" property.
// ced.birthday();
// console.log(ced);

// GETTER AND SETTER
// const circle = {
//   radius: 5,
//   get diameter () {
//     return this.radius * 2;
//   },
//   // set diameter (d) {
//   //   this.radius = d / 2;
//   // },
//   get parameter () {
//     return 2 * this.radius * Math.PI;
//   },
//   get area() {
//     return Math.PI * this.radius * this.radius;
//   }
// };

// console.log(circle);
// console.log(circle.diameter);
// console.log(circle.parameter);
// console.log(circle.area);
// console.log(circle.radius);

// circle.diameter = 500;
// // I cannot set a value since I don't have a function that will set the diameter.
// console.log(circle.diameter);
// If I need to add new set or get methods for existing objects, use Object.defineProperty method.
// let circle2 = {
//   radius: 5,
//   get diameter () {
//     return this.radius * 2;
//   }
// };
// console.log(circle2.diameter);

// Object.defineProperty(circle2, 'diameter', {
//   set: function (d) {this.radius = d/2;}
// }); // use Object.defineProperty method.

// console.log(circle2.diameter);
// circle2.diameter = 20;
// console.log(circle2.diameter);

// If circle2 was a constructor
// const Circle3 = function (radius) {
//   this.radius = radius;
// }

// Object.defineProperty(Circle3.prototype, 'diameter', {
//   get: function () { return this.radius * 2; },
//   set: function (d) { this.radius = d / 2; }
// });

// let circle3 = new Circle3(5);
// console.log(circle3.diameter);
// // // -> 10
// circle3.diameter = 20;
// console.log(circle3.diameter);
// // // -> 20

// ASSIGNMENTS 
/**
 * 101 Constructors: A Basic Constructor
 */
// const Car = function () {
//   // Implement your code below
//   this.brand = Honda;
//   this.wheels = 4;
//   this.seats = 2;
// };

// let honda = new Car();
// let car1 = new Car();
// let car2 = new Car());

// console.log(honda.brand);
// // -> "Honda";
// console.log(honda.wheels);
// // -> 4
// console.log(honda.seats);
// // -> 2
// console.log(car1.brand);
// // -> "Honda";

/**
 * 102 Constructors: Accepting Arguments
 */
// const Car = function (brand, wheels, seats) {
//   // Implement your code below
//   this.brand = brand;
//   this.wheels = wheels;
//   this.seats = seats;
// };

// let honda = new Car('Honda', 4, 2);
// let car1 = new Car("Toyota", 4, 4);
// let car2 = new Car("Benz", 4, 2);

// console.log(honda.brand);
// // -> "Honda";
// console.log(honda.wheels);
// // -> 4
// console.log(honda.seats);
// // -> 2
// console.log(car1.brand);
// // -> "Toyota";
// console.log(car2.brand);
// // -> "Benz";

/**
 * 103 Constructors: Hiding letiables
 */
// const Car3 = function (acceleration) {
//   let speed = 0;
  
//   this.getSpeed = function () {
//     // Implement your code below
//     return speed;
//     };
  
//   this.accelerate = function () {
//     // Implement your code below
//     speed +=  acceleration;    
//   };
  
//   this.decelerate = function () {
//     // Implement your code below
//     speed -= acceleration;    
//   };
// };

// let honda2 = new Car3(10);

// console.log(honda2.getSpeed());
// // -> 0
// honda2.accelerate();
// console.log(honda2.getSpeed());
// // -> 10
// honda2.accelerate();
// console.log(honda2.getSpeed());
// // -> 20
// honda2.accelerate();
// console.log(honda2.getSpeed());
// // -> 30
// honda2.decelerate();
// console.log(honda2.getSpeed());
// // -> 10

// Prototype Interference
// const account = {
//   balance: 93010.85,
//   transfer: function(password, amount){
//     if (password === '123'){
//       this.balance += amount;
//     }
//   }
// };
// console.log(Object.prototype);

// Object.prototype.drain = function () {
//   this.balance = 0;
// };

// console.log(Object.prototype);
// const account2 = Object.create(null);
// console.log(account2);
// account2.balance = 93010.85;
// console.log(account2.drain);

// Prototype Inheritance
// const Shape = function (name) {
//   this.name = name;
// }

// const Circle = function (name, radius) {
//   Shape.call(this, name);
//   this.radius = radius;

//   Object.defineProperties(this, {
//     area: {
//       get: function () { return Math.PI * this.radius * this.radius; }
//     }
//   })
// }

// const Rectangle = function (name, height, width) {
//   Shape.call(this, name);
//   this.height = height;
//   this.width = width;

//   Object.defineProperties(this, {
//     area: {
//       get: function () { return this.height * this.width; }
//     }
//   })
// }

// const Square = function (name, length) {
//   Rectangle.call(this, name, length, length);
// }

// let circle = new Circle('golden circle', 5);
// let rectangle = new Rectangle('golden rectangle', 5, 10);
// let square = new Square('golden square', 5);

// console.log(circle.name);
// // -> golden circle
// console.log(circle.name, circle.area);
// // -> 78.53981633974483
// console.log(rectangle.name, rectangle.area);
// // -> 50
// console.log(square.name, square.area);
// // -> 25

// Primitive Values and Object Wrappers
// let str = 'foo';
// str.foo = 'hello';
// console.log(str.foo); // Properties added to a string/number does not persist.

// console.log(str.charAt(0)); // But I can use properties available in the String.prototype. it's like an autowrapping of the string.

// let str1 = 'abc';
// let str2 = 'abc';
// console.log(str1 === str2);
// // -> true

// let strObj1 = new String(str1);
// let strObj2 = new String(str1);
// console.log(strObj1 === strObj2);
// // -> false

