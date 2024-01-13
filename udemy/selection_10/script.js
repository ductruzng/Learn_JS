/*
------------------------------------
// Default Parameters
const bookings = []

const createBooking = (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
    ) => {
    // ES5
    // numPassengers = numPassengers || 1
    // price = price || 199

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 2)
createBooking('LH123', 5)

*/

/*
------------------------------------------
// How Passing Arguments Works: Value vs. Reference
const flight = 'LH234'
const trung = {
    name: 'Duc Trung',
    passport: 2343245435
}

const checkIn = (flightNum,passenger) => {
    flightNum = 'LH999'
    passenger.name = `Mr.${passenger.name}`

    if(passenger.passport === 2343245435) {
        alert('Check in')
    } else{
        alert('Wrong passport')
    }
}

// checkIn(flight,trung)
// console.log(flight)
// console.log(trung)

// // Is the same as doing...
// const flightNum = flight
// const passenger = trung

const newPassport = (person) => {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(trung)
checkIn(flight,trung)

*/

const oneWord = (str) => {
    return str.replace(/ /g,'').toLowerCase()
}

const upperFirstWord = (str) => {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(),...others].join(' ')
}

const transformer = (str,fn) => {
    console.log(`Original string: ${str}`)

    console.log(`Transformed string: ${fn(str)}`)
    
    console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!',upperFirstWord)
transformer('JavaScript is the best!',oneWord)

// JS uses callbacks all the time
const high5 = () =>{
    console.log('👋')
}

document.body.addEventListener('click',high5)

['Jonas','Martha','Adam'].forEach(high5)
