function getFullName() {
  return `${this.a} ${this.b}`;
}

const junior = {
  a: 'Bohdan',
  b: 'Onatskyi',
  getFullName: getFullName,
  s: 200,
  m: 0,
  getSalary() {
    this.m += this.s;
  },
  payTaxes: function () {
    this.m -= this.s * 0.2;
  },
};

const middle = {
  ...junior,
  getBalance() {
    console.log(this.m);
  },
};

junior.getBalance = middle.getBalance;

middle.s = 400;
middle.a = 'Sam';
middle.b = 'Fox';

const senjor = {
  ...middle,
};

middle.s = 700;
middle.a = 'John';
middle.b = 'Snow';
