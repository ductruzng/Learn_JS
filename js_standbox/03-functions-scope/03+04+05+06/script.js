// 'window' is globally scoped
// alert('Hello');
// console.log(innerWidth);

// Global scope variable
const x = 100;

console.log(x, 'in global');

function run() {
  // Access global vars in functions
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, 'in block');
}

function add() {
  // Overwriting global x (variable shadowing)
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// Can not access a function scoped variable in global scope
// console.log(y);

add();

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }
   second();

}

first()


if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

}

// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you can not
console.log(addDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));