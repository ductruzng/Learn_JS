let x
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

//Nesting arrays

// Nesting berries inside of fruits 
fruits.push(...berries)

console.log(fruits[4])

//// flat() - Flatten an array or ...arr
const allFruits = [fruits, berries].flat();
console.log(allFruits)


// Static methods of Array object

// isArray() - Check is an array
x = Array.isArray(fruits);
console.log(x)

//from() - Create an array from an array like value
x = Array.from('12345ab')
console.log(x)

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c, 4, 'v');

console.log(x);
