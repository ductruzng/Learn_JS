
const restaurant = {
    nameR: "Classico Italiano",
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ["Italian", 'Pizzeria', 'Vegetarian',
        'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Caprese Salad',
        'Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],
        this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ starterIndex, mainIndex,
        time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered to
        ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with 
        ${ing1}, ${ing2},${ing3}`);
    },
    orderPiza: function(){

    }
};

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

console.log(0 || 'Jonat')