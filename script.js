// variables:
// let, const, var

// let a;
// const b = 30;
// var c = 20; // number

// // a = 15;
// // // b = 35;
// // c = 25;

// // a = 10;

// // let a;

// // a = 10;
// // var a;

// c = "hello world"; // string

// // console.log(a);
// console.log(b);
// console.log(c);

// const a = 10;
// const a = "hello world";
// const a = [1, 2, 3, 4, 5];
// console.log(a[2]);

// const cat = { name: "John", age: 25, leg: 4 };
// console.log(cat.age);

// console.log(typeof cat);

// const a = false;
// console.log(typeof a);

// const a = 10;
// const b = "10";

// console.log(typeof a);
// console.log(typeof b);

// console.log(a === b);

// const catName = "John";
// const cat_name = "John";

// {
//   let a = 10;
//   console.log(a);
// }

// console.log(a);

// const a = 15;
// const b = 10;
// let c = 15;

// if (a > b) {
//   console.log(c);
// }

// console.log(c);

// if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("b is greater than a");
// }

// a > b ? console.log("a is greater than b") : console.log("b is greater than a");

// function test() {
//   console.log("hello world");
// }
// test();

// function add(a, b) {
//   //   console.log(a, b);
//   //   console.log(typeof NaN);
//   console.log("sum is: ", a + b);
//   return a + b;
// }

// const c = add(3, 5);

// console.log(c);

// const a = 10;
// const b = 20;

// console.log(a + b);

// const a = {
//   name: "John",
// }; // #abc

// const b = {
//   name: "John",
// }; // #def

// const a = [1, 2];
// const b = [1, 2];

// const c = a;

// console.log(typeof b);

// console.log(a === c);
// |    |   |   |

// -----------------------------------
// const a = {
//   name: "John",
//   age: 25,
//   grade: 5,
// };

// const { name, age, grade } = a;

// console.log(age, name, grade);

// -----------------------------------

// const b = [1, 2, 3, 4, 5];
// const [first, second, ...c] = b;

// console.log(c);

// const d = [...b];
// d[0] = 10;

// console.log(d);
// console.log(b);

//  arr = [2, 4, 6, 8, 10]

// for, forEach, map, filter, reduce, find, findIndex, some, every, while, do while

// for (let i = 0; i < 5; i += 1) {
//   arr.push(b[i] * 2);
// }

// b.forEach((value, i, a) => {
//   console.log(value, i, a);

//   arr.push(value * 2);
// });

// arr = b.map((val, idx, a) => {
//   return val * 2;
// });

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = [];

// arr = b.filter((value) => value % 2 === 0);
// arr = b.filter((value) => value % 3 === 0);
// arr = b.filter((value) => value > 3);

// arr = console.log(arr);
// let sum = 0;

// for (let i = 0; i < b.length; i++) {
//   sum += b[i];
// }

// b.forEach((value) => {
//   sum = sum + value;
// });

// let sum = b.reduce((prev, curr, index, arr) => {
//   return prev + curr;
// }, 0);

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const odd = b.find((value) => value % 3 === 0);
// const oddIndex = b.findIndex((value) => value % 4 === 0);

// const isBigArray = b.some((value) => value > 5);
const isBigArray = b.every((value) => value > 5);

// console.log(isBigArray);

let i = 10;
let sum = 0;
// while (i < b.length) {
//   console.log("running......");

//   sum += b[i];
//   i++;
// }

do {
  console.log("running......");

  sum += b[i];
  i++;
} while (i < b.length);

console.log(sum);
