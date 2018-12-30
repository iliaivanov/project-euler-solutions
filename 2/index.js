const limit = 4000000
let fibonacciRow = [1, 2]
let nextTerm = 0

// Generate fibonacci row.
while (fibonacciRow[fibonacciRow.length - 1] <= limit) {
    nextTerm = fibonacciRow[fibonacciRow.length - 1] + fibonacciRow[fibonacciRow.length - 2]
    fibonacciRow.push(nextTerm)
}
console.log(fibonacciRow)

// Calculate sum of even.
let evenSum = 0
fibonacciRow.forEach((value, index) => {
    if (value % 2 == 0) {
        evenSum += value
    }
})


console.log('even sum', evenSum)