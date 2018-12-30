// Generate intiial array which results with [0...998]. By appliying callback 
// all values will be incremented by 1 and correct initial array will be achived.
// This also could be solved with for loop but it felt boring.
const numbers = Array.from({length: 999}, (key, value) => ++value)
const reducedSum = numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 3 == 0 || currentValue % 5 == 0) {
        return accumulator + currentValue
    }

    return accumulator
}, 0)

console.log(reducedSum)
