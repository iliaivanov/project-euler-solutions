const {  } 

let initgialDigits = [
    { key: "firstDigit", value: 999 },
    { key: "secondDigit", value: 999 },
    { key: "thirdDigit", value: 999 }
]
// TODO: fix - reduce initgialDigits
let polundrome = firstDigit * secondDigit * thirdDigit

const reverseString = str => {
    if (str === '') {
        return str
    }

    return reverseString(str.substr(1)) + str.charAt(0)
}

const checkIfPolundrome = polundrome => {
    polundrome = polundrome.toString()
    
    return polundrome.length % 2 == 0 && 
        polundrome.slice(0, polundrome.length / 2) == reverseString(polundrome.slice(polundrome.length / 2))
}

const handleNextDigit = () => {
    let digits = initgialDigits

    digits.sort((a, b) => {
        if (a.value < b.value) {
            return 1
        }

        if (a.value > b.value) {
            return -1
        }

        return 0
    })

    let nextDigit = digits[0]
    // TODO: find element with the same key in the initgialDigits and reduce it by 1
    
    return 
}

// Doesn't properly works! Skips possible values. Porbably matrix or smth.
while (!checkIfPolundrome(polundrome)) {
    let nextDigit = handleNextDigit()
    
    // TODO: fix - reduce initgialDigits
    polundrome = firstDigit * secondDigit * thirdDigit
    console.log('firstDigit', firstDigit)
    console.log('secondDigit', secondDigit)
    console.log('thirdDigit', thirdDigit)
    console.log('polundrome', polundrome)
    
}

console.log(polundrome)