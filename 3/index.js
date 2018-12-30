const getNextPrime = currentPrime =>  {
    if (currentPrime == undefined || currentPrime == 0) {
        return 2
    }

    if (currentPrime == 2) {
        return 3
    }

    let nextPrime = currentPrime
    let found = false
    while (!found) {
        nextPrime++
        found = nextPrime % 2 != 0 && nextPrime % 3 != 0
        if (found) {
            return nextPrime
        }
    }
}

const initialNumber = 600851475143
let tmpNumber = initialNumber
let primesMultiplication = 0
let primes = []

for (let prime = getNextPrime(); primesMultiplication < initialNumber; prime = getNextPrime(prime)) {
    while (tmpNumber % prime == 0) {
        tmpNumber = tmpNumber / prime
        primesMultiplication = primesMultiplication == 0 ? prime : primesMultiplication * prime
        primes.push(prime)
    }
}

console.log(primes)