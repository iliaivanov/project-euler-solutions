const reverseString = (str) => {
  if (str === '') {
    return str
  }

  return reverseString(str.substr(1)) + str.charAt(0)
}

const checkIfPolundrome = (polundrome) => {
  polundrome = polundrome.toString()

  return (
    polundrome.length % 2 == 0 &&
    polundrome.slice(0, polundrome.length / 2) ==
      reverseString(polundrome.slice(polundrome.length / 2))
  )
}

const getNextPolundrome = (polundrome) => {
    let nextPolundrome

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

const hasThreeNumberDivisor = (polundrome) => {
    let found = false
    let divisor = 999
    while (!found && divisor > 99) {
      if (
        polundrome % divisor == 0 &&
        (polundrome / divisor).toString().length == 3
      ) {
        console.log(`first ${divisor}`)
        console.log(`second ${polundrome / divisor}`)
        return true
      }
      divisor--
    }

    return false
}

let polundromeFound = false
let polundrome = 998001 // Max xxx * xxx number
while (!polundromeFound && polundrome > 10000 ) {
  polundrome--

  if (checkIfPolundrome(polundrome) && hasThreeNumberDivisor(polundrome)) {
    console.log(`polundrome ${polundrome} has xxx * xxx combination`)
    console.log(``)
    break
  }
}