// function getFullName() {
//   return `${this.a} ${this.b}`;
// }
//
// const junior = {
//   a: 'Bohdan',
//   b: 'Onatskyi',
//   getFullName: getFullName,
//   s: 200,
//   m: 0,
//   getSalary() {
//     this.m += this.s;
//   },
//   payTaxes: function () {
// const tax = this.s * 0.2;
// if (this.m >= tax) {
//   this.m -= this.tax
// } else {
//   alert('You don`t have enough money to pay taxes');
// }
//     this.m -= this.s * 0.2;
//   },
// };
//
// const middle = {
//   ...junior,
//   getBalance() {
//     console.log(this.m);
//   },
// };
//
// junior.getBalance = middle.getBalance;
//
// middle.s = 400;
// middle.a = 'Sam';
// middle.b = 'Fox';
//
// const senjor = {
//   ...middle,
// };
//
// middle.s = 700;
// middle.a = 'John';
// middle.b = 'Snow';

/**
 * Information about user.
 * @constructor
 *  @param {string} a - The name of user.
 *  @param {string} b - The surname of user.
 *  @param {number} s - The salary of user.
 *  @param {number} m - The balance of user.
 */

export function User(a,b,s,m = 0) {
  this.a = a;
  this.b = b;
  this.s = s;
  this.m = m;
  this.getFullName = function (a, b) {
    return `${this.a} ${this.b}`;
  };
  this.getSalary = function (s) {
    this.m += this.s;
  };
  this.payTaxes = function() {
    this.m -= this.s * 0.2;
  };
}

const junior = new User('Alina','Makarova', 500, 0);
const middle = new User('John', 'Snow', 700, 0);
const senior = new User('Bohdan', 'Onatskyi', 900, 0);
console.log(senior.getFullName());
senior.getSalary();
senior.payTaxes();
console.log(senior.m);
senior.getSalary(300);
console.log(senior.m);
senior.payTaxes();
console.log(senior.m);
