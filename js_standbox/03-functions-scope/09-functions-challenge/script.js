//Challegne 1
const getCelsius = (f) => (f - 32) * 5 / 9
console.log(getCelsius(72))
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2

const minMax = (numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers)
})
console.log(minMax([1,2,3,4,5]));

// Challenge 3

((length, width)=>{
  const area = length * width;
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`);

})(5,10);
