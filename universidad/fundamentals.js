// IIFE function
(function () {
   console.log(`hello world`); 
})();

// ternary operator
const login = true;
console.log(login === true ? 'its login' : 'it isnt login');

/* in javascript you have for in, for of , for, while, do while */

const cars = {
   model: 'Camaro',
   engine: 6.1,
   year: 1995,
   brand: 'Chevrolet'
};

for (const car in cars) {
   console.log(`${car} : ${cars[car]}`);
}
