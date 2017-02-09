/** @type {number} 
 *  @const
*/
let price = 10;

/** @type {string} */
let firstName = 'Torgeir';

/**
 * @param {number} num1
 * @param {number} num2
 */
function addNumbers(num1, num2) {
  return num1 + num2;
}

/**
 * @constructor
 */
function Person() {
  /**
   * @type {string}
   */
  this.firstName;

  /**
   * @type {string}
   */
  this.lastName;

  /**
   * @type {number}
   */
  this.age;
}

/**
 * @return {string}
 */
Person.prototype.getPersonalInfo = function() {
  return `${this.firstName} ${this.lastName}, age: ${this.age}`;
}

class Car {
  constructor() {
    
    /**
     * @type {string}
     */
    this.color;
  }

  /**
   * @return {string}
   */
  getInfo() {
    return `The car is ${this.color}`;
  }
}

/**
 * @param {Person} person
 */
function printPerson(person) {
  console.log(person);
}

/**
 * @template T
 */
class Adder {
  /**
   * @param val1 {T}
   * @param val2 {T}
   * @return {T}
   */
  add(val1, val2) {
    return val1 + val2;
  }
}

/** @type {!Adder<number>} */ let adderNumber = new Adder();
console.log(adderNumber.add(1, 2));

/** @type {!Adder<string>} */ let adderString = new Adder();
console.log(adderString.add('Joe', 'Smith'));

console.log(price);
console.log(firstName);
console.log(addNumbers(1, 4));

let person = new Person();
person.firstName = 'Joe';
person.lastName = 'Smith';
person.age = 30;

console.log(person.getPersonalInfo());

printPerson(person);

let car = new Car();
car.color = 'Blue';

console.log(car.getInfo());
