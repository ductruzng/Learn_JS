let x

//Creating an object
const person = {
    name: 'Duc Trung',
    age:19,
    isAdmin: true,
    address:{
        street : 'Xuan Phuong',
        city: 'Ha Noi',
        state: 'VIE',

    },
    hobbies: ['sports','music']
}

// Accessing object properties
x = person.name // Dot notation
console.log(x)
x = person['age'] // Bracket notation
console.log(x)

x = person.address.state
x = person.hobbies[0]

// Updating properties
person.name = 'Trungg'
person['isAdmin'] = false

//Deleting properties
delete person.age

//Create new properties
person.hasChilrend = true

// Add funtions
person.greet = () => {
    console.log(`Hello, my name is ${person.name}`)
}

person.greet()

// Keys with multiple words

const person2 = {
    'first name' : 'Brad',
    'last name' :'Traversy'
}

x =person2['first name']

console.log(x)
