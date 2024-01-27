const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
]
// 1.
dogs.forEach(dog => {
    dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)
})
console.log(dogs)

// 2.
const dogSarah = dogs.find(dog =>
    dog.owners.includes('Sarah')
)
console.log(dogSarah)
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'litter'
    }`)

// 3.
const ownerEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .map(dog => dog.owners)
    .flat()
console.log(ownerEatTooMuch)

const ownerEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .map(dog => dog.owners)
    .flat()
console.log(ownerEatTooLittle)

// 4.
console.log(`${ownerEatTooMuch.join(' and ')} dogs eat too much`)
console.log(`${ownerEatTooLittle.join(' and ')} dogs eat too little`)

// 5.
const recDog = dogs.some(dog => dog.curFood === dog.recFood)
console.log(recDog)

// 6.
const checkingEatingOkay = dog =>
    dog.curFood > dog.recFood * 0.9 &&
    dog.curFood < dog.recFood * 1.1
console.log(dogs.some(checkingEatingOkay))

// 7.
console.log(dogs.filter(checkingEatingOkay))

// 8. 
const dogsSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood)
console.log(dogsSorted)






