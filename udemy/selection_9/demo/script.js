
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
}
const restaurant = {
    nameR: "Classico Italiano",
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ["Italian", 'Pizzeria', 'Vegetarian',
        'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Caprese Salad',
        'Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],
        this.mainMenu[mainIndex]]
    },
    orderDelivery({ starterIndex, mainIndex,
        time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered to
        ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with 
        ${ing1}, ${ing2},${ing3}`);
    },
    orderPiza(mainIngredient,
        ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);

    }
};

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25'
    + '+_Arrival;bru0943384722;fao93766109;11:45'
    + '+_Delayed_Arrival;hel7439299980;fao93766109;12:05'
const getCode = str => str.slice(0, 3).toUpperCase()

for (const flight of flights.split('+')) {
    const [type, from, to, time] = (flight.split(';'))
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`
    console.log(output.padStart(44))
}




/*
/////////////////////////////////////////////
// Working with strings - part 3

console.log('a+very+nice+string'.split('+'))
console.log('Jonas Schmedmann'.split(' '))

const [fistName, lastName] = 'Jonas Schmedmann'.split(' ')

const newName = ['Mr.', fistName, lastName.toUpperCase()].join(' ')
console.log(newName)

const capitalizeName = (name) => {
    const names = name.split(' ')
    const namesUpper = []

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1))
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '))
}
capitalizeName('jessica ann smith davis')
capitalizeName('jonas schmedmann')

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(22, '+').padEnd(30, '+'))
console.log('Jonas'.padStart(17, '+').padEnd(30, '+'))

const maskCreditCard = (number) => {
    const str = number + ''
    const last = str.slice(-4)
    return last.padStart(str.length, '*')

}
console.log(maskCreditCard(6868686832))
console.log(maskCreditCard(433074783248623486))
console.log(maskCreditCard('43296986473652398632946234'))

// Repeat
const message2 = 'Bad waether... All Departues Delayed...\n'
console.log(message2.repeat(5))

const planesInLine = (n) => {
    console.log(`There are ${n} plane in line ${'✈️'.repeat(n)}`)
}

planesInLine(5)
planesInLine(3)
planesInLine(10)




/*
/////////////////////////////////////////////
// Working with strings - part 2
//Fix capitalization in name
const passenger = 'jOnAS'
const passengerLower = passenger.toLowerCase()
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

// Comparing emails
const email = 'hello@jonas.io'
const loginEmail = '   Hello@Jonas.Io \n'

const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)
const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email===normalizedEmail)

// replacing
const priceUS = '288,97$'
const priceVN =  priceUS.replace('$','VND').replace(',','.')
console.log(priceVN)

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door','gate')) // thay the gt dau tien
console.log(announcement.replace(/door/g,'gate')) // thay the tat ca gt

//Booleans
const plane = 'Airbus A320neo'
console.log(plane.includes('A320')) //=>true
console.log(plane.includes('Boeing')) // => false
console.log(plane.startsWith('Airb'))
if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log('Part of the NEW Arirbus family')
}

// Pratice exercise
const checkBaggage = (items)=>{
    const baggage = items.toLowerCase()
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on board')
    } else{
        console.log('Welcome aboard!')
    }

}
checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and gun for protection')

/*
///////////////////////////////////////
// Working with strings - part 1
const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(airline.slice(4,7))
console.log(airline.slice(-2))

const checkMiddleSeat = (seat) =>{
    // B and E art middle seats
    const s = seat.slice(-1)
    console.log(
        s==='B' || s ==='E' ?
     'You got the middle seat 😊': 'You got lucky😍')
}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

/*
/////////////////////////////////////////////////////
// Maps: Iteration
const question = new Map([
    ['question', 'What is the best programing language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JS'],
    ['correct', 3],
    [true, 'Correct🎉'],
    [false, 'Try again!']
])
console.log(question)

//Conver object to map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)

console.log(question.get('question'))
for (const [key, value] of question) {
    if (typeof key === 'number')
        console.log(` ${key}. ${value}`)
}

// const answer = Number(prompt('Your answer'))

// console.log(question.get(question.get('correct') === answer))

//Convert map to array
console.log([...question])
console.log([...question.keys()])
console.log([...question.values()])

/*
/////////////////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'))

rest
.set('catagories', ["Italian", 'Pizzeria', 'Vegetarian',
    'Organic'])
.set('open',11)
.set('close',23)
.set(true,'We are open :D')
.set(false,'We are close :(')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 8;
console.log(rest.get(time > rest.get('open') &&
 time < rest.get('close')))
 console.log(rest.has('catagories'))
 rest.delete(2)
 const arr = [1,2]
 rest.set(arr,'Test')
 rest.set(document.querySelector('h1'),
 'Heading')
console.log(rest)

console.log(rest.get(arr))

/*
////////////////////////////////////////////////
//Sets
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
])
console.log(orderSet)

console.log(new Set('Jonas'))

console.log(orderSet.size)
console.log(orderSet.has('Pizza'))
console.log(orderSet.has('Bread'))
orderSet.add('Garlic Bread')
orderSet.add('Garlic Bread')
orderSet.delete('Risotto')
// orderSet.clear()
console.log(orderSet)


for (const order of orderSet) console.log(order)

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef',
    'Waiter']
const staffUnique = new Set(staff);
console.log(staffUnique)



/*
///////////////////////////////////////////
//Looping Objects: Object keys, values, and entries
const properties = Object.keys(openingHours)
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties){
   openStr +=  `${day}, `
}
console.log(openStr);

const entries = Object.entries(openingHours)

for (const [key,{open,close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}


/*
///////////////////////////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon) console.log
    (restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.thu?.open)


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for(const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open} `)
}

//Methods
console.log(restaurant.order?.(0,1)) ?? 'Method does not exist';
console.log(restaurant.orderRisotto?.(0,1)) ??
'Method does not exist';


//Arrays
const users = [{name: 'Jonas',email:'hello@jonas.io'},
{name: 'Nat',email:'hello@jonas.io'}]
console.log(users[1]?.name ?? 'User array empty');


/*
/////////////////////////////////////
//The for-of Loop
const menu = [...restaurant.starterMenu,
...restaurant.mainMenu];

for (const item of menu) console.log(item)

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`)
}
*/


// restaurant.orderDelivery({
//     time: '22:40',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2
// })


// const arr = [7, 8, 9, 0];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr)

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.starterMenu,
// ...restaurant.mainMenu];
// console.log(menu);

// //Iterables arrays, strings, maps, sets, NOT objects
// const srt = 'Jonas'
// const letters = [...srt, '', 'S.']
// console.log(letters)
// console.log(...srt);

//Real world example
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
// prompt('Ingredient 2?'),
// prompt('Ingredient 3?')]
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1],
//     ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant,
//      founder: 'Guiseppe' }
// console.log(newRestaurant)

// const restaurantCopy = {...restaurant};
// restaurantCopy.nameR = 'Ristorante Roma';
// console.log(restaurantCopy.nameR);
// console.log(restaurant.nameR);

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays)
// a = 1
// b = 5
// console.log(null ?? 'dfd')

