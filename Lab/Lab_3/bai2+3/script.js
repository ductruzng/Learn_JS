
const checkDogs = (dogsJulia, dogsKate) => {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1)
    dogsJuliaCorrected.splice(-2)

    const dogs = dogsJuliaCorrected.concat(dogsKate)
    console.log(dogs)
    dogs.forEach(function (dog, i) {
        console.log(dog <= 3 ?
            `Dog number ${i + 1} is still a puppy 🐶`
            : `Dog number ${i + 1} is an adult, and is ${dog} years old`)
    })

}

// checkDogs([3,5,2,12,7],[4,1,15,8,3])
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

const calcAverageHumanAge = (ages) => {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    const adults = humanAges.filter(age => age >= 18)
    console.log(humanAges)
    console.log(adults)

    const average = adults.reduce((acc, age) => acc + age / adults.length,0)

    return average
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])


console.log(avg1, avg2)