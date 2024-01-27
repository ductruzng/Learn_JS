const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// View prototype chain
console.log(socials.__proto__);


// // We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));

// // Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// // Array of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.name,item.url));